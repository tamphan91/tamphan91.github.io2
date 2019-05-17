'use strict'

class StoreProduct {
  // get validateAll () {
  //   return true
  // }
  get rules () {
    return {
      name: 'required',
      price: 'required',
      url: 'required',
      images: 'required',
      state: 'required',
      details: 'required',
      materialAndCare: 'required',
      product_type_id: 'required'
    }
  }

  // get messages () {
  //   return {
  //     'name.required': 'Name is required',
  //     'price.required': 'Price is required',
  //     'sale.required': 'Sale is required',
  //     'url.required': 'Url is required',
  //     'images.required': 'Images is required',
  //     'state.required': 'State is required',
  //     'details.required': 'Details is required',
  //     'materialAndCare.required': 'MaterialAndCare is required',
  //   }
  // }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreProduct
