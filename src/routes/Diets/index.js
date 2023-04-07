const { Router } = require('express');

const { getDiets } = require("../../Handlers/Diets")

const router = Router();

router.get("/", getDiets);

module.exports = router;