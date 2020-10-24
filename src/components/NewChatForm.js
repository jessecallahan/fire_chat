import React from "react";
import { useFirestore } from 'react-redux-firebase'
import firebase from "../firebase";

function NewChatForm() {
  const firestore = useFirestore();
  const user = firebase.auth().currentUser;

  function addChatToFirestore(event) {
    event.preventDefault();

    return firestore.collection('tickets').add(
      {
        name: user.displayName,
        text: event.target.text.value,
        user_id: user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }
    );
  }


  return (
    <React.Fragment>
      <form onSubmit={addChatToFirestore}>
        <textarea
          name='text'
          placeholder='Say Something...' />
        <button type='submit'>Send</button>
      </form>

    </React.Fragment>
  );
}

export default NewChatForm;

