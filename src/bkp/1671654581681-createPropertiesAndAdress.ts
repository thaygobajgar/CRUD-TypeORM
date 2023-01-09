import { MigrationInterface, QueryRunner } from "typeorm";

export class createPropertiesAndAdress1671654581681 implements MigrationInterface {
    name = 'createPropertiesAndAdress1671654581681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" double precision NOT NULL, "size" integer NOT NULL, "createAt" date NOT NULL, "updatedAt" date NOT NULL, "adressId" uuid, CONSTRAINT "REL_e9058266ab1b092d636b186895" UNIQUE ("adressId"), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "PK_745d8f43d3af10ab8247465e450"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e9058266ab1b092d636b1868956" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e9058266ab1b092d636b1868956"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "PK_745d8f43d3af10ab8247465e450"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "properties"`);
    }

}
