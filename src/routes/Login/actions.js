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
