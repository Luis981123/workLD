import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PaymentBlock extends Component {

    payLists = [
        {
            key: 1,
            num: 23,
            date: '23.08.26',
            name: 'Комплектовщик на склад',
            type: 'стартовый',
            manager: 'ivanivanov',
        },
        {
            key: 2,
            num: 24,
            date: '23.08.27',
            name: 'Повар в ресторан',
            type: 'разовый',
            manager: 'ivanivanov',
        },
        {
            key: 3,
            num: 24,
            date: '23.08.22',
            name: 'Разнорабочий',
            type: 'HR 2',
            manager: '-',
        },
        {
            key: 4,
            num: 25,
            date: '23.08.15',
            name: 'Горничная в отель',
            type: 'HR 3',
            manager: '-',
        }
    ];

    constructor(props) {
        super(props) ;
        this.state = {
            sortDirection: this.props.sortDirection,  // 1 = ascending, 0 = descending
        };
        
    }  

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.sortDirection !== prevState.sortDirection) {
            return {
                sortDirection: nextProps.sortDirection
            };
        } else {
            return null;
        }
    }

    render() {
        !this.state.sortDirection ?
                this.payLists.sort((a, b) => a.date.localeCompare(b.date))
                :
                this.payLists.sort((a, b) => a.date.localeCompare(b.date)).reverse()
        return (
            <div className='flex w-full p-4 bg-white border-1 border-gray-200 shadow mb-5 flex-col gap-y-3 overflow-x-auto'>
                <table className="min-w-full divide-y divide-gray-200 ">
                    <tbody className="divide-y divide-gray-200 ">
                        {this.payLists.map((list) => (
                            <tr key={list.key}>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.num }</td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.date }</td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 underline">
                                    <Link to={`/`}>
                                        {list.name}
                                    </Link>
                                </td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.type }</td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-800 ">{ list.manager }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PaymentBlock;