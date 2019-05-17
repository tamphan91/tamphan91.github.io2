'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductType extends Model {
    
    productTypes(){
        return this.hasMany('App/Models/ProductType')
    }

    products(){
        return this.hasMany('App/Models/Product')
    }
}

module.exports = ProductType
