'use strict'
const Mail = use('Mail')
const Env = use('Env')

class MailController {

    async subscribe({request, response}) {
        // let data = request.all()
        // await Mail.raw(data.body, (message) => {
        //     message.from(Env.get('MAIL_USERNAME'))
        //     message.to(data.to)
        //     message.subject('THANK YOU FOR SUBSCRIBING')
        // })
        const data = request.only(['email'])
        await Mail.send('emails.subscribe', null, (message) => {
        message
            .to(data.email)
            .from(Env.get('MAIL_USERNAME'), 'TP-Shop')
            .subject('THANK YOU FOR SUBSCRIBING')
        })

        return response.send({message:'subscribing successfully!!!'})
    }

    async test({request, response}){
        return response.send({message: 'testing successfully!!!'})
    }
}

module.exports = MailController