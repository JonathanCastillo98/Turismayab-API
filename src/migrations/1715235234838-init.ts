import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1715235234838 implements MigrationInterface {
    name = 'Init1715235234838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "regions" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "regions" ALTER COLUMN "image" SET NOT NULL`);
    }

}
