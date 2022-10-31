
const express = require('express')
const adminRouteLib = require('../services/AdminService')
const controllers = require('../controllers/controller')
const route = express.Router()


route.get('/', adminRouteLib.HomeRoute)

route.get('/user',  adminRouteLib.UserProfile)

route.get("/update_userAdmin", adminRouteLib.userUpdate)


// Create Admin API

// route.get('/api/admin', controllers.FindUserAdmin)
route.delete('/api/admin', controllers.deleteUser)
route.put('/api/admin/:id', controllers.updateUser)

module.exports = route;