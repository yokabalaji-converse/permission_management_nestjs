import { IsString } from 'class-validator';

export class CreateScreenDto {
  @IsString()
  name: string;
}
