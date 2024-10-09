import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
  name: { Type: String },
  author: { Type: String },
  edition: { Type: String },
  publication: { Type: String },
  isElectronic: { Type: Boolean },
  price: { Type: Number },
  languages: { Type: String },
  category: { Type: String },
});

const Article = mongoose.model("Article", ArticlesSchema);

export default Article;