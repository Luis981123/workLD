import React from 'react';
import Avatar from '../../submodule/img/01.jpg';

function ChatListMessages() {
  return (
    <div>
      <li className='hover:bg-gray-200 transition ease-in-out duration-500 p-4 rounded-md'>
        <div className='flex space-x-2 relative'>
          <img className='w-10 h-10 rounded-full border-gray-200' src={Avatar} alt='User 1' />
          <span className="w-[10px] absolute left-[-7px] top-0 h-[10px] rounded-full bg-[#e43f52]"></span>
          <div className='w-full '>
            <div className='flex justify-between'>
              <h4 className=''>Имя пользователя</h4>
              <p className='text-shaded-text'>
                <span className='mr-2'>18:35 19.01.23</span>19.01.2023
              </p>
            </div>
            <p className='text-shaded-text'>Текст нового сообщения</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default ChatListMessages;
