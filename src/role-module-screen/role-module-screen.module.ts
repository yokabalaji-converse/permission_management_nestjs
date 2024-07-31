import { Module } from '@nestjs/common';
import { RoleModuleScreenService } from './role-module-screen.service';
import { RoleModuleScreenController } from './role-module-screen.controller';

@Module({
  controllers: [RoleModuleScreenController],
  providers: [RoleModuleScreenService],
})
export class RoleModuleScreenModule {}
