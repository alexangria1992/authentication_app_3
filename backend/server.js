import express from "express";
import colors from "colors";
import db from "./config/Database.js";
const app = express();

try {
  await db.authenticate();
  console.log(colors.magenta("Database connected...."));
} catch (error) {
  console.error(error);
}

app.listen(5000, () =>
  console.log(colors.cyan("Server is running at port 5000"))
);
