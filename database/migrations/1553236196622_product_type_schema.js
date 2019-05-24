'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductTypeSchema extends Schema {
  up () {
    this.create('product_types', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.string('title1')
      table.string('title2')
      table.string('url')
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.integer('product_type_id').unsigned().references('id').inTable('product_types')
    })
  }

  down () {
    this.drop('product_types')
  }
}

module.exports = ProductTypeSchema
