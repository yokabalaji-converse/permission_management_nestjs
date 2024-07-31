import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Modules } from '../entities/modules.entity';
import { Repository } from 'typeorm';
import { Screen } from 'src/entities/screen.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Modules)
    private readonly moduleRepository: Repository<Modules>,
    @InjectRepository(Screen)
    private readonly screenRepo: Repository<Screen>,
  ) {}
  async create(createModuleDto: CreateModuleDto) {
    const module = this.moduleRepository.create({
      name: createModuleDto.name,
      screens: await this.screenRepo.findByIds(createModuleDto.screen),
    });
    console.log(module);
    return this.moduleRepository.save(module);
  }

  findAll() {
    return this.moduleRepository.find({ relations: ['screens'] });
  }

  findOne(id: number) {
    return this.moduleRepository.findOne({
      where: { id: id },
      relations: ['screens'],
    });
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    const module = await this.moduleRepository.findOne({ where: { id: id } });
    module.name = updateModuleDto.name;
    //  module.screens = await this.screenRepo.findByIds(updateModuleDto.screen);
    return await this.moduleRepository.save(module);
  }

  async remove(id: number) {
    await this.moduleRepository.delete(id);
    return `This action removes a #${id} module`;
  }
}
