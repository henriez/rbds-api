import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStrTable1739220146288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE str (
            id int primary key,
            str text not null
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('str');
  }
}
