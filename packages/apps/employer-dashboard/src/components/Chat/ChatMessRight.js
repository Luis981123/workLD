import React from 'react';

function ChatMessRight() {
  return (
    <div>
      <div className='chat-message'>
        <div className='flex items-center justify-end '>
          <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
            <div>
              <span className='px-4 py-2 rounded-lg inline-block bg-gray-light text-gray-500 '>
                Tекст-&ldquo;рыба&ldquo;, часто используемый в печати и вэб-дизайне.
              </span>
              <div className='text-xs text-gray-400 flex justify-end tracking-tight gap-1 leading-3 mt-1'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-3 h-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </span>
                <span>18:35 19.01.23</span>
              </div>
            </div>
          </div>
          <img
            src='https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'
            alt='My profile'
            className='w-6 h-6 rounded-full order-2'
          />
        </div>
      </div>
    </div>
  );
}

export default ChatMessRight;
