const { Router } = require('express')

const localLoginRouter = require('./login/localLoginRouter')

const router = Router()

router.use('/login', localLoginRouter)

module.exports = router