import { randomNum } from '../src/common/dealNum'

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  'GET /api/currentUser': {
    name: 'momo.zxy',
    // avatar: imgMap.user,
    userid: '00000001',
    notifyCount: 12,
  },
  'GET /skin/allskin': (req, res) => {
    const skin_list = []
    const categoryList = ['卡通','动漫','风景','人物','用具','游戏','动物','工具','画']
    const total = 200
    for(let i = 0; i < total; i++) {
      const t = {
        id: i,
        category: categoryList[randomNum(0,categoryList.length - 1)],
        name: `皮肤名称${i+1}`,
        picture: 'http://pub1-bjyt.s3.360.cn/image/20191024195957107-31860-91.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=C3naZCPu3sxPWp3KSSKl%2F20191025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191025T090720Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=c81c9e22b86a7596fc7d1e1fc5bf2134ecb2ca6e54c023f1ddbaa15f6cacd857',
        
        zip_url: 'zip_url',
        flag: randomNum(1,2),
        weight: randomNum(0,100)
      }
      skin_list.push(t)
    }
    res.send(JSON.stringify({
      total,
      skin_list
    }))
  },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.send('OK'); },
};