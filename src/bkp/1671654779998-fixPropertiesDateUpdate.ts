import { MigrationInterface, QueryRunner } from "typeorm";

export class fixPropertiesDateUpdate1671654779998 implements MigrationInterface {
    name = 'fixPropertiesDateUpdate1671654779998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "createAt" date NOT NULL`);
    }

}
