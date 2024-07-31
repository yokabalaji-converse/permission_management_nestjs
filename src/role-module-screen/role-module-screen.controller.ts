import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleModuleScreenService } from './role-module-screen.service';
import { CreateRoleModuleScreenDto } from './dto/create-role-module-screen.dto';
import { UpdateRoleModuleScreenDto } from './dto/update-role-module-screen.dto';

@Controller('role-module-screen')
export class RoleModuleScreenController {
  constructor(private readonly roleModuleScreenService: RoleModuleScreenService) {}

  @Post()
  create(@Body() createRoleModuleScreenDto: CreateRoleModuleScreenDto) {
    return this.roleModuleScreenService.create(createRoleModuleScreenDto);
  }

  @Get()
  findAll() {
    return this.roleModuleScreenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleModuleScreenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleModuleScreenDto: UpdateRoleModuleScreenDto) {
    return this.roleModuleScreenService.update(+id, updateRoleModuleScreenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleModuleScreenService.remove(+id);
  }
}
