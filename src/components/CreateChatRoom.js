import React, { useState } from "react";
import { useFirestore } from 'react-redux-firebase'
// import firebase from "../firebase";

function CreateChatRoom() {
  const firestore = useFirestore();
  // const [roomname] = useState()
  let roomname = {
    messages: [],
    list_of_users: [],
    createdAt: firestore.FieldValue.serverTimestamp()
  };

  function addChatRoomToFirestore(event) {
    event.preventDefault();
    firestore.collection('chat_rooms').doc('chatroom').set(roomname);
    // setMsg(""); // for emptying the old msg
  }

  return (
    <React.Fragment>
      <form onSubmit={addChatRoomToFirestore}>
        <textarea
          name="text"
          // onChange={(ev) => setMsg(ev.target.value)} // new code
          placeholder="Name your chat room..."
        />
        <button type="submit">Send</button>
      </form>
    </React.Fragment>
  );
}

export default CreateChatRoom;