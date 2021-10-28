import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRouter from './routes/api.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/', express.static(__dirname + '/../public'));
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port.`);
});