/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {username: 'James', password: '$2a$08$PvwCYfqOts6xlbkXxcFZGOEdKQZQs.D1u24d26N1yRW7UEzmmKL9S'},
    {username: 'Kim', password: '$2a$08$F4AaGORH/44ucGGAo31KX.Y8NVnF2odlxyC0.DnfJdRVsQ0tuSTSS'},
    {username: 'Carlos', password: '$2a$08$YoU5rOfL6JuEjda49gCDae5.t8/VbVIkgxNmLgoXbEjxCgpztVE/q'},
  ]);
};
