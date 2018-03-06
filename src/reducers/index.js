import { combineReducers } from 'redux';
import AuthenticatedReducer from './reducer_authenticated';

const rootReducer = combineReducers({
  authenticated: AuthenticatedReducer
});

export default rootReducer;
