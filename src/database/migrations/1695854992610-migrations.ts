import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1695854992610 implements MigrationInterface {
    name = 'migrations1695854992610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productos" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "precio" integer NOT NULL, "cantidad" integer NOT NULL, "tipo" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "categoriasId" varchar)`);
        await queryRunner.query(`CREATE TABLE "categorias" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "cuentas" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "contraseña" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "telefono" varchar NOT NULL, "ciudad" varchar NOT NULL, "estado" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_productos" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "precio" integer NOT NULL, "cantidad" integer NOT NULL, "tipo" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "categoriasId" varchar, CONSTRAINT "FK_3150a2e74c18cfaddca910c9a8a" FOREIGN KEY ("categoriasId") REFERENCES "categorias" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_productos"("id", "nombre", "precio", "cantidad", "tipo", "created_at", "updated_at", "categoriasId") SELECT "id", "nombre", "precio", "cantidad", "tipo", "created_at", "updated_at", "categoriasId" FROM "productos"`);
        await queryRunner.query(`DROP TABLE "productos"`);
        await queryRunner.query(`ALTER TABLE "temporary_productos" RENAME TO "productos"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" RENAME TO "temporary_productos"`);
        await queryRunner.query(`CREATE TABLE "productos" ("id" varchar PRIMARY KEY NOT NULL, "nombre" varchar NOT NULL, "precio" integer NOT NULL, "cantidad" integer NOT NULL, "tipo" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "categoriasId" varchar)`);
        await queryRunner.query(`INSERT INTO "productos"("id", "nombre", "precio", "cantidad", "tipo", "created_at", "updated_at", "categoriasId") SELECT "id", "nombre", "precio", "cantidad", "tipo", "created_at", "updated_at", "categoriasId" FROM "temporary_productos"`);
        await queryRunner.query(`DROP TABLE "temporary_productos"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "cuentas"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "productos"`);
    }

}
