import { Injectable } from '@nestjs/common';
import { CreateRoleModuleScreenDto } from './dto/create-role-module-screen.dto';
import { UpdateRoleModuleScreenDto } from './dto/update-role-module-screen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleModuleScreen } from 'src/entities/roleModuleScreen.entity';
import { Repository } from 'typeorm';
import { Screen } from 'src/entities/screen.entity';
import { Modules } from 'src/entities/modules.entity';

@Injectable()
export class RoleModuleScreenService {
  constructor(
    @InjectRepository(RoleModuleScreen)
    private readonly roleModulecreenRepo: Repository<RoleModuleScreen>,
    @InjectRepository(Screen)
    private readonly screenRepo: Repository<Screen>,
    @InjectRepository(Modules)
    private readonly ModuleRepo: Repository<Modules>,
  ) {}
  create(createRoleModuleScreenDto: CreateRoleModuleScreenDto) {
    return 'This action adds a new roleModuleScreen';
  }

  findAll() {
    return `This action returns all roleModuleScreen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleModuleScreen`;
  }

  update(id: number, updateRoleModuleScreenDto: UpdateRoleModuleScreenDto) {
    return `This action updates a #${id} roleModuleScreen`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleModuleScreen`;
  }
}
