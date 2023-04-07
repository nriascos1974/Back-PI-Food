/* eslint-disable import/no-extraneous-dependencies */
//const { expect } = require("chai");
//const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");
const session = require("supertest");

const agent = session(app);
const recipe = {
  title: "Chicken Fajita Stuffed Bell Pepper",
  summary:
    "Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine.",
  healthScore: 50,
  image: "https://spoonacular.com/recipeImages/795751-312x231.jpg",
  steps: [
    {
      number: 1,
      step: "Layer quinoa and then grilled chicken into the pepper, and then top each with cheese",
    },
    {
      number: 2,
      step: "Cut the bell pepper in half (if you havent already) and clean out the seeds",
    },
    {
      number: 3,
      step: "Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side",
    },
    {
      number: 4,
      step: "o get started heat oven to 35",
    },
  ],
  diets: [
    "lacto ovo vegetarian",
    "vegetarian",
    "gluten free",
    "fodmap friendly",
    "primal",
    "whole 30",
    "ketogenic",
  ],
};

describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  describe("GET /recipes", () => {
    it("should get 200", () => agent.get("/recipes").expect(200));
  });

  describe("Route: GET recipes/:id", () => {
  it("Si no existe con status: 401", () => agent.get("/recipes/Id-No-Existe").expect(401))
  });

  describe("Route: GET recipes/:id", () => {
  it("Si no se encuentra la ruta: 404", () => agent.get("/recip/10000").expect(404))
  });

  describe("GET /diets", () => {
    it("should get 200", () => agent.get("/diets").expect(200));
  });


});

