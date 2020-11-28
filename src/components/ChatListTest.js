import React from "react";
import Chat from "./Chat";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function ChatListTest() {
  useFirestoreConnect([
    { collection: 'chat_rooms', orderBy: ['createdAt', 'desc'] }
  ])

  const chatList = useSelector(state => state.firestore.ordered.chat_rooms);
  console.log(chatList)
  console.log(chatList)

  if (isLoaded(chatList)) {
    const chatListItems = chatList[0].messages.map((chat) =>
      <Chat
        name={chat.name}
        text={chat.text}
        user_id={chat.user_id}
      />
    );
    return (
      <React.Fragment>
        <ul className="no-bullets">
          {chatListItems}
        </ul>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }

}

export default ChatListTest;