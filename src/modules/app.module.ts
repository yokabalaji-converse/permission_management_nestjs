import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/user/user.controller';
import { TeamController } from 'src/team/team.controller';
import { UserService } from 'src/user/user.service';
import { TeamService } from 'src/team/team.service';
import { Team } from 'src/entities/team.entity';
import { User } from 'src/entities/user.entity';
import { dataSourceOptions } from '../data-source';
import { Screen } from 'src/entities/screen.entity';
import { Role } from 'src/entities/role.entity';
import { Permission } from 'src/entities/permission.entity';
import { Modules } from 'src/entities/modules.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([User, Team, Screen, Role, Permission, Modules]),
  ],
  controllers: [AppController, UserController, TeamController],
  providers: [AppService, UserService, TeamService],
})
export class AppModule {}
