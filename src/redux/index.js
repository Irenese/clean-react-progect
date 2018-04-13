import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({

})
let middleware = [thunk]

const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware)),
)

export default store
