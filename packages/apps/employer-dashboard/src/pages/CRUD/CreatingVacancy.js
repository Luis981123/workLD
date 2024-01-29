import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { withNavigation } from '../../components/Router/withNavigation';

class CreatingVacancy extends Component {

  constructor(props) {
      super(props) ;
      this.state = {
          name: '',
          vac: '',
          add: '',
          desc: '',
          reqr: ''
      };
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: [e.target.value]
      })
      if (e.target.value !== '') {
          e.target.style = '';
      } else {
          e.target.style.border = '1px solid red';
      }
  }

  handleSave = () => {
      if (
          this.state.name === '' ||
          this.state.add === '' ||
          this.state.vac === '' ||
          this.state.desc === '' ||
          this.state.reqr === ''
      ) {
          Swal.fire({
              title: "необходимо заполнить все обязательные поля с *",
              text: "",
              icon: "warning",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 2000
              }).then((result) => {
                if (result.dismiss) {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                  const edit_btns = document.getElementsByClassName('edit_btn');
                  setTimeout(() => {
                      edit_btns[0].focus();
                      for (let i = 0; i < edit_btns.length; i++) {
                        edit_btns[i].style.border = '1px solid red';
                      }
                  }, 300);
                }
          })
      } else {
        Swal.fire({
            title: "Вакансия на проверке, перемещена в блок на модерации",
            text: "",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000
            }).then((result) => {
              if (result.dismiss) {
                this.props.navigate('/inactive');
              }
        })
          
      }
  }

  render() {
    return (
        <div className='mx-auto p-2 flex-1 justify-center w-full max-w-3xl'>
  
          <div className='w-full mt-9'>
            {/* starting text */}
            <div className='flex flex-col justify-center items-center gap-1'>
              <p className='text-2xl font-medium'>Создание вакансии</p>
              <p className='flex flex-wrap justify-center items-center'>
                <p className='font-light'>Необходимо заполнить</p>
                <Link className='ml-1 font-bold' to={`/registerAgency`}>
                  информацию о работодателе
                </Link>
              </p>
            </div>
            {/* endStartText */}
            {/* startForm */}
            <div className='p-6 mt-2 border-2 border-gray-200 rounded-xl'>
              {/* <form> */}
                <div className='mb-6'>
                  <label htmlFor='name' className='block mb-2 text-sm font-bold text-gray-900'>
                    Название организации
                  </label>
                  <input
                    type='name'
                    name='name'
                    className='shadow-sm edit_btn text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                    placeholder='ПАО Сбербанк'
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
  
                <div className='mb-6'>
                  <label htmlFor='vac' className='block mb-2 text-sm font-bold text-gray-900'>
                    Название вакансии <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <input
                    type='vac'
                    name='vac'
                    className='shadow-sm edit_btn text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                    placeholder='ПАО Сбербанк'
                    value={this.state.vac}
                    onChange={this.handleChange}
                  />
                </div>
  
                <div className='mb-6'>
                  <label htmlFor='add' className='block mb-2 text-sm font-bold text-gray-900'>
                    Адрес <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <input
                    type='add'
                    name='add'
                    className='shadow-sm edit_btn text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                    placeholder='ПАО Сбербанк'
                    value={this.state.add}
                    onChange={this.handleChange}
                  />
                </div>
  
                <div className='mb-6'>
                  <label htmlFor='typeVac' className='block mb-2 text-sm font-bold text-gray-900'>
                    Тип вакансии <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <div className='relative'>
                    <select
                      className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                      id='grid-state'
                    >
                      <option>Постоянная работа</option>
                      <option>Разовая работа</option>
                      <option>Вахтовый метод</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                      <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>
  
                <div className='mb-6'>
                  <label htmlFor='desc' className='block mb-2 text-sm font-bold text-gray-900'>
                    Описание вакансии <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <textarea
                    name='desc'
                    rows='4'
                    className='block edit_btn text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                    placeholder='Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.'
                    value={this.state.desc}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
  
                <div className='mb-6'>
                  <label htmlFor='reqr' className='block mb-2 text-sm font-bold text-gray-900'>
                    Требования к соискателю
                  </label>
                  <textarea
                    name='reqr'
                    rows='4'
                    className='block edit_btn text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                    placeholder='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                    value={this.state.reqr}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
  
                <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                  <div className='mb-6 md:w-1/3 pr-2'>
                    <label htmlFor='gender' className='block mb-2 text-sm font-bold text-gray-900'>
                      Пол
                    </label>
                    <div className='relative'>
                      <select
                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        id='gender'
                      >
                        <option>Неважно</option>
                        <option>Мужской</option>
                        <option>Женский</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
  
                  <div className='mb-6 md:w-1/3 pr-2'>
                    <label htmlFor='min-age' className='block mb-2 text-sm font-bold text-gray-900'>
                      Мин. возраст
                    </label>
                    <input
                      type='min-age'
                      id='min-age'
                      className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                      placeholder='18'
                      required
                    />
                  </div>
  
                  <div className='mb-6 md:w-1/3'>
                    <label htmlFor='max-age' className='block mb-2 text-sm font-bold text-gray-900'>
                      Макс. возраст
                    </label>
                    <input
                      type='max-age'
                      id='max-age'
                      className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                      placeholder='65'
                      required
                    />
                  </div>
                </div>
  
                <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                  <div className='mb-6 md:w-1/3 pr-2'>
                    <label htmlFor='payFreq' className='block mb-2 text-sm font-bold text-gray-900'>
                      Периодичность выплат <span style={{ color: '#ff0000' }}>*</span>
                    </label>
                    <div className='relative'>
                      <select
                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        id='payFreq'
                      >
                        <option>Еженедельно</option>
                        <option>Еженедневно</option>
                        <option>Еженемесячно</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
  
                  <div className='mb-6 md:w-1/3 pr-2'>
                    <label htmlFor='min-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                      Мин стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                    </label>
                    <input
                      type='min-pay'
                      id='min-pay'
                      className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                      placeholder='1000'
                      required
                    />
                  </div>
  
                  <div className='mb-6 md:w-1/3'>
                    <label htmlFor='max-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                      Макс стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                    </label>
                    <input
                      type='max-pay'
                      id='max-pay'
                      className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                      placeholder='10000'
                      required
                    />
                  </div>
                </div>
  
                <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                  <div className='mb-6 md:w-1/2 pr-2'>
                    <label htmlFor='min-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                      Мин. длит. раб. смены
                    </label>
                    <div className='relative'>
                      <select
                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        id='min-wtime'
                      >
                        <option>2 часа</option>
                        <option>3 часа</option>
                        <option>4 часа</option>
                        <option>5 часов</option>
                        <option>6 часов</option>
                        <option>7 часов</option>
                        <option>8 часов</option>
                        <option>9 часов</option>
                        <option>10 часов</option>
                        <option>11 часов</option>
                        <option>12 часов</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='mb-6 md:w-1/2'>
                    <label htmlFor='max-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                      Мин. длит. раб. смены
                    </label>
                    <div className='relative'>
                      <select
                        className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        id='max-wtime'
                      >
                        <option>16 часов</option>
                        <option>15 часов</option>
                        <option>14 часов</option>
                        <option>13 часов</option>
                        <option>12 часов</option>
                        <option>11 часов</option>
                        <option>10 часов</option>
                        <option>9 часов</option>
                        <option>8 часов</option>
                        <option>7 часов</option>
                        <option>6 часов</option>
                        <option>5 часов</option>
                        <option>4 часа</option>
                        <option>3 часа</option>
                        <option>2 часа</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className='mb-6'>
                  <label htmlFor='tariff' className='block mb-2 text-sm font-bold text-gray-900'>
                    Выбор тарифа <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <div className='relative'>
                    <select
                      className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                      id='tariff'
                    >
                      <option>Стартовый (бесплатно)</option>
                      <option>Разовый (500р.)</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                      <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>
  
                <div className='flex flex-col middle:flex-row gap-6 justify-center middle:justify-start items-center mt-10'>
                  <button onClick={this.handleSave} className='bg-button text-white font-bold py-2 px-4 rounded w-full middle:w-52'>
                    Создать вакансию
                  </button>
                  <Link to={`/vacancy`}>
                    <button
                      type='button'
                      className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                    >
                      Отмена
                    </button>
                  </Link>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
    );
  }
}

export default withNavigation(CreatingVacancy);
