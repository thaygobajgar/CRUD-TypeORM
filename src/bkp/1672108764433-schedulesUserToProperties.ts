import { MigrationInterface, QueryRunner } from "typeorm";

export class schedulesUserToProperties1672108764433 implements MigrationInterface {
    name = 'schedulesUserToProperties1672108764433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT now(), "hour" character varying(10) NOT NULL, "propertiesId" uuid, "userId" uuid, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_8ab9c780ae5609062b862896e6a" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_8ab9c780ae5609062b862896e6a"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
    }

}
