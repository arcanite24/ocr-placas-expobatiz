const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const multer = require('multer');
const app = express();

const openalpr = require('node-openalpr');

const PORT = 8080;

var upload = multer({ dest: 'uploads/' }).single('foto');

app.set('view engine', 'pug');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Router
app.get('/', (req, res) => res.render('index'));

app.post('/leer', (req, res) => {
  upload(req, res, (err) => {
    if(err) return res.json({err: err, msg: 'Error subiendo la imágen.'});
    openalpr.Start ();
    openalpr.IdentifyLicense(req.file.path, (err_read, output) => {
      if(err_read) return res.json({err: err_read, msg: 'Error subiendo la imágen.'});
      openalpr.Stop();
      return res.json({msg: 'test', output: output});
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en :${PORT}`);
});
