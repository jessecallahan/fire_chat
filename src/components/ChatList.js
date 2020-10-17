import React from "react";
import Chat from "./Chat";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function ChatList(props) {
  useFirestoreConnect([
    { collection: 'tickets' }
  ]);

  const chatList = useSelector(state => state.firestore.ordered.tickets);

  if (isLoaded(chatList)) {
    return (
      <React.Fragment>
        <hr />
        {chatList.map((chat) =>
          <Chat
            name={chat.name}
            text={chat.text}
            id={chat.id}
            key={chat.id} />

        )}
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

export default ChatList;