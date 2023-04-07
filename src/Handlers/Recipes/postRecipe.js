const postData = require("../../controllers/Recipes/postDataRecipe");

const postRecipe = async (req, res) => {
  const { title, summary, healthScore, steps, image, diets } = req.body;

  try {
    if (title && summary && healthScore && steps && image && diets) {
      const recipeObj = { title, summary, healthScore, steps, image, diets };

      const recipe = await postData(recipeObj);

      return res.status(200).json(recipe);
    }

    res.status(400).json({ msg: "Faltan datos" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = postRecipe;
