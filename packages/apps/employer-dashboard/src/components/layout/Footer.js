import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SupportModal from '../../components/Modal/SupportModal'

class Footer extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
        showButton: false,
        modalState: false,
    };
  }
  handleScroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      this.setState({
        showButton: true
      })
    } else {
      this.setState({
        showButton: false
      })
    }
  };
  
  backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleModal = () => {
    this.setState({
      modalState: true
    })
  }

  handleCancel = (state) => {
    this.setState({
      modalState: state
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    return () => {
      window.removeEventListener("scroll", this.handleScroll);
    };
  }

  render() {
    return (
      <div className=''>
        <footer className='shadow bg-footer h-full mb-0'>
          <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <Link onClick={this.handleModal} className='flex items-center mb-4 sm:mb-0'>
                <span className='self-center text-[#fff] text-lg font-normal opacity-80 whitespace-nowrap'>
                  Связть с тех. поддержкой
                </span>
              </Link>
              <span className='self-center text-[#fff] text-xl font-normal opacity-80 whitespace-nowrap'>
                8 999 9999 99
              </span>
            </div>
          </div>
        </footer>
        <SupportModal open={ this.state.modalState } onCancel={ this.handleCancel } />
        { this.state.showButton ? (
            <Link onClick={this.backToTop} id='backTop' className='fixed  bottom-[30px] right-[30px] bg-[#00B2A4] !text-[#fff] w-[36px] h-[36px] text-center text-xl leading-[33px] rounded-md p-[6px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="customIcon">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </Link>
          ) : ''
        }
      </div>
    );
  }
}

export default Footer;
