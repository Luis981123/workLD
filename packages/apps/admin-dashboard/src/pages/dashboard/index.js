import React, { Component } from 'react'
import "preline/preline"

import AscendingSvg from '../../components/Form/SortSvg/AscendingSvg'
import DescendingSvg from '../../components/Form/SortSvg/DescendingSvg'
import ModerationLists from './ModerationLists'
import PaymentBlock from './PaymentBlock'
import { Link } from 'react-router-dom'


class DashboardIndex extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            sortType: 'date',
            sortDirection: 1,  // 1 = ascending, 0 = descending
            sortDisplayName: 'по дате',
            sortDirectionPay: 1, // 1 = ascending, 0 = descending
        };
    }

    sortModeration = (e) => {
        if (e.target.name === this.state.sortType) {
            this.setState({
                'sortDirection' : !this.state.sortDirection
            })
        } else {
            this.setState({
                'sortType': e.target.name,
                'sortDirection' : 1
            })
        }

        if (e.target.name === 'date') {
            this.setState({
                'sortDisplayName': 'по дате'
            })
        } else if (e.target.name === 'reg') {
            this.setState({
                'sortDisplayName': 'по рег данным'
            })
        } else if (e.target.name === 'pay') {
            this.setState({
                'sortDisplayName': 'по статусу оплаты'
            })
        } else {
            this.setState({
                'sortDisplayName': 'по менеджер'
            })
        }
    }

    sortPay = () => {
        this.setState({
            'sortDirectionPay' : !this.state.sortDirectionPay
        })
    }

    render() {
        return (
            <div className='w-full flex flex-1 mt-10 p-1'>
                <div className='container relative flex flex-1 zero:flex-row xs:flex-col mx-auto max-w-[1163px]'>
                    <div className='flex justify-start zero:w-[67%] xs:w-full zero:p-1 xs:p-4 flex-col'>
                        <p className='text-xl mb-5'>Статистика</p>

                        <div className='flex w-full p-4 bg-white border-1 border-gray-200 shadow justify-between mb-5'>
                            <div className='flex items-center flex-col'>
                                <p className='text-[25px]'>200</p>
                                <p className='text-[14px] second:text-[16px]'>активные</p>
                                <p className='text-[14px] second:text-[16px]'>соискатели</p>
                            </div>
                            <div className='flex items-center flex-col'>
                                <p className='text-[25px]'>198</p>
                                <p className='text-[14px] second:text-[16px]'>новые</p>
                                <p className='text-[14px] second:text-[16px]'>соискатели</p>
                            </div>
                            <div className='flex items-center flex-col'>
                                <p className='text-[25px]'>156</p>
                                <p className='text-[14px] second:text-[16px]'>активные</p>
                                <p className='text-[14px] second:text-[16px]'>вакансии</p>
                            </div>
                            <div className='flex items-center flex-col'>
                                <p className='text-[25px]'>158</p>
                                <p className='text-[14px] second:text-[16px]'>вакансии</p>
                                <p className='text-[14px] second:text-[16px]'>на модерации</p>
                            </div>
                        </div>
                        

                        <div className='flex flex-row justify-between items-center mb-5'>
                            <p className='text-xl'>
                                <Link to={`/vacancy`}>
                                    На иодерации(5)
                                </Link>
                            </p>
                            <div className="hs-dropdown relative inline-flex [--strategy:absolute]">
                                <button id="hs-dropdown-right-but-left-on-lg" type="button" className="hs-dropdown-toggle flex flex-row items-center gap-x-2 text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov w-full md:w-auto transition ease-in-out duration-300">
                                    {this.state.sortDisplayName}
                                    {
                                        this.state.sortDirection ?
                                            <AscendingSvg color="#ffffff" />
                                            :
                                            <DescendingSvg color="#ffffff" />
                                    }
                                </button>

                                <div className="hs-dropdown-menu w-60 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 start-auto min-w-[10rem] bg-white shadow-md rounded-lg p-2 mt-2 " aria-labelledby="hs-dropdown-right-but-left-on-lg">
                                    <Link onClick={this.sortModeration} name='date' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                        по дате
                                        {
                                            this.state.sortType === 'date' ?
                                                this.state.sortDirection ?
                                                    <AscendingSvg color="#000000" />
                                                    :
                                                    <DescendingSvg color="#000000" />
                                                : ''
                                        }
                                    </Link>
                                    <Link onClick={this.sortModeration} name='reg' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                        по рег данным
                                        {
                                            this.state.sortType === 'reg' ?
                                                this.state.sortDirection ?
                                                    <AscendingSvg color="#000000" />
                                                    :
                                                    <DescendingSvg color="#000000" />
                                                : ''
                                        }
                                    </Link>
                                    <Link onClick={this.sortModeration} name='pay' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                        по статусу оплаты
                                        {
                                            this.state.sortType === 'pay' ?
                                                this.state.sortDirection ?
                                                    <AscendingSvg color="#000000" />
                                                    :
                                                    <DescendingSvg color="#000000" />
                                                : ''
                                        }
                                    </Link>
                                    <Link onClick={this.sortModeration} name='manager' className="flex flex-row justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                        по менеджер
                                        {
                                            this.state.sortType === 'manager' ?
                                                this.state.sortDirection ?
                                                    <AscendingSvg color="#000000" />
                                                    :
                                                    <DescendingSvg color="#000000" />
                                                : ''
                                        }
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <ModerationLists sortType = {this.state.sortType} sortDirection = {this.state.sortDirection} />
                        
                        <p className='text-xl mb-5'>Активность</p>

                        <div className="border-b border-gray-200 ">
                            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-[#00B2A4] hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]  active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                    Менеджеры (3)
                                </button>
                                <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-[#00B2A4] hs-tab-active:text-[#00B2A4] px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-[#00B2A4] focus:outline-none focus:text-[#00B2A4]  " id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                    Работодатели (12) 
                                </button>
                            </nav>
                        </div>

                        <div className="mt-3">
                            <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1" className='w-full bg-white border-1 border-gray-200 shadow mb-5'>
                                <div className='overflow-x-auto'>
                                    <div className="p-4 min-w-full inline-block align-middle">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <tbody className="divide-y divide-gray-200 ">
                                                    <tr>
                                                        <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                            12.01.24
                                                        </td>
                                                        <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">ivanivanov</td>
                                                        <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                        <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">162</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                            11.01.24
                                                        </td>
                                                        <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">sergeysergeev</td>
                                                        <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                        <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                            10.01.24
                                                        </td>
                                                        <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">nikolaev</td>
                                                        <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                        <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                                <div className='w-full bg-white border-1 border-gray-200 shadow mb-5'>
                                    <div className='overflow-x-auto'>
                                        <div className="p-4 min-w-full inline-block align-middle">        
                                            <div className='overflow-hidden'>
                                                <table className="min-w-full divide-y divide-gray-200 ">
                                                    <tbody className="divide-y divide-gray-200 ">
                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                01.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">sergeysergeev</td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">162</td>
                                                        </tr>

                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                11.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">ivanivanov </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                        </tr>

                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                02.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">nikolaev</td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                03.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">nikolaev</td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                04.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">nikolaev</td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                05.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">nikolaev</td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='px-2 py-2 whitespace-nowrap text-sm text-gray-800'>
                                                                06.01.24
                                                            </td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm font-medium text-gray-800 ">nikolaev</td>
                                                            <td className="px-2 py-2 underline whitespace-nowrap text-sm text-gray-800 ">442561 Грузчики на склад срочно</td>
                                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">160</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-row justify-between items-center mb-5'>
                            <p className='text-xl'>Оплата</p>
                            <button type="button" onClick={this.sortPay} className="flex flex-row items-center gap-x-2 text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov w-fit transition ease-in-out duration-300">
                                    по дате
                                    {
                                        this.state.sortDirectionPay ?
                                            <AscendingSvg color="#ffffff" />
                                            :
                                            <DescendingSvg color="#ffffff" />
                                    }
                            </button>
                        </div>

                        <PaymentBlock sortDirection = {this.state.sortDirectionPay}/>

                    </div>
                    <div className='flex justify-start zero:w-[33%] xs:w-full zero:p-1 xs:p-4 flex-col'>
                        <p className='text-xl mb-5'>Заявки</p>
                        <div className='w-full p-4 bg-white border-1 border-gray-200 shadow flex-col divide-y divide-solid'>
                            <div className='p-2'>
                                <p className='text-[14px]'>18:55 02.06.22</p>
                                <p className='text-[16px] font-bold'>ООО Магнит</p>
                                <a href='/' className='underline text-[14px]'>Посмотреть</a>
                            </div>
                            <hr />
                            <div className='p-2'>
                                <p className='text-[14px]'>18:55 02.06.22</p>
                                <p className='text-[16px] font-bold'>ИП Васильев Василий Васильевич</p>
                                <a href='/' className='underline text-[14px]'>Посмотреть</a>
                            </div>
                            <hr />
                            <div className='p-2'>
                                <p className='text-[14px]'>18:55 02.06.22</p>
                                <p className='text-[16px] font-bold'>ИП Васильев Василий Васильевич</p>
                                <a href='/' className='underline text-[14px]'>Посмотреть</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default DashboardIndex;
