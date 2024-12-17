const LOGIN = require('../ControllerPage/AuthController')

const authrouter=require('express').Router()
authrouter.post('/login',LOGIN)
module.exports=authrouter