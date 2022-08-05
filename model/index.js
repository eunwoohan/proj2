const { ObjectId } = require('fastify-mongodb')



module.exports = {
    // 전체 배송요청 목록 확인 
    readAllorder: async (mongo) => {
        const collection = mongo.db.collection('order')
        const result = await collection.find({}).toArray()
        return result
    },
    // 라이더 위치 업데이트 
    updateLocation: async (mongo,id,body) => {
        const collection = mongo.db.collection('courier')
        const result = await collection.findOneAndUpdate({_id: ObjectId(id)},{$set: body})     
        return result
    },
            
    /*
    배송요청 하나 읽어오기
    readOnedeliveries: async (mongo, id) => {
        const collection = mongo.db.collection('order')
        const result = await collection.findOne({_id: ObjectId(id)})
        return result
    },
    */
    // 배달 상태 업데이트                                                
    updateOrderStatus: async (mongo, id, body) => {
        const collection = mongo.db.collection('order')
        const result = await collection.findOneAndUpdate({_id: ObjectId(id)}, {$set: body})
        return result
    },
    // 배달 수락 업데이트
    updateOrderAccept: async (mongo, id, body) => {
        const collection = mongo.db.collection('order')
        const result = await collection.findOneAndUpdate({_id: ObjectId(id)}, {$set: body})
        return result
    },
    readOnecustomer : async(mongo,id) => {
        const collection = mongo.db.collection('customer')
        const result = await collection.findOne({_id: ObjectId(id)})
        return result
    },    
}
