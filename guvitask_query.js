db.task.find()
db.task.find({$and:[{product_price:{$gt:400}},{product_price:{$lt:800}}]})
db.task.find({$or:[{product_price:{$lt:400}},{product_price:{$gt:600}}]})
db.task.find({product_price:{$gt:500}})
db.task.find({},{product_name:1, product_material:1})
db.task.find().limit(1).skip(9)
db.task.find({},{_id:0,product_name:1, product_material:1})
db.task.find({},{id:1,product_name:1,product_price:1,product_color:1,product_material:"soft"})
db.task.find({$or:[{product_price:492},{product_color:"indigo"}]})

    
