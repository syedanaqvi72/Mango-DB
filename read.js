db.invertory.find()// code for fetching all docuement
db.inventory.find({qty:150})

db.inventory.find({tags:{$in:["silver", "silk" ]}})
//ADD operator
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//OR operator
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )