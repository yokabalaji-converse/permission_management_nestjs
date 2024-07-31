import { IsArray, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;
  @IsArray()
  permissions: {
    moduleId: number;
    screenId: number;
  }[];
}
