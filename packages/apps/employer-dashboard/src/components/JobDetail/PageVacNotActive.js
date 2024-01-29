import React from 'react';
import FeedBacks from '../FeedBacks/FeedBacks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function PageVacNotActive() {
  const [isModerationVisible, setIsModerationVisible] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(true);

  // const handleActivateClick = () => {
  //   setIsModerationVisible(true);
  //   setAreButtonsVisible(false);
  // };

  const handleStatus = () => {
    Swal.fire({
        title: "Разместить вакансию для соискателей?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Да",
        cancelButtonText: "Нет"
        }).then((result) => {
            if (result.isConfirmed) {
                setIsModerationVisible(true);
                setAreButtonsVisible(false);
            }
    })
  }

  return (
      <div className='w-full flex flex-1 mt-10 p-1'>
        <section className='container relative flex flex-1 first:flex-row xs:flex-col mx-auto max-w-[1163px] '>
            <div className='vacancies-box flex flex-col zero:flex-row p-1 gap-7 w-full justify-center'>
              <div className='flex justify-start first:w-[67%] xs:w-full first:p-1 xs:p-4 flex-col'>
                <div className='vacancy-heading vacancy-heading-wrap'>
                  <h2 className='title text-3xl font-semibold mb-0'>
                    Вакансия “грузчик на склад срочно”
                  </h2>
                  <span className='vacancy__label text-gray-400'>Постоянная работа</span>
                </div>
                <div className='vacancy-wrap mt-2 border-1 rounded-md border-gray-200 shadow-md'>
                  <div className='vacancy-box shadow rounded'>
                    <div className='vacancy-box-item p-4 flex items-center border-b-1 border-gray-200'>
                      <div className='vacancy-box-header flex flex-col gap-3 third:gap-0 third:flex-row third:justify-between third:items-center items-start w-full h-fit'>
                        <div className='vacancy-box__text text-gray-900 text-xl'>
                          <span>Адрес вакансии: </span>ООО Леруа мерлен г.Краснодар
                        </div>
                        <div
                          className={`relative px-3 py-1.5 border rounded border-emerald-400 bg-emerald-400 text-white text-white'
                          role='alert' ${isModerationVisible ? 'block' : 'hidden'}`}
                        >
                          На модераций
                        </div>
                      </div>
                    </div>
                    <div className='vacancy-box-item p-4 flex items-center border-b-1 border-gray-200'>
                      <div className='vacancy-box flex flex-wrap gap-4'>
                        <div className='me-5 mb-2'>
                          <div className='vacancy-box__desc text-lg text-gray-500'>
                            <small>Оплата:</small>
                          </div>
                          <div className='vacancy-box__text text-gray-900'>
                            1800 - 2500 руб./смена
                          </div>
                        </div>
                        <div className='me-5 mb-2'>
                          <div className='text-lg text-gray-500 vacancy-box__desc  '>
                            <small>Периодичность выплат:</small>
                          </div>
                          <div className='vacancy-box__text text-gray-900'>1 раз в неделю</div>
                        </div>
                        <div>
                          <div className='text-lg text-gray-500 vacancy-box__desc  '>
                            <small>Длительность смены:</small>
                          </div>
                          <div className='vacancy-box__text text-gray-900'>2-10 часов</div>
                        </div>
                      </div>
                    </div>
                    <div className='vacancy-box-item p-4 flex items-center border-b-1 border-gray-200'>
                      <div className='vacancy-box flex gap-4'>
                        <div className='me-5 mb-2'>
                          <div className='vasc text-lg text-gray-500'>
                            <small>Пол:</small>
                          </div>
                          <div className='vacancy-box__text text-gray-900'>Мужской</div>
                        </div>
                        <div>
                          <div className='vasc text-lg  text-gray-500'>
                            <small>Возраст:</small>
                          </div>
                          <div className='vacancy-box__text text-gray-900'>20-30 лет</div>
                        </div>
                      </div>
                    </div>
                    <div className='vacancy-box-item p-4 flex flex-col items-start justify-center border-b-1 border-gray-200'>
                      <div className='vasc text-lg text-gray-500 mb-1'>
                        <small>Описание вакансии:</small>
                      </div>
                      <div className='vacancy-box__text text-gray-900'>
                        Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex e...
                      </div>
                    </div>
                    <div className='vacancy-box-item p-4 flex flex-col items-start justify-center'>
                      <div className='vasc text-lg text-gray-500 mb-1'>
                        <small>Требование к соискателю:</small>
                      </div>
                      <div className='vacancy-box__text text-gray-900'>
                        Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex e...
                      </div>
                    </div>
                  </div>
                </div>
                <div className='vacancy-btns flex flex-col gap-2 468:gap-0 468:flex-row mt-4 w-full is-two-btns'>
                  {areButtonsVisible && (
                    <>
                      <button
                        type='button'
                        className=' text-center border rounded py-2 px-4 bg-button text-white hover:bg-button-hov mr-2 w-full md:w-auto transition ease-in-out duration-300'
                        onClick={handleStatus}
                      >
                        Активировать
                      </button>
                      <Link to={`/edit`}>
                        <button
                          type='button'
                          className='text-center border rounded py-2 px-4  text-button border-button border-1 w-full md:w-auto hover:text-white bg-white hover:bg-button transition ease-in-out duration-300 mr-3'
                        >
                          Редактировать
                        </button>
                      </Link>
                    </>
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
              </div>
              <div className='flex first:w-[33%] xs:w-full'>
                  <FeedBacks />
              </div>
            </div>
        </section>
      </div>
  );
}

export default PageVacNotActive;
