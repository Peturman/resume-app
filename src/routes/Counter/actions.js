// ------------------------------------
// Actions
// ------------------------------------
export const set = (params) => {
  return {
    type: 'SET',
    payload: params
  }
}

export const increment = () => {
  return (dispatch, getState) => {
    const { count } = getState().counter
    dispatch(set({ count: count + 1 }))
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      const { count } = getState().counter
      setTimeout(() => {
        dispatch(set({
          count: count * 2
        }))
        resolve()
      }, 200)
    })
  }
}
