import React from "react";
import PropTypes from "prop-types";

function Chat(props) {
  console.log(props)
  return (

    <React.Fragment>
      <h3>{props.name}:</h3>
      <p><em>{props.text}</em></p>
      <hr />
    </React.Fragment>
  );
}

Chat.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string
};

export default Chat;
