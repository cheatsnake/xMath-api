import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {router} from './routes/router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/', express.static(__dirname + '/../public'));
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port.`);
});