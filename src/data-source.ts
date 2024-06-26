import { Permission } from 'src/entities/permission.entity';
import { Role } from 'src/entities/role.entity';
import { Team } from 'src/entities/team.entity';
import { User } from 'src/entities/user.entity';
import { Modules } from 'src/entities/modules.entity';
import { Screen } from 'src/entities/screen.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'permissionmanagement',
  entities: [User, Role, Team, Permission, Modules, Screen],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};
const datasource = new DataSource(dataSourceOptions);
export default datasource;
