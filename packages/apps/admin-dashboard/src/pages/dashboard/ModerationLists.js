import React, { Component } from 'react'

class ModerationLists extends Component {

    lists = [
        {
            key: 1,
            num: 25,
            date: '15.01.24',
            name: 'Охранник в ТЦ',
            state: 0,
            type: 'стартовый',
            pay: 1,
            manager: 'ivanivanov'
        },
        {
            key: 2,
            num: 24,
            date: '10.01.24',
            name: 'Горничная в отель',
            state: 1,
            type: 'HR 2',
            pay: 1,
            manager: 'sergeysergeev'
        },
        {
            key: 3,
            num: 23,
            date: '09.01.24',
            name: 'Разнорабочий',
            state: 1,
            type: 'разовый',
            pay: 0,
            manager: 'nikolaev'
        },
        {
            key: 4,
            num: 22,
            date: '11.01.24',
            name: 'Комплектовщик на склад',
            state: 1,
            type: 'HR 1',
            pay: 1,
            manager: '-'
        },
        {
            key: 5,
            num: 21,
            date: '12.01.24',
            name: 'Повар в ресторан',
            state: 1,
            type: 'HR 3',
            pay: 0,
            manager: 'ivanivanov'
        },
    ]

    constructor(props) {
        super(props) ;
        this.state = {
            sortType: this.props.sortType,
            sortDirection: this.props.sortDirection,  // 1 = ascending, 0 = descending
        };
        
    }  

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.sortType !== prevState.sortType || nextProps.sortDirection !== prevState.sortDirection) {
            return {
                sortType: nextProps.sortType,
                sortDirection: nextProps.sortDirection
            };
        } else {
            return null;
        }
    }

    render() {
        if (this.state.sortType === 'date') {
            !this.state.sortDirection ?
                this.lists.sort((a, b) => a.date.localeCompare(b.date))
                :
                this.lists.sort((a, b) => a.date.localeCompare(b.date)).reverse()
        } else if (this.state.sortType === 'reg') {
            !this.state.sortDirection ?
                this.lists.sort((a, b) => a.state - b.state)
                :
                this.lists.sort((a, b) => a.state - b.state).reverse()
        } else if (this.state.sortType === 'pay') {
            !this.state.sortDirection ?
                this.lists.sort((a, b) => a.pay - b.pay)
                :
                this.lists.sort((a, b) => a.pay - b.pay).reverse()
        } else {
            !this.state.sortDirection ?
                this.lists.sort((a, b) => a.manager.localeCompare(b.manager))
                :
                this.lists.sort((a, b) => a.manager.localeCompare(b.manager)).reverse()
        }
        return (
            <div className='flex w-full p-4 bg-white border-1 border-gray-200 shadow mb-5 flex-col gap-y-3 overflow-x-auto'>
                <table className="min-w-full divide-y divide-gray-200 ">
                    <tbody className="divide-y divide-gray-200 ">
                        {this.lists.map((list) => (
                            <tr key={list.key}>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{list.num} - { list.date !== '15.01.24' ? list.date : '15:45' }</td>
                                {/* <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.date }</td> */}
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 flex flex-row">
                                    {list.name}
                                    {
                                        !list.state ? 
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
                                </td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.type }</td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">
                                    {
                                        list.pay ?
                                            <svg
                                                fill="#000000"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 264.00 264.00"
                                                stroke="#000000"
                                                width='15px'
                                                height='15px'
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
                                                stroke="#000000"
                                                width='15px'
                                                height='15px'
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
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.manager }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ModerationLists;