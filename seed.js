const inventory = require('./models/inventory.js')
const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = "mongodb://127.0.0.1:27017/Inventory"
const db = mongoose.connection
mongoose.connect(process.env.MONGO_URI)

inventory.create([
    {
        name:"Double Hooks",
        type: "Hook",
        partNum: "0001",
        quantity:200,
        image: "/https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-00723438.jpg"
    },
    {
        name:"Tie Hooks",
        type: "Hook",
        partNum: "0002",
        quantity:162,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-04189923.jpg"
    },
    {
        name:"Coat Hooks",
        type: "Hook",
        partNum: "0003",
        quantity:134,
        image: "https://cdn11.bigcommerce.com/s-cziwra/images/stencil/1280x1280/products/3926/25367/Default-min__94151.1612803598.jpg?c=2"
    },
    {
        name:"Waterfall Hooks",
        type: "Hook",
        partNum: "0004",
        quantity:112,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-00748822.jpg"
    },
    {
        name:"Belt Hooks",
        type: "Hook",
        partNum: "0005",
        quantity:148,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/huge/ppic-04195549.jpg"
    },{
        name: "Elite Handle",
        type: "Handle",
        partNum: "0006",
        quantity: 451,
        image: "https://dkstatic.blob.core.windows.net/images/1293568/300x300/ppic-04517398.jpg"
    },{
        name: "Standard Handle",
        type: "Handle",
        partNum: "0007",
        quantity: 345,
        image: "https://s3.img-b.com/image/private/t_base,c_lpad,f_auto,dpr_auto,w_1200,h_1200/product/hafele/hafele-116-07-438-776.jpg"
    },{
        name: "Traditional Handle",
        type: "Handle",
        partNum: "0008",
        quantity: 278,
        image: "https://dkstatic.blob.core.windows.net/images/1301925/500x500/ppic-04674681.jpg"
    },{
        name: "Stainless Steal Handle",
        type: "Handle",
        partNum: "0009",
        quantity: 116,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/default/ppic-04389143.jpg"
    },{
        name: "Standard Knobs",
        type: "Knob",
        partNum:"0010",
        quantity: 348,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/default/ppic-04426740.jpg"
    },{
        name: "Traditional Knobs",
        type: "Knob",
        partNum:"0011",
        quantity: 342,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/default/ppic-04640415.jpg"
    }, {
        name: "Elite Square Knobs",
        type: "Knob",
        partNum:"0012",
        quantity: 348,
        image: "https://www.cabinetparts.com/media/images/p/m/hafele-HAF11195000-7f7454b72f976.jpg"
    }, {
        name: "Crystal Square Knobs",
        type: "Knob",
        partNum:"0013",
        quantity: 348,
        image: "https://im-7.eefa.co/ha-133.50.123-s7.jpg"
    }, {
        name: "Crystal Round Knobs",
        type: "Knob",
        partNum:"0014",
        quantity: 348,
        image: "https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele/en_US/pim/images/default/ppic-04429100.jpg"
    }


]).then((inventory) => {
    console.log(inventory)
    db.close()
})