import { initialState } from './setting'
// ------------------------------------
// Reducer
// ------------------------------------
export default function userReducer (state = initialState, action) {
  return { ...state, ...action.payload }
}
