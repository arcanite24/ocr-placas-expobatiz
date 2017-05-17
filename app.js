const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8080;

app.set('view engine', 'pug');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Router
app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => {
  console.log(`Servidor iniciado en :${PORT}`);
});
