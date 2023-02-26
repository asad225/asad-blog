import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from './routes/user-routes'
import cors from "cors";
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


const port = process.env.PORT || 4000

// if(process.env.NODE_ENV==='production'){
//   app.use(express.static(path.join(__dirname,'../Frontend/build')))
//   app.get('*',(req,res)=>{
//     req.sendFile(path.join(__dirname + '../Frontend/build'))
//   })
// }

mongoose
  .connect(
    process.env.MONGO_DB
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 4000")
  )
  .catch((err) => console.log(err));
