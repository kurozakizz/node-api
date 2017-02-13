'use strict'

var express = require('express')
var controller = require('./things.controller')
// import * as auth from '../../auth/auth.service'

var router = express.Router()
router.get('/', controller.index)

module.exports = router
