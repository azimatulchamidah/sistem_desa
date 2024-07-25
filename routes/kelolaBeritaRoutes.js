const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const kelolaBeritaController = require('../controllers/kelolaBeritaController');
const router = express.Router();

router.post('/', authenticateToken(['admin']),kelolaBeritaController.createKelolaBerita);
router.get('/', authenticateToken(['admin']),kelolaBeritaController.getKelolaBeritas);
router.get('/:id', authenticateToken(['admin']),kelolaBeritaController.getKelolaBeritaById);
router.put('/:id', authenticateToken(['admin']),kelolaBeritaController.updateKelolaBerita);
router.delete('/:id', authenticateToken(['admin']),kelolaBeritaController.deleteKelolaBerita);

module.exports = router;
