import React, { Component } from 'react'
// import 'preline/preline'
import { Link } from 'react-router-dom';

class ActiveVacancyLists extends Component {

    activeLists = [
        {
            key: 1,
            num: 152,
            name: 'Грузчики на склад'
        },
        {
            key: 2,
            num: 151,
            name: 'Грузчики на склад'
        },
        {
            key: 3,
            num: 150,
            name: 'Грузчики на склад'
        },
        {
            key: 4,
            num: 149,
            name: 'Грузчики на склад'
        },
        {
            key: 5,
            num: 148,
            name: 'Грузчики на склад'
        },
        {
            key: 6,
            num: 147,
            name: 'Грузчики на склад'
        },
        {
            key: 7,
            num: 146,
            name: 'Грузчики на склад'
        },
        {
            key: 8,
            num: 145,
            name: 'Грузчики на склад'
        },
        {
            key: 9,
            num: 144,
            name: 'Грузчики на склад'
        },
        {
            key: 10,
            num: 143,
            name: 'Грузчики на склад'
        },
        {
            key: 11,
            num: 142,
            name: 'Грузчики на склад'
        },
        {
            key: 12,
            num: 141,
            name: 'Грузчики на склад'
        },
        {
            key: 13,
            num: 140,
            name: 'Грузчики на склад'
        },
        {
            key: 14,
            num: 139,
            name: 'Грузчики на склад'
        },
        {
            key: 15,
            num: 138,
            name: 'Грузчики на склад'
        },
    ];

     render() {
        return (
            <div className='flex w-full flex-col'>
                <div className='overflow-x-auto'>
                    <div className="p-2 min-w-full inline-block align-middle">
                        <div className="border rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
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
                                                        Деактивировать
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
                                    </tr>
                                    {this.activeLists.map((list) => (
                                        <tr key={ list.key }>
                                            <td className='px-2 py-2'>
                                                <div className="flex items-center h-5">
                                                    <input id={list.num} type="checkbox" className="w-4 h-4 border-gray-200 rounded accent-button" />
                                                    <label htmlFor={list.num} className="sr-only">Checkbox</label>
                                                </div>
                                            </td>
                                            <td className='px-2 py-2'>
                                                {list.num}
                                            </td>
                                            <td className='px-2 py-2'>
                                                {list.name}
                                            </td>
                                            <td className='px-2 py-2'>
                                                <button
                                                    type='button'
                                                    className='text-center border rounded py-2 px-2  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                                >
                                                    Обработанные (3)
                                                </button>
                                            </td>
                                            <td className='px-2 py-2'>
                                                <button
                                                    type='button'
                                                    className='text-center border rounded py-2 px-2  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                                                >
                                                    Необработанные (2)
                                                </button>
                                            </td>
                                            <td className='px-2 py-2'>
                                                <button
                                                    type='button'
                                                    className='text-center border rounded py-2 px-2 bg-button text-white hover:bg-button-hov w-full md:w-auto transition ease-in-out duration-300'
                                                >
                                                    Транслирование
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