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
import { Screen } from '../entities/screen.entity';
import { Role } from 'src/entities/role.entity';
import { Permission } from 'src/entities/permission.entity';
import { Modules } from 'src/entities/modules.entity';
import { RoleService } from 'src/role/role.service';
import { RoleController } from 'src/role/role.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/secreteKey';
import { PassportModule } from '@nestjs/passport';
import { ModuleService } from 'src/module/module.service';
import { ModuleController } from 'src/module/module.controller';
import { ScreenController } from 'src/screen/screen.controller';
import { ScreenService } from 'src/screen/screen.service';
import { RoleModuleScreen } from 'src/entities/roleModuleScreen.entity';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from 'src/guards/jwt-auth-guards';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([
      User,
      Team,
      Screen,
      Role,
      Permission,
      Modules,
      RoleModuleScreen,
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
  ],
  controllers: [
    AppController,
    UserController,
    TeamController,
    RoleController,
    ModuleController,
    ScreenController,
  ],
  providers: [
    AppService,
    UserService,
    TeamService,
    RoleService,
    AppService,
    ModuleService,
    ScreenService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
