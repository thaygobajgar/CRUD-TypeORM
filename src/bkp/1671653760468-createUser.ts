import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1671653760468 implements MigrationInterface {
    name = 'createUser1671653760468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "district" character varying(50) NOT NULL, "zipCode" character varying(10) NOT NULL, "number" character varying(9), "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
