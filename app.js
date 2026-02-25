const mongoose = require("mongoose");
const express = require("express");
const usersRoute = require("./routes/usersRoutes"); // import all user route
const app = express();
app.use(express.json()); // for parsing application/json
app.use("/api/users", usersRoute);

const mongooseUrl ="mongodb+srv://rakibuzzaman_db_user:rakib123456@e-commerce-01.l19qic1.mongodb.net/E-Commerce";
mongoose.connect(mongooseUrl)
  .then(() => {
    app.listen(8000, () => {
      console.log("server is running...");
    });
  })
  .catch((err) => {
    console.log("data base error :", err);
  });
