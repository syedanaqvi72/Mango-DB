//db.collection.deleteOne()    ====   Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.
//db.collection.deleteMany()     =====  Delete all documents that match a specified filter.
//db.collection.remove()   ====Delete a single document or all documents that match a specified filter.



db.inventory.insertMany( [
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
 ] );
db.inventory.deleteMany({})
// use above command carefully because it delate all data


//Delete only those that matches the condition
db.inventory.deleteMany({ status : "A" })

//delete only one that matches the condition
db.inventory.deleteOne( { status: "D" } )