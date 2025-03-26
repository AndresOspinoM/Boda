const express = require("express");
const router = express.Router();
const guestsController = require("../controllers/guestsController");

router.get("/", guestsController.getGuests);
router.post("/", guestsController.addGuest);

module.exports = router;