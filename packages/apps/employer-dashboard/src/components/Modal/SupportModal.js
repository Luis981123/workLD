import React, { Component } from 'react'
import { Modal } from 'antd';

class SupportModal extends Component {
    constructor(props) {
        super(props) ;
        this.state = {

        };
    }

    handleSendDataToParent = () => {
        // const dataToSend = !this.props.open;
        // this.props.sendDataToParent(dataToSend);
    }

    handleCancel = () => {
        this.props.onCancel(false);
    }

    render() {
        return (
            <Modal
                open={this.props.open}
                onCancel={this.handleCancel}
                title="Написать в тех.поддержку"
                width={600}
                footer={(_, {  }) => (
                <>
                    {/* <Button>Custom Button</Button>
                    <CancelBtn /> */}
                </>
                )}
            >
            <div className="space-y-5">
                <div className='flex flex-col mx-auto gap-y-5 mt-5'>
                <input
                    type='text'
                    id=''
                    className='shadow-sm mb-3 text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                    placeholder='Тема сообщения'
                    required
                />
                <textarea
                    id=''
                    rows='4'
                    className='block text-black w-full mb-3 p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                    placeholder='Ваше сообщение'
                ></textarea>

                <button className='bg-button text-white font-bold py-2 px-4 rounded-lg w-full middle:w-40' onClick={this.handleCancel}>
                    Отправить
                </button>
                </div>
            </div>
            </Modal>
        )
    }
}

export default SupportModal;