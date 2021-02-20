const express = require('express');

const app = express();

// let assume that we have an html file we want to send
// 1. import the path module
const path = require('path');

const port = 3000;

const router = require('./routers/index');

app.set('view engine', 'ejs');
app.set('vies', path.join(__dirname, './views'));

// app.get('/', (req, res) => {
//   res.render('pages/index', { pageTitle: 'Welcome' });
// });
app.use('/', router());

app.listen(port, () => {
  console.log(`https//:localhost${port}`);
});
