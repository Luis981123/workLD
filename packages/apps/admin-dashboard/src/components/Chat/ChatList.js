import React, { Component } from 'react';
import ChatListMessages from './ChatListMessages';
import ChatListMessagesRead from './ChatListMessagesRead';
import { Link } from 'react-router-dom';
import ProfileModal from '../Modal/ProfileModal';
import DialogChatModal from '../Modal/DialogChatModal';


class ChatList extends Component {
  constructor(props) {
      super(props) ;
      this.state = {
        readState: false,
        chatModalState: false,
        profileModalState: false,
      };
  }

    handleChatModal = () => {
        this.setState({
            readState: true,
            chatModalState: !this.state.chatModalState
        })
    }

    handleDataFromProfileModal = (data) => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleDataFromButtonOnProfile = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleDataFromChatModalUserIcon = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleCancel = () => {
        this.setState({
            chatModalState: false
        })
    }

  render() {
    return (
        <div className='mt-3 chatlist w-full flex flex-col items-center'>
            <div
            className='h-96 overflow-y-scroll border-1 shadow-sm border-gray-300 rounded-lg w-full  '
            style={{ maxHeight: 'calc(100vh - 288px)' }}
            >
                <ul className='flex flex-col zero:w-full p-2'>
                    {
                    !this.state.readState ?
                        <Link onClick={this.handleChatModal}>
                        <ChatListMessagesRead />
                        </Link> : 
                        <Link onClick={this.handleChatModal}>
                        <ChatListMessages />
                        </Link>
                    }
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                    <ChatListMessages />
                </ul>
            </div>
            <ProfileModal
                open={this.state.profileModalState}
                sendDataToParent={this.handleDataFromProfileModal}
                sendDataToParentFromButton={this.handleDataFromButtonOnProfile}
            />

            <DialogChatModal
                open={this.state.chatModalState}
                sendDataToParent={this.handleDataFromChatModalUserIcon}
                onCancel={this.handleCancel}
            />
        </div>
    );
  }
}

export default ChatList;
