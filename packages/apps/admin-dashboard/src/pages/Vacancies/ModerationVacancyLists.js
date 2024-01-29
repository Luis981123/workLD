import React, {useState, useEffect} from 'react';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Select from "react-tailwindcss-select";

import GreenCheckmark from '../../components/Form/VacStateSvg/GreenCheckmark';
import BlueCross from '../../components/Form/VacStateSvg/BlueCross';
import RedCross from '../../components/Form/VacStateSvg/RedCross';
import OrangeSquare from '../../components/Form/VacStateSvg/OrangeSquare';
import GreenSquare from '../../components/Form/VacStateSvg/GreenSquare';
import RedSquare from '../../components/Form/VacStateSvg/RedSquare';
import GreenCircle from '../../components/Form/VacStateSvg/GreenCircle';
import { Link } from 'react-router-dom';

var check_state = 0;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function ModerationVacancyLists(props) {
    
    const [stateLists, setActiveLists] = useState([
        {
            key: 1,
            num: 153,
            date: '15.01.24',
            state: 0,
            jobName: 'Охранник в ТЦ',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            payState: 1,
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
            vacState: 0
        },
        {
            key: 2,
            num: 151,
            date: '12.01.24',
            state: 1,
            jobName: 'Горничная в отель',
            jobPosterName: 'Anastasia',
            regState: 0,
            type: 'разовый',
            payState: 1,
            manager: {
                name: 'Ivan',
                options: [
                    { value: "fox", label: "Fox", num: 151 },
                    { value: "Butterfly", label: "Butterfly", num: 151 },
                    { value: "Honeybee", label: "Honeybee", num: 151 }
                ]
            },
            vacState: 1
        },
        {
            key: 3,
            num: 150,
            date: '11.01.24',
            state: 2,
            jobName: 'Разнорабочий',
            jobPosterName: 'Anna',
            regState: 1,
            type: 'HR 1',
            payState: 0,
            manager: {
                name: 'Natalia',
                options: [
                    { value: "fox", label: "Fox", num: 150 },
                    { value: "Butterfly", label: "Butterfly", num: 150 },
                    { value: "Honeybee", label: "Honeybee", num: 150 }
                ]
            },
            vacState: 2
        },
        {
            key: 4,
            num: 149,
            date: '13.01.24',
            state: 3,
            jobName: 'Комплектовщик на склад',
            jobPosterName: 'Dmitri',
            regState: 1,
            type: 'HR 2',
            payState: 1,
            manager: {
                name: 'Ekaterina',
                options: [
                    { value: "fox", label: "Fox", num: 149 },
                    { value: "Butterfly", label: "Butterfly", num: 149 },
                    { value: "Honeybee", label: "Honeybee", num: 149 }
                ]
            },
            vacState: 3
        },
        {
            key: 5,
            num: 148,
            date: '10.01.24',
            state: 3,
            jobName: 'Повар в ресторан',
            jobPosterName: 'Ivan',
            regState: 1,
            type: 'HR 3',
            payState: 1,
            manager: {
                name: 'Anna',
                options: [
                    { value: "fox", label: "Fox", num: 148 },
                    { value: "Butterfly", label: "Butterfly", num: 148 },
                    { value: "Honeybee", label: "Honeybee", num: 148 }
                ]
            },
            vacState: 4
        },
        {
            key: 6,
            num: 147,
            date: '09.01.24',
            state: 1,
            jobName: 'Копирайтер',
            jobPosterName: 'Maria',
            regState: 1,
            type: 'разовый',
            payState: 0,
            manager: {
                name: 'Anastasia',
                options: [
                    { value: "fox", label: "Fox", num: 147 },
                    { value: "Butterfly", label: "Butterfly", num: 147 },
                    { value: "Honeybee", label: "Honeybee", num: 147 }
                ]
            },
            vacState: 5
        },
        {
            key: 7,
            num: 146,
            date: '07.01.24',
            state: 1,
            jobName: 'Разнорабочий',
            jobPosterName: 'Ivan',
            regState: 1,
            type: 'разовый',
            payState: 1,
            manager: {
                name: 'Sasha',
                options: [
                    { value: "fox", label: "Fox", num: 146 },
                    { value: "Butterfly", label: "Butterfly", num: 146 },
                    { value: "Honeybee", label: "Honeybee", num: 146 }
                ]
            },
            vacState: 6
        },
        {
            key: 8,
            num: 145,
            date: '11.01.24',
            state: 1,
            jobName: 'Горничная в отель',
            jobPosterName: 'Sasha',
            regState: 1,
            type: 'стартовый',
            payState: 0,
            manager: {
                name: 'Ekaterina',
                options: [
                    { value: "fox", label: "Fox", num: 145 },
                    { value: "Butterfly", label: "Butterfly", num: 145 },
                    { value: "Honeybee", label: "Honeybee", num: 145 }
                ]
            },
            vacState: 2
        },
        {
            key: 9,
            num: 144,
            date: '12.01.24',
            state: 1,
            jobName: 'Охранник в ТЦ',
            jobPosterName: 'Ekaterina',
            regState: 1,
            type: 'стартовый',
            payState: 0,
            manager: {
                name: 'Dmitri',
                options: [
                    { value: "fox", label: "Fox", num: 144 },
                    { value: "Butterfly", label: "Butterfly", num: 144 },
                    { value: "Honeybee", label: "Honeybee", num: 144 }
                ]
            },
            vacState: 5
        }
    ]);

    const [sortType, setSortType] = useState(props.sortType);
    const [sortDirection, setSortDirection] = useState(props.sortDirection);
    
    let activeLists = [
        {
            key: 1,
            num: 153,
            date: '15.01.24',
            state: 0,
            jobName: 'Охранник в ТЦ',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            payState: 1,
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
            vacState: 0
        },
        {
            key: 2,
            num: 151,
            date: '12.01.24',
            state: 1,
            jobName: 'Горничная в отель',
            jobPosterName: 'Anastasia',
            regState: 0,
            type: 'разовый',
            payState: 1,
            manager: {
                name: 'Ivan',
                options: [
                    { value: "fox", label: "Fox", num: 151 },
                    { value: "Butterfly", label: "Butterfly", num: 151 },
                    { value: "Honeybee", label: "Honeybee", num: 151 }
                ]
            },
            vacState: 1
        },
        {
            key: 3,
            num: 150,
            date: '11.01.24',
            state: 2,
            jobName: 'Разнорабочий',
            jobPosterName: 'Anna',
            regState: 1,
            type: 'HR 1',
            payState: 0,
            manager: {
                name: 'Natalia',
                options: [
                    { value: "fox", label: "Fox", num: 150 },
                    { value: "Butterfly", label: "Butterfly", num: 150 },
                    { value: "Honeybee", label: "Honeybee", num: 150 }
                ]
            },
            vacState: 2
        },
        {
            key: 4,
            num: 149,
            date: '13.01.24',
            state: 3,
            jobName: 'Комплектовщик на склад',
            jobPosterName: 'Dmitri',
            regState: 1,
            type: 'HR 2',
            payState: 1,
            manager: {
                name: 'Ekaterina',
                options: [
                    { value: "fox", label: "Fox", num: 149 },
                    { value: "Butterfly", label: "Butterfly", num: 149 },
                    { value: "Honeybee", label: "Honeybee", num: 149 }
                ]
            },
            vacState: 3
        },
        {
            key: 5,
            num: 148,
            date: '10.01.24',
            state: 3,
            jobName: 'Повар в ресторан',
            jobPosterName: 'Ivan',
            regState: 1,
            type: 'HR 3',
            payState: 1,
            manager: {
                name: 'Anna',
                options: [
                    { value: "fox", label: "Fox", num: 148 },
                    { value: "Butterfly", label: "Butterfly", num: 148 },
                    { value: "Honeybee", label: "Honeybee", num: 148 }
                ]
            },
            vacState: 4
        },
        {
            key: 6,
            num: 147,
            date: '09.01.24',
            state: 1,
            jobName: 'Копирайтер',
            jobPosterName: 'Maria',
            regState: 1,
            type: 'разовый',
            payState: 0,
            manager: {
                name: 'Anastasia',
                options: [
                    { value: "fox", label: "Fox", num: 147 },
                    { value: "Butterfly", label: "Butterfly", num: 147 },
                    { value: "Honeybee", label: "Honeybee", num: 147 }
                ]
            },
            vacState: 5
        },
        {
            key: 7,
            num: 146,
            date: '07.01.24',
            state: 1,
            jobName: 'Разнорабочий',
            jobPosterName: 'Ivan',
            regState: 1,
            type: 'разовый',
            payState: 1,
            manager: {
                name: 'Sasha',
                options: [
                    { value: "fox", label: "Fox", num: 146 },
                    { value: "Butterfly", label: "Butterfly", num: 146 },
                    { value: "Honeybee", label: "Honeybee", num: 146 }
                ]
            },
            vacState: 6
        },
        {
            key: 8,
            num: 145,
            date: '11.01.24',
            state: 1,
            jobName: 'Горничная в отель',
            jobPosterName: 'Sasha',
            regState: 1,
            type: 'стартовый',
            payState: 0,
            manager: {
                name: 'Ekaterina',
                options: [
                    { value: "fox", label: "Fox", num: 145 },
                    { value: "Butterfly", label: "Butterfly", num: 145 },
                    { value: "Honeybee", label: "Honeybee", num: 145 }
                ]
            },
            vacState: 2
        },
        {
            key: 9,
            num: 144,
            date: '12.01.24',
            state: 1,
            jobName: 'Охранник в ТЦ',
            jobPosterName: 'Ekaterina',
            regState: 1,
            type: 'стартовый',
            payState: 0,
            manager: {
                name: 'Dmitri',
                options: [
                    { value: "fox", label: "Fox", num: 144 },
                    { value: "Butterfly", label: "Butterfly", num: 144 },
                    { value: "Honeybee", label: "Honeybee", num: 144 }
                ]
            },
            vacState: 5
        }
    ];

    if (sortType === 'date') {
        sortDirection !== true ?
            stateLists.sort((a, b) => a.date.localeCompare(b.date))
            :
            stateLists.sort((a, b) => a.date.localeCompare(b.date)).reverse()
    } else if (sortType === 'reg') {
        sortDirection !== true ?
            stateLists.sort((a, b) => a.regState - b.regState)
            :
            stateLists.sort((a, b) => a.regState - b.regState).reverse()
    } else if (sortType === 'pay') {
        sortDirection !== true ?
            stateLists.sort((a, b) => a.payState - b.payState)
            :
            stateLists.sort((a, b) => a.payState - b.payState).reverse()
    } else {
        sortDirection !== true ?
            stateLists.sort((a, b) => a.manager.name.localeCompare(b.manager.name))
            :
            stateLists.sort((a, b) => a.manager.name.localeCompare(b.manager.name)).reverse()
    }

    const handleCheckChange = (e) => {
        
        if(e.target.checked === true) {
            check_state += 1;
        }
        else
            check_state -= 1;
        props.actionState(check_state);
    }

    useEffect(() => {
        setSortType(props.sortType);
        setSortDirection(props.sortDirection);
    }, [props]);

    const handleChange = (value) => {
        for (var i = 0; i < activeLists.length; i++) {
            if ((activeLists[i].num + '') === (value.num + '')) {
                activeLists[i].manager.name = value.label
                setActiveLists(activeLists);
            }
        }
    }

    const handleManagerChange = (e) => {
        for (var i = 0; i < activeLists.length; i++) {
            if ((activeLists[i].num + '') === (e.target.name + '')) {
                activeLists[i].manager.name = ''
                setActiveLists(activeLists);
            }
        }

    }

    return (
        <div className='flex w-full flex-col'>
            <div className='overflow-x-auto'>
                <div className="p-2 min-w-full inline-block align-middle">
                    <div className="border rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 mb-20">
                            <tbody className="divide-y divide-gray-200">
                                {/* <tr>
                                    <td className='px-2 py-2'>
                                        <div className="flex items-center h-5">
                                            <input id="hs-table-checkbox-1" type="checkbox" className="w-4 h-4 border-gray-200 rounded accent-button" />
                                            <label htmlFor="hs-table-checkbox-1" className="sr-only">Checkbox</label>
                                        </div>
                                    </td>
                                    <td className='px-2 py-2'>
                                        <span className='font-bold'>№</span>
                                    </td>
                                    <td className='px-2 py-2'>
                                        <span className='font-bold'>Название</span>
                                    </td>
                                    <td className='px-2 py-2'>
                                        <div className="hs-dropdown relative inline-flex">
                                            <button
                                                id="hs-dropdown-default"
                                                type="button"
                                                className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                                            >
                                                Действия
                                                <svg
                                                    className="hs-dropdown-open:rotate-180 w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>

                                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
                                                <Link
                                                    to={`/`}
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Согласовать
                                                </Link>
                                                <Link
                                                    to={`/`}
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Удалить
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-2 py-2'></td>
                                    <td className='px-2 py-2'></td>
                                </tr> */}
                                {stateLists.map((list) => (
                                    <tr key={list.key}>
                                        <td className='p-2'>
                                            <div className="flex items-center h-5">
                                                <input id={list.num} type="checkbox" aria-checked={false} onClick={handleCheckChange} className="w-4 h-4 border-gray-200 rounded accent-button" />
                                            </div>
                                        </td>
                                        <td className='flex flex-col w-fit p-2'>
                                            <p>{list.num} - {list.date}</p>
                                            {
                                                list.state === 0 ?
                                                    <span
                                                        className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 w-3 h-3"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                            <path d="m9 12 2 2 4-4" />
                                                        </svg>
                                                        Разместить вакансию
                                                    </span>
                                                    :
                                                    list.state === 1 ?
                                                        <span
                                                            className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full"
                                                        >
                                                            <svg
                                                                className="flex-shrink-0 w-3 h-3"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                                <path d="m9 12 2 2 4-4" />
                                                            </svg>
                                                            создать вакансию
                                                        </span>
                                                        :
                                                        list.state === 2 ?
                                                            <span
                                                                className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full"
                                                            >
                                                                <svg
                                                                    className="flex-shrink-0 w-3 h-3"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                                    <path d="m9 12 2 2 4-4" />
                                                                </svg>
                                                                закончился срок
                                                            </span>
                                                            :
                                                            list.state === 3 ?
                                                                <span
                                                                    className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full"
                                                                >
                                                                    <svg
                                                                        className="flex-shrink-0 w-3 h-3"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                                        <path d="m9 12 2 2 4-4" />
                                                                    </svg>
                                                                    исправления
                                                                </span> : ''
                                            }
                                        </td>
                                        <td className='w-fit py-1'>
                                            <p className='flex flex-row'>
                                                <Link 
                                                    to={`${
                                                            list.vacState === 0 ?
                                                                '/moderationAdminEdited' :
                                                                list.vacState === 1 ?
                                                                    '/moderationManager' :
                                                                    '/moderationAdmin'
                                                        }`}
                                                >
                                                    {list.jobName}
                                                </Link>
                                                {
                                                    !list.regState ?
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='flex icon icon-tabler icon-tabler-alert-triangle self-center ml-1 align-middle text-yellow-600'
                                                            width='16'
                                                            height='16'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth='2'
                                                            stroke='currentColor'
                                                            fill='none'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        >
                                                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                                                            <path d='M12 9v2m0 4v.01'></path>
                                                            <path d='M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75'></path>
                                                        </svg> : ''
                                                }
                                            </p>
                                            <span className='flex text-gray-400'>
                                                {list.jobPosterName}
                                            </span>
                                        </td>
                                        <td className='p-2'>
                                            {list.type}
                                        </td>
                                        <td className='p-2'>
                                            {
                                                list.payState ?
                                                    <svg
                                                        fill="#000000"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 264.00 264.00"
                                                        width="14px"
                                                        height="14px"
                                                        stroke="#000000"
                                                    >
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(22,22), scale(0.8)">
                                                            <rect x="0" y="0" width="264.00" height="264.00" rx="132" fill="#00ff00" strokeWidth="0"></rect>
                                                        </g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.44000000000000006"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g>
                                                                <path d="M110,0C49.346,0,0,49.346,0,110s49.346,110,110,110s110-49.346,110-110S170.654,0,110,0z M110,210 c-55.141,0-100-44.86-100-100S54.859,10,110,10s100,44.86,100,100S165.141,210,110,210z" />
                                                                <path d="M110,19.5c-49.902,0-90.5,40.598-90.5,90.5s40.598,90.5,90.5,90.5s90.5-40.598,90.5-90.5S159.902,19.5,110,19.5z M110,197.5c-48.248,0-87.5-39.252-87.5-87.5S61.752,22.5,110,22.5s87.5,39.252,87.5,87.5S158.248,197.5,110,197.5z" />
                                                                <polygon points="103.382,133.87 93.382,133.87 93.382,144.887 84.632,144.887 84.632,154.887 112.132,154.887 112.132,144.887 103.382,144.887 " />
                                                                <path d="M123.062,57.773H83.077v12h10.305v33.876H83.077v12h10.305v2.22h10v-2.22h19.68c15.957,0,28.938-12.981,28.938-28.938 S139.019,57.773,123.062,57.773z M123.062,103.65h-19.68V69.773h19.68c9.34,0,16.938,7.599,16.938,16.938 S132.401,103.65,123.062,103.65z" /> <rect x="83.077" y="119.87" width="53.989" height="12"></rect>
                                                            </g>
                                                        </g>
                                                    </svg> :
                                                    <svg
                                                        fill="#000000"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 264.00 264.00"
                                                        width="14px"
                                                        height="14px"
                                                        stroke="#000000"
                                                    >
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(22,22), scale(0.8)">
                                                            <rect x="0" y="0" width="264.00" height="264.00" rx="132" fill="#ff0000" strokeWidth="0"></rect>
                                                        </g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.44000000000000006"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g>
                                                                <path d="M110,0C49.346,0,0,49.346,0,110s49.346,110,110,110s110-49.346,110-110S170.654,0,110,0z M110,210 c-55.141,0-100-44.86-100-100S54.859,10,110,10s100,44.86,100,100S165.141,210,110,210z" />
                                                                <path d="M110,19.5c-49.902,0-90.5,40.598-90.5,90.5s40.598,90.5,90.5,90.5s90.5-40.598,90.5-90.5S159.902,19.5,110,19.5z M110,197.5c-48.248,0-87.5-39.252-87.5-87.5S61.752,22.5,110,22.5s87.5,39.252,87.5,87.5S158.248,197.5,110,197.5z" />
                                                                <polygon points="103.382,133.87 93.382,133.87 93.382,144.887 84.632,144.887 84.632,154.887 112.132,154.887 112.132,144.887 103.382,144.887 " />
                                                                <path d="M123.062,57.773H83.077v12h10.305v33.876H83.077v12h10.305v2.22h10v-2.22h19.68c15.957,0,28.938-12.981,28.938-28.938 S139.019,57.773,123.062,57.773z M123.062,103.65h-19.68V69.773h19.68c9.34,0,16.938,7.599,16.938,16.938 S132.401,103.65,123.062,103.65z" /> <rect x="83.077" y="119.87" width="53.989" height="12"></rect>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    
                                            }
                                        </td>
                                        <td className='p-2'>
                                            {
                                                list.manager.name !== '' ?
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="inline-flex w-full justify-center border-0 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
                                                                {list.manager.name}
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12px"
                                                                    height="12px"
                                                                    fill="currentColor"
                                                                    className="bi bi-caret-down-fill self-center"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                                                                </svg>
                                                            </Menu.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="py-1">
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <Link
                                                                                onClick={handleManagerChange}
                                                                                name={list.num}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                    'block px-4 py-2 text-sm'
                                                                                )}
                                                                            >
                                                                                снять менеджера
                                                                            </Link>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        {({ active }) => (
                                                                            <Link
                                                                                to={`/`}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                    'block px-4 py-2 text-sm'
                                                                                )}
                                                                            >
                                                                                профиль менеджера
                                                                            </Link>
                                                                        )}
                                                                    </Menu.Item>
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                    :
                                                    <Select
                                                        classNames={{
                                                            menuButton: ({ isDisabled }) => (
                                                                `flex justify-between pr-1.5 py-1 text-gray-900 text-sm ${isDisabled
                                                                    ? "bg-gray-200"
                                                                    : "bg-white hover:border-gray-400"
                                                                }`
                                                            ),
                                                            menu: "absolute z-10 w-full bg-white shadow-lg border-1 rounded py-1 mt-1.5 text-sm text-gray-700",
                                                            listItem: ({ isSelected }) => (
                                                                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${isSelected
                                                                    ? `text-white bg-blue-500`
                                                                    : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                                                }`
                                                            ),
                                                            searchIcon: "hidden ",
                                                            searchBox: "w-full text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none",
                                                        }}
                                                        placeholder='manager'
                                                        value={list.manager.name}
                                                        onChange={handleChange}
                                                        options={list.manager.options}
                                                        isSearchable
                                                    // isClearable
                                                    />
                                            }
                                        </td>
                                        <td className='p-2'>
                                            {
                                                list.vacState === 0 ?
                                                    <GreenCheckmark />
                                                    :
                                                    list.vacState === 1 ?
                                                        <BlueCross />
                                                        :
                                                        list.vacState === 2 ?
                                                            <RedCross />
                                                            :
                                                            list.vacState === 3 ?
                                                                <OrangeSquare />
                                                                :
                                                                list.vacState === 4 ?
                                                                    <GreenSquare />
                                                                    :
                                                                    list.vacState === 5 ?
                                                                        <RedSquare />
                                                                        :
                                                                        <GreenCircle />
                                            }
                                        </td>
                                        {/* <td className='p-2'>
                                            <button
                                                type='button'
                                                className='text-center border rounded py-2 px-2  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                            >
                                                Обработанные (3)
                                            </button>
                                        </td>
                                        <td className='p-2'>
                                            <button
                                                type='button'
                                                className='text-center border rounded py-2 px-2  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                            >
                                                Необработанные (2)
                                            </button>
                                        </td>
                                        <td className='p-2'>
                                            <button
                                                type='button'
                                                className='text-center border rounded py-2 px-2 bg-button text-white hover:bg-button-hov w-full md:w-auto transition ease-in-out duration-300'
                                            >
                                                Транслирование
                                            </button>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModerationVacancyLists;