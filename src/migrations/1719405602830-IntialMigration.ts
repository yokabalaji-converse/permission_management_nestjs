import { MigrationInterface, QueryRunner } from "typeorm";

export class IntialMigration1719405602830 implements MigrationInterface {
    name = 'IntialMigration1719405602830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`modules\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`screen\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, \`modulesId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`phoneNumber\` int NOT NULL, \`createdAt\` datetime NULL, \`updatedAt\` datetime NULL, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`permission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`action\` varchar(255) NOT NULL, \`dataAccessLevel\` varchar(255) NULL, \`companyId\` int NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, \`roleId\` int NULL, \`modulesId\` int NULL, \`screensId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Team_Roles\` (\`teamId\` int NOT NULL, \`roleId\` int NOT NULL, INDEX \`IDX_50874249481cd6db0bb08281ce\` (\`teamId\`), INDEX \`IDX_7600c4e6f867afdc3087cc9696\` (\`roleId\`), PRIMARY KEY (\`teamId\`, \`roleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User_Roles\` (\`userId\` int NOT NULL, \`roleId\` int NOT NULL, INDEX \`IDX_8c29a6612875cfef379f58afb9\` (\`userId\`), INDEX \`IDX_5cce46a25b807d2369d37ee4d3\` (\`roleId\`), PRIMARY KEY (\`userId\`, \`roleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User_Teams\` (\`userId\` int NOT NULL, \`teamId\` int NOT NULL, INDEX \`IDX_ebdd45091ce180682b1e367317\` (\`userId\`), INDEX \`IDX_2a49e068ea28789878c5f9f509\` (\`teamId\`), PRIMARY KEY (\`userId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_permissions_permission\` (\`roleId\` int NOT NULL, \`permissionId\` int NOT NULL, INDEX \`IDX_b36cb2e04bc353ca4ede00d87b\` (\`roleId\`), INDEX \`IDX_bfbc9e263d4cea6d7a8c9eb3ad\` (\`permissionId\`), PRIMARY KEY (\`roleId\`, \`permissionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_users_user\` (\`roleId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_ed6edac7184b013d4bd58d60e5\` (\`roleId\`), INDEX \`IDX_a88fcb405b56bf2e2646e9d479\` (\`userId\`), PRIMARY KEY (\`roleId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`screen\` ADD CONSTRAINT \`FK_694eb3d205a5967bd54f268c301\` FOREIGN KEY (\`modulesId\`) REFERENCES \`modules\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_cdb4db95384a1cf7a837c4c683e\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_138c65e8daf18a3df24e0897209\` FOREIGN KEY (\`modulesId\`) REFERENCES \`modules\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_409476d8e4fbbebb1213ea0b8b4\` FOREIGN KEY (\`screensId\`) REFERENCES \`screen\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Team_Roles\` ADD CONSTRAINT \`FK_50874249481cd6db0bb08281ceb\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`Team_Roles\` ADD CONSTRAINT \`FK_7600c4e6f867afdc3087cc96967\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`User_Roles\` ADD CONSTRAINT \`FK_8c29a6612875cfef379f58afb9c\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`User_Roles\` ADD CONSTRAINT \`FK_5cce46a25b807d2369d37ee4d33\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`User_Teams\` ADD CONSTRAINT \`FK_ebdd45091ce180682b1e367317f\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`User_Teams\` ADD CONSTRAINT \`FK_2a49e068ea28789878c5f9f509d\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` ADD CONSTRAINT \`FK_b36cb2e04bc353ca4ede00d87b9\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` ADD CONSTRAINT \`FK_bfbc9e263d4cea6d7a8c9eb3ad2\` FOREIGN KEY (\`permissionId\`) REFERENCES \`permission\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` ADD CONSTRAINT \`FK_ed6edac7184b013d4bd58d60e54\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` ADD CONSTRAINT \`FK_a88fcb405b56bf2e2646e9d4797\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role_users_user\` DROP FOREIGN KEY \`FK_a88fcb405b56bf2e2646e9d4797\``);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` DROP FOREIGN KEY \`FK_ed6edac7184b013d4bd58d60e54\``);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` DROP FOREIGN KEY \`FK_bfbc9e263d4cea6d7a8c9eb3ad2\``);
        await queryRunner.query(`ALTER TABLE \`role_permissions_permission\` DROP FOREIGN KEY \`FK_b36cb2e04bc353ca4ede00d87b9\``);
        await queryRunner.query(`ALTER TABLE \`User_Teams\` DROP FOREIGN KEY \`FK_2a49e068ea28789878c5f9f509d\``);
        await queryRunner.query(`ALTER TABLE \`User_Teams\` DROP FOREIGN KEY \`FK_ebdd45091ce180682b1e367317f\``);
        await queryRunner.query(`ALTER TABLE \`User_Roles\` DROP FOREIGN KEY \`FK_5cce46a25b807d2369d37ee4d33\``);
        await queryRunner.query(`ALTER TABLE \`User_Roles\` DROP FOREIGN KEY \`FK_8c29a6612875cfef379f58afb9c\``);
        await queryRunner.query(`ALTER TABLE \`Team_Roles\` DROP FOREIGN KEY \`FK_7600c4e6f867afdc3087cc96967\``);
        await queryRunner.query(`ALTER TABLE \`Team_Roles\` DROP FOREIGN KEY \`FK_50874249481cd6db0bb08281ceb\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_409476d8e4fbbebb1213ea0b8b4\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_138c65e8daf18a3df24e0897209\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_cdb4db95384a1cf7a837c4c683e\``);
        await queryRunner.query(`ALTER TABLE \`screen\` DROP FOREIGN KEY \`FK_694eb3d205a5967bd54f268c301\``);
        await queryRunner.query(`DROP INDEX \`IDX_a88fcb405b56bf2e2646e9d479\` ON \`role_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_ed6edac7184b013d4bd58d60e5\` ON \`role_users_user\``);
        await queryRunner.query(`DROP TABLE \`role_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_bfbc9e263d4cea6d7a8c9eb3ad\` ON \`role_permissions_permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_b36cb2e04bc353ca4ede00d87b\` ON \`role_permissions_permission\``);
        await queryRunner.query(`DROP TABLE \`role_permissions_permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_2a49e068ea28789878c5f9f509\` ON \`User_Teams\``);
        await queryRunner.query(`DROP INDEX \`IDX_ebdd45091ce180682b1e367317\` ON \`User_Teams\``);
        await queryRunner.query(`DROP TABLE \`User_Teams\``);
        await queryRunner.query(`DROP INDEX \`IDX_5cce46a25b807d2369d37ee4d3\` ON \`User_Roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_8c29a6612875cfef379f58afb9\` ON \`User_Roles\``);
        await queryRunner.query(`DROP TABLE \`User_Roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_7600c4e6f867afdc3087cc9696\` ON \`Team_Roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_50874249481cd6db0bb08281ce\` ON \`Team_Roles\``);
        await queryRunner.query(`DROP TABLE \`Team_Roles\``);
        await queryRunner.query(`DROP TABLE \`permission\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP TABLE \`screen\``);
        await queryRunner.query(`DROP TABLE \`modules\``);
    }

}
