import React, { useState } from "react";
import { useFirestore } from 'react-redux-firebase'
// import firebase from "../firebase";

function CreateChatRoom() {
  const firestore = useFirestore();
  const [room, setRoom] = useState(); // new code
  let roomname = {
    messages: [],
    list_of_users: [],
    createdAt: firestore.FieldValue.serverTimestamp()
  };

  function addChatRoomToFirestore(event) {
    event.preventDefault();
    console.log(room)
    firestore.collection('chat_rooms').doc(room).set(roomname);
    setRoom(""); // for emptying the old msg
  }

  return (
    <React.Fragment>
      <form onSubmit={addChatRoomToFirestore}>
        <textarea
          value={room}
          onChange={(ev) => setRoom(ev.target.value)} // new code
          placeholder="Name your chat room..."
        />
        <button type="submit">Send</button>
      </form>
    </React.Fragment>
  );
}

export default CreateChatRoom;