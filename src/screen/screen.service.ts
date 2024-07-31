import { Injectable } from '@nestjs/common';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen.dto';
import { Repository } from 'typeorm';
import { Screen } from '../entities/screen.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScreenService {
  constructor(
    @InjectRepository(Screen)
    private readonly screenRepo: Repository<Screen>,
  ) {}

  async create(createScreenDto: CreateScreenDto) {
    return await this.screenRepo.save(createScreenDto);
  }

  findAll() {
    return this.screenRepo.find();
  }

  findOne(id: number) {
    return this.screenRepo.findOne({ where: { id: id } });
  }

  update(id: number, updateScreenDto: UpdateScreenDto) {
    return this.screenRepo.update(id, updateScreenDto);
  }

  remove(id: number) {
    this.screenRepo.delete(id);
    return `This action removes a #${id} screen`;
  }
}
