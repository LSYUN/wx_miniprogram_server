var router = require('koa-router')();
// var jwt = require('jsonwebtoken');
// var tokenSecret = require('../config').tokenSecret;

router.get('/', function* () {
  // console.log('req', this.params);
  // console.log('res', ctx);
  // var token = jwt()
  return yield this.body = {
    echostr: this.query.echostr
  };
});

router.get('/foo/:name/:age', function* () {
  yield this.render('index', {
    title: 'Hello World foo!',
    params: this.params,
    query: this.query
  });
});

module.exports = router;
