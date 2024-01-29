import React, { Component } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

var active = '';
var category = '';

class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkState: 0,
        };
        active = props.active;
        category = props.category;
    }

    classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    handleDeActive = () => {
        Swal.fire({
            title: "Вы хотите деактивировать вакансию»?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
            cancelButtonText: "Отменить"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: "success",
                        title: "Ваш профиль успешно деактивизирован",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
    }

    handleDelete = () => {
        Swal.fire({
            title: "Вы хотите удалить вакансию?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
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

    handlePermanentlyDelete = () => {
        Swal.fire({
            title: "Удалить вакансию из личного кабинета?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да",
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

    UNSAFE_componentWillReceiveProps =(props) => {
        this.setState({
            checkState: props.check,
        })
    }

    render() {
        return (
            <div className='flex items-center relative first:flex-row xs:flex-col w-full mt-2  justify-end'>
                <ul className='flex flex-wrap relative w-full first:justify-start xs:justify-between'>
                    {
                        category === "vacancy" ?
                            active === "active" ? 
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/vacancy`}>Активные</Link>
                                </li> :
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/vacancy`} className='customDotted'>Активные</Link>
                                </li>
                            : ''
                    }
                    {
                        category === "job" ?
                            active === "active" ? 
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/job`}>Активные</Link>
                                </li>
                                : 
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/job`} className='customDotted'>Активные</Link>
                                </li>
                            : ''
                            
                    }
                    {
                        category === "vacancy" ?
                            active === "inactive" ?
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/inactive`}>Неактивные</Link>
                                </li> 
                                :
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/inactive`} className='customDotted'>Неактивные</Link>
                                </li>
                            : ''
                    }
                    {
                        category === "job" ?
                            active === "inactive" ?
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/inactivejob`}>Неактивные</Link>
                                </li> 
                                :
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/inactivejob`} className='customDotted'>Неактивные</Link>
                                </li>
                            : ''
                    }
                    {
                        category === "vacancy" ?
                            active === "delete" ?
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/deletevac`}>Удаленные</Link>
                                </li> :
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/deletevac`} className='customDotted'>Удаленные</Link>
                                </li>
                            : ''
                    }

                    {
                        category === "vacancy" ?
                            active === "blank" ?
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/blank`}>впервые</Link>
                                </li>
                                :
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/blank`} className='customDotted'>впервые</Link>
                                </li>
                            : ''
                    }

                    {
                        category === "job" ?
                            active === "blank" ?
                                <li className='active pr-3 first:flex xs:hidden'>
                                    <Link to={`/blankjob`}>впервые</Link>
                                </li>
                                :
                                <li className='text-[#8492a6] pr-3 first:flex xs:hidden'>
                                    <Link to={`/blankjob`} className='customDotted'>впервые</Link>
                                </li>
                            : ''
                    }
                    
                    <li className='text-black pr-3 first:hidden xs:flex'>
                        {   
                            category === "vacancy" ?
                                active === "active" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                Активные
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/vacancy`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactive`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/deletevac`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Удаленные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blank`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        {   
                            category === "vacancy" ?
                                active === "inactive" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                Неактивные
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/vacancy`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactive`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/deletevac`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Удаленные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blank`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        {   
                            category === "vacancy" ?
                                active === "delete" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                Удаленные
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/vacancy`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactive`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/deletevac`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Удаленные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blank`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        {   
                            category === "vacancy" ?
                                active === "blank" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                впервые
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/vacancy`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactive`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/deletevac`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Удаленные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blank`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        {   
                            category === "job" ?
                                active === "active" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                Активные
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/job`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactivejob`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blankjob`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        {   
                            category === "job" ?
                                active === "inactive" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                Неактивные
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/job`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactivejob`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blankjob`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        {   
                            category === "job" ?
                                active === "blank" ?
                                    <Menu as="div" className="inline-block relative text-left w-full">
                                        <div>
                                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                                впервые
                                                <DownOutlined className='text-black pl-2 text-[14px]' />
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
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-[150px] origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="flex">
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/job`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                Активные 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/inactivejob`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'flex px-4 py-2'
                                                                )}
                                                            >
                                                                Неактивные  
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/blankjob`}
                                                                className={this.classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2'
                                                                )}
                                                            >
                                                                впервые 
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : ''
                                : ''
                        }
                        
                    </li>
                    <li className='text-[#00B2A4]'>
                        {
                            category === "vacancy" ?
                                <Link to={`/createVacancy`} className='customDotted'>Создать вакансию</Link>
                                :
                                <Link to={`/createJob`} className='customDotted'>Создать вакансию</Link>
                        }  
                    </li>
                </ul>
                <div style={{visibility: this.state.checkState ? 'visible' : 'hidden'}} className='flex relative self-end mt-2 middle:mt-0 second:pr-7'>
                    <Menu as="div" className="inline-block relative text-left w-full">
                        <div>
                            <Menu.Button className="w-full justify-center rounded-md bg-white px-3 text-[16px] text-[#00B2A4] hover:text-[#000]">
                                Действия
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-left rounded-md bg-[#fff] focus:outline-none">
                                <div className="py-1">
                                    {
                                        active === "active" ?
                                            <Menu.Item className="flex">
                                                {({ active }) => (
                                                    <Link
                                                        onClick={this.handleDeActive}    
                                                        className={this.classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2'
                                                        )}
                                                    >
                                                        Деактивировать  
                                                    </Link>
                                                )}
                                            </Menu.Item> : ''
                                    }
                                    {
                                        active === "delete" ?
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        onClick={this.handlePermanentlyDelete}
                                                        className={this.classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'flex px-4 py-2'
                                                        )}
                                                    >
                                                        удалить безвозвратно   
                                                    </Link>
                                                )}
                                            </Menu.Item> :
                                            <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                onClick={this.handleDelete}
                                                className={this.classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'flex px-4 py-2'
                                                )}
                                            >
                                                удалить   
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    }
                                    
                                    
                                    
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        );
    }

}

export default SubMenu;