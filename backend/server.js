import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Arti from "./articleSchema.js";

dotenv.config();

const app = express();
app.use(express.json());

const port = 8000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL);
  console.log("Connection Database");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Get //
// All //
app.get("/articles", (req, res) => {
  Arti.find().then((result) => {
    res.send(result);
  });
});
//== All ==//

// =========================================================================================================================================== //

// One
app.get("/articles/:id", (req, res) => {
  Arti.findOne().then((result) => {
    res.send(result);
  });
});
//== One ==//
//=== Get ===//

// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Post //
app.post("/articles", (req, res) => {
  const article = new Arti({
    name: req.body.name,
    author: req.body.author,
    printNum: req.body.printNum,
    datePublish: req.body.datePublish,
    pdf: req.body.pdf,
    price: req.body.price,
    language: req.body.language,
    class: req.body.class,
  });

  article.save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
//=== Post ===//

// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Update //
app.patch("/articles/:id", (req, res) => {
  const { id } = req.params;
  Arti.findByIdAndUpdate(id, req.body, { new: true, runValidators: true }).then(
    (result) => {
      res.send(result);
    }
  );
});
//=== Update ===//

// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Delete //
app.delete("/articles/:id", (req, res) => {
  const { id } = req.params;

  Arti.deleteOne({ _id: id })
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.send("Sorry, Not Found");
      }
      res.send("Deleted Successfully");
    })
    .catch((error) => {
      console.error(error);
    });
});
//=== Delete ===//

// Port //
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
//=== Port ===//