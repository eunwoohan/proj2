'use strict'

const { readAllorder, readOnecustomer } = require('../../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const order = await readAllorder(this.mongo)
    let result = []

    for (const element of order) {
      const customer = await readOnecustomer(this.mongo, element['consumer_id'])
      let resultOne = {
        "_id": element['_id'],
        "source": element['restaurant'],
        "destination": {"address": customer['address']},
        "assignedCourier": element['deliveryInfo']['assignedCourier'],
        "status": element['deliveryInfo']['status']
      }
      result.push(resultOne)
    }
    reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
  })
}
