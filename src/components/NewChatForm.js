import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewChatForm(props) {

  function handleNewChatFormSubmission(event) {
    event.preventDefault();
    props.onNewChatCreation({ name: "Jesse", text: event.target.text.value, id: v4() });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewChatFormSubmission}>
        <textarea
          name='text'
          placeholder='Say Something...' />
        <button type='submit'>Send</button>
      </form>

    </React.Fragment>
  );
}

NewChatForm.propTypes = {
  onNewChatCreation: PropTypes.func
};

export default NewChatForm;

