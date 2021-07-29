const express = require("express");
const router = express.Router();
const puppiesCtrl = require("../../controllers/Puppies/Puppies");
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/", puppiesCtrl.index)
router.post('/new', puppiesCtrl.create)
router.get('/:id', puppiesCtrl.show)
module.exports = router;