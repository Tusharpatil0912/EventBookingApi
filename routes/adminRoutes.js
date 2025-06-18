
const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/adminController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Route: GET /api/admin/dashboard
router.get('/dashboard', verifyToken, isAdmin, getDashboardData);

module.exports = router;
