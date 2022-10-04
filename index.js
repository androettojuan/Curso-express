const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

routerApi(app);
