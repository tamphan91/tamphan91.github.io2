'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const products = [
  {
    "name": "Print Graphic Tee",
    "price": 24.95,
    "sale": null,
    "url": "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_prod2?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_model3?$product-ofp-hol-v1$"
    ],
    "product_type_id": 13,
    "state": 3,
    "details": "<p>A soft, cotton-blend tee with logo and photo print graphics, featuring a crewneck and long sleeves. Classic Fit. Imported</p><p>Model is 6'1\" wearing Size M</p>",
    "materialAndCare": "<ul><li>51% Cotton, 49% Polyester</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron on reverse side</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Advanced Stretch Skinny Jeans",
    "price": 69.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model4?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model3?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch jeans. Every way you move, so do they. Updated with a slimmer ankle, designed with a slim fit through the hip and thigh with a 13\" leg opening. Featuring ripped light wash denim and right coin pocket Imported</p><p></p>",
    "materialAndCare": "<ul><li>76% Cotton, 21% Polyester, 3% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Extreme Stretch Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model4?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch jeans. Every way you move, so do they. Updated with a slimmer ankle, designed with a slim fit through the hip and thigh with a 13\" leg opening. Featuring ripped light wash denim and right coin pocket Imported</p><p></p>",
    "materialAndCare": "<ul><li>76% Cotton, 21% Polyester, 3% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Extreme Stretch Extreme Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model4?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch. Every way you move, so do they. Designed in our slimmest fit, these ripped black jeans feature five-pocket styling and iconic back pocket embroidery Imported</p><p>Model is 5'11\" wearing Size 31</p>",
    "materialAndCare": "<ul><li>74% Cotton, 21% Polyester, 5% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Advanced Stretch Stacked Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 8,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_life2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model3?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>We added a few inches in length to our skinny fit, allowing the denim to stack above the ankle. Featuring ripped Advanced Stretch denim in a light medium wash, fading and whiskering, five-pocket styling and iconic back pocket embroidery Imported</p><p>Model is 5'11\" wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>63% Cotton, 21% Modal, 15% Lyocell, 1% Elastane</li><li>To avoid color transfer, wash before wear, turn garment inside out</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Faux-Fur-Lined Parka",
    "price": 160,
    "sale": 79.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod3?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod2?$product-hol-v1$&wid=800&hei=1000"
    ],
    "state": 2,
    "details": "<p>A warm parka made with water and wind resistant fabric and soft, plush, faux fur lining. Featuring a hood with removable faux fur trim, mockneck collar with interior logo tape, zip front closure with logo taping, logo at left arm, chest pockets, fleece-lined dual-entry utility pockets, interior pocket and neoprene storm cuffs Imported</p><p>Model is 5'11\" wearing Size M</p>",
    "materialAndCare": "<ul><li>Body And Lining:100% Polyester</li><li>Filling:100% Polyester Fibers</li><li>Faux Fur Lining:100% Polyester</li><li>Faux Fur Trim:86% Modacrylic, 14% Polyester</li><li>Remove faux fur hood trim before wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not iron faux fur, do not dry clean</li></ul>"
  },
  {
    "name": "Down-Blend Parka",
    "price": 220,
    "sale": 129.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod2?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model4?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>A warm parka designed with our luxe faux fur lining in the hood. Featuring water and wind resistant fabric, at least 32% responsibly sourced 90/10 down/feather fill, a hood with removable faux fur trim, zip front closure with logo tape, zip chest pockets, logo patch and zip pocket at left arm, utility pockets and neoprene storm cuffs with adjustable tab Imported</p><p>Model is 5'11\" wearing Size M</p>",
    "materialAndCare": "<ul><li>Body And Sleeve Lining:100% Polyester</li><li>Shell:100% Polyester</li><li>Collar, Placket And Pocket Filling:100% Polyester Fibers</li><li>Faux Fur Lining:100% Polyester</li><li>Faux Fur Trim:86% Modacrylic, 14% Polyester</li><li>Hood Filling:100% Polyester Fibers</li><li>Body Filling:90% Grey Duck Down, 10% Grey Duck Feathers</li><li>Sleeve Filling:90% Grey Duck Down, 10% Grey Duck Feathers</li><li>Body Filling 2:100% Polyester Fibers</li><li>Sleeve Filling 2:100% Polyester Fibers</li><li>Remove faux fur hood trim before wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not iron faux fur, do not dry clean</li></ul>"
  },
  {
    "name": "Stretch Slim Fit Polo",
    "price": 24.95,
    "sale": 14.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 12,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model3?$product-ofp-hol-v1$",
      "",
      ""
    ],
    "state": 2,
    "details": "<p>A soft knit polo made with Hollister Epic Flex stretch, featuring a slightly shrunken collar, covered placket, icon at left chest and side hem vents, Slim Fit Imported</p>\n<p>Model is 5'11\" wearing Size 31x32 </p>",
    "materialAndCare": "<ul><li>59% Cotton, 39% Polyester, 2% Elastane</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Iceberg T-Shirt and Polo4",
    "price": 15.99,
    "sale": 13.99,
    "url": "assets/images/shirts1.jpg",
    "product_type_id": 12,
    "images": [
      "assets/images/shirts1.jpg",
      "assets/images/shirts2.jpg",
      "assets/images/shirts3.jpg",
      "assets/images/shirts1.jpg",
      "assets/images/shirts2.jpg",
      "assets/images/shirts3.jpg"
    ],
    "state": 2,
    "details": "<p>Our skinniest fit through the hip & thigh with an 11.5\" leg opening, these black jeans feature Advanced Stretch, five-pocket styling and iconic back pocket embroidery Imported\n</br></br>\nModel is 5'11\" wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>63% Cotton, 21% Modal, 15% Lyocell, 1% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li>  <li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hooded Denim Jacket",
    "price": 89.95,
    "sale": null,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model3?$product-ofp-hol-v1$"
    ],
    "state": 3,
    "details": "<p>A ripped denim jacket made with a soft fleece hood. Featuring a light wash, repair detailing, chest utility pockets and side welt pockets. Imported</p>\n<p>\nModel is 6'0 wearing Size 31x32\n</p>",
    "materialAndCare": "<ul><li>98% Cotton, 2% Elastane</li><li>Hood Lining:60% Cotton, 40% Polyester</li><li>Hood:54% Cotton, 46% Polyester</li><li>Abrasive wash, turn garment inside out, wash before wear</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Epic Flex Super Skinny Jeans",
    "price": 49.95,
    "sale": 39.95,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 8,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model4?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>Designed with a super skinny fit through the hip and thigh with an 11\" leg opening. Featuring white stretch denim and right coin pocket. Imported</p>\n<p>Model is 6'0 wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>99% Cotton, 1% Elastane</li><li>Abrasive wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Print Graphic Tee",
    "price": 24.95,
    "sale": null,
    "url": "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_prod2?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_323-8413-2501-800_model3?$product-ofp-hol-v1$"
    ],
    "product_type_id": 13,
    "state": 3,
    "details": "<p>A soft, cotton-blend tee with logo and photo print graphics, featuring a crewneck and long sleeves. Classic Fit. Imported</p><p>Model is 6'1\" wearing Size M</p>",
    "materialAndCare": "<ul><li>51% Cotton, 49% Polyester</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron on reverse side</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Advanced Stretch Skinny Jeans",
    "price": 69.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model4?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model3?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch jeans. Every way you move, so do they. Updated with a slimmer ankle, designed with a slim fit through the hip and thigh with a 13\" leg opening. Featuring ripped light wash denim and right coin pocket Imported</p><p></p>",
    "materialAndCare": "<ul><li>76% Cotton, 21% Polyester, 3% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Extreme Stretch Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model4?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch jeans. Every way you move, so do they. Updated with a slimmer ankle, designed with a slim fit through the hip and thigh with a 13\" leg opening. Featuring ripped light wash denim and right coin pocket Imported</p><p></p>",
    "materialAndCare": "<ul><li>76% Cotton, 21% Polyester, 3% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Extreme Stretch Extreme Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model4?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model1?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch. Every way you move, so do they. Designed in our slimmest fit, these ripped black jeans feature five-pocket styling and iconic back pocket embroidery Imported</p><p>Model is 5'11\" wearing Size 31</p>",
    "materialAndCare": "<ul><li>74% Cotton, 21% Polyester, 5% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Advanced Stretch Stacked Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 8,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_life2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model3?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>We added a few inches in length to our skinny fit, allowing the denim to stack above the ankle. Featuring ripped Advanced Stretch denim in a light medium wash, fading and whiskering, five-pocket styling and iconic back pocket embroidery Imported</p><p>Model is 5'11\" wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>63% Cotton, 21% Modal, 15% Lyocell, 1% Elastane</li><li>To avoid color transfer, wash before wear, turn garment inside out</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Faux-Fur-Lined Parka",
    "price": 160,
    "sale": 79.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod3?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod2?$product-hol-v1$&wid=800&hei=1000"
    ],
    "state": 2,
    "details": "<p>A warm parka made with water and wind resistant fabric and soft, plush, faux fur lining. Featuring a hood with removable faux fur trim, mockneck collar with interior logo tape, zip front closure with logo taping, logo at left arm, chest pockets, fleece-lined dual-entry utility pockets, interior pocket and neoprene storm cuffs Imported</p><p>Model is 5'11\" wearing Size M</p>",
    "materialAndCare": "<ul><li>Body And Lining:100% Polyester</li><li>Filling:100% Polyester Fibers</li><li>Faux Fur Lining:100% Polyester</li><li>Faux Fur Trim:86% Modacrylic, 14% Polyester</li><li>Remove faux fur hood trim before wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not iron faux fur, do not dry clean</li></ul>"
  },
  {
    "name": "Down-Blend Parka",
    "price": 220,
    "sale": 129.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod2?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model4?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>A warm parka designed with our luxe faux fur lining in the hood. Featuring water and wind resistant fabric, at least 32% responsibly sourced 90/10 down/feather fill, a hood with removable faux fur trim, zip front closure with logo tape, zip chest pockets, logo patch and zip pocket at left arm, utility pockets and neoprene storm cuffs with adjustable tab Imported</p><p>Model is 5'11\" wearing Size M</p>",
    "materialAndCare": "<ul><li>Body And Sleeve Lining:100% Polyester</li><li>Shell:100% Polyester</li><li>Collar, Placket And Pocket Filling:100% Polyester Fibers</li><li>Faux Fur Lining:100% Polyester</li><li>Faux Fur Trim:86% Modacrylic, 14% Polyester</li><li>Hood Filling:100% Polyester Fibers</li><li>Body Filling:90% Grey Duck Down, 10% Grey Duck Feathers</li><li>Sleeve Filling:90% Grey Duck Down, 10% Grey Duck Feathers</li><li>Body Filling 2:100% Polyester Fibers</li><li>Sleeve Filling 2:100% Polyester Fibers</li><li>Remove faux fur hood trim before wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not iron faux fur, do not dry clean</li></ul>"
  },
  {
    "name": "Stretch Slim Fit Polo",
    "price": 24.95,
    "sale": 14.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 12,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model3?$product-ofp-hol-v1$",
      "",
      ""
    ],
    "state": 2,
    "details": "<p>A soft knit polo made with Hollister Epic Flex stretch, featuring a slightly shrunken collar, covered placket, icon at left chest and side hem vents, Slim Fit Imported</p>\n<p>Model is 5'11\" wearing Size 31x32 </p>",
    "materialAndCare": "<ul><li>59% Cotton, 39% Polyester, 2% Elastane</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Iceberg T-Shirt and Polo4",
    "price": 15.99,
    "sale": 13.99,
    "url": "assets/images/shirts1.jpg",
    "product_type_id": 12,
    "images": [
      "assets/images/shirts1.jpg",
      "assets/images/shirts2.jpg",
      "assets/images/shirts3.jpg",
      "assets/images/shirts1.jpg",
      "assets/images/shirts2.jpg",
      "assets/images/shirts3.jpg"
    ],
    "state": 2,
    "details": "<p>Our skinniest fit through the hip & thigh with an 11.5\" leg opening, these black jeans feature Advanced Stretch, five-pocket styling and iconic back pocket embroidery Imported\n</br></br>\nModel is 5'11\" wearing Size 31x32</p>",
    "materialAndCare": "<ul>\n  <li>63% Cotton, 21% Modal, 15% Lyocell, 1% Elastane</li>\n  <li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li>\n  <li>Machine wash cold, with like colors</li>\n  <li>Do not bleach</li>\n  <li>Tumble dry low</li>\n  <li>Warm iron if needed</li>\n  <li>Do not dry clean</li>\n</ul>"
  },
  {
    "name": "Hooded Denim Jacket",
    "price": 89.95,
    "sale": null,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model3?$product-ofp-hol-v1$"
    ],
    "state": 3,
    "details": "<p>A ripped denim jacket made with a soft fleece hood. Featuring a light wash, repair detailing, chest utility pockets and side welt pockets. Imported</p>\n<p>\nModel is 6'0 wearing Size 31x32\n</p>",
    "materialAndCare": "<ul><li>98% Cotton, 2% Elastane</li><li>Hood Lining:60% Cotton, 40% Polyester</li><li>Hood:54% Cotton, 46% Polyester</li><li>Abrasive wash, turn garment inside out, wash before wear</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Epic Flex Super Skinny Jeans",
    "price": 49.95,
    "sale": 39.95,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 8,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model4?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>Designed with a super skinny fit through the hip and thigh with an 11\" leg opening. Featuring white stretch denim and right coin pocket. Imported</p>\n<p>Model is 6'0 wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>99% Cotton, 1% Elastane</li><li>Abrasive wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Advanced Stretch Skinny Jeans",
    "price": 69.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model4?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-9021-1827-278_model3?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch jeans. Every way you move, so do they. Updated with a slimmer ankle, designed with a slim fit through the hip and thigh with a 13\" leg opening. Featuring ripped light wash denim and right coin pocket Imported</p><p></p>",
    "materialAndCare": "<ul><li>76% Cotton, 21% Polyester, 3% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Extreme Stretch Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8053-1734-281_model4?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch jeans. Every way you move, so do they. Updated with a slimmer ankle, designed with a slim fit through the hip and thigh with a 13\" leg opening. Featuring ripped light wash denim and right coin pocket Imported</p><p></p>",
    "materialAndCare": "<ul><li>76% Cotton, 21% Polyester, 3% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Extreme Stretch Extreme Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_prod1?$product-hol-v1$&wid=800&hei=1000",
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8715-1732-976_model4?$product-ofp-hol-v1$"
    ],
    "product_type_id": 8,
    "state": 2,
    "details": "<p>Hollister Extreme Stretch. Every way you move, so do they. Designed in our slimmest fit, these ripped black jeans feature five-pocket styling and iconic back pocket embroidery Imported</p><p>Model is 5'11\" wearing Size 31</p>",
    "materialAndCare": "<ul><li>74% Cotton, 21% Polyester, 5% Elastane</li><li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Advanced Stretch Stacked Skinny Jeans",
    "price": 59.95,
    "sale": 21.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 8,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_life2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8041-1676-279_model3?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>We added a few inches in length to our skinny fit, allowing the denim to stack above the ankle. Featuring ripped Advanced Stretch denim in a light medium wash, fading and whiskering, five-pocket styling and iconic back pocket embroidery Imported</p><p>Model is 5'11\" wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>63% Cotton, 21% Modal, 15% Lyocell, 1% Elastane</li><li>To avoid color transfer, wash before wear, turn garment inside out</li><li>Machine wash cold, with like colors</li><li>Do not bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Faux-Fur-Lined Parka",
    "price": 160,
    "sale": 79.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod3?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_life1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8440-0375-102_prod2?$product-hol-v1$&wid=800&hei=1000"
    ],
    "state": 2,
    "details": "<p>A warm parka made with water and wind resistant fabric and soft, plush, faux fur lining. Featuring a hood with removable faux fur trim, mockneck collar with interior logo tape, zip front closure with logo taping, logo at left arm, chest pockets, fleece-lined dual-entry utility pockets, interior pocket and neoprene storm cuffs Imported</p><p>Model is 5'11\" wearing Size M</p>",
    "materialAndCare": "<ul><li>Body And Lining:100% Polyester</li><li>Filling:100% Polyester Fibers</li><li>Faux Fur Lining:100% Polyester</li><li>Faux Fur Trim:86% Modacrylic, 14% Polyester</li><li>Remove faux fur hood trim before wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not iron faux fur, do not dry clean</li></ul>"
  },
  {
    "name": "Down-Blend Parka",
    "price": 220,
    "sale": 129.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_prod2?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-8445-0400-332_model4?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>A warm parka designed with our luxe faux fur lining in the hood. Featuring water and wind resistant fabric, at least 32% responsibly sourced 90/10 down/feather fill, a hood with removable faux fur trim, zip front closure with logo tape, zip chest pockets, logo patch and zip pocket at left arm, utility pockets and neoprene storm cuffs with adjustable tab Imported</p><p>Model is 5'11\" wearing Size M</p>",
    "materialAndCare": "<ul><li>Body And Sleeve Lining:100% Polyester</li><li>Shell:100% Polyester</li><li>Collar, Placket And Pocket Filling:100% Polyester Fibers</li><li>Faux Fur Lining:100% Polyester</li><li>Faux Fur Trim:86% Modacrylic, 14% Polyester</li><li>Hood Filling:100% Polyester Fibers</li><li>Body Filling:90% Grey Duck Down, 10% Grey Duck Feathers</li><li>Sleeve Filling:90% Grey Duck Down, 10% Grey Duck Feathers</li><li>Body Filling 2:100% Polyester Fibers</li><li>Sleeve Filling 2:100% Polyester Fibers</li><li>Remove faux fur hood trim before wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not iron faux fur, do not dry clean</li></ul>"
  },
  {
    "name": "Stretch Slim Fit Polo",
    "price": 24.95,
    "sale": 14.99,
    "url": "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 12,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_324-8512-0336-112_model3?$product-ofp-hol-v1$",
      "",
      ""
    ],
    "state": 2,
    "details": "<p>A soft knit polo made with Hollister Epic Flex stretch, featuring a slightly shrunken collar, covered placket, icon at left chest and side hem vents, Slim Fit Imported</p>\n<p>Model is 5'11\" wearing Size 31x32 </p>",
    "materialAndCare": "<ul><li>59% Cotton, 39% Polyester, 2% Elastane</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Iceberg T-Shirt and Polo4",
    "price": 15.99,
    "sale": 13.99,
    "url": "assets/images/shirts1.jpg",
    "product_type_id": 12,
    "images": [
      "assets/images/shirts1.jpg",
      "assets/images/shirts2.jpg",
      "assets/images/shirts3.jpg",
      "assets/images/shirts1.jpg",
      "assets/images/shirts2.jpg",
      "assets/images/shirts3.jpg"
    ],
    "state": 2,
    "details": "<p>Our skinniest fit through the hip & thigh with an 11.5\" leg opening, these black jeans feature Advanced Stretch, five-pocket styling and iconic back pocket embroidery Imported\n</br></br>\nModel is 5'11\" wearing Size 31x32</p>",
    "materialAndCare": "<ul>\n  <li>63% Cotton, 21% Modal, 15% Lyocell, 1% Elastane</li>\n  <li>Abrasive wash, turn garment inside out, wash before wear, to avoid color transfer</li>\n  <li>Machine wash cold, with like colors</li>\n  <li>Do not bleach</li>\n  <li>Tumble dry low</li>\n  <li>Warm iron if needed</li>\n  <li>Do not dry clean</li>\n</ul>"
  },
  {
    "name": "Hooded Denim Jacket",
    "price": 89.95,
    "sale": null,
    "url": "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 3,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_332-9020-1026-296_model3?$product-ofp-hol-v1$"
    ],
    "state": 3,
    "details": "<p>A ripped denim jacket made with a soft fleece hood. Featuring a light wash, repair detailing, chest utility pockets and side welt pockets. Imported</p>\n<p>\nModel is 6'0 wearing Size 31x32\n</p>",
    "materialAndCare": "<ul><li>98% Cotton, 2% Elastane</li><li>Hood Lining:60% Cotton, 40% Polyester</li><li>Hood:54% Cotton, 46% Polyester</li><li>Abrasive wash, turn garment inside out, wash before wear</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Low iron if needed</li><li>Do not dry clean</li></ul>"
  },
  {
    "name": "Hollister Epic Flex Super Skinny Jeans",
    "price": 49.95,
    "sale": 39.95,
    "url": "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_prod1?$product-hol-v1$&wid=800&hei=1000",
    "product_type_id": 8,
    "images": [
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_prod1?$product-hol-v1$&wid=800&hei=1000",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model1?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model2?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model3?$product-ofp-hol-v1$",
      "https://anf.scene7.com/is/image/anf/KIC_331-8438-1774-175_model4?$product-ofp-hol-v1$"
    ],
    "state": 2,
    "details": "<p>Designed with a super skinny fit through the hip and thigh with an 11\" leg opening. Featuring white stretch denim and right coin pocket. Imported</p>\n<p>Model is 6'0 wearing Size 31x32</p>",
    "materialAndCare": "<ul><li>99% Cotton, 1% Elastane</li><li>Abrasive wash</li><li>Machine wash cold, with like colors</li><li>Only non-chlorine bleach</li><li>Tumble dry low</li><li>Warm iron if needed</li><li>Do not dry clean</li></ul>"
  }
]

const Database = use('Database')

class ProductSeeder {
  async run () {
    const pros = await Database.table('products')
    if(pros.length === 0) {

      products.map(p => {
        p.images = p.images.join(";");
        return p;
      })
      // In the case of bulk inserts, the id of the first record is returned, and it is more of a limitation with MYSQL itself. LAST_INSERT_ID.
      const lastProductId = await Database
        .from('products')
        .insert(products)
      console.log('init products table::::', lastProductId)
    } else {
      console.log(pros);
    }
  }
}

module.exports = ProductSeeder
