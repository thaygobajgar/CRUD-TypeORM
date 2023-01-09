import { MigrationInterface, QueryRunner } from "typeorm";

export class schedulesUserToPropertiesFix21672112164262 implements MigrationInterface {
    name = 'schedulesUserToPropertiesFix21672112164262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_8ab9c780ae5609062b862896e6a"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "propertiesId" TO "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "date" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "hour" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3193709d61be5a23d570547c964" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3193709d61be5a23d570547c964"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "hour" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "date" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "propertyId" TO "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_8ab9c780ae5609062b862896e6a" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
