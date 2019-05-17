'use strict'
const User = use('App/Models/User')
const CustomException = use('App/Exceptions/CustomException')
const Env = use('Env')
const Mail = use('Mail')

class UserController {

    /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response, auth }) {
        const data = request.only(['fullname', 'username', 'password'])
        const user = await User.create(data)
        const authData = await auth.generate(user, true)

        Mail.send('emails.welcome', user.toJSON(), (message) => {
            message
              .to(user.email)
              .from(Env.get('MAIL_USERNAME'), 'TP-Shop')
              .subject('Welcome to TP-Shop')
        })

        return response.send({username: user.username,
             email: user.email, token: authData.token})
    }

    async login ({ auth, request, response }) {
        const { email, password } = request.all()
        let data = await auth.attempt(email, password, true)
        const user = await User.query()
            .where('email', email)
            .select(['username', 'email'])
            .first()
        user.token = data.token
        return response.send(user)
    }

    async logout({ auth, request, response }){
        return await auth.logout()
    }

    async index ({ auth, request, response }) {
        const users = await User.query()
            .fetch()
        return response.send(users)
    }

    async delete ({ auth, request, response, params }) {
        const { id } = params
        const user = await User.find(id)

        await user.delete()
        return response.send({message: `user with id ${id} has been deleted`})
    }

    async show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return "You cannot see someone else's profile"
        }
        return auth.user
    }
}

module.exports = UserController
