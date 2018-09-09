const express  = require('express');

const app = express();
app.use(express.static('./static'));
app.listen(3000, () => {
  console.log('Web app listening on port 3000');
});
