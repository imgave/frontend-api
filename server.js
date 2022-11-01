import db from "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import chalk from "chalk";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("connected to MongoDB"));
  app.listen(port, () => {
    console.log(`Express server running in development on Port ${port}`);
  });
});
