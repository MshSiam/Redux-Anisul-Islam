// declare a state
// action (increment, decrement, reset)
// reducer
// store

const { createStore } = require("redux")

// constant //
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const ADD_USER = "ADD_USER"

// ---------- state ----------
const initialState = {
  count: 0
}
const initialUsersState = {
  users: ["siam"],
  cou
}

// -----------actionn ------------
const incrementByVlaueAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value
  }
}
const incrementAction = () => {
  return {
    type: INCREMENT
  }
}

const decrementAction = () => {
  return {
    type: DECREMENT
  }
}

const resetAction = () => {
  return {
    type: RESET
  }
}

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

// --------- Reducer -------------//
const counterReducer = (state = initialState, action) => {
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
    case RESET:
      return {
        ...state,
        count: 0
      }

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload
      }

    default:
      state
  }
}

const userReducer = ((state = initialUsersState), action)=>{
  switch (action.type) {
    case ADD_USER:
      return{
        users : [...state , action.payload],
        count: state.count + 1
      }  
    default:
      break;
  }
}

// -------------store------------//
// const store = createStore(counterReducer)
const store2 = createStore(userReducer)

store.subscribe(() => {
  // console.log(store.getState())
  console.log(store2.getState())
})
store2.dispatch(addUser("mahin"))

// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementByVlaueAction(500))
// store.dispatch(incrementByVlaueAction(100))
// store.dispatch(decrementAction())
// store.dispatch(decrementAction())
// store.dispatch(resetAction())
