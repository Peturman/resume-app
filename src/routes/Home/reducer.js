import { initialState } from './setting'
// ------------------------------------
// Reducer
// ------------------------------------
export default function homeReducer (state = initialState, action) {
  return { ...state, ...action.payload }
}
