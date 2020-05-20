import { combineReducers } from 'redux';
import authReducer from 'amplify-auth-redux-module';

export default combineReducers({
    auth: authReducer,
});
