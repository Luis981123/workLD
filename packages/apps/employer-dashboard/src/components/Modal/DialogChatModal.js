import React, { Component } from 'react'
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import ChatMessLeft from '../Chat/ChatMessLeft';
import ChatMessRight from '../Chat/ChatMessRight';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Avatar from '../../submodule/img/01.jpg';

export default class DialogChatModal extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
        };
    }
        
    classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    sendDataToParent = () => {
        this.props.sendDataToParent();
    }

    handleCancel = () => {
        this.props.onCancel();
    }

    render() {
        return (
            <Modal
                open={this.props.open}
                onCancel={this.handleCancel}
                width={900}
                footer={(_, {  }) => (
                <>
                    {/* <Button>Custom Button</Button>
                    <CancelBtn /> */}
                </>
                )}>
                    <div className='flex flex-1 w-full h-full'>
                        <div className='flex sm:p-1 flex-col  border-gray-200 shadow-md rounded-lg flex-grow'>
                            <div className='flex sm:items-center justify-between p-6  border-b-2 max-h-24 border-gray-200'>
                                <div className='flex items-center w-auto gap-4'>
                                <div className=''>
                                    <img
                                    src={Avatar}
                                    alt=''
                                    className='w-7 sm:w-12 h-7 sm:h-12 rounded-full border-2 border-gray-150 shadow-md'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 leading-tight w-auto'>
                                    <div className='text-lg mt-1 font-semibold flex items-center '>
                                    <span className='text-gray-700 mr-1'>Имя пользователя</span>
                                    </div>
                                    <div className='flex items-center'>
                                    <span className='text-green-500 flex items-center'>
                                        <svg width='15' height='15' className='mt-1'>
                                        <circle cx='5' cy='5' r='5' fill='currentColor'></circle>
                                        </svg>
                                    </span>
                                    <span className='text-sm text-gray-600'>Онлайн</span>
                                    </div>
                                </div>
                                </div>
                                <div className='flex items-center  justify-between space-x-2'>
                                    <Menu as='div' className='relative inline-block text-left'>
                                        <div>
                                        <Menu.Button className='flex justify-center items-center gap-x-1.5 rounded-full bg-white w-9 h-9 text-sm font-semibold text-button transition duration-300 ease-in-out hover:outline-none hover:border-white  hover:bg-button border border-gray-200 shadow-md hover:text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1.5'
                                                stroke='currentColor'
                                                className='w-6 h-6'
                                            >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                                            />
                                            </svg>
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
                                        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            <div className='py-1'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <Link
                                                    onClick={this.sendDataToParent}
                                                    className={this.classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    ' px-4 py-2 text-sm flex items-center gap-3',
                                                    )}
                                                >
                                                    <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    className='w-6 h-6'
                                                    >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                                                    />
                                                    </svg>
                                                    Аккаунт
                                                </Link>
                                                )}
                                            </Menu.Item>
                                            {/* <form method='POST' action='#'> */}
                                                <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    type='button'
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        ' w-full px-4 py-2 text-left text-sm flex items-center gap-3',
                                                    )}
                                                    >
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                        strokeWidth='1.5'
                                                        stroke='currentColor'
                                                        className='w-6 h-6'
                                                    >
                                                        <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                        />
                                                    </svg>
                                                    Удалить
                                                    </button>
                                                )}
                                                </Menu.Item>
                                            {/* </form> */}
                                            </div>
                                        </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div
                                id='messages'
                                className='flex flex-1 overflow-y-scroll flex-col h-2/3 space-y-4 p-3 overflow-auto'
                                style={{ maxHeight: 'calc(100vh - 380px)' }}
                            >
                                <ChatMessLeft />
                                <ChatMessRight />
                                <ChatMessLeft />
                                <ChatMessRight />
                                <ChatMessLeft />
                                <ChatMessRight />
                                <ChatMessLeft />
                                <ChatMessRight />
                                <ChatMessLeft />
                                <ChatMessRight />
                                <ChatMessRight />
                                <ChatMessRight />
                                <ChatMessRight />
                            </div>
                            <div className='border-t-1 border-gray-200   sm:mb-0'>
                                <div className='relative flex'>
                                <input
                                    type='text'
                                    placeholder='Введите сообщение...'
                                    className='  text-gray-600 placeholder-gray-400 rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2 m-2 transition duration-400 ease-in-out'
                                />
                                <div className='items-center flex gap-1'>
                                    <button
                                    type='button'
                                    className='inline-flex items-center justify-center rounded-lg h-9 w-9 transition duration-500 ease-in-out text-white bg-button hover:bg-button-hov focus:outline-none'
                                    >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        className='h-4 w-4 ml-1 transform rotate-90'
                                    >
                                        <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                                    </svg>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='first:tw-16'></div>
                    </div>
            </Modal>
        )
    }
}
