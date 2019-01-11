const express = require('express');

const app = express();

app.use(express.static('./'));
app.use(express.static('dist/client'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/client/index.html`);
});

const port = process.env.PORT || 8003;

app.listen(port, () => {
  console.log('app listening on', port);
});
