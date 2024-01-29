import React from 'react';
import Avatar from '../../submodule/img/01.jpg';

function ChatListMessages() {
  return (
    <div>
      <li className='hover:bg-gray-200 transition ease-in-out duration-500 p-4 rounded-md'>
        <div className='flex space-x-2 relative'>
          <img className='w-10 h-10 rounded-full border-gray-200' src={Avatar} alt='User 1' />
          <span className="w-[10px] absolute left-[-7px] top-0 h-[10px] rounded-full bg-[#2eca8b]"></span>
          
          <div className='w-full '>
            <div className='flex justify-between'>
              <h4 className='font-bold'>Имя пользователя</h4>
              <p className='text-shaded-text'>
                <span className='mr-2'>18:35 19.01.23</span>19.01.2023
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='text-black font-bold'>Текст нового сообщения</p>
              <span className="bg-purple-100 text-red-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg">
                  2
              </span>
              {/* <span class="badge rounded-md bg-soft-danger">2</span> */}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default ChatListMessages;
