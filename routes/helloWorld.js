var express = require('express');
var router = express.Router();
var base = require("../public/javascripts/base")

var title = 'helloWorld'; // 传递给模板的数据

var list = [
  { name: "张三", age: 18 },
  { name: "李四", age: 28 }
]

router.get('/', function (req, res, next) {
  base.fn.test().then(data => {
    if (!!data) {
      res.render('helloWorld', { title: title, list: list });
    }
  });
});

module.exports = router;