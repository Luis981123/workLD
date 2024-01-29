import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SupportModal from '../../components/Modal/SupportModal';

class BlankChatPage extends Component {
  constructor(props) {
      super(props) ;
      this.state = {
          ie: true,
          company: false,
          person: false,
          modalState: false,
          readState: false,
      };
  }

  handleModal = () => {
    this.setState({
      modalState: true
    })
  }

  handleCancel = (data) => {
    this.setState({
      modalState: data
    })
  }

  render() {
    return (
        <div className='flex flex-1 flex-col items-center md:items-start mx-auto w-full max-w-main mt-8 p-3'>
          <div className='md:flex-row flex-col flex w-full justify-between'>
            <div className=' mb-4 flex justify-center md:justify-start md:items-center   font-semibold'>
              <p className='text-2xl'>Сообщения</p>
            </div>
            <button className='bg-transparent w-full md:w-60 text-button font-semibold py-2 px-4 border border-button rounded-lg'>
              <Link onClick={this.handleModal}>
                Написать в техподдержку
              </Link>
            </button>
          </div>
          <div className='md:w-2/3 w-full flex justify-start'>
            <p>Здесь будет перепеиска с соискателями</p>
          </div>
          <SupportModal open={this.state.modalState} onCancel={ this.handleCancel } />
        </div>
    );
  }
          
}

export default BlankChatPage;
