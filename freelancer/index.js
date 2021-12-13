const express= require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
var cors = require('cors')
// var app = express()
 
app.use(cors())
const users = require('./router/user')
const auth = require('./router/auth')
const Product = require('./router/Product')
const Project = require('./router/Project')
const Cart = require('./router/Cart')
const Order = require('./router/Order')
const Category = require('./router/Category')
const database = require('./database')


app.use(express.json());
app.get('/api/test', ()=>{
    console.log('Test Is Succefual');
})


app.use('/users', users)
app.use('/auth', auth)
app.use('/Products', Product)
app.use('/Cart', Cart)
app.use('/Order', Order)
app.use('/project',   Project)
app.use('/Category',   Category)



app.listen(5000,()=>{
    console.log('BackEnd Server Is Running Work In Port : 5000')
})