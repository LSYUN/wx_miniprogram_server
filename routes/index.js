var router = require('koa-router')();
var jwt = require('jsonwebtoken');
var tokenSecret = require('../config').tokenSecret;

router.get('/', function* (req, res, next) {
  console.log(req, res);
  // var token = jwt()
  // yield this.render('index', {
  //   title: 'Hello World Koa!'
  // });
});

router.get('/foo', function* (next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
