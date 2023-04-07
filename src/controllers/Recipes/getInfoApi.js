require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Diet } = require("../../db");

const getInfoApi = async () => {
  const dietsAll = [];
  const apiUrl = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );

  const infoApi = apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      title: e.title,
      summary: e.summary,
      healthScore: e.healthScore,
      image: e.image,
      steps: e.analyzedInstructions?.map((step) =>
          step.steps.map((step) => {
            return {
              number: step.number,
              step: step.step,
            };
          })),
         // Se almacena un array de objetos con los paso a paso
      diets: e.diets.map((d) => {
        return { name: d };
      }), //Se almacena un array con los tipos de dietas
      createDb: false,
    };
  });

   //*mapeo la informacion devuelta de cada receta para obtener los tipos de dietas
  const dietAllApi = infoApi.map((x) => x.diets);

  dietAllApi.forEach((x) => x.forEach((y) => dietsAll.push(y.name)));

  //*Array con los tipos de dietas devueltas por la consulta a la API, como puede haber repetidas
  //* como pueden haber dietas repetidas las paso por un objeto set.
  const TypeDiets = [...new Set(dietsAll)]

  //*obtengo un array de findorcreate por cada dieta, esto se me convierte en un array de promesas
  let allDiets = TypeDiets.map((e) => Diet.findOrCreate({ where: { name: e } }));
  //* resuelvo todas las promesas y una vez realizado devuel un string que se cargaron las dietas
  try {
    Promise.all(allDiets).then((e) => console.log("Loaded Diets API..."));
  } catch (error) {
    return { msg: error.message };
  }


  return infoApi;
};

module.exports = getInfoApi;
