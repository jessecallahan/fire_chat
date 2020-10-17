import React from 'react';
import NewChatForm from './NewChatForm';
import ChatList from './ChatList';
import ChatFireAnimation from './ChatFireAnimation'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ChatControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //nothing in local state yet
    };
  }

  // handleAddingNewChatToList = (newChat) => {
  //   const { dispatch } = this.props;
  //   const { id, name, text } = newChat;
  //   const action = {
  //     type: 'ADD_TICKET',
  //     id: id,
  //     name: name,
  //     text: text
  //   }
  //   dispatch(action);
  // }

  render() {
    return (
      <React.Fragment>
        <ChatList chatList={this.props.masterChatList} />
        <NewChatForm onNewChatCreation={this.handleAddingNewChatToList} />
        <ChatFireAnimation />
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    masterChatList: state.masterChatList
  }
}

ChatControl.propTypes = {
  masterChatList: PropTypes.object
};

ChatControl = connect(mapStateToProps)(ChatControl);

export default ChatControl;