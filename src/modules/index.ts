import { combineReducers } from 'redux';
import authReducer from 'amplify-auth-redux-module';
import menuReducer from './menu';
import documentationReducer from './documentation';
import articleReducer from './article';
import chaptereducer from './chapter';

export default combineReducers({
    auth: authReducer,
    menu: menuReducer,
    documentation: documentationReducer,
    chapter: chaptereducer,
    article: articleReducer,
});
