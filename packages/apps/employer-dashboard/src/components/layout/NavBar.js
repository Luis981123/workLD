import React, { Component } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import logo from '../../submodule/img/Workld_Logo_Color_Hor_2-page-1.png';
import { Modal } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  constructor(props) {
    super(props) ;
    this.state = {
        isEdit: false,
        headerModalState: false,
    };
    this.setOpenHeaderModal = this.setOpenHeaderModal.bind(this);
    this.setHideHeaderModal = this.setHideHeaderModal.bind(this);
    this.setIsEdit = this.setIsEdit.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }
  
  classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  setOpenHeaderModal() {
    this.setState({
        headerModalState: true
    })
  }

  setHideHeaderModal() {
    this.setState({
        headerModalState: false
    })
  }

  setIsEdit()  {
    this.setState({
      isEdit: true
    })
  }

  handleStatus() {
      Swal.fire({
          title: "Вы точно хотите изменить данные для входа?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Да",
          cancelButtonText: "Нет"
          }).then((result) => {
              if (result.isConfirmed) {
                this.setState({
                    isEdit: false,
                    headerModalState: false
                })
              }
      })
  }

  render() {
    return (
      <div className=''>
        <nav className='flex first:justify-evenly justify-center mt-5 first:ml-16 text-slate-900 font-semibold text-sm'>
          <div className='first:flex uppercase  items-center justify-center'>
            <div className='sm:mr-10 flex items-center'>
              <Link to={`/`}><img src={logo} alt='' className='sm:h-10 xs:h-7 h-6 mt-1' /></Link>
            </div>
            <div className='hidden first:block'>
              <ul className='flex gap-16 font-semibold mt-2 tracking-widest'>
                <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                  <Link to={`/vacancy`}>
                    Вакансии
                  </Link>
                </li>
                <li className='cursor-pointer w-auto hover:text-emerald-500 transition ease-in-out duration-300'>
                  <Link to={`/job`}>
                    Поиск и Подбор Персонала
                  </Link>
                </li>
                <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                  <Link to={`/chat`}>
                    Сообщения
                  </Link>
                </li>
                <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                  <Link to={`/blankChat`}>
                    Сообщения(впервые)
                  </Link>
                </li>
              </ul>
              {/* <button onClick={this.setOpenHeaderModal()} className='text-[#000]'>sssss</button> */}
            </div>
          </div>
          <div className='text-md ml-3.5 flex justify-center items-center first:w-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex icon icon-tabler icon-tabler-alert-triangle self-center mt-1 align-middle text-yellow-500'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M12 9v2m0 4v.01'></path>
                <path d='M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75'></path>
              </svg>
            <Menu as='div' className='relative inline-block text-left mt-1'>
              <div>
                <Menu.Button className='inline-flex w-full justify-center items-center gap-x-1.5 font-normal px-3 text-gray-900 cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300 text-sm xs:text-base'>
                  
                  Ник контрагента
                </Menu.Button>
              </div>
  
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/registerAgency`}
                          className={this.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'flex px-4 py-2 text-sm',
                          )}
                        >
                          Заполнение Информаций
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='flex icon icon-tabler icon-tabler-alert-triangle self-center ml-1 align-middle text-yellow-500'
                            width='18'
                            height='18'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                            <path d='M12 9v2m0 4v.01'></path>
                            <path d='M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75'></path>
                          </svg>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item >
                      {({ active }) => (
                        <Link
                          onClick={this.setOpenHeaderModal}
                          className={this.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Настройки входа
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/`}
                          className={this.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Выход
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>    
          </div>
          <div className='first:hidden sm:flex flex-shrink-0 items-center justify-end '>
            <Menu as="div" className="relative inline-block text-left w-full">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:text-[#00B2A4]">
                      <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
                      </svg>
                    {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-[#fff] focus:outline-none">
                    <div className="py-1">
                        <Menu.Item className="flex hover:text-[#00B2A4]">
                        {({ active }) => (
                            <Link
                            to={`/vacancy`}
                            className={this.classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm uppercase'
                            )}
                            >
                                Вакансии
                            </Link>
                        )}
                        </Menu.Item>
                        <Menu.Item> 
                        {({ active }) => (
                            <Link
                            to={`/job`}
                            className={this.classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'flex px-4 py-2 text-sm uppercase'
                            )}
                            >
                                  Поиск и подбор персонала 
                            </Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <Link
                            to={`/chat`}
                            className={this.classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm uppercase'
                            )}
                            >
                                Сообщения 
                            </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                          {({ active }) => (
                              <Link
                              to={`/blankChat`}
                              className={this.classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm uppercase'
                              )}
                              >
                                  Сообщения(впервые) 
                              </Link>
                          )}
                          </Menu.Item>
                    </div>
                    </Menu.Items>
                </Transition>
            </Menu>
          </div>
        </nav>
        {/* <div className='flex justify-center items-center mr-5'>
          {this.state.isOpen ? (
            <ul className='first:hidden border text-center flex flex-col items center justify-center rounded-lg shadow-md border-gray-400 items-center mt-5 gap-3 w-1/2'>
              <li className='cursor-pointer text-xl hover:text-emerald-500 transition ease-in-out duration-300'>
                <a href='/vacancy'>Вакансии</a>
              </li>
              <li className='cursor-pointer text-xl hover:text-emerald-500 transition ease-in-out duration-300'>
                <a href='/job'>Поиск и Подбор Персонала</a>
              </li>
              <li className='cursor-pointer text-xl hover:text-emerald-500 transition ease-in-out duration-300'>
                <a href='/chat'>Сообщения</a>
              </li>
            </ul>
          ) : ''}
        </div> */}
        {/* <Modal show={this.state.headerModalState} size="lg" onClose={this.setHideHeaderModal} className='dark:bg-white'>
          <Modal.Header />
          <Modal.Body className='px-4'>
            <div className="space-y-2">
              <div className='flex flex-col justify-center mx-auto'>
                <p className='self-center text-2xl font-semibold'>Данные для входа</p>
                <div className='w-full p-6'>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block mb-2 text-sm font-bold text-gray-900'>
                      Логин
                    </label>
                    {
                      this.state.isEdit ?
                          <input
                            type='name'
                            id='name'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Алексей'
                            required
                          /> : 
                          <input
                            type='name'
                            id='name'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Алексей'
                            required
                            disabled
                          />
                    }
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='password' className='block mb-2 text-sm font-bold text-gray-900'>
                      Пароль 
                    </label>
                    {
                      this.state.isEdit ?
                        <input
                          type='password'
                          id='password'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='GHst35qwda'
                          required
                        /> :
                        <input
                          type='password'
                          id='password'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='GHst35qwda'
                          required
                          disabled
                        />
                    }
                    
                  </div>
                  {
                    !this.state.isEdit ?
                      <button className='bg-button text-white font-bold py-2 px-4 rounded-lg w-full' onClick={this.setIsEdit}>
                        Редактировать
                      </button> :
                      <button className='bg-button text-white font-bold py-2 px-4 rounded-lg w-full' onClick={this.handleStatus}>
                        Сохранить
                      </button>
                  }
                </div>

                
              </div>
            </div>
          </Modal.Body>
        </Modal> */}
        <Modal
            open={this.state.headerModalState}
            onCancel={this.setHideHeaderModal}
            width={600}
            footer={(_, {  }) => (
            <>
                {/* <Button>Custom Button</Button>
                <CancelBtn /> */}
            </>
            )}
        >
          <div className="space-y-2">
              <div className='flex flex-col justify-center mx-auto'>
                <p className='self-center text-2xl font-semibold'>Данные для входа</p>
                <div className='w-full p-6'>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block mb-2 text-sm font-bold text-gray-900'>
                      Логин
                    </label>
                    {
                      this.state.isEdit ?
                          <input
                            type='name'
                            id='name'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Алексей'
                            required
                          /> : 
                          <input
                            type='name'
                            id='name'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Алексей'
                            required
                            disabled
                          />
                    }
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='password' className='block mb-2 text-sm font-bold text-gray-900'>
                      Пароль 
                    </label>
                    {
                      this.state.isEdit ?
                        <input
                          type='password'
                          id='password'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='GHst35qwda'
                          required
                        /> :
                        <input
                          type='password'
                          id='password'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='GHst35qwda'
                          required
                          disabled
                        />
                    }
                    
                  </div>
                  {
                    !this.state.isEdit ?
                      <button className='bg-button text-white font-bold py-2 px-4 rounded-lg w-full' onClick={this.setIsEdit}>
                        Редактировать
                      </button> :
                      <button className='bg-button text-white font-bold py-2 px-4 rounded-lg w-full' onClick={this.handleStatus}>
                        Сохранить
                      </button>
                  }
                </div>

                
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default NavBar;
