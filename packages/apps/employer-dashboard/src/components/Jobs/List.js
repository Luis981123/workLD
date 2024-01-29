import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';

var deleteState = false;
var registerState = 0;
var active = false;
var moderationState = false;
var payState = false;
var category = 'vac';
var mainDivClass = 'flex flex-col relative second:w-[80%] xs:w-full p-4 customBorder leading-[1.5]';
var proposalClass = 'flex relative w-full justify-start';
var btnDivClass = 'flex relative flex-col justify-center items-center p-6 second:w-40 xs:w-full';
var task_url = '/';
var title = 'Грузчик на склад срочно';
var content = 'Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var job_number = '1jjce-2434';
var proposal_count = 0;

var check_state = 0;

class List extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            checkState: 0,
            status: false,
            btn_size: '',
            deleteState: false,
            registerState: 0,
            active: false,
            moderationState: false,
            payState: false,
            category: 'vac',
            mainDivClass: 'flex flex-col relative second:w-[80%] xs:w-full p-4 customBorder leading-[1.5]',
            proposalClass: 'flex relative w-full justify-start',
            btnDivClass: 'flex relative flex-col justify-center items-center p-6 second:w-40 xs:w-full',
            task_url: '/',
            title: 'Грузчик на склад срочно',
            content: 'Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            job_number: '1jjce-2434',
            proposal_count: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        
    }

    static getDerivedStateFromProps(props, state) {
        if (props.title !== undefined)
            title = props.title;
        if (props.content !== undefined)
            content = props.content;
        if (props.job_number !== undefined)
            job_number = props.job_number;
        if (props.proposal_count !== undefined)
            proposal_count = props.proposal_count;
        if (props.deleteState !== undefined)
            deleteState = props.deleteState;
        if (props.registerState !== undefined) 
            registerState = props.registerState;
        else 
            registerState = 0;
        if (props.active !== undefined)
            active = props.active;
        if (props.moderationState !== undefined)
            moderationState = props.moderationState;
        if (props.payState !== undefined)
            payState = props.payState;
        if (props.category !== undefined)
            category = props.category;

        if (proposal_count === 0)
            proposalClass = 'hidden';
        else
            proposalClass = 'flex relative w-full justify-start'
        
        if (deleteState === false) {
            mainDivClass = 'flex flex-col relative second:w-[80%] xs:w-full p-4 customBorder leading-[1.5]';
            btnDivClass = 'flex relative flex-col justify-center items-center p-6 second:w-40 xs:w-full';
            if (registerState === 1) {
                if (active === false) {
                    if (moderationState === false) {
                        if (payState === false) {
                            task_url = '/';
                        } else {
                            task_url = '/';
                        }
                    } else {
                        if (payState === false) {
                            task_url = '/';
                        } else {
                            if (category === "vac") {
                                task_url = '/notActive';
                            } else {
                                task_url = '/notActiveJob';
                            }

                        }
                    }
                    
                } else {
                    if (category === "vac") {
                        task_url = '/activeboard';
                    } else {
                        task_url = '/activejobboard';
                    }
                }
            } else if (registerState === 0) {
                if (category === "vac") {
                    task_url = '/first';
                } else {
                    task_url = '/firstJob';
                }
            } else {
                if (moderationState === false) {
                    if (payState === false) {
                        if (category === "vac") {
                            task_url = '/second';
                        } else {
                            task_url = '/secondJob';
                        }
                    } else {
                        task_url = '/';
                    }
                } else {
                    if (payState === false) {
                        task_url = '/';
                    } else {
                        task_url = '/';
                    }
                }
            }
        } else {
            deleteState = true;
            task_url = '/delete';
            mainDivClass = "flex flex-col relative w-full p-4 customBorder leading-[1.5]";
            btnDivClass = "hidden";
        }
        return {
            checkState: props.checkState,
            deleteState: deleteState,
            registerState: registerState,
            active: active,
            moderationState: moderationState,
            payState: payState,
            category: category,
            mainDivClass: mainDivClass,
            proposalClass: proposalClass,
            btnDivClass: btnDivClass,
            task_url: task_url,
            title: title,
            content: content,
            job_number: job_number,
            proposal_count: proposal_count,
        };
    }

    handleChange(e) {
        
        if(e.target.checked === true) {
            check_state += 1;
        }
        else
            check_state -= 1;
        this.props.checkState(check_state);
    }

    handleStatus() {
        Swal.fire({
            title: "Разместить вакансию для соискателей?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
            cancelButtonText: "Нет"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.setState({
                        status: true
                    })
                }
        })
    }

    componentDidMount() {
        check_state = 0;
    }


    render() {
        return (
            <div className='flex w-full justify-start items-stretch rounded-md shadow-[0_0_3px_#C4C4C4] mt-[25px]'>
                <div className='flex relative w-10 justify-center items-start pt-5 customBorder'>
                    <input type='checkbox' aria-checked={'false'} onClick={this.handleChange} className='w-[1em] h-[1em] text-[#00B2A4] bg-gray-100 border-gray-300 rounded focus:ring-[#00B2A4]' />
                </div>
                <div className='flex second:flex-row xs:flex-col w-[95%]'>
                    <div className={this.state.mainDivClass}>
                        <div className='flex relative w-full justify-start mb-3'>
                            <span className='underline decoration-solid'>
                                <Link to={this.state.task_url}><h6 className="text-[#212529] font-semibold leading-[1.4]">{this.state.title}</h6></Link>
                            </span>
                        </div>
                        <div className='flex relative w-full justify-start mb-3'>
                            <small className='text-[#8492a6]'>{this.state.job_number}</small>
                        </div>
                        <div className='flex relative w-full justify-start mb-3'>
                            <small className='text-[#212529] !text-[14px] text-left customWrap'>
                                {this.state.content}
                            </small>
                        </div>
                        <div className={proposalClass}>
                            <Link to={`/proposals`} className="text-[#8492a6] text-[14px] customDotted">Отклики ({this.state.proposal_count})</Link>
                        </div>
                    </div>
                    <div className={btnDivClass}>
                        {
                            this.state.deleteState ?
                                ''
                                :
                                this.state.registerState === 1 ?
                                    this.state.active ?
                                        this.state.category === "vac" ?
                                            <button
                                                className='text-[10px] break-words p-2 xs:w-full rounded-md hover:bg-[#069488] bg-[#00B2A4] text-[#FFFFFF]'
                                            >
                                                Транслирование
                                            </button>
                                            :
                                            <button className='text-[10px] break-words p-2 xs:w-full rounded-md hover:bg-[#069488] bg-[#00B2A4] text-[#FFFFFF]'>
                                                Поиск и подбор соискателей продолжается
                                            </button>
                                        :
                                        this.state.moderationState ?
                                            this.state.payState ?
                                                ([
                                                    !this.state.status ?
                                                        <button
                                                            type='button'
                                                            onClick={this.handleStatus}
                                                            className='bg-button text-white text-[12px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Вы можете разместить вакансию для соискателей"
                                                        >
                                                            Активировать
                                                        </button>
                                                        : 
                                                        <button
                                                            type='button'
                                                            className='bg-button text-white text-[12px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Вакансии находится на проверке у менеджера; проверка не займет более 1 часа"
                                                        >
                                                            На модерации
                                                        </button>,
                                                    this.state.category === 'vac' ?
                                                        <Link to={`/edit`}>
                                                            <button
                                                                type='button'
                                                                className='bg-button text-white text-[12px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                                data-tooltip-id="my-tooltip"
                                                                data-tooltip-content="Вы можете изменить описание вакансии"
                                                            >
                                                                Редактировать
                                                            </button>
                                                        </Link>
                                                        :
                                                        <Link to={`/editjob`}>
                                                            <button
                                                                type='button'
                                                                className='bg-button text-white text-[12px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                                data-tooltip-id="my-tooltip"
                                                                data-tooltip-content="Вы можете изменить описание вакансии"
                                                            >
                                                                Редактировать
                                                            </button>
                                                        </Link>
                                                ])
                                                :
                                                <button
                                                    type='button'
                                                    className='bg-button text-white text-[12px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-content="Чтобы активировать вакансию Необходимо оплатить размещение объявления"
                                                >
                                                    Оплатить
                                                </button>
                                            :
                                            ([
                                                this.state.category === 'vac' ?
                                                    <Link to={`/moderation`}>
                                                        <span
                                                            className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-6"
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Чтобы активировать вакансию необходимо изменить описание вакансии согласно правилам сервиса"
                                                        >
                                                            Ред
                                                        </span>
                                                    </Link>
                                                    :
                                                    <Link to={`/moderationjob`}>
                                                        <span
                                                            className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-6"
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Чтобы активировать вакансию необходимо изменить описание вакансии согласно правилам сервиса"
                                                        >
                                                            Ред
                                                        </span>
                                                    </Link>,
                                                this.state.payState ?
                                                    ''
                                                    :
                                                    <span
                                                        className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                                                        data-tooltip-id="my-tooltip"
                                                        data-tooltip-content="Чтобы активировать вакансию Необходимо оплатить размещение объявления"
                                                    >
                                                        Опл
                                                    </span>
                                            ])
                                    :
                                    this.state.registerState === 0 ?
                                        ([
                                            <button
                                                type='button'
                                                className='bg-button text-white text-[10px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                data-tooltip-id='my-tooltip'
                                                data-tooltip-content="Вакансии находится на проверке у менеджера; проверка не займет более 1 часа"
                                            >
                                                На модерации
                                            </button>,
                                            <Link to={`/registerAgency`}>
                                                <span
                                                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-4"
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-content="Чтобы активировать вакансию, необходимо заполнить регистрационные данные заказчика"
                                                >
                                                    Рег
                                                </span>
                                            </Link>
                                        ])
                                        :
                                        this.state.moderationState ?
                                            this.state.payState ?
                                                <Link to={`/registerAgency`}>
                                                    <button
                                                        type='button'
                                                        className='bg-button text-white text-[12px] py-2 px-2 rounded-lg w-full middle:w-30 mb-4'
                                                        data-tooltip-id="my-tooltip"
                                                        data-tooltip-content="Чтобы активировать вакансию, необходимо заполнить регистрационные данные заказчика"
                                                    >
                                                        Регистрация
                                                    </button>
                                                </Link>
                                                :
                                                ([
                                                    <Link to={`/registerAgency`}>
                                                        <span
                                                            className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-6"
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Чтобы активировать вакансию, необходимо заполнить регистрационные данные заказчика"
                                                        >
                                                            Рег
                                                        </span>
                                                    </Link>,
                                                    <span
                                                        className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                                                        data-tooltip-id='my-tooltip'
                                                        data-tooltip-content="Чтобы активировать вакансию Необходимо оплатить размещение объявления"
                                                    >
                                                        Опл
                                                    </span>
                                                ])
                                            :
                                            ([
                                                <Link to={`/registerAgency`}>
                                                    <span
                                                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-6"
                                                        data-tooltip-id="my-tooltip"
                                                        data-tooltip-content="Чтобы активировать вакансию, необходимо заполнить регистрационные данные заказчика"
                                                    >
                                                        Рег
                                                    </span>
                                                </Link>,
                                                this.state.category === 'vac' ?
                                                    <Link to={`/moderation`}>
                                                        <span
                                                            className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-6"
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Чтобы активировать вакансию необходимо изменить описание вакансии согласно правилам сервиса"
                                                        >
                                                            Ред
                                                        </span>
                                                    </Link>
                                                    :
                                                    <Link to={`/moderationjob`}>
                                                        <span
                                                            className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded mb-6"
                                                            data-tooltip-id="my-tooltip"
                                                            data-tooltip-content="Чтобы активировать вакансию необходимо изменить описание вакансии согласно правилам сервиса"
                                                        >
                                                            Ред
                                                        </span>
                                                    </Link>,
                                                this.state.payState ?
                                                    ''
                                                    :
                                                    <span
                                                        className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                                                        data-tooltip-id="my-tooltip"
                                                        data-tooltip-content="Чтобы активировать вакансию Необходимо оплатить размещение объявления"
                                                    >
                                                        Опл
                                                    </span>
                                            ])
                        }
                        <Tooltip
                            id="my-tooltip"
                            render={({ content }) => (
                                <div className='flex w-60'>
                                    {content}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
                
export default List;
