import React from 'react';
import { Link } from 'react-router-dom';

function BlankMyAccount() {
  return (
    
      <div className='w-full flex flex-1 mt-10 p-1'>
        <div className='container relative flex flex-1 zero:flex-row xs:flex-col mx-auto max-w-[1163px]'>
          <div className='flex justify-start zero:w-[67%] xs:w-full zero:p-1 xs:p-4 flex-col'>
            <div className='cards font-semibold mt-3 zero:w-760 w-full'>
              <p className='text-xl'>Статистика</p>
              <div className='flex zero:w-760 w-full justify-center rounded-lg border-2 p-0  border-gray-300'>
                <ul className='third:flex flex zero:w-760 w-full flex-wrap justify-between ml-10 mt-2 mb-2 gap-2 sm:gap-0'>
                  <li className='flex sm:flex-col justify-start gap-6 items-center  sm:gap-0 sm:ml-0 text-left w-full sm:w-1/4 '>
                    <p className='text-xl/2 xs:text-2xl'>200</p>
                    <p className='text-md leading-4 text-left sm:text-center '>
                      Активные соискатели
                    </p>
                </li>
                <li className='flex sm:flex-col justify-start items-center text-center w-full sm:w-2/4 p-3 -ml-5 sm:ml-0'>
                    <div className='flex items-center justify-center text-center bg-button rounded-md '>
                      <div className='flex align-sm justify-center h-100'>
                        <Link to={`/myaccount`} className='text-center align-sm text-white p-2'>
                          впервые
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='cards font-semibold mt-5 zero:w-760 w-full'>
              <p className='text-xl'>Вакансии</p>
              <div className='flex zero:w-760 w-full justify-center rounded-lg border-2 p-0  border-gray-300'>
                <ul className='third:flex zero:w-760 w-full  flex flex-wrap gap-1 justify-between ml-10 mt-2 mb-2 sm:gap-0'>
                  <li className='flex sm:flex-col justify-start gap-6 items-center sm:gap-0 sm:ml-0 text-center w-full sm:w-1/4'>
                    {/* <p className='text-xl/2 xs:text-2xl'>3</p> */}
                    <p className='text-lg text-left sm:text-center '>Вакансий не создавалось</p>
                  </li>
                  <li className='flex sm:flex-col justify-start items-center text-center w-full sm:w-2/4 p-3 -ml-5 sm:ml-0'>
                    <div className='flex items-center justify-center text-center bg-button rounded-md '>
                      <div className='flex align-sm justify-center h-100'>
                        <Link to={`/createVacancy`} className='text-center align-sm text-white p-2'>
                          Разместить вакансию
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='cards font-semibold zero:w-760 w-full   mt-5'>
              <p className='text-xl'>Поиск и подбор командой исполнителя</p>
              <div className='flex zero:w-760 w-full justify-center rounded-lg border-2 p-0  border-gray-300'>
                <ul className='third:flex zero:w-760 w-full flex-wrap block items-center justify-between ml-10 mt-2 mb-2 sm:gap-0'>
                  <li className='flex sm:flex-col justify-start items-center gap-6  sm:gap-0 sm:ml-0 items-base text-center w-full sm:w-1/4'>
                    {/* <p className='text-xl/2 xs:text-2xl'>3</p> */}
                    <p className='text-lg text-left sm:text-center'>Вакансий не создавалось</p>
                  </li>
                  <li className='flex sm:flex-col justify-start items-center text-center w-full sm:w-2/4 p-3 -ml-5 sm:ml-0'>
                    <div className='flex items-center justify-center text-center bg-button rounded-md '>
                      <div className='flex align-sm justify-center h-100'>
                        <Link to={`/createjob`} className='text-center align-sm text-white p-2'>
                          Подключить менеджера и создать вакансию
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-start zero:w-[33%] xs:w-full flex-col zero:p-0 xs:p-4'>
            <div className='flex justify-center -mb-1 md:justify-start md:items-center font-normal'>
              <p className='text-2xl'></p>
            </div>
          </div>
        </div>
      </div>
      
  );
}

export default BlankMyAccount;
