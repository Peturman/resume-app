import fetchAPI from 'api'
// ------------------------------------
// Actions
// ------------------------------------
export const set = (params) => {
  return {
    type: 'SET',
    payload: params
  }
}

// 获取文章列表
export const getArticleList = () => {
  return (dispatch, getState) => {
    fetchAPI('getArticleList').then((data) => {
      dispatch(set({ articleList: data }))
    })
  }
}

// 获取文章列表
export const createArticle = () => {
  return (dispatch, getState) => {
    fetchAPI('createArticle', {
      title: 'Nginx服务器搭建555555',
      author: 'Peturman555',
      description: '###### 有问题反馈333',
      content: '###### 有问题反馈 你快回来，这是文章内容333'
    }).then(() => {
      dispatch(getArticleList())
    })
  }
}
