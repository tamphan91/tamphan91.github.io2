'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RoleSeeder {
  async run () {
    const roles = await Database.table('roles')
    if(roles.length === 0) {
      // In the case of bulk inserts, the id of the first record is returned, and it is more of a limitation with MYSQL itself. LAST_INSERT_ID.
      const lastRoleId = await Database
        .from('roles')
        .insert([{ name: 'admin' }, { name: 'manager' }, {name: 'employee'}, {name: 'customer'}])
      console.log('init roles table::::', lastRoleId)
    } else {
      console.log(roles);
    }
  }
}

module.exports = RoleSeeder
