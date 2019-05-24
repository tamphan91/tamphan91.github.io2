'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('firstname', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(4)
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
