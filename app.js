const express = require('express');
const bodyParser = require('body-parser');

const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send({ express: 'Hello From Express' });
  res.sendfile('public/index.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




//