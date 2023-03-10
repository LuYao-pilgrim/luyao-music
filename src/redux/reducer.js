import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../pages/Recommend/store/index';
import { reducer as singersReducer } from '../pages/Singer/store/index';
import { reducer as rankReducer } from '../pages/Rank/store/index';

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer
});