'use strict'
/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const users = await Database.table('users')
    if(users.length === 0) {
      // In the case of bulk inserts, the id of the first record is returned, and it is more of a limitation with MYSQL itself. LAST_INSERT_ID.
      const lastUserId = await Database
        .from('users')
        .insert({email: 'tamphan91@icloud.com', firstname: 'tam', lastname: 'phan', password: await Hash.make('123456'), role_id: 1})
      console.log('init users table::::', lastUserId)
    } else {
      console.log(users);
    }
  }
}

module.exports = UserSeeder
