import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user-dto';
import { UpdateUserDto } from 'src/dtos/update-user-dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/dtos/login-dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/secreteKey';
import { Role } from 'src/entities/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const checkUser = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });
    if (!checkUser) {
      throw new UnauthorizedException();
    } else {
      if (
        checkUser &&
        (await bcrypt.compare(loginDto.password, (await checkUser).password))
      ) {
        const payload = {
          username: (await checkUser).email,
          sub: (await checkUser).id,
        };

        const access_token = this.jwtService.sign(payload);
        const referenceToken = this.jwtService.sign(payload, {
          secret: jwtConstants.referSec,
          expiresIn: '7d',
        });
        await this.userRepository.update(payload.sub, {
          rToken: referenceToken,
        });
        return {
          access_token,
          referenceToken,
        };
      } else {
        return 'password is incorrect';
      }
    }
  }

  async create(createUserDto: CreateUserDto) {
    const roless = await createUserDto.role.map((role) => ({
      name: role,
    }));
    const roles = await this.roleRepository.find({ where: roless });
    if (!roles) {
      return 'This role is not Available';
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.phoneNumber = createUserDto.phoneNumber;
    user.password = hashedPassword;
    user.roles = roles;

    /*
const roless = await createUserdto.role.map((role) => ({
  name: role,
}));

const roles = await this.roleRepository.find({ where: roless });
if (!roles) {
  return 'This role is not Available';
}
const user = new User();
user.email = updateData.email;
user.name = updateData.name;
user.password = updateData.password;
user.roles = roles;
return await this.usersRepository.save(user);
}

*/
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['teams', 'roles'] });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new ForbiddenException('user not found');
    }
    return this.userRepository.findOne({
      where: { id },
      relations: ['teams', 'roles'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      console.log('user not found');
    }
    const roless = await updateUserDto.role.map((role) => ({
      name: role,
    }));
    const roles = await this.roleRepository.find({ where: roless });
    if (!roles) {
      return 'This role is not Available';
    }

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }
    const { role: roleIds, ...updateData } = updateUserDto;
    user.roles = await this.userRepository
      .createQueryBuilder()
      .relation(User, 'roles')
      .of(user)
      .loadMany();
    user.email = updateData.email;
    user.firstName = updateData.firstName;
    user.lastName = updateData.lastName;
    user.password = updateData.password;
    user.phoneNumber = updateData.phoneNumber;
    user.roles = roles;
    return await this.userRepository.save(user);
    // await this.userRepository.update(id, updateUserDto);
    // return this.userRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
