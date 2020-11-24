import React from "react";
import PropTypes from "prop-types";

function Chat(props) {
  return (
    <React.Fragment>
      <div className="background-blue">
        <h3>{props.name}:</h3>
        <p><em>{props.text}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Chat.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
};

export default Chat;
