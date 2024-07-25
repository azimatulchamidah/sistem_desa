const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const dataPendudukController = require('../controllers/dataPendudukController');
const router = express.Router();

router.post('/', authenticateToken(['admin']),dataPendudukController.createDataPenduduk);
router.get('/', dataPendudukController.getDataPenduduks);
router.get('/:id', dataPendudukController.getDataPendudukById);
router.put('/:id', authenticateToken(['admin']),dataPendudukController.updateDataPenduduk);
router.delete('/:id', authenticateToken(['admin']),dataPendudukController.deleteDataPenduduk);

module.exports = router;
