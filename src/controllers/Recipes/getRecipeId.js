let { Recipe, Diet } = require("../../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getRecipeId = async (id) => {
  //* REALIZO LA BUSQUEDA EN BASE DE DATOS CONSULTANDO SI EL ID CONTIENE - EN SU COMPOSICION
  console.log("El ID ", id);
  if (id.includes("-")) {
    
    try {
      const recipeBd = await Recipe.findOne({
      where: { id: id },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return recipeBd;
    } catch (error) {
      
    }
    //*EN CASO CONTRARIO HAGO LA CONSULTA A LA API
  } else {
    const response = await axios(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    
    const recipeApi = {
      id: response.data.id,
      title: response.data.title,
      summary: response.data.summary,
      healthScore: response.data.healthScore,
      image: response.data.image,
      steps: response.data.analyzedInstructions[0]?.steps.map((step) => {
          return {
            number: step.number,
            step: step.step,
          };
        }), // Se almacena un array de objetos con los paso a paso
      diets: response.data.diets.map((d) => {
        return { name: d };
      }), //Se almacena un array con los tipos de dietas
    };

    return recipeApi;
  }
};

module.exports = getRecipeId;
