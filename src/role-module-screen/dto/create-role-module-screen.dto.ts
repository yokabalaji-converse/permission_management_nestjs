import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateRoleModuleScreenDto {
  @IsInt()
  @IsNotEmpty()
  roleId: number;

  @IsInt()
  @IsNotEmpty()
  moduleId: number;

  @IsInt()
  @IsNotEmpty()
  screenId: number;
}
