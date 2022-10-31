
const express = require('express')
const RouteMethod = require('../services/index')

const route = express.Router()


route.get('/', RouteMethod.HomeRoute)




module.exports = route;