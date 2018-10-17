const app = getApp()
Page({
  data: {
    allGoods: [
      {
        name: "灯具",
        id: 1,
        bgimage: "/images/open.png"
      },
      {
        name: "空调",
        id: 2,
        bgimage: "/images/all.png"
      },
      {
        name: "空气净化",
        id: 3,
        bgimage: "/images/open.png"
      },
      {
        name: "窗帘",
        id: 4,
        bgimage: "/images/all.png"
      },
      {
        name: "智能生态",
        id: 5,
        bgimage: "/images/account.png"
      },
      {
        name: "密码锁",
        id: 6,
        bgimage: "/images/all.png"
      },
      {
        name: "电磁炉",
        id: 7,
        bgimage: "/images/open.png"
      },
      {
        name: "烟雾报警",
        id: 8,
        bgimage: "/images/all.png"
      },
      {
        name: "其他",
        id: 9,
        bgimage: "/images/open.png"
      }
    ]
  },
  tapName(event) {
    wx.navigateTo({
      url: '../all/goodsmore/all'
    })
    var id = event.currentTarget.id.slice(5);
    var urlname = '';
    for (var p of this.data.allGoods) {
      if (p.id == id && p.id != 5) {
        urlname = p.name;
        // wx.navigateTo({
        //   url: '../all/' + urlname + '/all'
        // })
      }
    }

  },
  onLoad() {

  }
})

