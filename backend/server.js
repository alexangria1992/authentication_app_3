import express from "express";
import colors from "colors";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
const app = express();

try {
  await db.authenticate();
  console.log(colors.magenta("Database connected...."));
  await Users.sync();
} catch (error) {
  console.error(error);
}

app.listen(5000, () =>
  console.log(colors.cyan("Server is running at port 5000"))
);
