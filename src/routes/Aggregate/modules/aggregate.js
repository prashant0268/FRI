// ------------------------------------
// Constants
// ------------------------------------
export const AGGREGATE_SOMEFUNC = 'AGGREGATE_SOMEFUNC'

// ------------------------------------
// Actions
// ------------------------------------
export function somefunc () {
  return {
    type    : AGGREGATE_SOMEFUNC
  }
}


export const actions = {
  somefunc 
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [AGGREGATE_SOMEFUNC] : (state, action) => state + action.payload
}



// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function aggregateReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
