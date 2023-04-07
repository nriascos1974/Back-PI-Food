const { Recipe, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Recipe model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe("title", () => {
      it("should throw an error if title is null", (done) => {
        Recipe.create({
          summary:
            "Hidratamos los tomates secos en agua tibia el tiempo necesario hasta que estén carnosos. Lavamos y despuntamos las judías. Les damos un hervor durante cuatro minutos y cortamos la cocción pasándolas a un cuenco con agua helada.",
          healthScore: 100,
          image:
            "https://i.blogs.es/503511/receta-gambas-con-judias-verdes/1366_2000.jpg",
          steps: [
            {
              number: 1,
              step: "Limpiamos las setas y las troceamos",
            },
            {
              number: 2,
              step: "Las rehogamos en una sartén grande o wok, retiramos a un plato",
            },
          ],
        })
          .then(() => done(new Error("It requires a valid title")))
          .catch(() => done());
      });
    });

    describe("summary", () => {
      it("should throw an error if summary is null", (done) => {
        Recipe.create({
          title: "Salteado de gambas con judías verdes",
          healthScore: 100,
          image:
            "https://i.blogs.es/503511/receta-gambas-con-judias-verdes/1366_2000.jpg",
          steps: [
            {
              number: 1,
              step: "Limpiamos las setas y las troceamos",
            },
            {
              number: 2,
              step: "Las rehogamos en una sartén grande o wok, retiramos a un plato",
            },
          ],
        })
          .then(() => done(new Error("It requires a valid summary")))
          .catch(() => done());
      });
    });

    describe("image", () => {
      it("should throw an error if image is null", (done) => {
        Recipe.create({
          title: "Salteado de gambas con judías verdes",
          summary:
            "Hidratamos los tomates secos en agua tibia el tiempo necesario hasta que estén carnosos. Lavamos y despuntamos las judías. Les damos un hervor durante cuatro minutos y cortamos la cocción pasándolas a un cuenco con agua helada.",
          healthScore: 100,
          steps: [
            {
              number: 1,
              step: "Limpiamos las setas y las troceamos",
            },
            {
              number: 2,
              step: "Las rehogamos en una sartén grande o wok, retiramos a un plato",
            },
          ],
        })
          .then(() => done(new Error("It requires a valid image")))
          .catch(() => done());
      });
    });

    describe("healthScore", () => {
      it("should throw an error if healthScore is null", (done) => {
        Recipe.create({
          title: "Salteado de gambas con judías verdes",
          summary:
            "Hidratamos los tomates secos en agua tibia el tiempo necesario hasta que estén carnosos. Lavamos y despuntamos las judías. Les damos un hervor durante cuatro minutos y cortamos la cocción pasándolas a un cuenco con agua helada.",
          image:
            "https://i.blogs.es/503511/receta-gambas-con-judias-verdes/1366_2000.jpg",
          steps: [
            {
              number: 1,
              step: "Limpiamos las setas y las troceamos",
            },
            {
              number: 2,
              step: "Las rehogamos en una sartén grande o wok, retiramos a un plato",
            },
          ],
        })
          .then(() => done(new Error("It requires a valid healthScore")))
          .catch(() => done());
      });
    });
    describe("steps", () => {
      it("should throw an error if steps is null", (done) => {
        Recipe.create({
          title: "Salteado de gambas con judías verdes",
          summary:
            "Hidratamos los tomates secos en agua tibia el tiempo necesario hasta que estén carnosos. Lavamos y despuntamos las judías. Les damos un hervor durante cuatro minutos y cortamos la cocción pasándolas a un cuenco con agua helada.",
          image:
            "https://i.blogs.es/503511/receta-gambas-con-judias-verdes/1366_2000.jpg",
          healthScore: 100,
        })
          .then(() => done(new Error("It requires a valid steps")))
          .catch(() => done());
      });
    });

    describe("Valitate Model Recipe", () => {
      it("should work when its a valid title, summary, image, healthScore and steps", () => {
        Recipe.create({
          title: "Salteado de gambas con judías verdes",
          summary:
            "Hidratamos los tomates secos en agua tibia el tiempo necesario hasta que estén carnosos. Lavamos y despuntamos las judías. Les damos un hervor durante cuatro minutos y cortamos la cocción pasándolas a un cuenco con agua helada.",
          image:
            "https://i.blogs.es/503511/receta-gambas-con-judias-verdes/1366_2000.jpg",
          healthScore: 100,
          steps: [
            {
              number: 1,
              step: "Limpiamos las setas y las troceamos",
            },
            {
              number: 2,
              step: "Las rehogamos en una sartén grande o wok, retiramos a un plato",
            },
          ],
        });
      });
    });
  });
});
