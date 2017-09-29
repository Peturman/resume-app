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
