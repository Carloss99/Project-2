const inventory = require('./models/inventory')

const mongoose = require('mongoose')

const mongoURI = "mongodb://127/0/0/1:27017/inventory"
const db = mongoose.connection
mongoose.connect(mongoURI)

inventory.create([
    {
        name:"Double Hooks",
        partNum: "0001",
        qty:200,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-00723438.jpg"
    },
    {
        name:"Tie Hooks",
        partNum: "0002",
        qty:162,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-04189923.jpg"
    },
    {
        name:"Coat Hooks",
        partNum: "0003",
        qty:134,
        image: "https://cdn11.bigcommerce.com/s-cziwra/images/stencil/1280x1280/products/3926/25367/Default-min__94151.1612803598.jpg?c=2"
    },
    {
        name:"Waterfall Hooks",
        partNum: "0004",
        qty:112,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-00748822.jpg"
    },

])