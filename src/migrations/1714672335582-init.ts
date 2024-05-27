import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1714672335582 implements MigrationInterface {
    name = 'Init1714672335582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email_verified" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email_verified" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email_verified" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email_verified" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" text`);
    }

}
