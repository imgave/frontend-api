//IMPORT
import db from "../db/connection.js";
import Restaurant from "../models/Restaurants.js";
import restaurants from "./restaurants.json" assert { type: "json" };

const insertData = async () => {
  //reset database
  await db.dropDatabase();

  //insert data
  await Restaurant.create(restaurants);

  db.close();
};

insertData();
