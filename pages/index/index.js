// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

  /**
   * 页面的初始数据
   */
  data: {  
    currentTab: 0, // 当前选中的标签索引  
    swiperCurrent: 0, // swiper的当前索引  
    musicCover: 'https://xcx.lxxno.cn/image/music/44.jpg',  
    songName: '默认歌曲名……',  
    singerName: '默认歌手名……',
    isPlaying: false, // 添加一个变量来跟踪播放状态
  },
  previousSong: function() {  
    // 处理上一曲的逻辑  
  },  
  nextSong: function() {  
    // 处理下一曲的逻辑  
  },
  // 播放/暂停切换函数  
  togglePlayPause: function() {  
    let isPlaying = this.data.isPlaying;  
    isPlaying = !isPlaying; // 切换播放状态  
    this.setData({  
      isPlaying: isPlaying  
    });  
  
    // 根据播放状态执行相应的播放或暂停逻辑  
    if (isPlaying) {  
      // 播放音乐逻辑  
    } else {  
      // 暂停音乐逻辑  
    }  
  },
  playlist: function() {  
    // 处理播放列表的逻辑  
  },
  switchTab: function(e) {  
    var item = e.currentTarget.dataset.item; // 获取点击的tab-item的data-item值  
    this.setData({  
      currentTab: item, // 更新当前选中的标签索引  
      swiperCurrent: item // 更新swiper的当前索引  
    });  
  },
})