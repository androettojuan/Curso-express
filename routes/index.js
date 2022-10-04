const productRouter = require('./products.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');
const homeRouter = require('./home.router');

function routerApi(app) {
  app.use('/', homeRouter);
  app.use('/products', productRouter);
  app.use('/users', userRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
