import { initialState } from './setting'
// ------------------------------------
// Reducer
// ------------------------------------
export default function arcgisReducer (state = initialState, action) {
  return { ...state, ...action.payload }
}
