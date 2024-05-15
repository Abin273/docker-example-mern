const router = require("express").Router();
const dressController = require("../controllers/dressController");
const protect = require("../middlewares/authMiddleware");

router
	.route("/")
	.get(dressController.getAllDresses)
	.post(protect, dressController.createADress);

router
	.route("/:id")
	.get(dressController.getADress)
	.put(protect, dressController.updateADress)
	.delete(protect, dressController.deleteADress);

module.exports = router;
