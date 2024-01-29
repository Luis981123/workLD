import React, { Component } from 'react';
import Avatar from '../../submodule/img/01.jpg';
import ProfileModal from '../Modal/ProfileModal';
import DialogChatModal from '../Modal/DialogChatModal';

class FeedBacksMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileModalState: false,
            chatModalState: false,
        };
        this.handleProfileModal = this.handleProfileModal.bind(this);
    }

    handleProfileModal() {
        this.setState({
            profileModalState: !this.state.profileModalState
        })
    }

    handleDataFromProfileModal = (data) => {
        this.setState({
            profileModalState: data
        })
    }

    handleDataFromButtonOnProfile = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleDataFromChatModal = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleCancel = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    render() {
        return (
        <div>
            <li className='flex w-full mx-atuo customBottomBorder cursor-pointer mb-2 p-2' onClick={this.handleProfileModal}>
                <div className='flex justify-content'>
                    <img src={Avatar} className='w-[45px] h-[45px]'/>
                </div>
                <div className='flex flex-col text-left text-[#212529] font-bold pl-3'>
                    <p>18:55 15.06.2022</p>
                    <p>Васильев Василий Васильевич</p>
                </div>
            </li>
            
            <ProfileModal
                open={this.state.profileModalState}
                sendDataToParent={this.handleDataFromProfileModal}
                sendDataToParentFromButton={this.handleDataFromButtonOnProfile}
            />

            <DialogChatModal
                open={this.state.chatModalState}
                sendDataToParent={this.handleDataFromChatModal}
                onCancel={this.handleCancel}
            />
        </div>
        );
    }
}

export default FeedBacksMessage;
