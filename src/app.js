import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
// mostly we use (use) to config middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}));

app.use(express.json({limit:"16kb"})) // to set the limit of json file
app.use(express.urlencoded({extended:true,limit:"16kb"})) // if we are getting data from url we use url encoder to decode it
app.use(express.static("public")) //  to get the files from static folder
app.use(cookieParser())

export default app