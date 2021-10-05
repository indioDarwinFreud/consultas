import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1633460203139 implements MigrationInterface {
    name = 'Migration1633460203139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productos" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "precio" integer NOT NULL, "tipo" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "categorias" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "productosId" varchar)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "telefono" varchar NOT NULL, "ciudad" varchar NOT NULL, "estado" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_categorias" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "productosId" varchar, CONSTRAINT "FK_b1bd0c8f931aa360d4409f337e9" FOREIGN KEY ("productosId") REFERENCES "productos" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_categorias"("id", "nombre", "productosId") SELECT "id", "nombre", "productosId" FROM "categorias"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`ALTER TABLE "temporary_categorias" RENAME TO "categorias"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorias" RENAME TO "temporary_categorias"`);
        await queryRunner.query(`CREATE TABLE "categorias" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "productosId" varchar)`);
        await queryRunner.query(`INSERT INTO "categorias"("id", "nombre", "productosId") SELECT "id", "nombre", "productosId" FROM "temporary_categorias"`);
        await queryRunner.query(`DROP TABLE "temporary_categorias"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "productos"`);
    }

}
