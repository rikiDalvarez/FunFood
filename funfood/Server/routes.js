const router = require("express").Router();
const controller = require("./controllers/controllers")

router.get('/restaurants', controller.getAll);
router.post('/restaurants', controller.createOne);
<<<<<<< HEAD
router.put('/restaurants/:id', controller.updateOne)
=======
>>>>>>> 5782893df9001e05c47c15fc971f833347d2f34d

module.exports = router;