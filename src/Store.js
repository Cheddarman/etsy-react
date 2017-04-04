import {createStore} from 'redux'
import EtsyReducer from './Reducers/EtsyReducer'

const store = createStore(EtsyReducer)

export default store