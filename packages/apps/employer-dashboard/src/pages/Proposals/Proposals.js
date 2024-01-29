import React, {Component} from 'react';
import { Dropdown  } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ProfileModal from '../../components/Modal/ProfileModal';
import DialogChatModal from '../../components/Modal/DialogChatModal';

class Proposals extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            checkState: 0,
            readState: false,
            profileModalState: false,
            chatModalState: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectAll = this.handleSelectAll.bind(this);
        this.handleProfileModal = this.handleProfileModal.bind(this);
    }

    handleChange(e) {
        const tag = document.getElementById('select_all');
        tag.checked = false;
        if(e.target.checked === true) {
            this.setState({
                checkState: this.state.checkState + 1
            })
        }
        else
            this.setState({
                checkState: this.state.checkState - 1
            })
    }

    handleSelectAll(e) {
        const tag = document.getElementById('select_all');
        const checkboxes = document.querySelectorAll('.select_checkbox');
        if (tag.checked) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        }

        if(e.target.checked === true) {
            this.setState({
                checkState: checkboxes.length
            })
        }
        else
            this.setState({
                checkState: 0
            })
    }

    handleProfileModal() {
        this.setState({
            readState: true,
            profileModalState: !this.state.profileModalState
        })
    }

    handleDataFromProfileModal = (data) => {
        this.setState({
            profileModalState: data
        })
    }

    handleDataFromButtonOnProfile = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleDataFromChatModal = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    handleCancel = () => {
        this.setState({
            profileModalState: !this.state.profileModalState,
            chatModalState: !this.state.chatModalState
        })
    }

    render() {
        return (
            <div className='mx-auto p-2 flex-1 w-full max-w-[1163px]'>
                <div className='w-full mt-6 ml-2'>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <p className='text-2xl font-medium'>Отклики на вакансию “Грузчики на склад...”</p>
                        <p className='flex flex-wrap justify-center items-center'>
                        <p className='font-light ml-2'>Сортировать</p>
                            <div className='underline ml-2'>
                                <Dropdown label="по непросмотренным" inline>
                                    <Dropdown.Item>сначала просмотренные</Dropdown.Item>
                                    <Dropdown.Item>по дате</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </p>
                    </div>
                </div>
                <div className=''>
                    <div className='w-full flex flex-col zero:flex-row zero:justify-evenly'>
                        <div className='flex w-full flex-col zero:w-3/4 p-6'>
                            <div className='mb-2 flex flex-row justify-between'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} id='select_all' onClick={this.handleSelectAll} className=" accent-button text-sm w-4 h-4 mb-2" />
                                    <label htmlFor='select_all' className='block pl-6 mb-2 text-sm font-bold text-gray-900'>
                                        ФИО
                                    </label>
                                </div>
                                <div style={{visibility: this.state.checkState ? 'visible' : 'hidden'}} className='flex items-center'>
                                    <button 
                                        type='button'
                                        className='bg-transparent w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name1' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleProfileModal}>
                                        
                                        {
                                            this.state.readState ?
                                                <label htmlFor='name1' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                                    Васильев Николай Алексеевич
                                                </label> :
                                                <label htmlFor='name1' className='font-bold block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                                    Васильев Николай Алексеевич
                                                </label>
                                        }
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name2' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name2' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Иванов Иван Иванович
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name3' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name3' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Васильев Николай Алексеевич
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name4' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name4' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Иванов Иван Иванович
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name5' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name5' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Васильев Николай Алексеевич
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name6' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name6' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Васильев Николай Алексеевич
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name7' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name4' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Иванов Иван Иванович
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name8' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name4' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Иванов Иван Иванович
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <input type="checkbox" aria-checked={'false'} onChange={this.handleChange} id='name9' className="select_checkbox accent-button text-sm w-4 h-4" />
                                    <Link onClick={this.handleModal}>
                                        <label htmlFor='name3' className='block pl-6 text-[16px] text-gray-900 cursor-pointer hover:text-[18px] hover:text-button'>
                                            Васильев Николай Алексеевич
                                        </label>
                                    </Link>
                                </div>
                                {/* <button 
                                    type='button'
                                    className='bg-transparent w-full middle:w-24 text-button py-1 px-4 border-[1px] border-[#000] rounded-lg'
                                >
                                    Удалить
                                </button> */}
                            </div>
                        </div>
                        <div className='flex w-full mb-6 zero:w-1/4'>
                            <div className='flex flex-col w-full p-6 rounded-md shadow-[0_0_3px_#C4C4C4]'>
                                <div className='mb-6'>
                                    <p className='text-xl font-medium'>Поиск по откликам</p>
                                </div>
                                <div className='mb-2'>
                                    <input
                                        type='text'
                                        id='filter_text'
                                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                        placeholder='Искать по словам, фразам, предложениям'
                                    />
                                </div>
                                <div className='mb-2'>
                                    <input
                                        type='text'
                                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                        placeholder='ФИО'
                                    />
                                </div>
                                <div className='mb-2'>
                                    <select 
                                        data-te-select-init
                                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                        placeholder='Пол'
                                    >
                                        <option value="1" selected>Пол</option>
                                        <option value="2">М</option>
                                        <option value="3">Ж</option>
                                    </select>
                                </div>
                                <div className='w-full mb-2 flex flex-row'>
                                    <div className='flex mb-2 w-1/2 pr-2'>
                                        <input
                                            type='text'
                                            id='from_age'
                                            className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            placeholder='от 20 лет'
                                        />
                                    </div>
                                    <div className='flex mb-2 w-1/2 pl-2'>
                                        <input
                                            type='text'
                                            id='to_age'
                                            className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            placeholder='до 50 лет'
                                        />
                                    </div>
                                </div>
                                <div className='mb-4 px-2 flex items-center'>
                                    <input type="checkbox" id='with_photo' className="accent-button text-sm w-4 h-4 mb-2" />
                                    <label htmlFor='with_photo' className='block px-2 mb-2 text-sm font-bold text-gray-900'>
                                        Только с фото
                                    </label>
                                </div>
                                <div className='mb-2 px-2 flex flex-col'>
                                    <button 
                                        type='button'
                                        className='text-center border rounded py-2 px-4 mb-2 bg-button text-white hover:bg-button-hov mr-2 w-full transition ease-in-out duration-300'
                                    >
                                        Применить
                                    </button>
                                    <button
                                        type='button'
                                        className='underline bg-transparent w-full text-gray-500 font-semibold py-2 px-4  rounded-lg'
                                    >
                                        <Link>Сбросить</Link>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <ProfileModal
                        open={this.state.profileModalState}
                        sendDataToParent={this.handleDataFromProfileModal}
                        sendDataToParentFromButton={this.handleDataFromButtonOnProfile}
                    />

                    <DialogChatModal
                        open={this.state.chatModalState}
                        sendDataToParent={this.handleDataFromChatModal}
                        onCancel={this.handleCancel}
                    />
                </div>
            </div>
        );
    }
    
}

export default Proposals