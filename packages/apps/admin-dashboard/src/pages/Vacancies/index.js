import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import "preline/preline"

import AscendingSvg from '../../components/Form/SortSvg/AscendingSvg'
import DescendingSvg from '../../components/Form/SortSvg/DescendingSvg'

import ActiveVacancyLists from './ActiveVacancyLists';
import ModerationVacancyLists from './ModerationVacancyLists';
import InActiveVacancyLists from './InActiveVacancyLists';
import DeleteVacancyLists from './DeleteVacancyLists';
import VacancyFilter from './VacancyFilter';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function VacancyIndex() {

    const [sortType, setSortType] = useState('date');
    const [sortDirection, setSortDirection] = useState(true);
    const [sortDisplayName, setSortDisplayName] = useState('по дате');
    const [actionState, setActionState] = useState(0);

    const sort = (e) => {
        if (e.target.name === sortType) {
            setSortDirection(!sortDirection);
        } else {
            setSortDirection(true);
        }

        if (e.target.name === 'date') {
            console.log("date sort type")
            setSortType('date');
            setSortDisplayName('по дате');
        } else if (e.target.name === 'reg') {
            setSortType('reg');
            setSortDisplayName('по рег данным');
        } else if (e.target.name === 'pay') {
            setSortType('pay');
            setSortDisplayName('по статусу оплаты');
        } else {
            setSortType('manager');
            setSortDisplayName('по менеджер');
        }
    }

    const handleActionState = (state) => {
        setActionState(state)
    }

    return (
        <div className='mx-auto flex flex-1 flex-col w-full max-w-[1163px]'>
            <div className='w-full mt-6 p-2'>
                <div className='flex flex-row justify-between gap-1'>
                    <p className='text-2xl font-medium'>Вакансии</p>
                    <p className='flex flex-wrap justify-center items-center'>
                        <button
                            type='button'
                            className='text-center border rounded py-2 px-2  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                        >
                            Создать вакансию
                        </button>
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col first:flex-row zero:justify-evenly'>
                <div className='flex w-full flex-col zero:w-[70%] p-2'>
                    {/* tab menu */}
                    {/* <div className="border-b border-gray-200 ">
                            <nav className="hidden px-2 space-x-2 first:flex" aria-label="Tabs" role="tablist" hs-data-tab-select="#tab-select">
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]  " id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                    Активные (2)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]  active" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                    На модерации (12)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                                    Неактивные (155)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]" id="tabs-with-underline-item-4" data-hs-tab="#tabs-with-underline-4" aria-controls="tabs-with-underline-4" role="tab">
                                    Удаленные (3)
                                </button>
                            </nav>
                        </div> */}

                    {/* mobile menu */}
                    {/* <select id="tab-select" className="flex first:hidden py-3 px-4 pe-9 w-full border-none rounded-lg text-sm hover:border-none hover:ring-none focus:border-none focus:ring-none" aria-label="Tabs" role="tablist">
                            <option value="#tabs-with-underline-1">Активные (2)</option>
                            <option value="#tabs-with-underline-2">На модерации (12)</option>
                            <option value="#tabs-with-underline-3">Неактивные (155)</option>
                            <option value="#tabs-with-underline-4">Удаленные (3)</option>
                        </select> */}

                    <div className='flex flex-col first:flex-row justify-between'>
                        <div className="border-b border-gray-200 justify-center">
                            <nav className="hidden py-2 px-2 space-x-2 first:flex" aria-label="Tabs" role="tablist" hs-data-tab-select="#tab-select">
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]  " id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                    Активные (2)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]  active" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                    На модерации (12)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
                                    Неактивные (155)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-none border-[#00B2A4] border-dotted hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-1 text-[14px] whitespace-nowrap text-gray-800 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]" id="tabs-with-underline-item-4" data-hs-tab="#tabs-with-underline-4" aria-controls="tabs-with-underline-4" role="tab">
                                    Удаленные (3)
                                </button>
                            </nav>
                        </div>
                        <select id="tab-select" className="flex first:hidden py-3 px-4 pe-9 mb-2 w-full border-none rounded-lg text-sm hover:border-none hover:ring-none focus:border-none focus:ring-none" aria-label="Tabs" role="tablist">
                            <option value="#tabs-with-underline-1">Активные (2)</option>
                            <option value="#tabs-with-underline-2">На модерации (12)</option>
                            <option value="#tabs-with-underline-3">Неактивные (155)</option>
                            <option value="#tabs-with-underline-4">Удаленные (3)</option>
                        </select>
                        <div className='hs-dropdown relative inline-flex [--strategy:absolute]'>
                            <button id="hs-dropdown-right-but-left-on-lg-custom" type="button" className="hs-dropdown-toggle flex flex-row items-center gap-x-2 text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov w-fit transition ease-in-out duration-300">
                                {sortDisplayName}
                                {
                                    sortDirection ?
                                        <AscendingSvg color="#ffffff" />
                                        :
                                        <DescendingSvg color="#ffffff" />
                                }
                            </button>

                            <div className="hs-dropdown-menu w-60 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 start-auto min-w-[10rem] bg-white shadow-md rounded-lg p-2 mt-2 " aria-labelledby="hs-dropdown-right-but-left-on-lg-custom">
                                <Link onClick={sort} name='date' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    по дате
                                    {
                                        sortType === 'date' ?
                                            sortDirection ?
                                                <AscendingSvg color="#000000" />
                                                :
                                                <DescendingSvg color="#000000" />
                                            : ''
                                    }
                                </Link>
                                <Link onClick={sort} name='reg' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    по рег данным
                                    {
                                        sortType === 'reg' ?
                                            sortDirection ?
                                                <AscendingSvg color="#000000" />
                                                :
                                                <DescendingSvg color="#000000" />
                                            : ''
                                    }
                                </Link>
                                <Link onClick={sort} name='pay' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    по статусу оплаты
                                    {
                                        sortType === 'pay' ?
                                            sortDirection ?
                                                <AscendingSvg color="#000000" />
                                                :
                                                <DescendingSvg color="#000000" />
                                            : ''
                                    }
                                </Link>
                                <Link onClick={sort} name='manager' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    по менеджер
                                    {
                                        sortType === 'manager' ?
                                            sortDirection ?
                                                <AscendingSvg color="#000000" />
                                                :
                                                <DescendingSvg color="#000000" />
                                            : ''
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        actionState ?
                            <div className='flex justify-end mt-4'>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            Действия
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to={`/`}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Согласовать
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
                                                            Удалить
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div> 
                            :
                            <></>
                    }

                    {/* tab content */}
                    <div className='mt-3'>
                        {/* Активные */}
                        <div id="tabs-with-underline-1" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                            <ActiveVacancyLists />
                        </div>
                        {/* На модерации */}
                        <div id="tabs-with-underline-2" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                            <ModerationVacancyLists sortType={sortType} sortDirection={sortDirection} actionState={handleActionState}/>
                        </div>
                        {/* Неактивные */}
                        <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
                            <InActiveVacancyLists />
                        </div>
                        {/* Удаленные */}
                        <div id="tabs-with-underline-4" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-4">
                            <DeleteVacancyLists />
                        </div>
                    </div>
                </div>
                <div className='hidden justify-start w-[30%] first:flex zero:p-1 xs:p-4 flex-col'>
                    <VacancyFilter />
                </div>
            </div>
        </div>
    );
}

export default VacancyIndex;