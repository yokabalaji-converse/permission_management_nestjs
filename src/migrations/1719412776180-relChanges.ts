import { MigrationInterface, QueryRunner } from "typeorm";

export class RelChanges1719412776180 implements MigrationInterface {
    name = 'RelChanges1719412776180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`modules\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NULL, \`updatedAt\` datetime NULL, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`screen\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NULL, \`updatedAt\` datetime NULL, \`deletedAt\` datetime NULL, \`modulesId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NULL, \`updatedAt\` datetime NULL, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`phoneNumber\` int NOT NULL, \`createdAt\` datetime NULL, \`updatedAt\` datetime NULL, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`permission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`action\` varchar(255) NOT NULL, \`dataAccessLevel\` varchar(255) NULL, \`companyId\` int NULL, \`createdAt\` datetime NULL, \`updatedAt\` datetime NULL, \`deletedAt\` datetime NULL, \`roleId\` int NULL, \`modulesId\` int NULL, \`screensId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team_roles_role\` (\`teamId\` int NOT NULL, \`roleId\` int NOT NULL, INDEX \`IDX_644f5ba9261811056cef21b09b\` (\`teamId\`), INDEX \`IDX_f633d6628b16914a425a0cb2b7\` (\`roleId\`), PRIMARY KEY (\`teamId\`, \`roleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_roles_role\` (\`userId\` int NOT NULL, \`roleId\` int NOT NULL, INDEX \`IDX_5f9286e6c25594c6b88c108db7\` (\`userId\`), INDEX \`IDX_4be2f7adf862634f5f803d246b\` (\`roleId\`), PRIMARY KEY (\`userId\`, \`roleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_teams_team\` (\`userId\` int NOT NULL, \`teamId\` int NOT NULL, INDEX \`IDX_5b1d47a221406321be714a8186\` (\`userId\`), INDEX \`IDX_a80f8ae0d425218dbaa2240df4\` (\`teamId\`), PRIMARY KEY (\`userId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_permissions_permission\` (\`roleId\` int NOT NULL, \`permissionId\` int NOT NULL, INDEX \`IDX_b36cb2e04bc353ca4ede00d87b\` (\`roleId\`), INDEX \`IDX_bfbc9e263d4cea6d7a8c9eb3ad\` (\`permissionId\`), PRIMARY KEY (\`roleId\`, \`permissionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_users_user\` (\`roleId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_ed6edac7184b013d4bd58d60e5\` (\`roleId\`), INDEX \`IDX_a88fcb405b56bf2e2646e9d479\` (\`userId\`), PRIMARY KEY (\`roleId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_teams_team\` (\`roleId\` int NOT NULL, \`teamId\` int NOT NULL, INDEX \`IDX_da8ff8bbf53508f1ecdf525fe5\` (\`roleId\`), INDEX \`IDX_f49f16233c6ad5425f5652b783\` (\`teamId\`), PRIMARY KEY (\`roleId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`screen\` ADD CONSTRAINT \`FK_694eb3d205a5967bd54f268c301\` FOREIGN KEY (\`modulesId\`) REFERENCES \`modules\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_cdb4db95384a1cf7a837c4c683e\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_138c65e8daf18a3df24e0897209\` FOREIGN KEY (\`modulesId\`) REFERENCES \`modules\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_409476d8e4fbbebb1213ea0b8b4\` FOREIGN KEY (\`screensId\`) REFERENCES \`screen\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`team_roles_role\` ADD CONSTRAINT \`FK_644f5ba9261811056cef21b09b7\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`team_roles_role\` ADD CONSTRAINT \`FK_f633d6628b16914a425a0cb2b78\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_roles_role\` ADD CONSTRAINT \`FK_5f9286e6c25594c6b88c108db77\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_roles_role\` ADD CONSTRAINT \`FK_4be2f7adf862634f5f803d246b8\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_teams_team\` ADD CONSTRAINT \`FK_5b1d47a221406321be714a8186d\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_teams_team\` ADD CONSTRAINT \`FK_a80f8ae0d425218dbaa2240df49\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` ADD CONSTRAINT \`FK_b36cb2e04bc353ca4ede00d87b9\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` ADD CONSTRAINT \`FK_bfbc9e263d4cea6d7a8c9eb3ad2\` FOREIGN KEY (\`permissionId\`) REFERENCES \`permission\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` ADD CONSTRAINT \`FK_ed6edac7184b013d4bd58d60e54\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` ADD CONSTRAINT \`FK_a88fcb405b56bf2e2646e9d4797\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_teams_team\` ADD CONSTRAINT \`FK_da8ff8bbf53508f1ecdf525fe5b\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_teams_team\` ADD CONSTRAINT \`FK_f49f16233c6ad5425f5652b783c\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role_teams_team\` DROP FOREIGN KEY \`FK_f49f16233c6ad5425f5652b783c\``);
        await queryRunner.query(`ALTER TABLE \`role_teams_team\` DROP FOREIGN KEY \`FK_da8ff8bbf53508f1ecdf525fe5b\``);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` DROP FOREIGN KEY \`FK_a88fcb405b56bf2e2646e9d4797\``);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` DROP FOREIGN KEY \`FK_ed6edac7184b013d4bd58d60e54\``);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` DROP FOREIGN KEY \`FK_bfbc9e263d4cea6d7a8c9eb3ad2\``);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` DROP FOREIGN KEY \`FK_b36cb2e04bc353ca4ede00d87b9\``);
        await queryRunner.query(`ALTER TABLE \`user_teams_team\` DROP FOREIGN KEY \`FK_a80f8ae0d425218dbaa2240df49\``);
        await queryRunner.query(`ALTER TABLE \`user_teams_team\` DROP FOREIGN KEY \`FK_5b1d47a221406321be714a8186d\``);
        await queryRunner.query(`ALTER TABLE \`user_roles_role\` DROP FOREIGN KEY \`FK_4be2f7adf862634f5f803d246b8\``);
        await queryRunner.query(`ALTER TABLE \`user_roles_role\` DROP FOREIGN KEY \`FK_5f9286e6c25594c6b88c108db77\``);
        await queryRunner.query(`ALTER TABLE \`team_roles_role\` DROP FOREIGN KEY \`FK_f633d6628b16914a425a0cb2b78\``);
        await queryRunner.query(`ALTER TABLE \`team_roles_role\` DROP FOREIGN KEY \`FK_644f5ba9261811056cef21b09b7\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_409476d8e4fbbebb1213ea0b8b4\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_138c65e8daf18a3df24e0897209\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_cdb4db95384a1cf7a837c4c683e\``);
        await queryRunner.query(`ALTER TABLE \`screen\` DROP FOREIGN KEY \`FK_694eb3d205a5967bd54f268c301\``);
        await queryRunner.query(`DROP INDEX \`IDX_f49f16233c6ad5425f5652b783\` ON \`role_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_da8ff8bbf53508f1ecdf525fe5\` ON \`role_teams_team\``);
        await queryRunner.query(`DROP TABLE \`role_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_a88fcb405b56bf2e2646e9d479\` ON \`role_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_ed6edac7184b013d4bd58d60e5\` ON \`role_users_user\``);
        await queryRunner.query(`DROP TABLE \`role_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_bfbc9e263d4cea6d7a8c9eb3ad\` ON \`role_permissions_permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_b36cb2e04bc353ca4ede00d87b\` ON \`role_permissions_permission\``);
        await queryRunner.query(`DROP TABLE \`role_permissions_permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_a80f8ae0d425218dbaa2240df4\` ON \`user_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_5b1d47a221406321be714a8186\` ON \`user_teams_team\``);
        await queryRunner.query(`DROP TABLE \`user_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_4be2f7adf862634f5f803d246b\` ON \`user_roles_role\``);
        await queryRunner.query(`DROP INDEX \`IDX_5f9286e6c25594c6b88c108db7\` ON \`user_roles_role\``);
        await queryRunner.query(`DROP TABLE \`user_roles_role\``);
        await queryRunner.query(`DROP INDEX \`IDX_f633d6628b16914a425a0cb2b7\` ON \`team_roles_role\``);
        await queryRunner.query(`DROP INDEX \`IDX_644f5ba9261811056cef21b09b\` ON \`team_roles_role\``);
        await queryRunner.query(`DROP TABLE \`team_roles_role\``);
        await queryRunner.query(`DROP TABLE \`permission\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP TABLE \`screen\``);
        await queryRunner.query(`DROP TABLE \`modules\``);
    }

}
