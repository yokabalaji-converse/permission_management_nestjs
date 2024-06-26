import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { User } from '../entities/user.entity';
import { CreateTeamDto } from '../dtos/create-team-dto';
import { UpdateTeamDto } from '../dtos/update-team-dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create({
      name: createTeamDto.name,
      users: await this.userRepository.findByIds(createTeamDto.users),
    });
    console.log(team);
    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find({ relations: ['users'] });
  }

  async findOne(id: number): Promise<Team> {
    return this.teamRepository.findOne({
      where: { id: id },
      relations: ['users'],
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const team = await this.teamRepository.findOne({ where: { id: id } });
    team.name = updateTeamDto.name;
    team.users = await this.userRepository.findByIds(updateTeamDto.users);
    return this.teamRepository.save(team);
  }

  async remove(id: number): Promise<void> {
    await this.teamRepository.delete(id);
  }
}
