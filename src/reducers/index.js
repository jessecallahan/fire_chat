import { combineReducers } from 'redux';
import chatListReducer from './chat-list-reducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  masterChatList: chatListReducer,
  firestore: firestoreReducer
});

export default rootReducer;