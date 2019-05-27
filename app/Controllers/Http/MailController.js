'use strict'
const Mail = use('Mail')
const Env = use('Env')
const collect = require('collect.js')

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
                .from(Env.get('MAIL_USERNAME'), 'TAPHA')
                .subject("Congratulations - you're a subscriber to TAPHA")
        })

        return response.send({message:'subscribing successfully!!!'})
    }

    async checkout({request, response}) {
        const data = request.only(['customer'])

        let collection = collect(data.customer.items)
        data.customer.subTotal = Math.ceil(collection.sum(function (item) {
            return (item.sale || item.price)*item.quantity;
          }));

        console.log('data:::::::::::::', data.customer)
        
        await Mail.send('emails.checkout', data.customer, (message) => {
            message
                .to(data.customer.email)
                .from(Env.get('MAIL_USERNAME'), 'TAPHA')
                .subject('THANK YOU FOR YOUR ORDER')
        })
        
        return response.send({message:'checkout successfully!!!'})
    }

    async test({request, response}){
        return response.send({message: 'testing successfully!!!'})
    }
}

module.exports = MailController