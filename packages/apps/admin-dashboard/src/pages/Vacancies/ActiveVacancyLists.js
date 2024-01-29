import React, { Component } from 'react'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Select from "react-tailwindcss-select";

import { Link } from 'react-router-dom';

class ActiveVacancyLists extends Component {

    activeLists = [
        {
            key: 1,
            num: 152,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },

        },
        {
            key: 2,
            num: 151,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 3,
            num: 150,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 4,
            num: 149,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 5,
            num: 148,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 6,
            num: 147,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 7,
            num: 146,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 8,
            num: 145,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
        {
            key: 9,
            num: 144,
            date: '15.01.24',
            state: false,
            jobName: 'Грузчики на склад',
            jobPosterName: 'Alexander',
            regState: 1,
            type: 'стартовый',
            manager: {
                name: 'Maria',
                options: [
                    { value: "fox", label: "Fox", num: 153 },
                    { value: "Butterfly", label: "Butterfly", num: 153 },
                    { value: "Honeybee", label: "Honeybee", num: 153 }
                ]
            },
        },
    ];

    classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

     render() {
        return (
            <div className='flex w-full flex-col'>
                <div className='overflow-x-auto'>
                    <div className="p-2 min-w-full inline-block align-middle">
                        <div className="border rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="divide-y divide-gray-200">
                                    {this.activeLists.map((list) => (
                                        <tr key={ list.key }>
                                            <td className='p-2'>
                                                <div className="flex items-center h-5">
                                                    <input id={list.num} type="checkbox" className="w-4 h-4 border-gray-200 rounded accent-button" />
                                                    <label htmlFor={list.num} className="sr-only">Checkbox</label>
                                                </div>
                                            </td>
                                            <td className='p-2'>
                                                <p>{list.num} - {list.date}</p>
                                            </td>
                                            <td className='p-2'>
                                                <p>
                                                    {list.jobName}
                                                </p>
                                            </td>
                                            <td className='p-2'>
                                                {list.type}
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
                                                                                    // onClick={handleManagerChange}
                                                                                    name={list.num}
                                                                                    className={this.classNames(
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
                                                                                    className={this.classNames(
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
                                                            // onChange={handleChange}
                                                            options={list.manager.options}
                                                            isSearchable
                                                        />
                                                }
                                            </td>
                                            <td className='p-2'>
                                                <button
                                                    type='button'
                                                    className='text-center border rounded py-2 px-2  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                                >
                                                    Обработанные (3)
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActiveVacancyLists;