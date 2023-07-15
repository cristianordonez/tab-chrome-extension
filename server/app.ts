import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
dotenv.config();

const app = express();
//MIDDLEWARE
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/api', (req, res) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'template',
         version: '1.0.0',
      },
   });
});

app.get('/*', (req, res) => {
   //uncomment once index.html has been built so that wait-on package does not error out
   //// res.sendFile(path.join(__dirname, '../client/dist/index.html'));
   res.status(200).json({
      status: 'success',
      data: {
         name: 'template',
         version: '1.0.0',
      },
   });
});

export default app;
