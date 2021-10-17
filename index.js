const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./router');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/', express.static(__dirname + "/public"));
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port.`);
});