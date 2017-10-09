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
export const getArticle = (id) => {
  return (dispatch, getState) => {
    fetchAPI('getArticleList', id).then((data) => {
      dispatch(set({ article: data.article }))
    })
  }
}

// 发布文章
export const createArticle = (params) => {
  return (dispatch, getState) => {
    return fetchAPI('createArticle', { ...params, author: 'peturman' })
  }
}
