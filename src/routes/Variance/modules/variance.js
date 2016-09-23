import type { VarianceObject } from '../interfaces/variance.js'

// ------------------------------------
// Constants
// ------------------------------------
export const SAY_HELLO = 'SAY_HELLO'

// ------------------------------------
// Actions
// ------------------------------------

export function sayHello(){
    console.log("export function sayHello(){");
    return {
        type : SAY_HELLO
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAY_HELLO] : (state: VarianceObject) => {
      var someCounter = state.counter + 2
      return ({ ...state, counter: someCounter })
  }
}



// ------------------------------------
// Reducer
// ------------------------------------

const initialState: VarianceObject = {counter: 10, id:1234, value:"some value", consoleArray:[]}
export default function varianceReducer (state = initialState, action) {
    console.log("export default function varianceReducer (state = initialState, action) {");
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
