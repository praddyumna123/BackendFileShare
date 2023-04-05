import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import dbConnection from './database/db.js';
import * as dotenv from 'dotenv' 
dotenv.config()
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


const PORT = process.env.PORT || 8000;

dbConnection();

app.listen(PORT,() => console.log(`server is running on port no ${PORT}`));