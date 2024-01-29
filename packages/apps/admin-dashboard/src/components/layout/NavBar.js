import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import logo from '../../submodule/img/Workld_Logo_Color_Hor_2-page-1.png';

class NavBar extends Component {

    classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    render() {
        return (
            <div className=''>
                <nav className='flex first:justify-evenly justify-center mt-5 first:ml-16 text-slate-900 font-semibold text-sm'>
                    <div className='first:flex uppercase  items-center justify-center'>
                        <div className='sm:mr-10 flex items-center'>
                            <Link to={`/`}>
                                <img src={logo} alt='' className='sm:h-10 xs:h-7 h-6 mt-1' />
                            </Link>
                        </div>
                        <div className='hidden first:block'>
                            <ul className='flex gap-16 font-semibold mt-2 tracking-widest'>
                                <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                                    <Link to={`/vacancy`}>
                                        Вакансии
                                    </Link>
                                </li>
                                <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                                    <Link to={`/`}>
                                        Контрагенты
                                    </Link>
                                </li>
                                <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                                    <Link to={`/`}>
                                        Соискатели
                                    </Link>
                                </li>
                                <li className='relative cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300'>
                                    <Link to={`/`}>
                                        Сообщения
                                        <span className='absolute inline-flex items-center px-1 top-[-10px] rounded-full text-xs font-medium bg-teal-500 text-white'>3</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-md ml-3.5 flex justify-center items-center first:w-auto'>
                        <Menu as='div' className='relative inline-block text-left mt-1'>
                            <div>
                                <Menu.Button className='inline-flex w-full justify-center items-center gap-x-1.5 font-normal px-3 text-gray-900 cursor-pointer hover:text-emerald-500 transition ease-in-out duration-300 text-sm xs:text-base'>
                                    Администратор
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-caret-down-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter='transition ease-out duration-100'
                                enterFrom='transform opacity-0 scale-95'
                                enterTo='transform opacity-100 scale-100'
                                leave='transition ease-in duration-75'
                                leaveFrom='transform opacity-100 scale-100'
                                leaveTo='transform opacity-0 scale-95'
                            >
                                <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to={`/`}
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'flex px-4 py-2 text-sm',
                                                    )}
                                                >
                                                    Управление
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item >
                                            {({ active }) => (
                                                <Link
                                                    to={`/`}    
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                    )}
                                                >
                                                    Выйти
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div className='first:hidden sm:flex flex-shrink-0 items-center justify-end '>
                        <Menu as="div" className="relative inline-block text-left w-full">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:text-[#00B2A4]">
                                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
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
                                <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    <div className="py-1">
                                        <Menu.Item className="flex hover:text-[#00B2A4]">
                                            {({ active }) => (
                                                <Link
                                                    to={`/vacancy`}
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm uppercase'
                                                    )}
                                                >
                                                    Вакансии
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item className="flex hover:text-[#00B2A4]">
                                            {({ active }) => (
                                                <Link
                                                    to={`/`}
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm uppercase'
                                                    )}
                                                >
                                                    Контрагенты
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item className="flex hover:text-[#00B2A4]">
                                            {({ active }) => (
                                                <Link
                                                    to={`/`}
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm uppercase'
                                                    )}
                                                >
                                                    Соискатели
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item className="flex hover:text-[#00B2A4]">
                                            {({ active }) => (
                                                <Link
                                                    to={`/`}
                                                    className={this.classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm uppercase'
                                                    )}
                                                >
                                                    Сообщения
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;