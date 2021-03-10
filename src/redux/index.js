import counterReducer from './reducers/counter';
import loggedReducer from './reducers/islogged';
import PostReducer from './reducers/PostReducer'
import {combineReducers} from 'redux'
import userReducer from '../redux/reducers/userReducer'


const allReducers = combineReducers({

    counter:counterReducer,
    islogged:loggedReducer,
    
    users: userReducer,

    posts :PostReducer


    


     
})

export default allReducers;