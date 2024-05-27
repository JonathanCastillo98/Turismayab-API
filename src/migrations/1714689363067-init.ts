import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1714689363067 implements MigrationInterface {
    name = 'Init1714689363067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "views" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "views" DROP NOT NULL`);
    }

}
