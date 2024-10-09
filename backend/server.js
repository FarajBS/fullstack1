import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = 8000;



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Faraj30:Farajsaad2030@containerf.41u68.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
  
// app.get("/artical", (req, res) => {

// });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});