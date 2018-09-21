var express = require('express');
var debug = require('debug')('my-application'); // debug模块
var app = express();
var router = require('./routes/index');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.use('/abuot', router);

// app.listen(3000, () => console.log('app listening on port 3000!'));



app.set('port', process.env.PORT || 3000); // 设定监听端口

//启动监听
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
// nodemon app.js