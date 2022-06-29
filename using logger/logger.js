const { createStore, combineReducers, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

// constant
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

// ---------defining state---------
// product state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2
}

//--------- action-------------
// product actions
const getProductAction = () => {
  return {
    type: GET_PRODUCTS
  }
}
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product
  }
}

// ============ Reducer ==================
//--------------- product reducer ----------

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      }
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1
      }

    default:
      return state
  }
}

// root reducer

const rootReducer = combineReducers({
  productR: productsReducer
})

// store

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(getProductAction())
store.dispatch(addProductAction("pen"))
