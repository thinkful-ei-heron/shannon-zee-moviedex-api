const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('/movie', (req,res) => {
  res.send('hi');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
