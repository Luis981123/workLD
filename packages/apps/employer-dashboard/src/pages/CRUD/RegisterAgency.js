import React, {Component} from 'react';
import { Radio, Label } from 'flowbite-react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class RegisterAgency extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            ie: true,
            company: false,
            person: false,
            modalState: false,
            readState: false,
            alertState: false,
            ie_values: {
                ie_name: '',
                ie_law_address: '',
                ie_real_address: '',
                ie_inn: '',
                ie_kpp: '',
                ie_ACEO: '',
                ie_NACE: ''
            },
            ie_errors: {
                ie_name: '',
                ie_law_address: '',
                ie_real_address: '',
                ie_inn: '',
                ie_kpp: '',
                ie_ACEO: '',
                ie_NACE: ''
            },
            company_values: {
                company_name: '',
                company_law_address: '',
                company_real_address: '',
                company_inn: '',
                company_kpp: '',
                company_ogrm: '',
                company_telephone: '',
                company_email: ''
            },
             company_errors: {
                company_name: '',
                company_law_address: '',
                company_real_address: '',
                company_inn: '',
                company_kpp: '',
                company_ogrm: '',
                company_telephone: '',
                company_email: ''
            },
            person_values: {
                person_name: '',
                person_passport: '',
                person_issue: '',
                person_date_issue: '',
                person_reg_address: '',
                person_telephone: '',
                person_email: ''
            },
            person_errors: {
                person_name: '',
                person_passport: '',
                person_issue: '',
                person_date_issue: '',
                person_reg_address: '',
                person_telephone: '',
                person_email: ''
            },
            isFormValid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.setOpenModal = this.setOpenModal.bind(this);
        this.setHideModal = this.setHideModal.bind(this);
        this.setReadState = this.setReadState.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSaveStatus = this.handleSaveStatus.bind(this);
    }

    handleChange(e) {
        if(e.target.value === 'ie') {
            this.setState({
                ie: true,
                company: false,
                person: false,
            });
        } else if(e.target.value === 'company') {
            this.setState({
                ie: false,
                company: true,
                person: false,
            });
        } else {
            this.setState({
                ie: false,
                company: false,
                person: true,
            });
        }
    }

    validateField = (name, value) => {
        let errorMessage;
        if (!value) {
            errorMessage = "Необходимо заполнить данные";
        }
        if (name === 'company_email' || name ==='person_email') {
            const emailRegex = /\S+@\S+\.\S+/;
            errorMessage = emailRegex.test(value) ? null : 'Email is not valid';
        }

        return errorMessage;
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const error = this.validateField(name, value);
        
        if (this.state.ie) {
            this.setState(prevState => {
                const updatedFormErrors = {
                    ...prevState.ie_errors,
                    [name]: error
                };
                const isFormValid = Object.values({ ...prevState.ie_values, [name]: value })
                    .every(val => val) && Object.values(updatedFormErrors).every(e => !e);
    
                return {
                    ie_values: {
                        ...prevState.ie_values,
                        [name]: value
                    },
                    ie_errors: updatedFormErrors,
                    isFormValid
                }
            });
        } else if (this.state.company) {
            this.setState(prevState => {
                const updatedFormErrors = {
                    ...prevState.company_errors,
                    [name]: error
                };
                const isFormValid = Object.values({ ...prevState.company_values, [name]: value })
                    .every(val => val) && Object.values(updatedFormErrors).every(e => !e);
    
                return {
                    company_values: {
                        ...prevState.company_values,
                        [name]: value
                    },
                    company_errors: updatedFormErrors,
                    isFormValid
                }
            });
        } else {
           this.setState(prevState => {
                const updatedFormErrors = {
                    ...prevState.person_errors,
                    [name]: error
                };
                const isFormValid = Object.values({ ...prevState.person_values, [name]: value })
                    .every(val => val) && Object.values(updatedFormErrors).every(e => !e);
    
                return {
                    person_values: {
                        ...prevState.person_values,
                        [name]: value
                    },
                    person_errors: updatedFormErrors,
                    isFormValid
                }
            }); 
        }
    }

    setOpenModal() {
        this.setState({
            modalState: true
        })
    }

    setHideModal() {
        this.setState({
            modalState: false
        })
    }

    setReadState() {
        this.setState({
            modalState: false,
            readState: true
        });
    }

    handleSaveStatus(e) {
        e.preventDefault();

        let isFormValid = true;
        let updatedFormErrors = {};

        if (this.state.ie) {
            const { ie_values } = this.state;

            Object.keys(ie_values).forEach(fieldName => {
                const errorMessage = this.validateField(fieldName, ie_values[fieldName]);
                if (errorMessage) {
                    isFormValid = false;
                }
                updatedFormErrors[fieldName] = errorMessage;
            });
        } else if (this.state.company) {
            const { company_values } = this.state;

            Object.keys(company_values).forEach(fieldName => {
                const errorMessage = this.validateField(fieldName, company_values[fieldName]);
                if (errorMessage) {
                    isFormValid = false;
                }
                updatedFormErrors[fieldName] = errorMessage;
            });
        } else {
            const { person_values } = this.state;

            Object.keys(person_values).forEach(fieldName => {
                const errorMessage = this.validateField(fieldName, person_values[fieldName]);
                if (errorMessage) {
                    isFormValid = false;
                }
                updatedFormErrors[fieldName] = errorMessage;
            });
        }

        if (!isFormValid) {
            if (this.state.ie) {
                this.setState({ ie_errors: updatedFormErrors });
            } else if (this.state.company) {
                this.setState({ company_errors: updatedFormErrors });
            } else {
                this.setState({ person_errors: updatedFormErrors });
            }
            return; // Stop handleSubmit since the form is not valid
        } else {
            if (!this.state.readState) {
                Swal.fire({
                    icon: "error",
                    title: "необходимо ознакомиться с правилами",
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Данные сохранены. Происходит проверка профиля",
                    showConfirmButton: false,
                    timer: 1500
                }).then((result) => {
                    if (result.dismiss) {
                        this.setState({
                            alertState: true,
                        })
                    }
                })
            }
        }
        
    }

    handleDeleteStatus() {
        Swal.fire({
            title: "Вы действительно хотите удалить свой профиль?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да, удалить ",
            cancelButtonText: "Отменить"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: "success",
                        title: "Ваш профиль успешно удален",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
    }

    render() {
        const { ie_values, ie_errors } = this.state;
        const { company_values, company_errors } = this.state;
        const { person_values, person_errors } = this.state;

        return (
            <div className='mx-auto p-2 flex-1 w-full max-w-6xl'>
                <div className='w-full my-6'>
                    {/* starting text */}
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <p className='text-2xl font-medium'>Общая информация</p>
                        {/* <p className='flex flex-wrap justify-center items-center'>
                        <p className='font-light'>Необходимо заполнить</p>
                        <a className='ml-1 font-bold' href='#'>
                            информацию о работодателе
                        </a>
                        </p> */}
                    </div>
                    <div className='p-3 mt-2'>
                        <div className='mb-6'>
                            <fieldset className="flex w-full first:flex-row xs: flex-col gap-4">
                                <legend className="mb-4 text-[14px]">Тип пользователя</legend>
                                {/* ie ---> individual entrepreneur */}
                                <div className="flex items-center gap-2">
                                    <Radio id="ie" name="organization" onChange={this.handleChange} value="ie" defaultChecked />
                                    <Label htmlFor="ie" className='dark:text-gray-900'>ИП</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio id="company" name="organization" onChange={this.handleChange} value="company" />
                                    <Label htmlFor="company" className='dark:text-gray-900'>Организация</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Radio id="person" name="organization" onChange={this.handleChange} value="person" />
                                    <Label htmlFor="person" className='dark:text-gray-900'>Физическое лицо</Label>
                                </div>
                            </fieldset>
                        </div>
                        {
                            this.state.alertState ? 
                                <div className='mb-6'>
                                    <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 relative" role="alert">
                                        <svg
                                            className="fill-current w-4 h-4 mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                                        </svg>
                                        <p>проверка профиля прошла успешно!</p>
                                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => this.setState({alertState: false})}>
                                            <svg className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                        </span>
                                    </div>
                                </div> : ''
                                
                        }
                        {
                            this.state.ie ? 
                                <div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="ie_name" className='dark:text-gray-900' value="Наименование" />
                                        </div>
                                        <input
                                            type='text'
                                            id='ie_name'
                                            name='ie_name'
                                            value={ie_values.ie_name}
                                            onChange={this.handleInputChange}
                                            className={
                                                ie_errors.ie_name ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            ie_errors.ie_name &&
                                            <p className='text-red-600'>{ ie_errors.ie_name }</p>
                                        }
                                        
                                    </div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="ie_law_address" className='dark:text-gray-900' value="Юридический адрес" />
                                        </div>
                                        <input
                                            type='text'
                                            id='ie_law_address'
                                            name='ie_law_address'
                                            value={ie_values.ie_law_address}
                                            onChange={this.handleInputChange}
                                            className={
                                                ie_errors.ie_law_address ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            ie_errors.ie_law_address &&
                                            <p className='text-red-600'>{ ie_errors.ie_law_address }</p>
                                        }
                                    </div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="ie_real_address" className='dark:text-gray-900' value="Фактический адрес" />
                                        </div>
                                        <input
                                            type='text'
                                            id='ie_real_address'
                                            name='ie_real_address'
                                            value={ie_values.ie_real_address}
                                            onChange={this.handleInputChange}
                                            className={
                                                ie_errors.ie_real_address ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            ie_errors.ie_real_address &&
                                            <p className='text-red-600'>{ ie_errors.ie_real_address }</p>
                                        }
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row md:justify-evenly'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='ie_inn' className='block mb-2 text-sm font-bold text-gray-900'>
                                                ИНН
                                            </label>
                                            <input
                                                type='text'
                                                id='ie_inn'
                                                name='ie_inn'
                                                value={ie_values.ie_inn}
                                                onChange={this.handleInputChange}
                                                className={
                                                    ie_errors.ie_inn ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                ie_errors.ie_inn &&
                                                <p className='text-red-600'>{ ie_errors.ie_inn }</p>
                                            }
                                        </div>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='ie_kpp' className='block mb-2 text-sm font-bold text-gray-900'>
                                                КПП
                                            </label>
                                            <input
                                                type='text'
                                                id='ie_kpp'
                                                name='ie_kpp'
                                                value={ie_values.ie_kpp}
                                                onChange={this.handleInputChange}
                                                className={
                                                    ie_errors.ie_kpp ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                ie_errors.ie_kpp &&
                                                <p className='text-red-600'>{ ie_errors.ie_kpp }</p>
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row md:justify-evenly'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='ie_ACEO' className='block mb-2 text-sm font-bold text-gray-900'>
                                                ОКПО
                                            </label>
                                            <input
                                                type='text'
                                                id='ie_ACEO'
                                                name='ie_ACEO'
                                                value={ie_values.ie_ACEO}
                                                onChange={this.handleInputChange}
                                                className={
                                                    ie_errors.ie_ACEO ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                ie_errors.ie_ACEO &&
                                                <p className='text-red-600'>{ ie_errors.ie_ACEO }</p>
                                            }
                                        </div>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='ie_NACE' className='block mb-2 text-sm font-bold text-gray-900'>
                                                ОКВЭД
                                            </label>
                                            <input
                                                type='text'
                                                id='ie_NACE'
                                                name='ie_NACE'
                                                value={ie_values.ie_NACE}
                                                onChange={this.handleInputChange}
                                                className={
                                                    ie_errors.ie_NACE ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                ie_errors.ie_NACE &&
                                                <p className='text-red-600'>{ ie_errors.ie_NACE }</p>
                                            }
                                        </div>
                                    </div>
                                </div> : ''

                        }
                        {
                            this.state.company ? 
                                <div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="company_name" className='dark:text-gray-900' value="Наименование" />
                                        </div>
                                        <input
                                            type='text'
                                            id='company_name'
                                            name='company_name'
                                            value={company_values.company_name}
                                            onChange={this.handleInputChange}
                                            className={
                                                company_errors.company_name ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            company_errors.company_name &&
                                                <p className='text-red-600'>{ company_errors.company_name }</p>
                                        }
                                    </div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="company_law_address" className='dark:text-gray-900' value="Юридический адрес" />
                                        </div>
                                        <input
                                            type='text'
                                            id='company_law_address'
                                            name='company_law_address'
                                            value={company_values.company_law_address}
                                            onChange={this.handleInputChange}
                                            className={
                                                company_errors.company_law_address ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            company_errors.company_law_address &&
                                            <p className='text-red-600'>{ company_errors.company_law_address }</p>
                                        }
                                    </div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="company_real_address" className='dark:text-gray-900' value="Фактический адрес" />
                                        </div>
                                        <input
                                            type='text'
                                            id='company_real_address'
                                            name='company_real_address'
                                            value={company_values.company_real_address}
                                            onChange={this.handleInputChange}
                                            className={
                                                company_errors.company_real_address ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            company_errors.company_real_address &&
                                            <p className='text-red-600'>{ company_errors.company_real_address }</p>
                                        }
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row md:justify-evenly'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='company_inn' className='block mb-2 text-sm font-bold text-gray-900'>
                                                ИНН
                                            </label>
                                            <input
                                                type='text'
                                                id='company_inn'
                                                name='company_inn'
                                                value={company_values.company_inn}
                                                onChange={this.handleInputChange}
                                                className={
                                                    company_errors.company_inn ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                company_errors.company_inn &&
                                                <p className='text-red-600'>{ company_errors.company_inn }</p>
                                            }
                                        </div>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='company_kpp' className='block mb-2 text-sm font-bold text-gray-900'>
                                                КПП
                                            </label>
                                            <input
                                                type='text'
                                                id='company_kpp'
                                                name='company_kpp'
                                                value={company_values.company_kpp}
                                                onChange={this.handleInputChange}
                                                className={
                                                    company_errors.company_kpp ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                company_errors.company_kpp &&
                                                <p className='text-red-600'>{ company_errors.company_kpp }</p>
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='company_ogrm' className='block mb-2 text-sm font-bold text-gray-900'>
                                                ОГРН
                                            </label>
                                            <input
                                                type='text'
                                                id='company_ogrm'
                                                name='company_ogrm'
                                                value={company_values.company_ogrm}
                                                onChange={this.handleInputChange}
                                                className={
                                                    company_errors.company_ogrm ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                company_errors.company_ogrm &&
                                                <p className='text-red-600'>{ company_errors.company_ogrm }</p>
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row md:justify-evenly'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='company_telephone' className='block mb-2 text-sm font-bold text-gray-900'>
                                                Телефон
                                            </label>
                                            <input
                                                type='text'
                                                id='company_telephone'
                                                name='company_telephone'
                                                value={company_values.company_telephone}
                                                onChange={this.handleInputChange}
                                                className={
                                                    company_errors.company_telephone ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                company_errors.company_telephone &&
                                                <p className='text-red-600'>{ company_errors.company_telephone }</p>
                                            }
                                        </div>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='company_email' className='block mb-2 text-sm font-bold text-gray-900'>
                                                E-mail
                                            </label>
                                            <input
                                                type='text'
                                                id='company_email'
                                                name='company_email'
                                                value={company_values.company_email}
                                                onChange={this.handleInputChange}
                                                className={
                                                    company_errors.company_email ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                company_errors.company_email &&
                                                <p className='text-red-600'>{ company_errors.company_email }</p>
                                            }
                                        </div>
                                    </div>
                                </div> : ''

                        }
                        {
                            this.state.person ? 
                                <div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="person_name" className='dark:text-gray-900' value="ФИО" />
                                        </div>
                                        <input
                                            type='text'
                                            id='person_name'
                                            name='person_name'
                                            value={person_values.person_name}
                                            onChange={this.handleInputChange}
                                            className={
                                                person_errors.person_name ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            person_errors.person_name &&
                                            <p className='text-red-600'>{ person_errors.person_name }</p>
                                        }
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row md:justify-evenly'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='person_passport' className='block mb-2 text-sm font-bold text-gray-900'>
                                                Серия и номер паспорта
                                            </label>
                                            <input
                                                type='text'
                                                id='person_passport'
                                                name='person_passport'
                                                value={person_values.person_passport}
                                                onChange={this.handleInputChange}
                                                className={
                                                    person_errors.person_passport ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                person_errors.person_passport &&
                                                <p className='text-red-600'>{ person_errors.person_passport }</p>
                                            }
                                        </div>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='person_issue' className='block mb-2 text-sm font-bold text-gray-900'>
                                                Кем выдан
                                            </label>
                                            <input
                                                type='text'
                                                id='person_issue'
                                                name='person_issue'
                                                value={person_values.person_issue}
                                                onChange={this.handleInputChange}
                                                className={
                                                    person_errors.person_issue ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                person_errors.person_issue &&
                                                <p className='text-red-600'>{ person_errors.person_issue }</p>
                                            }
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="person_date_issue" className='dark:text-gray-900' value="Дата выдачи" />
                                        </div>
                                        <input
                                            type='text'
                                            id='person_date_issue'
                                            name='person_date_issue'
                                            value={person_values.person_date_issue}
                                            onChange={this.handleInputChange}
                                            className={
                                                person_errors.person_date_issue ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            person_errors.person_date_issue &&
                                            <p className='text-red-600'>{ person_errors.person_date_issue }</p>
                                        }
                                    </div>
                                    <div className='mb-2'>
                                        <div className="block mb-2">
                                            <Label htmlFor="person_reg_address" className='dark:text-gray-900' value="Адрес прописки" />
                                        </div>
                                        <input
                                            type='text'
                                            id='person_reg_address'
                                            name='person_reg_address'
                                            value={person_values.person_reg_address}
                                            onChange={this.handleInputChange}
                                            className={
                                                person_errors.person_reg_address ?
                                                    'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                    : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                            }
                                        />
                                        {
                                            person_errors.person_reg_address &&
                                            <p className='text-red-600'>{ person_errors.person_reg_address }</p>
                                        }
                                    </div>
                                    <div className='w-full mb-2 flex flex-col md:flex-row md:justify-evenly'>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='person_telephone' className='block mb-2 text-sm font-bold text-gray-900'>
                                                Телефон
                                            </label>
                                            <input
                                                type='text'
                                                id='person_telephone'
                                                name='person_telephone'
                                                value={person_values.person_telephone}
                                                onChange={this.handleInputChange}
                                                className={
                                                    person_errors.person_telephone ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                person_errors.person_telephone &&
                                                <p className='text-red-600'>{ person_errors.person_telephone }</p>
                                            }
                                        </div>
                                        <div className='mb-2 md:w-1/2 pr-2'>
                                            <label htmlFor='person_email' className='block mb-2 text-sm font-bold text-gray-900'>
                                                E-mail
                                            </label>
                                            <input
                                                type='text'
                                                id='person_email'
                                                name='person_email'
                                                value={person_values.person_email}
                                                onChange={this.handleInputChange}
                                                className={
                                                    person_errors.person_email ?
                                                        'shadow-sm text-gray-900 text-sm border border-1 has-error focus:border-button focus:outline-none block w-full p-2.5'
                                                        : 'shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                                                }
                                            />
                                            {
                                                person_errors.person_email &&
                                                <p className='text-red-600'>{ person_errors.person_email }</p>
                                            }
                                        </div>
                                    </div>
                                </div> : ''

                        }
                        <div className='mb-6 gap-2 flex'>
                            <Link onClick={this.setOpenModal}>
                                <p id='readState' className='underline'>
                                    Ознакомиться с правилами
                                </p>
                            </Link>
                            {
                                this.state.readState ?
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span> : ''
                            }
                        </div>
                        <div className='mb-4'>
                            <button
                                type='button'
                                className='text-center border rounded py-2 px-4 mb-2 bg-button text-white hover:bg-button-hov mr-2 w-full md:w-auto transition ease-in-out duration-300'
                                onClick={this.handleSaveStatus}
                            >
                                Сохранить
                            </button>
                            <button
                                type='button'
                                className='text-center border rounded py-2 px-4 mr-2 mb-2 text-white border-red-600 border-1 w-full md:w-auto hover:text-white bg-red-600 hover:bg-red-700 transition ease-in-out duration-300'
                                onClick={this.handleDeleteStatus}
                            >
                                Удалить
                            </button>
                            <Link to={`/`}>
                                <button
                                    type='button'
                                    className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                >
                                    Отменить
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal
                    open={this.state.modalState}
                    onCancel={this.setHideModal}
                    title="Terms of Service"
                    width={600}
                    footer={(_, {  }) => (
                    <>
                        <button onClick={this.setHideModal} className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'>
                            Отменить
                        </button>
                        {/* <CancelBtn>Отменить</CancelBtn> */}
                    </>
                    )}
                >
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        <div className='flex flex-row items-center'>
                            {
                                this.state.readState ?
                                    <input 
                                        type="checkbox" 
                                        id='agree' 
                                        className="accent-button text-sm w-4 h-4 mb-2" 
                                        checked
                                        disabled
                                    /> :
                                    <input 
                                        type="checkbox" 
                                        id='agree' 
                                        className="accent-button text-sm w-4 h-4 mb-2" 
                                        onChange={this.setReadState} 
                                    />
                            }
                            <label htmlFor='agree' className='block pl-3 mb-2 text-sm font-bold text-gray-900'>
                                I agree!!!
                            </label>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default RegisterAgency;