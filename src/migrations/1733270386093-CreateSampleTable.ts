import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSampleTable1733270386093 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sample',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sample');
  }
}
