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
    // 音乐信息资源
    playlist:[{
      id: 1,
      name:  '天外来物',
      author: '薛之谦',
      src:  '',
      poster:  'https://imgessl.kugou.com/stdmusic/20201231/20201231105006379600.jpg'
    },{
      id: 2,
      name:  '意外',
      author: '薛之谦',
      src:  '',
      poster:  'https://xcx.lxxno.cn/image/music/20150715184807521489.jpg'
    },{
      id: 3,
      name:  '绅士',
      author: '薛之谦',
      src:  '',
      poster:  'https://xcx.lxxno.cn/image/music/20200620070059819337.jpg'
    },{
      id: 4,
      name:  '经过',
      author: '陈楚生、何洁',
      src:  '',
      poster:  'https://imgessl.kugou.com/stdmusic/20200620/20200620075820729146.jpg'
    },{
      id: 5,
      name:  '安和桥',
      author: '宋冬野',
      src:  '',
      poster:  'https://xcx.lxxno.cn/image/music/20150718094554233878.jpg'
    },{
      id: 6,
      name:  '理想',
      author: '赵雷',
      src:  '',
      poster:  'https://xcx.lxxno.cn/image/music/20240315161120679915.jpg'
    }],
  },
  // 音乐播放状态信息
  state:  'running',
  playIndex:  0,
  play: {
    currentTime:  '00:00',
    duration: '00:00',
    percent:  0,
    name:  '',
    author: '',
    poster: '',
  },
  // 初次打开页面渲染时，自动选择播放列表中的第一个曲目
  audioBam: null,
  onReady:  function(){
    this.audioBam = wx.getBackgroundAudioManager()
    this.setMusic(0)  
    // 默认选择曲库第一首
  },
  setMusic: function (index){
    // 设置当前播放的曲目
    var music = this.data.playlist[index]
    this.audioBam.src = music.src
    this.audioBam.tittle = music.tittle
    this.setData({
      playIndex: index,
      'play.name': music.name,
      'play.author': music.author,
      'play.poster': music.poster,
      'play.currentTime':  '00:00',
      'play.duration': '00:00',
      'play.percent': 0,
      state: 'running'
    })
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