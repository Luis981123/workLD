import React, { Component } from 'react'
import { Modal } from 'antd';
import Avatar from '../../submodule/img/01.jpg';
import { Link } from 'react-router-dom';

class ProfileModal extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            divStatus: false,
        };
        this.handleModal = this.handleModal.bind(this);
        this.handleDivChange = this.handleDivChange.bind(this);
    }

    handleModal() {
        
    }

    handleDivChange() {
        this.setState({
            divStatus: !this.state.divStatus
        });
    }

    handleSendDataToParent = () => {
        const dataToSend = !this.props.open;
        this.props.sendDataToParent(dataToSend);
    }

    handleSendDataToParentFromButton = () => {
        this.props.sendDataToParentFromButton();
    }

    render() {
        return (
            <Modal
                open={this.props.open}
                onCancel={this.handleSendDataToParent}
                width={1000}
                footer={(_, {  }) => (
                <>
                    {/* <Button>Custom Button</Button>
                    <CancelBtn /> */}
                </>
                )}
            >
                <div className='mx-auto p-6 flex flex-col first:flex-row w-full'>
                    <div className='flex w-full first:w-[20%] mt-0 first:mt-8 mb-2 justify-center'>
                        <img
                            src={Avatar}
                            className='avatar avatar-md-sm rounded-sm w-[200px] h-[200px] p-5'
                            alt='avatar'
                        />
                    </div>
                    <div className='flex w-full first:w-[60%] mt-0 first:mt-8 mb-2 p-5'>
                        <div className='flex flex-col justify-start'>
                            <p className='text-2xl font-medium mb-3'>Иванов Иван Иванович</p>
                            <p className='text-xl font-medium mb-3'>муж, 30 лет</p>
                            <p className="text-xs font-medium mb-3 text-shaded-text">Адрес</p>
                            <p className='text-xl font-medium mb-3'>г. Краснодар, ул. Гидростроителей, 65б</p>
                            <p className="text-xs font-medium mb-3 text-shaded-text">Telegram</p>
                            <p className='text-xl font-medium mb-3'>username</p>
                            <p className="text-xs font-medium mb-3 text-shaded-text">Телефон</p>
                            <p className='text-xl font-medium mb-5'>8 999 999 99 99</p>
                            <p className='text-xl font-medium mb-3'>Комментарий менеджера</p>
                            <Link onClick={this.handleDivChange} className=''>
                                <p className='flex flex-row text-2xs font-medium mb-3 text-shaded-text'>
                                    Не заполнен
                                    {
                                        this.state.divStatus ?
                                            <span className='pl-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path strokeLineCap="round" strokeLineJoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </span> :
                                            <span className='pl-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path strokeLineCap="round" strokeLineJoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                    }
                                </p>
                            </Link>
                            { 
                                this.state.divStatus ?
                                    <div className='mb-3 animate-fade-down animate-duration-[3000ms] animate-delay-[10ms] animate-ease-in'>
                                        <p>He is Senior Developer!!!</p>
                                    </div> : ''
                            }
                        </div>
                    </div>
                    <div className='flex w-full first:w-[20%] mt-0 first:mt-8 mb-2 p-5'>
                        <div className='mb-4'>
                            <button
                                type='button'
                                onClick={this.handleSendDataToParentFromButton}
                                className='text-center text-[14px] border rounded py-2 px-4 mb-2 text-white  mr-2 w-full break-words p-2 xs:w-full hover:bg-[#069488] bg-[#00B2A4]'
                            >
                                {/* <Link to={`/pagedialogchat`}> */}
                                    Написать сообщение
                                {/* </Link> */}
                            </button>
                        </div>
                        
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ProfileModal;