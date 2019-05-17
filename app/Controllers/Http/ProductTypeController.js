'use strict'
const ProductType = use('App/Models/ProductType');
const CustomException = use('App/Exceptions/CustomException')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with producttypes
 */
class ProductTypeController {
  /**
   * Show a list of all producttypes.
   * GET producttypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let productTypes 
    if(request.get().type == 'header') {
      productTypes = await ProductType.query().with('productTypes').fetch()
    } else {
      productTypes = await ProductType.query().fetch()
    }
    
    return response.json(productTypes)
  }

  /**
   * Render a form to be used for creating a new producttype.
   * GET producttypes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new producttype.
   * POST producttypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    // const name = request.input('name')
    // const description = request.input('description')
    // const title1 = request.input('title1')
    // const title2 = request.input('title2')
    // const url = request.input('url')
    // const product_type_id = request.input('product_type_id')

    const body = request.post()

    const productType = new ProductType()
    productType.fill(body)
    await productType.save()
    return response.json(productType)
  }

  /**
   * Display a single producttype.
   * GET producttypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing producttype.
   * GET producttypes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update producttype details.
   * PUT or PATCH producttypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const body = request.post()
    let productType = await ProductType.find(params.id)
    if(!productType)
      throw new CustomException(`ProductType with id = ${params.id} is not found`, 404, 'E_NOT_FOUND')
    productType.merge(body)
    await productType.save()
    return response.json(productType)
  }

  /**
   * Delete a producttype with id.
   * DELETE producttypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const productType = await ProductType.find(params.id)
    if(!productType)
      throw new CustomException(`ProductType with id = ${params.id} is not found`, 404, 'E_NOT_FOUND')
    await productType.delete()
    return response.send({message: `${productType.id} is deleted`})
  }
}

module.exports = ProductTypeController
