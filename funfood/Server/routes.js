const router = require("express").Router();
const controller = require("./controllers/controllers")

router.get('/restaurants', controller.getAll);
router.post('/restaurants', controller.createOne);

module.exports = router;