import React from 'react';
import ChatMessLeft from '../../components/Chat/ChatMessLeft';
import ChatMessRight from '../../components/Chat/ChatMessRight';
import Dropdown from '../../components/Form/DropBut';
import Avatar from '../../submodule/img/01.jpg';

function PageDialogChat() {
  return (
      <div className='flex flex-1 first:justify-evenly justify-center mt-10 mb-10  w-full'>
        <div className='flex sm:p-1 flex-col max-w-3xl border-1 mx-3 border-gray-200 shadow-md rounded-lg flex-grow'>
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
              <Dropdown />
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
          <div className='border-t-2 border-gray-200   sm:mb-0'>
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

                <button
                  type='button'
                  className='inline-flex items-center justify-center rounded-lg h-9 w-9 transition duration-500 ease-in-out text-white bg-button hover:bg-button-hov focus:outline-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='h-4 w-4 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                </button>
                <button
                  type='button'
                  className='inline-flex items-center justify-center rounded-lg h-9 w-9 transition duration-500 ease-in-out text-white bg-button hover:bg-button-hov focus:outline-none mr-1'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='h-4 w-4 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='first:tw-16'></div>
      </div>
  );
}

export default PageDialogChat;
