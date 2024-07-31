import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';
import { RoleModuleScreen } from 'src/entities/roleModuleScreen.entity';
import { Modules } from 'src/entities/modules.entity';
import { Screen } from 'src/entities/screen.entity';
@Injectable()
export class RoleService {
  constructor(
    // @InjectRepository(Role)
    // private readonly roleRepository: Repository<Role>,
    // @InjectRepository(RoleModuleScreen)
    // private readonly roleModulecreenRepo: Repository<RoleModuleScreen>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(RoleModuleScreen)
    private readonly roleModuleScreenRepository: Repository<RoleModuleScreen>,

    @InjectRepository(Modules)
    private readonly modulesRepository: Repository<Modules>,

    @InjectRepository(Screen)
    private readonly screenRepository: Repository<Screen>,
  ) {}

  // async create(createRoleDto: CreateRoleDto): Promise<Role> {
  //   const { name, permissions } = createRoleDto;
  //   const checkRole = await this.roleRepository.findOne({
  //     where: { name: name },
  //   });
  //   console.log(checkRole);
  //   if (checkRole) {
  //     throw new ConflictException('This Role already exists');
  //   } else {
  //     const permissionConditions = await permissions.map(
  //       ({ modules, screen }) => ({
  //         modules,
  //         screen,
  //       }),
  //     );
  //     console.log('permission conditions     ', permissionConditions);

  //     return this.roleRepository.save(createRoleDto);
  //   }
  // }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const { name, permissions } = createRoleDto;

    const checkRole = await this.roleRepository.findOne({
      where: { name },
    });

    if (checkRole) {
      throw new ConflictException('This Role already exists');
    }

    // Create the Role
    const role = this.roleRepository.create({ name });
    const savedRole = await this.roleRepository.save(role);

    // Process and save RoleModuleScreen entities
    for (const permission of permissions) {
      const moduleEntity = await this.modulesRepository.findOne({
        where: { id: permission.moduleId },
      });
      const screenEntity = await this.screenRepository.findOne({
        where: { id: permission.screenId },
      });

      if (moduleEntity && screenEntity) {
        const roleModuleScreen = this.roleModuleScreenRepository.create({
          role: savedRole,
          module: moduleEntity,
          screen: screenEntity,
        });

        await this.roleModuleScreenRepository.save(roleModuleScreen);
      } else {
        throw new ConflictException('Invalid module or screen reference');
      }
    }

    return savedRole;
  }

  findAll() {
    return this.roleRepository.find({
      relations: [
        'roleModuleScreens',
        'roleModuleScreens.module',
        'roleModuleScreens.screen',
      ],
    });
  }

  // findOne(id: number) {
  //   return this.roleRepository.findOneById(id);
  // }
  async findRoleWithModulesAndScreens(roleId: number): Promise<Role> {
    const role = await this.roleRepository.findOne({
      where: { id: roleId },
      relations: [
        'roleModuleScreens',
        'roleModuleScreens.module',
        'roleModuleScreens.screen',
      ],
    });
    console.log(role);
    if (!role) {
      throw new NotFoundException(`Role with ID ${roleId} not found`);
    }

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    await this.roleRepository.delete(id);
    return 'Deleted successfully';
  }
}
