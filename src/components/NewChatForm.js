import React from "react";
import { useFirestore } from 'react-redux-firebase'

function NewChatForm() {
  const firestore = useFirestore();

  console.log(firestore)

  function addChatToFirestore(event) {
    event.preventDefault();
    // props.onNewChatCreation();
    return firestore.collection('tickets').add(
      {
        name: "jesse",
        text: event.target.text.value
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

