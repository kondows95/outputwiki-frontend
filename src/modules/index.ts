import { combineReducers } from 'redux';
import authReducer from 'amplify-auth-redux-module';
import menuReducer from './menu';

export default combineReducers({
    auth: authReducer,
    menu: menuReducer,
});
