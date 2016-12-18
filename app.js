const request = require('request');
request({
    url: 'http://cnodejs.org/',
    method: 'GET',
    header: {
      'Accept-Language': 'zh-CN,zh;q=0.8',
      'Cookie': '__utma=4454.11221.455353.21.143;'
    }
  },
  (err, res, body) => {
    if (!err && res.statusCode == 200) {
      console.log(body);
    }
  });
