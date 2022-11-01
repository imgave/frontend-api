import { Router } from "express";
import restaurantsRoutes from "./Restaurants.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the API root!"));

router.use("/restaurants", restaurantsRoutes);

export default router;
