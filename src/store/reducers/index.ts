import {CombinedState, combineReducers, Reducer} from 'redux';
import {LoginState} from 'screens/Login/login.action';
import loginReducer from 'screens/Login/login.reducer';

export interface GlobalState {
  LOGIN: LoginState;
}

const createRootReducer = (): Reducer<CombinedState<GlobalState>> =>
  combineReducers<GlobalState>({
    LOGIN: loginReducer,
  });

export default createRootReducer;
