var request = require('request');

const host = "xxx"

var fn = {
  test: () => {
    // 模拟请求
    return new Promise((resolve, reject) => {
      resolve("data");
    })
  },

  post: (_url, _sub_data) => {
    return new Promise((resolve, reject) => {
      var option = {
        url: host + _url,
        method: "POST",
        json: true,
        timeout: 30000, //请求超时
        headers: {
          "content-type": "application/json",
        },
        form: _sub_data // GET 请求，参数名为 qs，POST为form
      }
      request(option, (error, response, body) => {
        if (!error) {
          resolve(body);
        } else {
          reject(error);
        }
      })
    })
  },
}

module.exports = {
  fn
}