const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/panel.magiesugary.site/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/panel.magiesugary.site/fullchain.pem')
};

const server = https.createServer(options, app);

app.use(bodyParser.json());

// Rota para obter a lista de candidatos
app.get('/stats', (req, res) => {
	var statsJson = JSON.parse(fs.readFileSync('../stats/stats.json', 'utf8'))
    res.json(statsJson);
});

server.listen(3001, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:3000`);
});