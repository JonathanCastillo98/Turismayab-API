import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1715235138787 implements MigrationInterface {
    name = 'Init1715235138787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "regions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "path" character varying NOT NULL, "color" character varying NOT NULL, "transform" character varying NOT NULL, "view_box" character varying NOT NULL, "image" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_4fcd12ed6a046276e2deb08801c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "towns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, "name" character varying NOT NULL, "color" character varying NOT NULL, "description" character varying, "content" character varying, "thumbnail" character varying, "gallery" character varying, "is_pueblo_magico" boolean NOT NULL DEFAULT false, "region_id" uuid, CONSTRAINT "PK_8f5c3dbce1d3ea5de7dcc48c230" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "towns" ADD CONSTRAINT "FK_bc6fdd078791390d8be81a62857" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "towns" DROP CONSTRAINT "FK_bc6fdd078791390d8be81a62857"`);
        await queryRunner.query(`DROP TABLE "towns"`);
        await queryRunner.query(`DROP TABLE "regions"`);
    }

}
