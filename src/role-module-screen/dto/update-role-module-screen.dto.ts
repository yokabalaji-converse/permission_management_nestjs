import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleModuleScreenDto } from './create-role-module-screen.dto';

export class UpdateRoleModuleScreenDto extends PartialType(
  CreateRoleModuleScreenDto,
) {}
