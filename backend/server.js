import express from "express";
import colors from "colors";
import db from "./config/Database.js";
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";

const app = express();

// Db Connection
try {
  await db.authenticate();
  console.log(colors.magenta("Database connected...."));
  //   await Users.sync();
} catch (error) {
  console.error(error);
}

//Router Connection
app.use(express.json());
app.use(router);

app.listen(5000, () =>
  console.log(colors.cyan("Server is running at port 5000"))
);
