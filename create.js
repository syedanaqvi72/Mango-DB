db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
//run this command in shell / terminal to get started
 db.inventory.insertMany([
    { item: "canvas1", qty: 10, tags: ["silk"], size: { h: 27, w: 35, uom: "1cm" } },
        { item: "canvas2", qty: 200, tags: ["gold"], size: { h: 2, w: 32, uom: "7cm" } },
          { item: "canvas3", qty: 150, tags: ["silver"], size: { h: 20, w: 38, uom: "5cm" } },
            { item: "canvas4", qty: 70, tags: ["tin"], size: { h: 27, w: 37, uom: "8cm" } },
            { item: "canvas5", qty: 700, tags: ["iron"], size: { h: 28, w: 38, uom: "3cm" } },
      { item: "canvas6", qty: 400, tags: ["steel"], size: { h: 28, w: 35.5, uom: "0cm" } }
    ])