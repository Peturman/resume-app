import { initialState } from './setting'
// ------------------------------------
// Reducer
// ------------------------------------
export default function loginReducer (state = initialState, action) {
  return { ...state, ...action.payload }
}
