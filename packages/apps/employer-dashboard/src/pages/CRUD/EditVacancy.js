import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EditVacancy extends Component {

  constructor(props) {
    super(props) ;
    this.state = {
        edit_state: false
    };
    this.handleChangeEditMode = this.handleChangeEditMode.bind(this);
  }
    // const [isEditMode, setIsEditMode] = useState(true);
    // const history = useNavigate();
  
    // const handleSaveChanges = () => {
    //   setIsEditMode(true);
    //   // Implement logic to save changes (e.g., API call)
  
    //   // Redirect back to PageVacNotActive after saving changes
    //   // history({ pathname: '/' }) // Redirect to the desired URL
    // };

    handleChangeEditMode() {
      this.setState({
        edit_state: true,
      });
    }

  render() {
    return (
        <div className='mx-auto p-2 flex-1 justify-center w-full max-w-3xl'>
          <div className='w-full mt-9'>
            {/* starting text */}
            <div className='flex flex-col justify-center items-center gap-1'>
              <p className='text-2xl font-medium'>Редактировать вакансию</p>
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
              <form>
                <div className='mb-6'>
                  <label htmlFor='name' className='block mb-2 text-sm font-bold text-gray-900'>
                    Название организации
                  </label>
                  {
                    !this.state.edit_state ?
                      <input
                        type='name'
                        id='name'
                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='ПАО Сбербанк'
                        required
                        disabled
                      /> : 
                      <input
                        type='name'
                        id='name'
                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='ПАО Сбербанк'
                        required
                      />
                  }
                  
                </div>

                <div className='mb-6'>
                  <label htmlFor='vac' className='block mb-2 text-sm font-bold text-gray-900'>
                    Название вакансии <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  {
                    !this.state.edit_state ?
                      <input
                        type='vac'
                        id='vac'
                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='ПАО Сбербанк'
                        required
                        disabled
                      /> : 
                      <input
                        type='vac'
                        id='vac'
                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='ПАО Сбербанк'
                        required
                      />
                  }
                </div>

                <div className='mb-6'>
                  <label htmlFor='add' className='block mb-2 text-sm font-bold text-gray-900'>
                    Адрес <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  {
                    !this.state.edit_state ?
                      <input
                        type='add'
                        id='add'
                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='ПАО Сбербанк'
                        required
                        disabled
                      /> : 
                      <input
                        type='add'
                        id='add'
                        className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                        placeholder='ПАО Сбербанк'
                        required
                      />
                  }
                </div>

                <div className='mb-6'>
                  <label htmlFor='typeVac' className='block mb-2 text-sm font-bold text-gray-900'>
                    Тип вакансии <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <div className='relative'>
                    {
                      !this.state.edit_state ?
                        <select
                          className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                          id='grid-state'
                          disabled
                        >
                          <option>Постоянная работа</option>
                          <option>Разовая работа</option>
                          <option>Вахтовый метод</option>
                        </select> : 
                        <select
                          className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                          id='grid-state'
                        >
                          <option>Постоянная работа</option>
                          <option>Разовая работа</option>
                          <option>Вахтовый метод</option>
                        </select>
                    }
                    
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
                  {
                    !this.state.edit_state ?
                      <textarea
                        id='desc'
                        rows='4'
                        className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        placeholder='Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.'
                        disabled
                      ></textarea> : 
                      <textarea
                        id='desc'
                        rows='4'
                        className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        placeholder='Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв.'
                      ></textarea>
                  }
                </div>

                <div className='mb-6'>
                  <label htmlFor='reqr' className='block mb-2 text-sm font-bold text-gray-900'>
                    Требования к соискателю
                  </label>
                  {
                    !this.state.edit_state ?
                      <textarea
                        id='reqr'
                        rows='4'
                        className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        placeholder='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                        disabled
                      ></textarea> : 
                      <textarea
                        id='reqr'
                        rows='4'
                        className='block text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                        placeholder='Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ.'
                      ></textarea>
                  }
                </div>

                <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                  <div className='mb-6 md:w-1/3 pr-2'>
                    <label htmlFor='gender' className='block mb-2 text-sm font-bold text-gray-900'>
                      Пол
                    </label>
                    <div className='relative'>
                      {
                        !this.state.edit_state ?
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='gender' disabled
                          >
                            <option>Неважно</option>
                            <option>Мужской</option>
                            <option>Женский</option>
                          </select> : 
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='gender'
                          >
                            <option>Неважно</option>
                            <option>Мужской</option>
                            <option>Женский</option>
                          </select>
                      }
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
                    {
                        !this.state.edit_state ?
                          <input
                            type='min-age'
                            id='min-age'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='18'
                            required
                            disabled
                          /> : 
                          <input
                            type='min-age'
                            id='min-age'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='18'
                            required
                          />
                    }
                    
                  </div>

                  <div className='mb-6 md:w-1/3'>
                    <label htmlFor='max-age' className='block mb-2 text-sm font-bold text-gray-900'>
                      Макс. возраст
                    </label>
                    {
                        !this.state.edit_state ?
                          <input
                            type='max-age'
                            id='max-age'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='65'
                            required
                            disabled
                          /> : 
                          <input
                            type='max-age'
                            id='max-age'
                            className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                            placeholder='65'
                            required
                          />
                    }
                    
                  </div>
                </div>

                <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                  <div className='mb-6 md:w-1/3 pr-2'>
                    <label htmlFor='payFreq' className='block mb-2 text-sm font-bold text-gray-900'>
                      Периодичность выплат <span style={{ color: '#ff0000' }}>*</span>
                    </label>
                    <div className='relative'>
                      {
                        !this.state.edit_state ?
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='payFreq' disabled
                          >
                            <option>Еженедельно</option>
                            <option>Еженедневно</option>
                            <option>Еженемесячно</option>
                          </select> : 
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='payFreq'
                          >
                            <option>Еженедельно</option>
                            <option>Еженедневно</option>
                            <option>Еженемесячно</option>
                          </select>
                      }
                      
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
                    {
                      !this.state.edit_state ?
                        <input
                          type='min-pay'
                          id='min-pay'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='1000'
                          required
                          disabled
                        /> : 
                        <input
                          type='min-pay'
                          id='min-pay'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='1000'
                          required
                        />
                    }
                    
                  </div>

                  <div className='mb-6 md:w-1/3'>
                    <label htmlFor='max-pay' className='block mb-2 text-sm font-bold text-gray-900'>
                      Макс стоимость раб. смены <span style={{ color: '#ff0000' }}>*</span>
                    </label>
                    {
                      !this.state.edit_state ?
                        <input
                          type='max-pay'
                          id='max-pay'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='10000'
                          required
                          disabled
                        /> : 
                        <input
                          type='max-pay'
                          id='max-pay'
                          className='shadow-sm  text-gray-900 text-sm rounded-lg border border-1 border-gray-300 focus:border-button focus:outline-none block w-full p-2.5'
                          placeholder='10000'
                          required
                        /> 
                    }
                    
                  </div>
                </div>

                <div className='w-full mb-6 flex flex-col md:flex-row md:justify-evenly'>
                  <div className='mb-6 md:w-1/2 pr-2'>
                    <label htmlFor='min-wtime' className='block mb-2 text-sm font-bold text-gray-900'>
                      Мин. длит. раб. смены
                    </label>
                    <div className='relative'>
                      {
                        !this.state.edit_state ?
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='min-wtime' disabled
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
                          </select> : 
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
                      }
                      
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
                    {
                        !this.state.edit_state ?
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='max-wtime' disabled
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
                          </select> : 
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
                      }
                      
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
                    {
                        !this.state.edit_state ?
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='tariff' disabled
                          >
                            <option>Стартовый (бесплатно)</option>
                            <option>Разовый (500р.)</option>
                          </select> : 
                          <select
                            className='block appearance-none text-black w-full p-2.5 rounded-lg leading-tight border border-1 border-gray-300 focus:border-button focus:outline-none'
                            id='tariff'
                          >
                            <option>Стартовый (бесплатно)</option>
                            <option>Разовый (500р.)</option>
                          </select>
                    }
                    
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

                      {!this.state.edit_state ? (
                              <>
                              {/* Input fields and edit form */}
                              <button
                                type='button'
                                className={`text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300 mr-3 `} onClick={this.handleChangeEditMode}
                              >
                                Редактировать
                              </button>
                              </>
                          ) : (
                            <Link to={`/vacFromEdit`}>
                              <button
                                type='button'
                                className={`text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300 mr-3 `}
                              >
                                Сохранить изменения
                              </button>
                            </Link>
                          )}

                  <Link to={`/inactive`}>
                    <button
                      type='button'
                      className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300'
                    >
                      Отмена
                    </button>
                  </Link>
                    

                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }  
  
}

export default EditVacancy;
