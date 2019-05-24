'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name')
      table.decimal('price')
      table.decimal('sale')
      table.string('url')
      table.string('images')
      table.integer('state')
      table.string('details')
      table.string('materialAndCare')
      table.timestamps()
      table.integer('product_type_id').unsigned().references('id').inTable('product_types')
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
