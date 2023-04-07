const getInfoApi = require("./getInfoApi");
const getDBInfo = require("./getInfoDb");

const getAllRecipes = async () => {
  //*obtengo la informacion a partir de la API
  const infoApi = await getInfoApi();
  //*obtengo las recetas que han sido creadas por el usuario para reunirlas con las devuelta por la API
  const infoDb = await getDBInfo();
  //*Creo un array con las recetas unidad, BD y API
  const allRecipes = [...infoApi, ...infoDb];
  return allRecipes;
};

module.exports = getAllRecipes;
