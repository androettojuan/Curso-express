const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}/api/v1`);
});
