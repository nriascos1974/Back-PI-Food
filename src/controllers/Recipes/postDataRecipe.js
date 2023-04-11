let { Recipe, Diet } = require("../../db");

const postData = async (recipe) => {
  const { title, summary, healthScore, steps, image, diets } = recipe;

  const recipeGuardado = await Recipe.create({
    title,
    summary,
    healthScore,
    steps,
    image,
  });

  let dietsdb = await Diet.findAll({
    where: { name: diets },
  });

  await recipeGuardado.addDiet(dietsdb);

  const resultado = await Recipe.findOne({
    where: { id: recipeGuardado.id },
    attributes: [
      "id",
      "title",
      "summary",
      "healthScore",
      "steps",
      "image",
      "createDb",
    ],
    include: { model: Diet },
  });

  return resultado;
  
};

module.exports = postData;
