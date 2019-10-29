require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(function validateBearerToken(req, res, next) {
  const bearerToken = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : null;
  const apiToken = process.env.API_TOKEN;
  if (bearerToken !== apiToken) {
    return res.status(400).json({ error: 'Not authorized to view' });
  } else {
    next();
  }
});


app.get('/movie', (req, res) => {
  return res.json('hi');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
