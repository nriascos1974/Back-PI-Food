const getRecipeId = require("../../controllers/Recipes/getRecipeId");

//*HANDLER PARA LA CONSULTA POR ID
const getRecipeById = async (req, res) => {
  try {
    //*OBTENGO EL ID QUE VIENE POR PARAMS
    const { id } = req.params;

     const response = await getRecipeId(id);

    if (!response)
      return res
        .status(401)
        .json({ msg: `El Id ${id} no se encuentra como receta.` });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getRecipeById;
