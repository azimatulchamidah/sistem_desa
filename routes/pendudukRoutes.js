const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const PendudukController = require('../controllers/pendudukController');

// Route yang memerlukan akses admin
router.post('/', authenticateToken(['admin']), PendudukController.createPenduduk);

// Route yang dapat diakses oleh admin dan user
router.get('/', authenticateToken(['admin', 'user']), PendudukController.getPenduduks);
router.get('/:id', authenticateToken(['admin', 'user']), PendudukController.getPendudukById);
router.put('/:id', authenticateToken(['admin']), PendudukController.updatePenduduk);
router.delete('/:id', authenticateToken(['admin']), PendudukController.deletePenduduk);

module.exports = router;
