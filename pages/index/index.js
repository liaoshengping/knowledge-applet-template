//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageList:[
      '/static/image/ad/ad1.jpg',
      '/static/image/ad/ad2.jpg',
      '/static/image/ad/ad3.jpg',
    ],
    swiperCurrent: 0
  },
  //轮播图改变事件
  swiperChange: function (e) {
    //console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  tanchu:function(){
    
  },
  onLoad: function () {
    

  },

})
