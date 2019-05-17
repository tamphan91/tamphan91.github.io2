'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // add new columns or remove existing
      table.string('fullname', 80).notNullable().unique()
    })
    // this.create('users', (table) => {
    //   table.increments()
    //   table.string('username', 80).notNullable().unique()
    //   table.string('firstname', 80).notNullable().unique()
    //   table.string('lastname', 80).notNullable().unique()
    //   table.string('email', 254).notNullable().unique()
    //   table.string('password', 60).notNullable()
    //   table.timestamps()
    // })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
