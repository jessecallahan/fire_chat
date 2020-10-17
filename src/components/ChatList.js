import React from "react";
import Chat from "./Chat";
import PropTypes from "prop-types";

function ChatList(props) {
  console.log(Object.values(props.chatList))
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.chatList).map((chat) =>
        <Chat
          name={chat.name}
          text={chat.text}
          id={chat.id}
          key={chat.id} />

      )}
    </React.Fragment>
  );
}

ChatList.propTypes = {
  chatList: PropTypes.object
};

export default ChatList;