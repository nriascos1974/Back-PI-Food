const { Router } = require('express');

const { getRecipeById, postRecipe, getRecipes } = require("../../Handlers/Recipes")

const router = Router();

router.get("/", getRecipes);

router.get("/:id", getRecipeById);

router.post("/", postRecipe);

module.exports = router;