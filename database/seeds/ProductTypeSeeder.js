'use strict'

/*
|--------------------------------------------------------------------------
| ProductTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const productTypes = [
  {
    "id": 1,
    "name": "Jeans",
    "description": "Jeans",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  },
  {
    "id": 2,
    "name": "Shirts",
    "description": "Shirts",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/header3.jpg"
  },
  {
    "id": 3,
    "name": "Jackets",
    "description": "Jackets",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/header2.jpg"
  },
  {
    "id": 4,
    "name": "Gymwear",
    "description": "Gymwear",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/header3.jpg"
  },
  {
    "id": 5,
    "name": "Blazers",
    "description": "Blazers",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/header2.jpg"
  },
  {
    "id": 6,
    "name": "Shoes",
    "description": "Shoes",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/header3.jpg"
  },
  {
    "id": 7,
    "name": "Dresses",
    "description": "Dresses",
    "product_type_id": null,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/header2.jpg"
  },
  {
    "id": 8,
    "name": "Skinny",
    "description": "Skinny Jeans",
    "product_type_id": 1,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  },
  {
    "id": 9,
    "name": "Relaxed",
    "description": "Relaxed Jeans",
    "product_type_id": 1,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  },
  {
    "id": 10,
    "name": "Bootcut",
    "description": "Bootcut Jeans",
    "product_type_id": 1,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  },
  {
    "id": 11,
    "name": "Straight",
    "description": "Straight Jeans",
    "product_type_id": 1,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  },
  {
    "id": 12,
    "name": "T-Shirt",
    "description": "T-Shirt",
    "product_type_id": 2,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  },
  {
    "id": 13,
    "name": "Graphic-T-Shirt",
    "description": "Graphic-T-Shirt",
    "product_type_id": 2,
    "title1": "New arrivals",
    "title2": "COLLECTION 2019",
    "url": "assets/images/jeans.jpg"
  }
]
const Database = use('Database')

class ProductTypeSeeder {
  async run () {
    const product_types = await Database.table('product_types')
    if(product_types.length === 0) {
      // In the case of bulk inserts, the id of the first record is returned, and it is more of a limitation with MYSQL itself. LAST_INSERT_ID.
      const lastProductTypeId = await Database
        .from('product_types')
        .insert(productTypes)
      console.log('init product_types table::::', lastProductTypeId)
    } else {
      console.log(product_types);
    }
  }
}

module.exports = ProductTypeSeeder
