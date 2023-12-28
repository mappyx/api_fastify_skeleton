/* eslint-disable unicorn/filename-case */
'use strict';

exports.seed = async knex => {
  await knex('user').del();
  await knex('user').insert([
    {
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@admin.com',
      country_dial: '+58',
      phone_number: '04141231234',
      status: true,
    }
  ]);
};
