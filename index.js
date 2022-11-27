const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 8000;
const teleUrl = 'bot5535531507:AAFLXmdmpb5y8g4A_ZNC7IPxPYWgqa_vlEk';
const teleBaseUrl = 'https://api.telegram.org/';
const teleMethod = '/getUpdates';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  res.send(200, req.body);
});

app.listen(8000, () => console.log('app running in port 8000'));
