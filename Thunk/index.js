// async action - api calling
// api url = https://jsonplaceholder.typicode.com/todos
// middlewere = redux thunk
// axios api
// states
// actions
// reducers
// store and dispatch
//  ==================================================================
//-------------- defining constant ------------

const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const reduxThunk = require("redux-thunk").default

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"
// -------------- state  -------------

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null
}

// -------- actions --------------

const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  }
}

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error
  }
}

const getTodoSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos
  }
}

// --------------reducers ------------

const todoReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload
      }
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}

// async action creator //
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest())
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data
        const titles = todos.map((todo) => todo.title)
        dispatch(getTodoSuccess(titles))
      })
      .catch((error) => {
        const errorMessage = error.message
        dispatch(getTodosFailed(errorMessage))
      })
  }
}

// -------------store -------------
const store = createStore(todoReducer, applyMiddleware(reduxThunk))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchData())
