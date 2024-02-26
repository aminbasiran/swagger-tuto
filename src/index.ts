import express from "express"
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { swaggerDocs } from "./swagger/swagger";
import {postRouter} from "../src/router/postRoutes"
import bodyParser from "body-parser";

dotenv.config();


const PORT = process.env.PORT || 3001
const app = express()

app.use(bodyParser.json())
app.use(morgan("dev"));
app.use(cors());


app.use("/posts", postRouter);
swaggerDocs(app)


app.listen(PORT,()=>{
    console.log("listenig to port: " + PORT)
})