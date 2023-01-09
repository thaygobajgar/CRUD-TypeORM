import { MigrationInterface, QueryRunner } from "typeorm";

export class schedulesUserToPropertiesFix1672110621072 implements MigrationInterface {
    name = 'schedulesUserToPropertiesFix1672110621072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "date" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "hour" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "hour" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "date" SET DEFAULT now()`);
    }

}
