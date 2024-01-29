import React from 'react';
import FeedBacksMessage from './FeedBacksMessage';

const FeedBacks = (props) => {
  return (
    <div className='flex justify-start w-full flex-col first:p-0 xs:p-4'>
        <div className='flex items-center relative w-full'>
            <h2 className='text-[32px] tracking-[1px] font-semibold'>Отклики на:</h2>
        </div>
        {
            props.showUrl ? 
                <div className='flex items-center relative justify-start basic-full w-full mt-2 mb-2 gap-1'>
                    <div className='flex items-center font-bold text-[#212529]'>
                        Грузчики на склад срочно
                    </div>
                    <a className='text-[#212529] cursor-pointer text-2xl pl-2'>←</a>
                    <a className='text-[#212529] cursor-pointer text-2xl'>→</a>
                </div> :
                <div className='items-center relative justify-start basic-full w-full mt-2 mb-2 gap-1 hidden'>
                    <div className='flex items-center font-bold text-[#212529]'>
                        Грузчики на склад срочно
                    </div>
                    <a className='text-[#212529] cursor-pointer text-2xl pl-2'>←</a>
                    <a className='text-[#212529] cursor-pointer text-2xl'>→</a>
                </div>  
        }  
        <div className='flex items-center flex-col border-1 rounded-md border-gray-200 shadow-md' style={{ marginTop: props.showUrl ? "0.5rem" : "2rem" }}>
            <div
                className='h-56 max-h-56 overflow-y-scroll flex flex-col items-start w-full mt-2 pb-10 scrollbar-thin scrollbar-thumb-[#888] scrollbar-track-[#f1f1f1]'
            >
                <ul className='w-full justify-around  p-3 pr-5 list-item'>
                    <FeedBacksMessage />
                    <FeedBacksMessage />
                    <FeedBacksMessage />
                    <FeedBacksMessage />
                    <FeedBacksMessage />
                </ul>
                
            </div>
        </div>
    </div>
  );
}

export default FeedBacks;
