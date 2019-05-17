'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    ProductType(){
        return this.belongsTo('App/Models/ProductType')
    }

    static boot () {
        super.boot()

        this.addHook('beforeCreate', async (productInstance) => {
            productInstance.images = productInstance.images.join(';')
        })

        this.addHook('beforeUpdate', async (productInstance) => {
            productInstance.images = productInstance.images.join(';')
        })
    }

    getImages(images) {
        return !images || Array.isArray(images) ? images : images.split(';')
    }
}

module.exports = Product
