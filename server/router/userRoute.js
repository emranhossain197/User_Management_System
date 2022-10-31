
const express = require('express')
const userRouteLib = require('../services/userService')
const ControlRouteLib = require('../controllers/controller')
const route = express.Router()


route.get('/', userRouteLib.HomeRoute)
route.get('/setting', userRouteLib.SettingRoute)
route.get('/add_user', userRouteLib.AddUserRoute)
route.get('/update_user', userRouteLib.UpdateUserRoute)
route.get('/login', userRouteLib.Login)
route.get('/register', userRouteLib.Register)



// create API 

route.post("/api/user", ControlRouteLib.create)
route.get('/api/user', ControlRouteLib.findUser)
// route.get('/api/user/:phone', ControlRouteLib.findUser)
route.delete('/api/user', ControlRouteLib.deleteUser);
route.put('/api/user/:id', ControlRouteLib.updateUser)


module.exports = route;