import React from 'react';
import NewChatForm1 from './NewChatForm1';
import ChatListTest from './ChatListTest';
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
        <div className="parent">

          <div className="div2">
            <NewChatForm1 onNewChatCreation={this.handleAddingNewChatToList} />
            <ChatFireAnimation />
          </div>
          <div className="div3">
            <ChatListTest chatList={this.props.masterChatList} />

          </div>
        </div>
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