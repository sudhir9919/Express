import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes.js';
import connectDB from './config/dbConfig.js';
// Load environment variables
dotenv.config();

const app = express();

// Resolve __dirname in ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)  //if the req url starts with /api, use the apiRouter,otherwise use the below one router. 

app.get('/', (req, res) => {
    res.render('home', {name:'John Doe'});
});

app.get('/ping', (req, res) => {
  return res.json({
    message: 'pong'
  });
});

app.all('*', (req, res) => {
    return res.status(404).json({
      message: 'not found'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
