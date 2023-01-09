import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCreatedAtColumnAtProperties1671906628662 implements MigrationInterface {
    name = 'fixCreatedAtColumnAtProperties1671906628662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "createAt" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "createdAt" TO "createAt"`);
    }

}
