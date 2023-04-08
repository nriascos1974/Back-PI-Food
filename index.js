//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config();
const server = require('./src/app.js');
const loaderDiets = require('./src/controllers/Diets/loaderDiets.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ force: false }).then( async () => {
  
  //*Cargo los Tipos de Dietas apenas se inicia el servidor con las provistas en la documentacion
  await loaderDiets();
  server.listen(port, () => {
    console.log(`Listening at port ${port}`); // eslint-disable-line no-console
  });
});
