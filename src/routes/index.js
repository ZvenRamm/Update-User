require("express")

const main = require ("../components/main/network")
const users = require ("../components/users/network")
const allRoutes = require ("../utils/constants/Routes.json")
     
const routes = server => {

    server.use(allRoutes.main, main ),
    server.use(allRoutes.users, user)
}

module.exports = routes;