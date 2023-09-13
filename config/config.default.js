
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
    * built-in config
    * @type {Egg.EggAppConfig}
    **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660810955000_2288';

  // add your middleware config here
  config.middleware = [ 'onError' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config.redis = {
  //   client: {
  //     port: 6379, // Redis port
  //     host: '127.0.0.1', // Redis host
  //     password: '',
  //     db: 0,
  //   },
  // };

  // 正式项目要开启
  config.security = {
    csrf: {
		  enable: false,
    },
  };

  config.userData = {
    mineBirth: "1990-12-05", // 自己的生日
    wfBirth: "1986-02-01", // 老婆的生日
    loveDay: "2021-12-26", // 在一起的日期
    babyBirth: "2022-10-10", // 孩子生日
    weatherCity: '成都市' // 需要获取天气的城市，必须时xx市，xx县，xx自治区, 详细可以去utils/amap.js搜索到就可以，比如广州市，不能是广州
  }

  config.userCity = {
    "adname":"成都市",
    "adcode":"610000"
  }

  // 寄言 一旦设置了就不会请求接口，在这里随机返送一条
  config.words = [
    "我愿与君同舟，共济沧海，共赴人生之约。",
    "及时行乐，活在当下。",
    "但行前路，不负韶华！",
    "试一下，你会比你自己想象中的还要强大",
    "眼里有不朽的光芒 心里有永恒的希望",
    "生活很苦，但不要放弃爱与希望",
    "得之坦然，失之淡然，争取必然，顺其自然。"
  ]

  // 手动设置彩虹屁
  config.caihongpi = [
    "你今天真好看",
    "有毛病吧，长这么好看是要怎样？",
    "原来美女杀人都是靠脸的。",
    "我真的是服了你这个沉鱼落雁的仙女。",
    "如果可爱可以分等级你一定是特等",
    "我遇见你就像东北人吃面，毫无剩蒜",
    "好想做姐姐的马，只想听她说一声“嫁”",
    "至今不知你在天上犯了什么错",
    "我的寸头为你而留！！！",
    "你再不回去迪士尼就要没公主了！！！！"
  ]

  return {
    ...config,
    ...userConfig,
  };
};
