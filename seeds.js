const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmersMarket', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTED!")
    })
    .catch(err => {
        console.log("OH NO! MONGO CONNECTION ERROR");
        console.log(err)
    })

// const p = new Product({
//     name: 'Decadent Grapefruit',
//     price: 0.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log('error')
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Schlong Aubergine',
        price: 0.89,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Virgin Goats Cheese',
        price: 5.99,
        category: 'dairy'
    }
]

//mongoose will have to verify all data before committing to an 'insertMany'
Product.insertMany(seedProducts)
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log('error')
        console.log(e)
    })