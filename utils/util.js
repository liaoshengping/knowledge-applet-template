const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


let myRequest = function (args = { url: '', methods: 'GET', data: {}, success: function () { }, fail: function () { } }) {
  wx.request({
    url: args.url,
    data: args.data,
    header: { 'content-type': 'application/json' },
    method: args.methods,
    dataType: 'json',
    responseType: 'text',
    success: (res) => {
      console.log(res);
      if (res.statusCode == 200) {
        // 请求成功执行回调函数
        args.success(res)
      } else {
        // 请求失败执行回调函数
        args.fail()
      }
    },
  })
}

module.exports = {
  formatTime: formatTime,
  myRequest: myRequest
}


