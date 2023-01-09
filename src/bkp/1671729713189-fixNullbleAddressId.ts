import { MigrationInterface, QueryRunner } from "typeorm";

export class fixNullbleAddressId1671729713189 implements MigrationInterface {
    name = 'fixNullbleAddressId1671729713189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e9058266ab1b092d636b1868956"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "adressId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e9058266ab1b092d636b1868956" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e9058266ab1b092d636b1868956"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "adressId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e9058266ab1b092d636b1868956" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
