'use strict'
const Product = use('App/Models/Product')
const Database = use('Database')
const CustomException = use('App/Exceptions/CustomException')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const queries = request.get();
    const limit = queries._limit ? parseInt(queries._limit) : 8;
    const page = queries._page ? parseInt(queries._page) : 1;
    console.log('queries:::::::::', queries);
    let data = await Database
                  .from('products')
                  .where(builder => {
                    if(queries.product_type_id)
                      builder.where('product_type_id', queries.product_type_id)
                    if(queries.name_like)
                      builder.where('name', 'LIKE', '%' + queries.name_like + '%')
                    if(queries.id_ne)
                      builder.where('id', '<>', queries.id_ne)
                    if(queries.state_ne)
                      builder.where('state', '<>', queries.state_ne)
                  })
                  .orderBy(queries._sort || 'id', queries._order || 'desc')
                  .paginate(page, limit)
    
    data.data.map(p => {
      p.images = p.images ? p.images.split(';') : p.images
      p.state = parseInt(p.state)
      return p;
    })

    return response.send(queries.id_ne ? data.data : data)
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const body = request.post()
    let product = new Product()
    product.fill(body)
    // product.images = body.images.join(';')
    await product.save()
    return response.json(product)
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let product = await Product.find(params.id)
    if(!product)
      throw new CustomException(`Product with id = ${params.id} is not found`, 404, 'E_NOT_FOUND')

    product.state = parseInt(product.state)
    return response.json(product)
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const body = request.post()
    let product = await Product.find(params.id);
    // console.log('product: ',product)
    if(!product)
      throw new CustomException(`Product with id = ${params.id} is not found`, 404, 'E_NOT_FOUND')
    product.merge(body)
    // product.images = body.images.join(';')
    console.log('product:::::',product)
    await product.save()

    return response.json(product)
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const product = await Product.find(params.id)
    if(!product)
      throw new CustomException(`Product with id = ${params.id} is not found`, 404, 'E_NOT_FOUND')
    await product.delete()
    return response.send({message: `${product.id} is deleted`})
  }
}

module.exports = ProductController
