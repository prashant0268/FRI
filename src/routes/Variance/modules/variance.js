// ------------------------------------
// Constants
// ------------------------------------
export const VARIANCE_INCREMENT = 'VARIANCE_INCREMENT'
export const DOUBLE_VARIANCE = 'DOUBLE_VARIANCE'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : VARIANCE_INCREMENT,
    payload : value
  }
}

export function double () {
  return {
    type    : DOUBLE_VARIANCE
  }
}

export const actions = {
  increment, double
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [VARIANCE_INCREMENT] : (state, action) => state + action.payload,
  [DOUBLE_VARIANCE] : (state, action) => state + state

}



// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function varianceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
