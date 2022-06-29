const { createStore } = require("redux")

// const

const INCERMENT_BY_VALUE = "INCREMENT_BY_VALUE"

//state//

const initialState = {
  count: 0
}

// action

const incremenetByValue = (value) => {
  return {
    type: INCERMENT_BY_VALUE,
    payload: value
  }
}

// reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCERMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload
      }

    default:
      state
  }
}

// store
const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incremenetByValue(13))
