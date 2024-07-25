const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');


router.post('/',authenticateToken(['admin']), adminController.createAdmin);
router.get('/',authenticateToken(['admin']), adminController.getAdmins);
router.get('/:id', authenticateToken(['admin']),adminController.getAdminById);
router.put('/:id',authenticateToken(['admin']), adminController.updateAdmin);
router.delete('/:id',authenticateToken(['admin']),adminController.deleteAdmin);

module.exports = router;
