import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1714691910262 implements MigrationInterface {
    name = 'Init1714691910262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ADD "post_id" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "category_id" uuid`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_852f266adc5d67c40405c887b49" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_852f266adc5d67c40405c887b49"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "post_id"`);
    }

}
