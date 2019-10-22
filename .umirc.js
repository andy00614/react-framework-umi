
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'react-framework',
      dll: true,
      
      // routes: {
      //   exclude: [
      //     /components\//,
      //   ],
      // },

    }],
  ],
  routes: [
    // Routes: ['./src/routes/PrivateRoute.js']
    {
      path:'/',
      redirect: '/index/search'
    },
    { 
      path: '/index', 
      component: '../layouts/index',
      routes:[
        { path: '/index/picture', component: './picture',Routes: ['./src/routes/PrivateRoute.js'] },
        { path: '/index/search', component: './search',Routes: ['./src/routes/PrivateRoute.js'] },
      ] 
    },
    { path: '/login', component: './login' },
  ],
  proxy: {
    "/api": {
      "target": "http://api.open.weshineapp.com/1.0/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/picmarkDemo": {
      // "target": "http://api.open.weshineapp.com/1.0/",
      "target": "http://10.216.6.118:9099",
      "changeOrigin": true,
      "pathRewrite": { "^/picmarkDemo" : "" }
    },
    // "/pic": {
    //   "target": 'http://10.216.6.118:9099',
      // "changeOrigin": true,
      // "pathRewrite": { "^/api" : "" }
    // }
  }
}
