import { IsArray, IsString } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  name: string;
  @IsArray()
  screen: number[];
}
