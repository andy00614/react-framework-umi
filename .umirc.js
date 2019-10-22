
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
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
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
