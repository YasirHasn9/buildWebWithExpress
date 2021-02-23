const express = require('express');
// let assume that we have an html file we want to send
// 1. import the path module
const path = require('path');

// fetch speaker data , then create an instance of it with path
const FetchingSpeakersData = require('./services/speakers');
const FeedbackService = require('./services/feedback');

const fetchingSpeakersData = new FetchingSpeakersData('./data/speakers.json');
const feedbackService = new FeedbackService('./data/feedback.json');

const app = express();
const port = 3000;

const router = require('./routers/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(
  '/',
  router({
    fetchingSpeakersData,
    feedbackService,
  })
);

app.listen(port, () => {
  console.log(`https//localhost:${port}`);
});
