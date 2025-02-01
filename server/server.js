import express, { json } from "express"
import cors from "cors"
import morgan from "morgan"

import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handleError from "./middlewares/error.js";

import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
///////////////////////
const app = express()
//////////////////////
app.use(cors())
app.use(json())
app.use(morgan('dev'))
app.use(clerkMiddleware())

///////////////////////

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const routeFiles = readdirSync('./routes');

await Promise.all(
  routeFiles.map(async (filename) => {
    const { default: route } = await import(`./routes/${filename}`);
    app.use('/api', route);
  })
);

// ย้าย handleError ไปไว้หลังจากโหลด routes ทั้งหมดเสร็จ
app.use(handleError);


 
const PORT = 5000
app.listen(PORT,()=>console.log(`server run on port ${PORT}`))  