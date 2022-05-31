const express = require('express');

const router = express.Router();

const authenticatedMiddleware = require('../middleware/auth')

const {
    login,
    dashboard
} = require('../controllers/main');

router.route('/dashboard').get(authenticatedMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router;