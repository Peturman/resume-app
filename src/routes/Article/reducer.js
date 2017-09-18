import { initialState } from './setting'
// ------------------------------------
// Reducer
// ------------------------------------
export default function articleReducer (state = initialState, action) {
  return { ...state, ...action.payload }
}
