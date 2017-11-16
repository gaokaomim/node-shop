let user = require('./User');
console.log(`userName:${user.userName}`)
let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  console.log(`url:${req.url}`); // demo.html?a=123
  console.log(`parse:${url.parse(req.url)}`);//[object]
  console.log(`inspect:${util.inspect(url.parse(req.url))}`);
  res.end(util.inspect(url.parse(req.url)));
});
server.listen(3000, '127.0.0.1', function () {
  console.log("服务器已经运行,请打开游览,输入:http://127.0.0.1:3000/  来进行访问")
})
