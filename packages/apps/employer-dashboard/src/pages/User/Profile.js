import React, {Component} from 'react';
import { Dropdown  } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Avatar from '../../submodule/img/01.jpg';

class Profile extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            divStatus: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if(this.state.divStatus === false) {
            this.setState({
                divStatus: true
            });
        } else {
            this.setState({
                divStatus: false
            });
        }
    }

    render() {
        return(
            <div className='mx-auto p-6 flex flex-col first:flex-row w-full max-w-[1163px]'>
                <div className='flex w-full first:w-[20%] mt-0 first:mt-8 mb-2 justify-center'>
                    <img
                        src={Avatar}
                        className='avatar avatar-md-sm rounded-sm w-full h-fit p-5'
                        alt=''
                    />
                </div>
                <div className='flex w-full first:w-[60%] mt-0 first:mt-8 mb-2 p-5'>
                    <div className='flex flex-col justify-start'>
                        <p className='text-2xl font-medium mb-3'>Иванов Иван Иванович</p>
                        <p className='text-xl font-medium mb-3'>муж, 30 лет</p>
                        <p className="text-xs font-medium mb-3 text-shaded-text">Адрес</p>
                        <p className='text-xl font-medium mb-3'>г. Краснодар, ул. Гидростроителей, 65б</p>
                        <p className="text-xs font-medium mb-3 text-shaded-text">Telegram</p>
                        <p className='text-xl font-medium mb-3'>username</p>
                        <p className="text-xs font-medium mb-3 text-shaded-text">Телефон</p>
                        <p className='text-xl font-medium mb-5'>8 999 999 99 99</p>
                        <p className='text-xl font-medium mb-3'>Комментарий менеджера</p>
                        <p className='text-2xs font-medium mb-3 text-shaded-text'>не заполнен</p>
                        <p className='text-xl font-medium mb-5'>Комментарий работодателя</p>
                        { 
                            this.state.divStatus ?
                                <div className='mb-3 animate-fade-down animate-duration-[3000ms] animate-delay-[10ms] animate-ease-in'>
                                    <Dropdown label="Не указан" className='' inline>
                                        <Dropdown.Item>указан 1</Dropdown.Item>
                                        <Dropdown.Item>указан 2</Dropdown.Item>
                                    </Dropdown>
                                    <textarea
                                        id='desc'
                                        rows='4'
                                        className='block text-black w-full mt-3 p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                                        placeholder='Укажите комментарий'
                                        >
                                    </textarea>
                                    <Link className='underline text-shaded-text'>
                                        Сохранить
                                    </Link>
                                </div> : ''
                        }
                            
                        <Link onClick={this.handleChange} className=''>
                            <p className='text-2xs font-medium mb-6 flex flex-row items-center'>
                                Отличный работник, рекомендую
                                {
                                    this.state.divStatus ?
                                        <span className='pl-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                            </svg>
                                        </span> :
                                        <span className='pl-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                }
                                
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='flex w-full first:w-[20%] mt-0 first:mt-8 mb-2 p-5'>
                    <div className='mb-4'>
                        <button
                            type='button'
                            className='text-center text-[14px] border rounded py-2 px-4 mb-2 bg-button text-white hover:bg-button-hov mr-2 w-full'
                        >
                            <Link>Написать сообщение</Link>
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Profile;