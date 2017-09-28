import fetchAPI from 'api'
import setCookie from 'until/cookie'
// ------------------------------------
// Actions
// ------------------------------------
export const set = (params) => {
  return {
    type: 'SET',
    payload: params
  }
}

// 获取用户信息
export const getUserInfo = (id) => {
  return (dispatch, getState) => {
    console.log(getState())
    fetchAPI('getUserInfo').then((data) => {
      dispatch(set({ userInfo: data }))
    })
  }
}

// 登录
export const login = (values) => {
  return (dispatch, getState) => {
    return fetchAPI('createAccessToken', {
      username: values.userName,
      password: values.password,
      grant_type: 'password',
      client_id: 'android',
      client_secret: 'SomeRandomCharsAndNumbers'
    }).then(function (data) {
      setCookie('userToken', JSON.stringify(data), 1)
      dispatch(set({ loginInfo: data }))
    })
  }
}
