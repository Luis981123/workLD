import React, {Component} from 'react';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { withNavigation } from '../../components/Router/withNavigation';

class ModerationVacancy extends Component{

    constructor(props) {
        super(props) ;
        this.state = {
            btn_state: false,
            name: '',
            vac: '',
            add: '',
            desc: '',
            reqr: ''
        };
        // this.handleTooltip = this.handleTooltip.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
        if (e.target.value !== '') {
            e.target.style = '';
        } else {
            e.target.style.border = '1px solid red';
        }
    }

    handleChangeState() {
        this.setState({
            btn_state: true
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        const edit_btns = document.getElementsByClassName('edit_btn');
        setTimeout(() => {
            edit_btns[0].focus();
            edit_btns[0].style.border = '1px solid red';
            edit_btns[1].style.border = '1px solid red';
            edit_btns[2].style.border = '1px solid red';
            edit_btns[4].style.border = '1px solid red';
            edit_btns[5].style.border = '1px solid red';
        }, 300);
        for (let i = 0; i < edit_btns.length; i++) {
            edit_btns[i].removeAttribute('disabled');
        }
        
    }

    acceptAlert = () => {
        Swal.fire({
            title: "Вы хотите изменить описание вакансии согласно правкам?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
            cancelButtonText: "Нет"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.props.navigate('/second');
                }
        })
    }

    handleSave = () => {
        if (
            this.state.name === '' ||
            this.state.add === '' ||
            this.state.vac === '' ||
            this.state.desc === '' ||
            this.state.reqr === ''
        ) {
            Swal.fire({
                title: "Необходимо изменить содержание вакансии согласно рекомендациям менеджера, либо принять правки",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Принять правки",
                cancelButtonText: "Отмена"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.props.navigate('/second');
                    }
            })
        } else {
            this.props.navigate('/second');
        }
    }

    componentDidMount() {
        const client = document.getElementsByClassName('client');
        const admin = document.getElementsByClassName('admin');
        for (let i = 0; i < client.length; i++) {
            admin[i].style.marginTop = client[i].clientHeight - 25 + 'px';
        }

        // tootip alert

        // const user_btn = document.getElementsByClassName('user_btn');
        // const panel = document.getElementsByClassName('panel_vote');
        // const panel_btn = document.getElementsByClassName('panel_btn');
        // for (let i = 0; i < user_btn.length; i++) {
        //     const btn_data = user_btn[i].getBoundingClientRect();
        //     const panel_data = panel[i].getBoundingClientRect();
        //     panel[i].style.left = btn_data.x - (panel_data.width - btn_data.width) / 2 + 'px';
        //     panel[i].style.top = btn_data.y - panel_data.height - 10 + 'px';
        //     panel_btn[i].style.left = panel_data.width / 2 - 5 + 'px';
        //     panel_btn[i].style.top = panel_data.height - 5 + 'px';
        // }
        
    }

