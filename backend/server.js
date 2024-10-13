import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Article from "./models/articleSchema.js";

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
  Article.find().then((result) => {
    res.send(result);
  });
});
//== All ==//

// =========================================================================================================================================== //

// One
app.get("/articles/:id", (req, res) => {
  Article.findOne().then((result) => {
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
  const article = new Article({
    name: req.body.name,
    author: req.body.author,
    edition: req.body.edition,
    publication: req.body.publication,
    isElectronic: req.body.isElectronic,
    price: req.body.price,
    languages: req.body.languages,
    category: req.body.category
  });

  article.save()
    .then((result) => {
      res.status(201).send(result); // إرسال استجابة 201 عند النجاح
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "حدث خطأ أثناء حفظ المقالة." }); // إرسال استجابة 500 عند الخطأ
    });
});


//=== Post ===//

// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Update //
app.patch("/articles/:id", (req, res) => {
  const { id } = req.params;
  Article.findByIdAndUpdate(id, req.body, { new: true, runValidators: true }).then(
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

  Article.deleteOne({ _id: id })
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