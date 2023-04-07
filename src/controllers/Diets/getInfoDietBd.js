const { Diet } = require("../../db");

const getInfoDietBd = async () => {
    // Utilizamos el metodo finAll de sequelize en el modelo Diet para acceder a todos los atributos
    const dietsAll = await Diet.findAll({
      // mediante la opcion attributes especificamos cuales son los unicos que queremos
      attributes: ["name", "id"],
    });
  
    // console.log(dietsAll);
  
    const dietsAllArray = [];
  
    dietsAll.forEach((x) => dietsAllArray.push({ name: x.name, id: x.id }));
  
    return dietsAllArray;
  
    // Recorremos dietAll para pushear en el nuevo array dietsAllArray todo nuevamente.
  };

  module.exports = getInfoDietBd;