const serverHost = __DEV__ ? 'http://localhost:3389' : `http://120.77.147.197:3389`

export default {

  // 登录，授权生成token
  createAccessToken: {
    url: `${serverHost}/api/oauth/token`,
    method: `POST`
  },

  // 注册
  createUser: {
    url: `${serverHost}/api/users/create`,
    method: `POST`
  },

  // 恢复token
  refreshAccessToken: {
    url: `${serverHost}/api/oauth/token`,
    method: `POST`
  },

  // 获取用户信息
  getUserInfo: {
    url: `${serverHost}/api/users/info`,
    method: `GET`
  },

  // 获取文章列表
  getArticleList: {
    url: `${serverHost}/api/articles`,
    method: `GET`
  },

  // 获取文章详情
  getArticle: {
    url: `${serverHost}/api/articles`,
    method: `GET`
  },

  // 发布文章
  createArticle: {
    url: `${serverHost}/api/articles`,
    method: `POST`
  },

  // 修改文章
  updateArticle: {
    url: `${serverHost}/api/articles/:id`,
    method: `PUT`
  }
}
