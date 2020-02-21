//index.js
//获取应用实例
const app = getApp()
var utils = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageList:[
      '/static/image/ad/ad1.jpg',
      '/static/image/ad/ad2.jpg',
    ],
    navList: [
      { icon: '/static/nav-icon/diantai.png', events: 'goToBangDan', text: '榜单' },
      { icon: '/static/nav-icon/diantai.png', events: 'goToBangDan', text: '听小说' },
      { icon: '/static/nav-icon/diantai.png', events: 'goToBangDan', text: '情感电台' },
      { icon: '/static/nav-icon/diantai.png', events: 'goToBangDan', text: '听知识' },
    ],
    swiperCurrent: 0
  },
  //轮播图改变事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  tanchu:function(){
    
  },
  onLoad: function () {
    var that = this;
    var url = "http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45";
    utils.myRequest({
      url:url,
      method:'GET',
      success:function(result){
        that.setData({
          showitem: true,
          guess: result.data.paidArea.list,
          xiaoshuocontent: result.data.hotRecommends.list[0].list,
          xiangshengcontent: result.data.hotRecommends.list[2].list,
          tuokocontent: result.data.hotRecommends.list[4].list
        })
      },
      fail:function(result){

      }
    })


  },

})
