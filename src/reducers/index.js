import { combineReducers } from 'redux';
import chatListReducer from './chat-list-reducer';

const rootReducer = combineReducers({
  masterChatList: chatListReducer
});

export default rootReducer;