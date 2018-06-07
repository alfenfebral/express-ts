const express = require('express');
const pug = require('pug');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  // res.render('index');
  res.send(greeting("Hello Alfen, Your age is ") + getAge(22));
})

function greeting(greet: string): string {
  return greet;
}

function getAge(age: number): number {
  return age;
}

app.listen(3000);