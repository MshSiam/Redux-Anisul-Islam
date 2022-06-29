const { createStore } = require("redux")

// defining const
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

//  state //
const initialCounterState = {
  count: 0
}

const initialUsersState = {
  users: [{ name: "siam" }]
}

// -------- action -object (type, payload) ------------
// 1. increment counter

// whatever we want to do is an action it is an object. in an action there are 2 things. type (must) and payload (optional).

const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

// 2. decrement counter
const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}

// add user
// if we want to pass data in reducer, then we have to use payload.

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: { name: user }
  }
}

// creating reducer for counter. //
// reducer is a pure function. A pure function is a function that take inpute and provides output surely.
// reducer update our state according to action

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      state
  }
}

// 1 . state
// 2 . dispatch
// 3 . reducer
// 4 . store

// .............store ............... //
// store has 3 methodes. such as getState(), diuspatch(), subscribe().

// creating Store

const store = createStore(counterReducer)
store.subscribe(() => {
  console.log(store.getState())
})

// dispatch action

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