    render() {
        return (
            <div className='mx-auto p-2 flex-1 w-full max-w-6xl'>
                <div className='w-full mt-9'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <p className='text-2xl font-medium'>Модерация вакансии</p>
                        <p className='flex flex-wrap text-center justify-center items-center'>
                            необходимо более подробн необходимо более подробн необходимо более подробн необходимо более подробн необходимо более подробн необходимо более подробн необходимо более подробн необходимо более подробн
                        </p>
                    </div>
                </div>
                <div className='w-full mt-4'>
                    {/* <form onSubmit={this.handleTooltip}> */}
                    {/* <form> */}
                        <div className='flex zero:flex-row xs:flex-col'>
                            <div className='flex flex-col zero:w-1/2 xs:w-full p-3'>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl font-medium'>Моя вакансия</p>
                                    {/* <p className='flex flex-wrap justify-center items-center'>
                                    <p className='font-light'>Необходимо заполнить</p>
                                    <a className='ml-1 font-bold' href='#'>
                                        информацию о работодателе
                                    </a>
                                    </p> */}
                                </div>
                                <div className='p-3 mt-2 border-1 border-gray-200 rounded-xl'>
                                    
                                        <div className='my-6'>
                                            <div className='flex flex-wrap client zero:items-end'>
                                                <label htmlFor='name' className='block mb-2 text-sm font-bold text-gray-900'>
                                                    Название организации
                                                    <span className='ml-2 mb-2 text-sm text-yellow-500'>
                                                        необходимо более подробнбнбнб необходимо более подробнбнбнб необходимо более подробнбнбнб
                                                    </span>
                                                </label>
                                                {/* <label className='flex flex-wrap w-56 text-right mb-2 text-sm text-yellow-500'>
                                                    необходимо более подробнбнбнб
                                                </label> */}
                                            </div>
                                            
                                            
                                            <input
                                                type='name'
                                                name='name'
                                                className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='ПАО Сбербанк'
                                                value={this.state.name}
                                                onChange={ this.handleChange }
                                                disabled
                                            />
                                        </div>

                                        <div className='mb-6'>
                                            <div className='flex client zero:items-end'>
                                                    <label htmlFor='vac' className='block mb-2 text-sm font-bold text-gray-900'>
                                                    Название вакансии <span style={{ color: '#ff0000' }}>*</span>
                                                    <span className='ml-2 mb-2 text-sm text-yellow-500'>
                                                        необходимо более подробнбнбнб необходимо более подробнбнбнб необходимо более подробнбнбнб
                                                    </span>
                                                </label>
                                            </div>
                                            <input
                                                type='vac'
                                                name='vac'
                                                className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='ПАО Сбербанк'
                                                value={this.state.vac}
                                                onChange={ this.handleChange }
                                                disabled
                                            />
                                        </div>

                                        <div className='mb-6'>
                                            <div className='flex client zero:items-end'>
                                                <label htmlFor='add' className='block mb-2 text-sm font-bold text-gray-900'>
                                                    Адрес <span style={{ color: '#ff0000' }}>*</span>
                                                    <span className='ml-2 mb-2 text-sm text-yellow-500'>
                                                        необходимо более подробнбнбнб необходимо более
                                                    </span>
                                                </label>
                                            </div>
                                            <input
                                                type='add'
                                                name='add'
                                                className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='ПАО Сбербанк'
                                                value={this.state.add}
                                                onChange={ this.handleChange }
                                                disabled
                                            />
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor='typeVac' className='block mb-2 text-sm font-bold text-gray-900'>
                                            Тип вакансии <span style={{ color: '#ff0000' }}>*</span>
                                            </label>
                                            <div className='relative'>
                                            <select
                                                className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                id='grid-state'
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
                                            <div className='flex client zero:items-end'>
                                                <label htmlFor='desc' className='block mb-2 text-sm font-bold text-gray-900'>
                                                    Описание вакансии <span style={{ color: '#ff0000' }}>*</span>
                                                    <span className='ml-2 mb-2 text-sm text-yellow-500'>
                                                        необходимо более подробнбнбнб необходимо более подробнбнбнб необходимо более подробнбнбнб
                                                    </span>
                                                </label>
                                            </div>
                                            
                                            <textarea
                                                id='desc'
                                                name='desc'
                                                rows='4'
                                                className='block text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                placeholder='Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.'
                                                value={this.state.desc}
                                                onChange={ this.handleChange }
                                                disabled    
                                            >
                                            </textarea>
                                        </div>

                                        <div className='mb-6'>
                                            <div className='flex client zero:items-end'>
                                                <label htmlFor='reqr' className='block mb-2 text-sm font-bold text-gray-900'>
                                                    Требования к соискателю
                                                    <span className='ml-2 mb-2 text-sm text-yellow-500'>
                                                        необходимо более подробнбнбнб необходимо более подробнбнбнб необходимо более подробнбнбнб
                                                    </span>
                                                </label>
                                            </div>
                                            <textarea
                                                name='reqr'
                                                rows='4'
                                                className='block text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                placeholder='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                                                value={this.state.reqr}
                                                onChange={ this.handleChange }
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
                                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
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
                                                    type='min-age'
                                                    id='min-age'
                                                    className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                    placeholder='18'
                                                    required
                                                    disabled
                                                />
                                            </div>

                                            <div className='mb-6 md:w-1/3'>
                                            <label htmlFor='max-age' className='block mb-2 text-sm font-bold text-gray-900'>
                                                Макс. возраст
                                            </label>
                                            <input
                                                type='max-age'
                                                id='max-age'
                                                className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='65'
                                                required
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
                                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
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
                                                type='min-pay'
                                                id='min-pay'
                                                className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='1000'
                                                required
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
                                                className='shadow-sm  text-gray-900 text-sm rounded-lg edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='10000'
                                                required
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
                                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
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
                                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
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
                                                    className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight edit_btn border border-1 border-gray-300 focus:border-button focus:outline-none'
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
                            </div>
                            <div className='zero:flex xs:hidden flex-col w-1/2 p-3'>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl font-medium'>Правки менеджера</p>
                                    {/* <p className='flex flex-wrap justify-center items-center'>
                                    <p className='font-light'>Необходимо заполнить</p>
                                    <a className='ml-1 font-bold' href='#'>
                                        информацию о работодателе
                                    </a>
                                    </p> */}
                                </div>
                                <div className='p-3 mt-2 border-1 border-gray-200 rounded-xl'>
                                    <form>
                                        <div className='my-6'>
                                            <label htmlFor='name_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Название организации
                                            </label>
                                            <input
                                                type='name'
                                                id='name_admin'
                                                className='shadow-sm admin text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                value='ПАО Сбербанк'
                                                disabled
                                            />
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor='vac_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Название вакансии 
                                                <span style={{ color: '#ff0000' }}>*</span>
                                            </label>
                                            <input
                                                type='vac'
                                                id='vac_admin'
                                                className='shadow-sm admin text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                value='ПАО Сбербанк'
                                                disabled
                                            />
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor='add_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Адрес 
                                                <span style={{ color: '#ff0000' }}>*</span>
                                            </label>
                                            <input
                                                type='add'
                                                id='add_admin'
                                                className='shadow-sm  text-gray-900 text-sm admin rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                value='ПАО Сбербанк'
                                                disabled
                                            />
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor='typeVac' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Тип вакансии 
                                                <span style={{ color: '#ff0000' }}>*</span>
                                            </label>
                                            <div className='relative'>
                                                <select
                                                    className='block appearance-none mt-1 text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                    id='grid-state-admin' disabled
                                                >
                                                    <option>Постоянная работа</option>
                                                    <option selected>Разовая работа</option>
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
                                            <label htmlFor='desc_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Описание вакансии 
                                                <span style={{ color: '#ff0000' }}>*</span>
                                            </label>
                                            <textarea
                                                id='desc_admin'
                                                rows='4'
                                                className='block text-black admin w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                value='Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.'
                                                disabled
                                            ></textarea>
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor='reqr_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Требования к соискателю
                                            </label>
                                            <textarea
                                                id='reqr_admin'
                                                rows='4'
                                                className='block text-black w-full admin p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                value='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                                                disabled
                                            ></textarea>
                                        </div>

                                        <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                                            <div className='mb-6 md:w-1/3 pr-2'>
                                                <label htmlFor='gender_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                    Пол
                                                </label>
                                                <div className='relative'>
                                                    <select
                                                        className='block appearance-none mt-1 text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                        id='gender_admin' disabled
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
                                                <label htmlFor='min-age' className='invisible block mb-2 text-sm font-bold text-gray-900'>
                                                    Мин. возраст
                                                </label>
                                                <input
                                                    type='min-age'
                                                    id='min-age'
                                                    className='shadow-sm  text-gray-900 text-sm mt-1 rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                    placeholder='18'
                                                    disabled
                                                />
                                            </div>

                                            <div className='mb-6 md:w-1/3'>
                                            <label htmlFor='max-age' className='invisible block mb-2 text-sm font-bold text-gray-900'>
                                                Макс. возраст
                                            </label>
                                            <input
                                                type='max-age'
                                                id='max-age'
                                                className='shadow-sm  text-gray-900 text-sm mt-1 rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                placeholder='65'
                                                disabled
                                            />
                                            </div>
                                        </div>

                                        <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly zero:items-end'>
                                            <div className='mb-6 md:w-1/3 pr-2'>
                                                <label htmlFor='payFreq_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                    Периодичность выплат 
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>
                                                <div className='relative mt-1'>
                                                    <select
                                                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                        id='payFreq_admin' disabled
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
                                                <label htmlFor='min-pay_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                    Мин стоимость раб. смены 
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>
                                                <input
                                                    type='min-pay'
                                                    id='min-pay_admin'
                                                    className='shadow-sm  text-gray-900 text-sm mt-1 rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                    value='1000'
                                                    disabled
                                                />
                                            </div>

                                            <div className='mb-6 md:w-1/3'>
                                                <label htmlFor='max-pay_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                    Макс стоимость раб. смены 
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>
                                                <input
                                                    type='max-pay'
                                                    id='max-pay_admin'
                                                    className='shadow-sm  text-gray-900 text-sm mt-1 rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                    value='10000'
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                                            <div className='mb-6 md:w-1/2 pr-2'>
                                                <label htmlFor='min-wtime_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                    Мин. длит. раб. смены
                                                </label>
                                                <div className='relative'>
                                                    <select
                                                        className='block appearance-none mt-1 text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                        id='min-wtime_admin' disabled
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
                                                <label htmlFor='max-wtime_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                    Мин. длит. раб. смены
                                                </label>
                                                <div className='relative'>
                                                    <select
                                                        className='block appearance-none mt-1 text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                        id='max-wtime_admin' disabled
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
                                            <label htmlFor='tariff_admin' className='invisible mb-2 text-sm font-bold text-gray-900'>
                                                Выбор тарифа 
                                                <span style={{ color: '#ff0000' }}>*</span>
                                            </label>
                                            <div className='relative mt-1'>
                                                <select
                                                    className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                                    id='tariff_admin' disabled
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
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col middle:flex-row gap-2  middle:justify-start items-center my-10'>
                            <button
                                type='button'
                                onClick={this.acceptAlert}
                                className='bg-button text-white font-bold py-2 px-4 rounded-lg w-full middle:w-40'
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Принятие правок изменит описание вакансии согласно правкам менеджера"
                            >
                                Принять правки
                            </button>
                            {
                                !this.state.btn_state ?
                                    <button
                                        type='button'
                                        onClick={this.handleChangeState}
                                        className='bg-transparent w-full middle:w-fit flex-nowrap text-button font-semibold py-2 px-4 border-[1px] border-button rounded-lg'
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Вы можете самостоятельно изменить описание вакансии"   
                                    >
                                        Редактировать самостоятельно
                                    </button>
                                    :
                                    <Link onClick={this.handleSave}>
                                        <button type='button' className='bg-transparent w-full middle:w-52 text-button font-semibold py-2 px-4 border-[1px] border-button rounded-lg'>
                                            Сохранить изменения
                                        </button>
                                    </Link>
                            }
                            
                            <button type='button' className='bg-transparent w-full middle:w-52 text-button font-semibold py-2 px-4 border-[1px] border-button rounded-lg'>
                                <Link to={`/second`}>Отмена</Link>
                            </button>
                            
                        </div>
                        <Tooltip
                            id="my-tooltip"
                            render={({ content }) => (
                                <div className='flex w-80'>
                                    {content}
                                </div>
                            )}
                        />
                    {/* </form> */}
                </div>
            </div>
        );
    }

}


export default withNavigation(ModerationVacancy);