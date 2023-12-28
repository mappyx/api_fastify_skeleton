/* eslint-disable unicorn/filename-case */
'use strict';

exports.up = async knex => {
  const tableExists = await knex.schema.hasTable('user');
  if (tableExists) return 'Table Ready';
  await knex.schema.createTable('user', table => {
    table.increments('id').primary().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.boolean('email_verified').notNullable().defaultTo(false);
    table.string('phone_number').notNullable();
    table.string('country_dial').notNullable();
    table.boolean('phone_number_verified').notNullable().defaultTo(false);
    table.boolean('status').defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  });
};

exports.down = async knex => {
  return knex.schema.dropTable('user');
};
