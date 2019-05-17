'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// For a resourceful route
// Route
// .resource('products', 'ProductController')
// .validator(new Map([
//     [['products.store'], ['StoreProduct']],
//     [['products.update'], ['StoreProduct']]
// ]))

Route.group(() => {
    // ProductType
    Route.put('/productTypes/:id', 'ProductTypeController.update').middleware('auth')
    Route.post('/productTypes', 'ProductTypeController.store').middleware('auth')
    Route.get('/productTypes', 'ProductTypeController.index')
    Route.delete('/productTypes/:id', 'ProductTypeController.destroy').middleware('auth')

    // Product
    Route.put('/products/:id', 'ProductController.update').middleware('auth')
    Route.post('/products', 'ProductController.store').validator('StoreProduct').middleware('auth')
    Route.get('/products', 'ProductController.index')
    Route.get('/products/:id', 'ProductController.show')
    Route.delete('/products/:id', 'ProductController.destroy').middleware('auth')

    // User
    Route.get('/users', 'UserController.index')
    Route.post('/users', 'UserController.store')
    Route.delete('/users/:id', 'UserController.delete')
    Route.get('/users/:id', 'UserController.show').middleware('auth')
    Route.post('/login', 'UserController.login').middleware('guest')
    Route.get('/logout', 'UserController.logout').middleware('auth')

    // Mail
    Route.post('/mail/subscribe', 'MailController.subscribe')
    Route.post('/test', 'MailController.test')
    Route.get('/mail', 'MailController.index')
}).prefix('api')



