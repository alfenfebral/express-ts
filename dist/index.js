var express = require('express');
var pug = require('pug');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res, next) {
    // res.render('index');
    res.send(greeting("Hello Alfen, Your age is ") + getAge(22));
});
function greeting(greet) {
    return greet;
}
function getAge(age) {
    return age;
}
app.listen(3000);
//# sourceMappingURL=index.js.map