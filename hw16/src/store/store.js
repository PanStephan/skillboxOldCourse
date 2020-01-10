import {createStore} from 'redux'
import reducer from '../reducers'
import {loadState, saveState} from './localStorage'

const persistedState = loadState()

const store = createStore (
  reducer, /* preloadedState, */
  persistedState,
  (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    comments: store.getState().comments
  })
})

export default store