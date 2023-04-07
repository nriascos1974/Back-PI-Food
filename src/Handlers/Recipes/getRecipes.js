const getAllRecipes = require("../../controllers/Recipes/getAllRecipes");


//*Handler para la consulta de recetas por nombre
const getRecipes = async (req, res) => {
  //*Obtenemos el nombre por query
  const { name } = req.query;
  try {
    //*Obtenemos todas las recetas que nos trae el controller que combina las de API y BD
    const recipes = await getAllRecipes();

    if (name) {
      let filterRecipe = recipes.filter((x) =>
        x.title.toLowerCase().includes(name.toLowerCase())
      );

      filterRecipe.length
        ? res.status(200).json(filterRecipe)
        : res
            .status(400)
            .json({ msg:`No existe alguna receta que contenga en el Tittle "${name}"`});
    } else {
      res.status(200).json(recipes);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getRecipes;
