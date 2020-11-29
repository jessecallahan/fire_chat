import React, { useState } from "react";
import { useFirestore } from 'react-redux-firebase'
import firebase from "../firebase";

function NewChatForm() {

  const firestore = useFirestore();
  const user = firebase.auth().currentUser;
  const [msg, setMsg] = useState(); // new code
  function addChatToFirestore(event) {
    event.preventDefault();
    firestore.collection('chat_rooms').doc('chatroom').update({

      messages: firestore.FieldValue.arrayUnion({
        name: user.displayName, user_id: user.uid, text: msg
      })
    });


    setMsg(""); // for emptying the old msg
  }

  return (
    <React.Fragment>
      <form onSubmit={addChatToFirestore}>
        <textarea
          name="text"
          value={msg}
          onChange={(ev) => setMsg(ev.target.value)} // new code
          placeholder="Say Something..."
        />
        <button type="submit">Send</button>
      </form>
    </React.Fragment>
  );
}

export default NewChatForm;


