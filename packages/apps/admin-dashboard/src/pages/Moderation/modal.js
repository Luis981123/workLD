import React, { useState } from 'react'
import { Modal, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function BroadCastModal({open, onClose}) {

    const [selectState, setSelectState] = useState('3')

    const handleChange = (e) => {
        setSelectState(e.target.value);
    }

    if (!open) {
        return null;
    }

    return (
        <Modal
            title={`Параметры трансляции`}
            centered
            open={open}
            width={800}
            onCancel={onClose}
            footer={[
                ''
            ]}
        >
            <div className='mx-auto p-6 flex flex-col w-full'>
                <div className="relative mb-6">
                    <select 
                        defaultValue={selectState}
                        onChange={handleChange}
                        className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                        focus:pt-6
                        focus:pb-2
                        [&:not(:placeholder-shown)]:pt-6
                        [&:not(:placeholder-shown)]:pb-2
                        autofill:pt-6
                        autofill:pb-2"
                    >
                        <option value='1'>Общедоступное </option>
                        <option value='2'>Синхронизированное</option>
                        <option value='3'>по выборке</option>
                    </select>
                    <label 
                        className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                        Тип трансляции
                    </label>
                </div>
                
                {
                    selectState === '3' ?
                        <button 
                            className='text-center border rounded py-2 px-4 mb-6 text-button border-button border-1 w-full hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                        >
                            Выборка исполнителей
                        </button> : <></>
                }

                <div className="mb-6 flex items-center">
                    <input type="checkbox" className="w-[16px] h-[16px] rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-checkbox-group-1" />
                    <label htmlFor="hs-checkbox-group-1" className="text-[16px] ms-3">уведомить соискателей</label>
                </div>

                <RangePicker size='large' className='mb-6'/>
                <div className='flex flex-row'>
                    <div className='w-1/2 py-3 pr-4'>
                        <button 
                            className='text-center border rounded py-2 px-4 mb-6 text-button border-button border-1 w-full hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                        >
                            сохранить изменения
                        </button>
                    </div>
                    <div className='w-1/2 py-3 pl-4'>
                        <button 
                            className='text-center border rounded py-2 px-4 mb-6 text-button border-button border-1 w-full hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                        >
                            транслировать
                        </button>
                    </div>
                </div>
            </div>
        </Modal>        
    )
}

export default BroadCastModal;