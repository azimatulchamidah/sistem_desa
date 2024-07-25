const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const aduanController = require('../controllers/aduanController');
const router = express.Router();

router.post('/',authenticateToken(['user']), aduanController.createAduan);
router.get('/', authenticateToken(['admin', 'user']),aduanController.getAduans);
router.get('/:id', authenticateToken(['admin', 'user']),aduanController.getAduanById);
router.put('/:id', authenticateToken(['admin', 'user']),aduanController.updateAduan);
router.delete('/:id', authenticateToken(['admin','user']),aduanController.deleteAduan);

module.exports = router;
