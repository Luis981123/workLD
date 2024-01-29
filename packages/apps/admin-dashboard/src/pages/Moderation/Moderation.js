import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "preline/plugin";
import DialogChatModal from '../../components/Modal/DialogChatModal';
import BroadCastModal from './modal';
import Swal from 'sweetalert2';

import Green from '../../components/Form/PCheckSvg/Green';
import Orange from '../../components/Form/PCheckSvg/Orange';
import Red from '../../components/Form/PCheckSvg/Red';
import GreenPay from '../../components/Form/PayCheckSvg/GreenPay';
import RedPay from '../../components/Form/PayCheckSvg/RedPay';


function Moderation(props) {
    let navigate = useNavigate();

    const [chatModalState, setChatModalState] = useState(false);

    const [editState, setEditState] = useState(false);

    const [historyState, setHistoryState] = useState(false);

    const [flagModerationVisible, setFlagModerationVisible] = useState(props.editDivState);

    const [checkState, setCheckState] = useState('green');
    const [payCheckState, setPayCheckState] = useState('green');

    const [modalState, setModalState] = useState(false);

    const handleChatModal = () => {
        setChatModalState(!chatModalState)
    }

    const handleHistoryState = () => {
        setHistoryState(!historyState)
    }

    const handleEditState = () => {
        setEditState(true);
        setFlagModerationVisible(true);
    }

    const cancelEditState = () => {
        Swal.fire({
            title: "Отменить правки?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
            cancelButtonText: "Нет"
        }).then((result) => {
            if (result.isConfirmed) {
                setEditState(false);
                setFlagModerationVisible(false);
            }
        });
    }

    const handleSaveState = () => {
        setEditState(false);
    }
    
    const handleCheckState = () => {
        checkState === 'green' ?
            setCheckState('orange') 
            :
            checkState === 'orange' ?
                setCheckState('red') 
                : 
                setCheckState('green')

    }

    const handlePayCheckState = () => {
        payCheckState === 'green' ?
            setPayCheckState('red') 
            :
            setPayCheckState('green')

    }

    const handleCancelAlert = () => {
        Swal.fire({
            title: "Закрыть страницу?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
            cancelButtonText: "Нет"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/vacancy')
            }
        });
    }

    function handleChildModalState() {
        setModalState(!modalState)
    }

    return (
        <div className='mx-auto p-2 flex-1 w-full max-w-[1163px]'>
            <div className='w-full mt-9'>
                <div className='flex flex-col justify-center items-center px-6 gap-1'>
                    <p className='text-2xl font-medium'>Вакансия Грузчик на склад на модерации</p>
                    <input 
                        type='text' 
                        name='title' 
                        className='block w-full p-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                        placeholder='Комментарии менеджера'
                    />
                </div>

                <div className='flex flex-col md:flex-row w-full mt-2 gap-y-2 justify-between'>
                    <button
                        type='button'
                        className='text-center p-4 w-fit transition ease-in-out duration-300'
                        onClick={handleChatModal}
                    >
                        ООО "Ромашка", ИНН 9083567289, +7900 9999999, romashka@mail.ru
                    </button>

                    <button
                        type='button'
                        className='text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov w-fit transition ease-in-out duration-300'
                        onClick={handleHistoryState}
                    >
                        История вакансии
                    </button>
                </div>

                {
                    !historyState ?
                        <></> :
                    <div className='flex w-full p-3'>
                        <div className='flex flex-col w-full mt-2 p-6 gap-y-4 border-1 border-gray-200 rounded-xl shadow-sm max-h-80 overflow-y-scroll'>
                            <div className='w-full'>
                                <ul className="list-disc px-2 list-outside text-gray-800">
                                    <li>вакансия создана Контрагентом «логин» с присвоением номера ***</li>
                                    <li>вакансия создана менеджером «логин» с присвоением номера ***</li>
                                    <li>вакансия согласована менеджером «логин» и отправлена Администратору «логин» на согласование</li>
                                    <li>вакансия изменена менеджером и отправлена Контрагенту</li>
                                    <li>вакансия  отправлена Администратором с правками контрагенту</li>
                                    <li>вакансия  активирована менеджером</li>
                                    <li>вакансия  активирована Администратором</li>
                                    <li>вакансия отправлена менеджером с правками контрагенту</li>
                                    <li>вакансия изменена контрагентом </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }




                <div className='flex flex-col md:flex-row w-full p-3 mt-4 gap-x-3'>
                    <div className={`p-6 mt-2 border-1 border-gray-200 rounded-xl shadow-sm transition-all  ${!flagModerationVisible ? 'w-full animate-small-width transition ease-in-out duration-[1200ms]' : 'w-1/2 animate-small-width transition ease-in-out duration-[1200ms]'}`}>
                        <div className='my-6'>
                            <div className='flex flex-wrap zero:items-end'>
                                <label htmlFor='name' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Название организации
                                </label>
                            </div>
                            
                            <input
                                type='name'
                                name='name'
                                className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                placeholder='ПАО Сбербанк'
                                value={`ТЦ`}
                                disabled
                            />
                        </div>

                        <div className='mb-6'>
                            <div className='flex zero:items-end'>
                                    <label htmlFor='vac' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Название вакансии <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                            </div>
                            <input
                                type='text'
                                name='vac'
                                className='shadow-sm block w-full p-2.5 text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                placeholder='ПАО Сбербанк'
                                value={`Охранник в ТЦ`}
                                disabled
                            />
                        </div>

                        <div className='mb-6'>
                            <div className='flex zero:items-end'>
                                <label htmlFor='add' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Адрес <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                            </div>
                            <input
                                type='text'
                                name='add'
                                className='shadow-sm block w-full p-2.5 text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                placeholder='ПАО Сбербанк'
                                value={`Moscow`}
                                disabled
                            />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='typeVac' className='block mb-2 text-sm font-bold text-gray-900'>
                                Тип вакансии <span style={{ color: '#ff0000' }}>*</span>
                            </label>
                            <div className='relative'>
                                <select
                                    className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    name='grid-state'
                                    disabled
                                >
                                    <option>Постоянная работа</option>
                                    <option>Разовая работа</option>
                                    <option>Вахтовый метод</option>
                                </select>
                                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                    <svg
                                        className='fill-current h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='mb-6'>
                            <div className='flex zero:items-end'>
                                <label htmlFor='desc' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Описание вакансии <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                            </div>
                            
                            <textarea
                                id='desc'
                                name='desc'
                                rows='4'
                                className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                placeholder='' 
                                value={`Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.`}
                                disabled
                            >
                            </textarea>
                        </div>

                        <div className='mb-6'>
                            <div className='flex zero:items-end'>
                                <label htmlFor='reqr' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Требования к соискателю
                                </label>
                            </div>
                            <textarea
                                name='reqr'
                                rows='4'
                                className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                placeholder=''
                                value='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                                disabled
                            >

                            </textarea>
                        </div>

                        <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                            <div className='mb-6 md:w-1/3 pr-2'>
                                <label htmlFor='gender' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Пол
                                </label>
                                <div className='relative'>
                                    <select
                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                        id='gender'
                                        disabled
                                    >
                                        <option>Неважно</option>
                                        <option>Мужской</option>
                                        <option>Женский</option>
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-6 md:w-1/3 pr-2'>
                                <label htmlFor='min-age' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Мин. возраст
                                </label>
                                <input
                                    type='name'
                                    name='min-age'
                                    className='block w-full p-2.5 shadow-sm text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder=''
                                    value='18'
                                    disabled
                                />
                            </div>

                            <div className='mb-6 md:w-1/3'>
                                <label htmlFor='max-age' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Макс. возраст
                                </label>
                                <input
                                    type='text'
                                    id='max-age'
                                    className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder=''
                                    value='65'
                                    disabled
                                />
                            </div>
                        </div>

                        <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly zero:items-end'>
                            <div className='mb-6 md:w-1/3 pr-2'>
                                <label htmlFor='payFreq' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Периодичность выплат <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                                <div className='relative'>
                                    <select
                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                        id='payFreq'
                                        disabled
                                    >
                                        <option>Еженедельно</option>
                                        <option>Еженедневно</option>
                                        <option>Еженемесячно</option>
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>  
                            </div>

                            <div className='mb-6 md:w-1/3 pr-2'>
                                <label htmlFor='min-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Мин стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                                <input
                                    type='text'
                                    id='min-pay'
                                    className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder=''
                                    value='1000'
                                    disabled
                                />
                            </div>

                            <div className='mb-6 md:w-1/3'>
                                <label htmlFor='max-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Макс стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                                <input
                                    type='max-pay'
                                    id='max-pay'
                                    className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder=''
                                    value='10000'
                                    disabled
                                />
                            </div>
                        </div>

                        <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                            <div className='mb-6 md:w-1/2 pr-2'>
                                <label htmlFor='min-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Мин. длит. раб. смены
                                </label>
                                <div className='relative'>
                                    <select
                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                        id='min-wtime'
                                        disabled
                                    >
                                        <option>2 часа</option>
                                        <option>3 часа</option>
                                        <option>4 часа</option>
                                        <option>5 часов</option>
                                        <option>6 часов</option>
                                        <option>7 часов</option>
                                        <option>8 часов</option>
                                        <option>9 часов</option>
                                        <option>10 часов</option>
                                        <option>11 часов</option>
                                        <option>12 часов</option>
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-6 md:w-1/2'>
                                <label htmlFor='max-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Мин. длит. раб. смены
                                </label>
                                <div className='relative'>
                                    <select
                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                        id='max-wtime'
                                        disabled
                                    >
                                        <option>16 часов</option>
                                        <option>15 часов</option>
                                        <option>14 часов</option>
                                        <option>13 часов</option>
                                        <option>12 часов</option>
                                        <option>11 часов</option>
                                        <option>10 часов</option>
                                        <option>9 часов</option>
                                        <option>8 часов</option>
                                        <option>7 часов</option>
                                        <option>6 часов</option>
                                        <option>5 часов</option>
                                        <option>4 часа</option>
                                        <option>3 часа</option>
                                        <option>2 часа</option>
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='tariff' className='block mb-2 text-sm font-bold text-gray-900'>
                                Выбор тарифа <span style={{ color: '#ff0000' }}>*</span>
                            </label>
                            <div className='relative'>
                                <select
                                    className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    id='tariff'
                                    disabled
                                >
                                    <option>Стартовый (бесплатно)</option>
                                    <option>Разовый (500р.)</option>
                                </select>
                                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                    <svg
                                    className='fill-current h-4 w-4'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    >
                                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {!flagModerationVisible ? <></> :
                        <div className={`w-1/2 p-6 mt-2 border-1 border-gray-200 rounded-xl shadow-sm animate-wiggle`}>
                            <div className='my-6'>
                                <div className='flex flex-row mb-1.5 justify-between items-center'>
                                    <label htmlFor='edit_name' className='block w-1/2 text-sm font-bold text-gray-900'>
                                        Название организации
                                    </label>
                                    
                                    <input
                                        type='text'
                                        name=''
                                        className='block w-1/2 px-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                                        placeholder='Комментарии менеджера'
                                    />
                                </div>

                                <input
                                    type='text'
                                    id='edit_name'
                                    name='edit_name'
                                    className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder=''
                                    value='ТЦ'
                                />
                            </div>

                            <div className='mb-6'>
                                <div className='flex flex-row mb-1.5 justify-between items-center'>
                                    <label htmlFor='edit_vac' className='block w-1/2 text-sm font-bold text-gray-900'>
                                        Название вакансии <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    
                                    <input
                                        type='text'
                                        name=''
                                        className='block w-1/2 px-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                                        placeholder='Комментарии менеджера'
                                    />
                                </div>
                                <input
                                    type='text'
                                    id='edit_vac'
                                    name='edit_vac'
                                    className='shadow-sm block w-full p-2.5 text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder='ПАО Сбербанк'
                                    value={`Охранник в ТЦ`}
                                />
                            </div>

                            <div className='mb-6'>
                                <div className='flex flex-row mb-2 justify-between items-center'>
                                    <label htmlFor='edit_add' className='block text-sm font-bold text-gray-900'>
                                        Адрес <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    
                                    <input
                                        type='text'
                                        name=''
                                        className='block w-1/2 px-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                                        placeholder='Комментарии менеджера'
                                    />
                                </div>

                                <input
                                    type='text'
                                    id='edit_add'
                                    name='edit_add'
                                    className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none disabled:bg-gray-200'
                                    placeholder=''
                                    value='Moscow'
                                />
                            </div>

                            <div className='mb-6'>
                                <div className='flex flex-row mb-1.5 justify-between items-center'>
                                    <label htmlFor='edit_typeVac' className='block w-1/2 text-sm font-bold text-gray-900'>
                                        Тип вакансии <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    
                                    <input
                                        type='text'
                                        name=''
                                        className='block w-1/2 px-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                                        placeholder='Комментарии менеджера'
                                    />
                                </div>
                                <div className='relative'>
                                    <select
                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                        id='edit_typeVac'
                                        name='edit_typeVac'
                                    >
                                        <option>Постоянная работа</option>
                                        <option>Разовая работа</option>
                                        <option>Вахтовый метод</option>
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-6'>
                                <div className='flex flex-row mb-2 justify-between items-center'>
                                    <label htmlFor='edit_desc' className='block text-sm font-bold text-gray-900'>
                                        Описание вакансии <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    
                                    <input
                                        type='text'
                                        name=''
                                        className='block w-1/2 px-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                                        placeholder='Комментарии менеджера'
                                    />
                                </div>

                                <textarea
                                    id='edit_desc'
                                    name='edit_desc'
                                    rows='4'
                                    className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                    placeholder='' 
                                    value={`Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.`}
                                >
                                </textarea>
                            </div>

                            <div className='mb-6'>
                                <div className='flex flex-row mb-1.5 justify-between items-center'>
                                    <label htmlFor='edit_reqr' className='block w-1/2 text-sm font-bold text-gray-900'>
                                        Требования к соискателю
                                    </label>
                                    
                                    <input
                                        type='text'
                                        name=''
                                        className='block w-1/2 px-2.5 text-gray-900 text-sm shadow-sm border border-b-1 border-b-gray-500 focus:border-b-blue-700 focus:outline-none '
                                        placeholder='Комментарии менеджера'
                                    />
                                </div>

                                <textarea
                                    id='edit_reqr'
                                    name='edit_reqr'
                                    rows='4'
                                    className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                    placeholder=''
                                    value='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                                >

                                </textarea>
                            </div>

                            <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                                <div className='mb-6 md:w-1/3 pr-2'>
                                    <label htmlFor='edit_gender' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Пол
                                    </label>
                                    <div className='relative'>
                                        <select
                                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                            id='edit_gender'
                                        >
                                            <option>Неважно</option>
                                            <option>Мужской</option>
                                            <option>Женский</option>
                                        </select>
                                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                            <svg
                                                className='fill-current h-4 w-4'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-6 md:w-1/3 pr-2'>
                                    <label htmlFor='edit-min-age' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Мин. возраст
                                    </label>
                                    <input
                                        type='text'
                                        id='edit-min-age'
                                        className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none '
                                        placeholder=''
                                        value='18'
                                    />
                                </div>

                                <div className='mb-6 md:w-1/3'>
                                    <label htmlFor='edit-max-age' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Макс. возраст
                                    </label>
                                    <input
                                        type='text'
                                        id='edit-max-age'
                                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                        placeholder=''
                                        value='65'
                                    />
                                </div>
                            </div>

                            <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly zero:items-end'>
                                <div className='mb-6 md:w-1/3 pr-2'>
                                    <label htmlFor='edit_payFreq' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Периодичность выплат <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    <div className='relative'>
                                        <select
                                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                            id='edit_payFreq'
                                        >
                                            <option>Еженедельно</option>
                                            <option>Еженедневно</option>
                                            <option>Еженемесячно</option>
                                        </select>
                                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                            <svg
                                                className='fill-current h-4 w-4'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                            </svg>
                                        </div>
                                    </div>  
                                </div>

                                <div className='mb-6 md:w-1/3 pr-2'>
                                    <label htmlFor='edit-min-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Мин стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    <input
                                        type='edit-min-pay'
                                        id='edit-min-pay'
                                        className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none '
                                        placeholder=''
                                        value='1000'
                                    />
                                </div>

                                <div className='mb-6 md:w-1/3'>
                                    <label htmlFor='edit-max-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Макс стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                                    </label>
                                    <input
                                        type='edit-max-pay'
                                        id='edit-max-pay'
                                        className='block w-full p-2.5 text-gray-900 text-sm shadow-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none '
                                        placeholder=''
                                        value='10000'
                                    />
                                </div>
                            </div>

                            <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                                <div className='mb-6 md:w-1/2 pr-2'>
                                    <label htmlFor='edit-min-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Мин. длит. раб. смены
                                    </label>
                                    <div className='relative'>
                                        <select
                                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                            id='edit-min-wtime'
                                        >
                                            <option>2 часа</option>
                                            <option>3 часа</option>
                                            <option>4 часа</option>
                                            <option>5 часов</option>
                                            <option>6 часов</option>
                                            <option>7 часов</option>
                                            <option>8 часов</option>
                                            <option>9 часов</option>
                                            <option>10 часов</option>
                                            <option>11 часов</option>
                                            <option>12 часов</option>
                                        </select>
                                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                            <svg
                                                className='fill-current h-4 w-4'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-6 md:w-1/2'>
                                    <label htmlFor='edit-max-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                                        Мин. длит. раб. смены
                                    </label>
                                    <div className='relative'>
                                        <select
                                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                            id='edit-max-wtime'
                                        >
                                            <option>16 часов</option>
                                            <option>15 часов</option>
                                            <option>14 часов</option>
                                            <option>13 часов</option>
                                            <option>12 часов</option>
                                            <option>11 часов</option>
                                            <option>10 часов</option>
                                            <option>9 часов</option>
                                            <option>8 часов</option>
                                            <option>7 часов</option>
                                            <option>6 часов</option>
                                            <option>5 часов</option>
                                            <option>4 часа</option>
                                            <option>3 часа</option>
                                            <option>2 часа</option>
                                        </select>
                                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                            <svg
                                                className='fill-current h-4 w-4'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-6'>
                                <label htmlFor='edit-tariff' className='block mb-2 text-sm font-bold text-gray-900'>
                                    Выбор тарифа <span style={{ color: '#ff0000' }}>*</span>
                                </label>
                                <div className='relative'>
                                    <select
                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                        id='edit-tariff'
                                    >
                                        <option>Стартовый (бесплатно)</option>
                                        <option>Разовый (500р.)</option>
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                        <svg
                                        className='fill-current h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        >
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
                
                <div className='flex flex-col md:flex-row gap-2  md:justify-start items-center my-10'>
                    {
                        !editState ?
                            <>
                                <button
                                    type='button'
                                    className='text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov w-full md:w-auto transition ease-in-out duration-300'
                                    onClick={handleEditState}
                                >
                                    Редактировать
                                </button>
                            </>
                            :
                            <>
                                <button
                                    type='button'
                                    className='text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov w-full md:w-auto transition ease-in-out duration-300'
                                    onClick={handleSaveState}
                                >
                                    Сохранить
                                </button>
                            </>
                    }
                    {
                        props.role === 'manager' ?
                            !editState ?
                                <>
                                    <button 
                                        type='button'
                                        className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                    >
                                        Согласовать
                                    </button>
                                    <div className='cursor-pointer' onClick={handleCheckState}>
                                        {
                                            checkState === 'green' ?
                                                <Green /> :
                                                checkState === 'orange' ?
                                                    <Orange /> : <Red /> 
                                        }
                                    </div>
                                    <button 
                                        type='button'
                                        onClick={handleCancelAlert}
                                        className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                    >
                                        Отмена
                                    </button>
                                </> : <></>
                            :
                            !editState ?
                                <>
                                    <button 
                                        type='button'
                                        className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                    >
                                        Отправить
                                    </button>

                                    <button 
                                        type='button'
                                        onClick={handleChildModalState}
                                        className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                    >
                                        Разместить
                                    </button>

                                    <div className='cursor-pointer' onClick={handleCheckState}>
                                        {
                                            checkState === 'green' ?
                                                <Green /> :
                                                checkState === 'orange' ?
                                                    <Orange /> : <Red /> 
                                        }
                                    </div>

                                    <div className='cursor-pointer' onClick={handlePayCheckState}>
                                        {
                                            payCheckState === 'green' ?
                                                <GreenPay />
                                                :
                                                <RedPay />
                                                
                                        }
                                    </div>

                                    <button 
                                        type='button'
                                        onClick={handleCancelAlert}
                                        className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                    >
                                        Закрыть
                                    </button>

                                </>
                                :
                                <>
                                    <button 
                                        type='button'
                                        onClick={handleSaveState}
                                        className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                    >
                                        Отмена
                                    </button>
                                </>
                    }
                    {
                        !editState ?
                            <></>
                            :
                            <>
                                <button 
                                    type='button'
                                    onClick={cancelEditState}
                                    className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                >
                                    Отменить правки
                                </button>

                                <input type="checkbox" className="w-[16px] h-[16px] rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </>
                    }
                </div>

                <DialogChatModal
                    open={chatModalState}
                    sendDataToParent={handleChatModal}
                    onCancel={handleChatModal}
                />

                <BroadCastModal open={modalState} onClose={handleChildModalState} />
            </div>
        </div>
    );

}


export default Moderation;