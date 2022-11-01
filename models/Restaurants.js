//IMPORT
import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Restaurant = new Schema({
  name: { type: String },
  cuisine: { type: String },
});

//EXPORT - Will be the collections name - lowercase/plural
export default mongoose.model("restaurants", Restaurant);
