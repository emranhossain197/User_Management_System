const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const route = require('./server/router/router')
const AdminRoute = require('./server/router/adminRouter')
const userRoute = require('./server/router/userRoute')
const dotenv = require('dotenv')
const connectDB = require('./server/database/index')

const app = express();
const user = express()
const admin = express()
const PORT = 3000;
dotenv.config({ path: "config.env" })


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())



// server connnection 
connectDB()

// set view engine
app.set("view engine", "ejs")

// load request 
user.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
user.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

app.use('/', route)
app.use('/user', user)
user.use('/', userRoute)
app.use('/admin', admin)
admin.use("/", AdminRoute)


// server runing 
app.listen(PORT, () => {
    console.log(`server runing is port of the ${PORT}`);
})

