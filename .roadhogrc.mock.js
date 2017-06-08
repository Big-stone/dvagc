
var request = require('request')

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1,2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /stest/*': (req, res) => { 
    //   res.end('OK'); 
    console.log(res)
    },

  // Forward 到另一个服务器
  'GET /stest/*': 'http://10.10.16.163/stest/',

  // Forward 到另一个服务器，并指定子路径
  // 请求 /someDir/0.0.50/index.css 会被代理到 https://g.alicdn.com/tb-page/taobao-home, 实际返回 https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  'GET /stest/(.*)': 'http://10.10.16.163/stest/',
};