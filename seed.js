const inventory = require('./models/inventory.js')
const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = "mongodb://127.0.0.1:27017/Inventory"
const db = mongoose.connection
mongoose.connect(process.env.MONGO_URI)

inventory.create([
    {
        name:"Double Hooks",
        partNum: "0001",
        quantity:200,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-00723438.jpg"
    },
    {
        name:"Tie Hooks",
        partNum: "0002",
        quantity:162,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-04189923.jpg"
    },
    {
        name:"Coat Hooks",
        partNum: "0003",
        quantity:134,
        image: "https://cdn11.bigcommerce.com/s-cziwra/images/stencil/1280x1280/products/3926/25367/Default-min__94151.1612803598.jpg?c=2"
    },
    {
        name:"Waterfall Hooks",
        partNum: "0004",
        quantity:112,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-00748822.jpg"
    },
    {
        name:"Belt Hooks",
        partNum: "0005",
        quantity:148,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-04195549.jpg"
    }


]).then((inventory) => {
    console.log(inventory)
    db.close()
})