const mongoose = require("mongoose");

const db = mongoose
  .connect(
    "mongodb+srv://nishantraj2109:4ILaPhOOzN1Z7G0b@cook-book.8f9qlzf.mongodb.net/?retryWrites=true&w=majority&appName=cook-book"
  )
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log("error while connecting the database");
  });
