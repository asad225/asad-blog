import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from './routes/user-routes'
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://asadrahman225:354tag354@cluster0.hzt6joy.mongodb.net/test"
  )
  .then(() => app.listen(4000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 4000")
  )
  .catch((err) => console.log(err));
