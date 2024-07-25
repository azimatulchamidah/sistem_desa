const express = require('express');
const beritaController = require('../controllers/beritaController')
const authenticateToken = require('../middleware/authMiddleware');;
const router = express.Router();

router.post('/',authenticateToken(['admin']), beritaController.createBerita);
router.get('/',  beritaController.getBeritas);
router.get('/:id',  authenticateToken(['admin', 'user']),beritaController.getBeritaById);
router.put('/:id', authenticateToken(['admin']),beritaController.updateBerita);
router.delete('/:id', authenticateToken(['admin']),beritaController.deleteBerita);

module.exports = router;
