import { initialState } from './setting'
// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state = initialState, action) {
  return { ...state, ...action.payload }
}
