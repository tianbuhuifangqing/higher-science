// my-behavior.js
// 从本地或者网络获取数据
module.exports = Behavior({
  behaviors: [],
  properties: {
    // 获取的本地数据存储名字
    getDataname: String,
    oriData: Array
  },
  data: {
    localdata: {}
  },
  ready: function () {
    this.update()
  },
  methods: {
    update() {
      // 本地读取
      let that = this
      let getdata = that.properties.oriData;
      wx.getStorage({
        key: this.properties.getDataname,
        // success: res => {
        //   console.log('获取到本地有数据')
        //   // 内置数据加用户设置数据
        //   getdata.push(...res.data);
        // },
        fail: () => {
          console.log('本地mei有数据')
          wx.showToast({
            title: 'sorry，暂未获取到您的信息',
            image: '/images/err.png'
          })
        },
        complete: () => {
          //  去重
          console.log(getdata)
          // let a ={}
          // for(let value of getdata){
          //    a = {
          //      name:value.name,
          //      id :value.id
          //    }
          // }
          // getdata = getdata.push(a)
          that.setData({
            localdata: {
              key: that.properties.getDataname,
              datavalue: getdata
            },
          })
          that.triggerEvent('getdataback', getdata.name)
          wx.request({
            url: 'http://localhost:8083/',
            data: that.properties.getDataname,
            success: a => {
              // 再次触发事件传回后台数据
              // 对比前后台数据，若不符摒弃客户端数据
              // 设置后台传回数据为data
              let res = JSON.parse(a)
              // datacode 为0表示
              if (res.data === 0) {
                that.setData({
                  localdata: {
                    key: that.properties.getDataname,
                    data: getdata
                  },
                })
              }
            },
            fail: function (res) {
              console.log('无法获取服务器数据,载入缓存')
            }
          })
        }
      })
    },
  }
})
