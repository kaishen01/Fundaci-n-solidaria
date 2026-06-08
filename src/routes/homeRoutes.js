const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');



router.get('/', homeController.index);

router.get('/nosotros', homeController.nosotros);

router.get('/proyectos/alivio', homeController.alivio);
router.get('/proyectos/vejez', homeController.vejez);
router.get('/proyectos/hogar', homeController.hogar);
router.get('/proyectos/restauracion', homeController.restauracion);





module.exports = router;