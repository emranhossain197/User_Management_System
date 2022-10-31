const axios = require('axios')
const lib = {}

lib.HomeRoute = (req, res) => {
    res.send("Welcome to user router")
}

lib.SettingRoute = (req, res) => {
    res.send("Setting")
}

lib.AddUserRoute = (req, res) => {
    res.send("Add user")
}
lib.Login = (req, res) => {
    
    axios.get('http://localhost:3000/user/api/user')

    res.render('login')
}

lib.UpdateUserRoute = (req, res) => {
    res.send("Update user data")
}
lib.Register =  (req, res) => {
    res.render('register')
}


module.exports = lib;
