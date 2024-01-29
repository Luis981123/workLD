import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Select from "react-tailwindcss-select";
// import 'react-tailwindcss-select/dist/index.css'

const JobPosterOptions = [
    { value: "fox", label: "Fox" },
    { value: "Butterfly", label: "Butterfly" },
    { value: "Honeybee", label: "Honeybee" }
];

const managerOptions = [
    { value: "fox", label: "Fox" },
    { value: "Butterfly", label: "Butterfly" },
    { value: "Honeybee", label: "Honeybee" }
];

class VacancyFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobPosterName: null,
            managerName: null
        };

    }

    handleChange = (value) => {
        console.log("value:", value);
        this.setState({ jobPosterName: value });
    }

    handleChangeManager = (value) => {
        console.log("value:", value);
        this.setState({ managerName: value });
    }

    render() {
        const { jobPosterName, managerName } = this.state;
        return (
            <div className='flex flex-col w-full p-4 mt-14 rounded-md shadow-[0_0_3px_#C4C4C4]'>
                <div className='mb-6'>
                    <p className='text-xl font-medium'>Фильтр</p>
                </div>
                <div className='mb-2'>
                    <Select
                        classNames={{
                            menuButton: ({ isDisabled }) => (
                                `flex justify-between pr-1.5 py-1 shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none ${
                                    isDisabled
                                        ? "bg-gray-200"
                                        : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                }`
                            ),
                            menu: "absolute z-10 w-full bg-white shadow-lg border-1 rounded py-1 mt-1.5 text-sm text-gray-700",
                            listItem: ({ isSelected }) => (
                                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                                    isSelected
                                        ? `text-white bg-blue-500`
                                        : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                }`
                            ),
                            searchIcon: "hidden ",
                            searchBox: "w-full text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none",
                        }}
                        placeholder='Название контрагента'
                        value={jobPosterName}
                        onChange={this.handleChange}
                        options={JobPosterOptions}
                        isSearchable
                        isClearable
                    />
                </div>
                <div className='mb-2'>
                    <select 
                        data-te-select-init
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        defaultValue={1}
                    >
                        <option value="1">стартовый</option>
                        <option value="2">разовый</option>
                        <option value="3">HR</option>
                    </select>
                </div>

                <div className='mb-2'>
                    <Select
                        classNames={{
                            menuButton: ({ isDisabled }) => (
                                `flex justify-between pr-1.5 py-1 shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none ${
                                    isDisabled
                                        ? "bg-gray-200"
                                        : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                }`
                            ),
                            menu: "absolute z-10 w-full bg-white shadow-lg border-1 rounded py-1 mt-1.5 text-sm text-gray-700",
                            listItem: ({ isSelected }) => (
                                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                                    isSelected
                                        ? `text-white bg-blue-500`
                                        : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                }`
                            ),
                            searchIcon: "hidden ",
                            searchBox: "w-full text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none",
                        }}
                        placeholder='Название контрагента'
                        value={managerName}
                        onChange={this.handleChangeManager}
                        options={managerOptions}
                        isSearchable
                        isClearable
                    />
                </div>
                {/* <div className='mb-2'>
                    <input
                        type='text'
                        id='filter_text'
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Название организации'
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
                <div className='mb-2'>
                    <select 
                        data-te-select-init
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Пол'
                    >
                        <option value="1" selected>Тип вакансии</option>
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
                            placeholder='Мин стоимость'
                        />
                    </div>
                    <div className='flex mb-2 w-1/2 pl-2'>
                        <input
                            type='text'
                            id='to_age'
                            className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Макс стоимость'
                        />
                    </div>
                </div>
                <div className='w-full mb-2 flex flex-row'>
                    <div className='flex mb-2 w-1/2 pr-2'>
                        <input
                            type='text'
                            id='from_age'
                            className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Мин возраст'
                        />
                    </div>
                    <div className='flex mb-2 w-1/2 pl-2'>
                        <input
                            type='text'
                            id='to_age'
                            className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='Макс возраст'
                        />
                    </div>
                </div>
                <div className='mb-2'>
                    <select 
                        data-te-select-init
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Пол'
                    >
                        <option value="1" selected>Активность вакансии</option>
                        <option value="2">М</option>
                        <option value="3">Ж</option>
                    </select>
                </div>
                <div className='mb-2'>
                    <input
                        type='text'
                        id='filter_text'
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Периодичность выплат'
                    />
                </div>
                <div className='mb-2'>
                    <input
                        type='text'
                        id='filter_text'
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Длительность рабочей смены'
                    />
                </div>
                <div className='mb-2'>
                    <input
                        type='text'
                        id='filter_text'
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Мин.длит.раб.смены'
                    />
                </div>
                <div className='mb-2'>
                    <input
                        type='text'
                        id='filter_text'
                        className='shadow-sm text-gray-900 text-sm border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='Макс.длит.раб.смены'
                    />
                </div> */}
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
        )
    }
}

export default VacancyFilter;
