'use strict'

const { updateLocation } = require('../../../model')

module.exports = async function (app, opts) {
  app.put('/', async function (request, reply) {
    const result = await updateLocation(this.mongo,request.body)
    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
    reply
      .code(200)
      .header('Content-Type','application/json')
      .send({value : result})
    }
  })
}
