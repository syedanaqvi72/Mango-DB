//Building the data base

db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])

 db.inventory.finf().limit(1)
 // by running this code i can find only first one document

 db.inventory.finf().skips(1)
 //by runnig this code first one will be skipped

 db.inventory.finf().sort({qty:1})
 // by writting 1 it sort ascendingly and by writting -1 it sort decendingly
 //. sort is used alot in pagination 

 PageNo
  1 to 10
  db.blog.find().skip(0).limit(10)