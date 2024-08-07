//ESSA FUNÇÃO É CHAMADA NO APP.JS E ELA DETERMINA OS ARQUIVOS COM FUNÇÕES QUE CADA ROTA DEVE DISPARAR
function routes(app) {
  //HOME
  app.use('/', require('./index'));
  
  //USER
  app.use('/', require('./user/userMe'));
  app.use('/user', require('./user/postUser'));
  app.use('/user', require('./user/putUser'));
  app.use('/user', require('./user/loginUser'));
  app.use('/user', require('./user/deleteUser'));

  //CATEGORY
  app.use('/category', require('./category/postCategory'));
  app.use('/category', require('./category/getCategory'));
  app.use('/category', require('./category/deleteCategory'));

  //TRANSACTION
  app.use('/transaction', require('./transaction/postTransaction'));
  app.use('/transaction', require('./transaction/getUserTransaction'));
  app.use('/transaction', require('./transaction/getOneTransaction'));
  app.use('/transaction', require('./transaction/deleteTransaction'));
};

module.exports = routes;
