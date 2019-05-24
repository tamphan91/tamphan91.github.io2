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
        const data = request.only(['firstname', 'lastname', 'email', 'password'])
        const user = await User.create(data)
        const authData = await auth.generate(user, true)

        Mail.send('emails.welcome', user.toJSON(), (message) => {
            message
              .to(user.email)
              .from(Env.get('MAIL_USERNAME'), 'TAPHA')
              .subject('Welcome to TAPHA')
        })

        return response.send({email: user.email,
             token: authData.token, firstname: user.firstname, lastname: user.lastname})
    }

    async login ({ auth, request, response }) {
        const { email, password } = request.all()
        let data = await auth.attempt(email, password, true)
        console.log('data', auth);
        const user = await User.query()
            .where('email', email)
            .select(['email', 'firstname', 'lastname'])
            .first()
        user.token = data.token
        return response.send(user)
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
