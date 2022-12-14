/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {username: 'David', password: '1234'},
    {username: 'Charles', password: '1234'},
    {username: 'Kimberly', password: '1234'}
  ]);
};
