import db from "../db/connection.js";
import Restaurant from "../models/Restaurants.js";
import restaurants from "./restaurants.json" assert { type: "json" };

const insertData = async () => {
  await Restaurant.deleteMany({});
  // await db.dropDatabase();
  await Restaurant.create(restaurants);

  db.close();
};

insertData();
