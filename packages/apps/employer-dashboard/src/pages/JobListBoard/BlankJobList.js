import React, { Component } from 'react';
import SubMenu from '../../components/layout/SubMenu';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

class BlankJobList extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            modalState: false
        };
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal() {
        this.setState({
            modalState: !this.state.modalState,
        });
    }

    render() {
        return (
            <div className='w-full flex flex-1 mt-10 p-1'>
                <div className='container relative flex flex-1 first:flex-row xs:flex-col mx-auto max-w-[1163px]'>
                    <div className='flex justify-start w-full first:p-0 xs:p-4 flex-col'>
                        <div className='flex flex-wrap basic-full items-center relative w-full'>
                            <h2 className='text-[32px] tracking-[1px] font-semibold'>Мои вакансии</h2>
                        </div>
                        <SubMenu check={0} category="job" active="blank"/>
                        <div className='flex flex-col items-start w-full mt-1 first:pr-10 pb-10'>
                            <div className="flex flex-col">
                                <p className="mt-8">Чтобы начать работу по поиску и подбору персонала, необходимо подключить менеджера и создать вакансию </p>
                                <button onClick={this.handleModal} className='bg-button text-white font-bold py-2 px-4 rounded-lg mt-8 w-full first:w-fit'>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                    <Modal
                        open={this.state.modalState}
                        title="Команда Исполнителя предлагает 3 варианта сотрудничества:"
                        onCancel={this.handleModal}
                        width={800}
                        footer={(_, {  }) => (
                        <>
                            <Link to={`/createjob`}>
                                <button className='bg-button text-white font-bold py-2 px-4 rounded-lg mt-8 w-full first:w-fit'>
                                    Подключить менеджера и создать вакансию
                                </button>
                            </Link>
                        </>
                        
                        )}
                    >
                        <p className="text-[1.5rem] my-4">Базовый</p>
                        <p className="text-muted">1. Взаимодействие клиента с менеджером Исполнителя по созданию вакансии. По результатам этого этапа, вакансия клиента размещается менеджером в сервисе Исполнителя с целью получения откликов на вакансию.</p>
                        <p className="text-muted">2. Предоставление клиенту анкет соискателей. С каждым из соискателей предварительно проведено собеседование посредством аудио/видеосвязи менеджерами Исполнителя. Базовое количество анкет – 5 шт.</p>
                        <p className="text-muted">3. Взаимодействие клиента с соискателями без участия команды Исполнителя. </p>
                        <p className="text-muted">Стоимость пакета «Базовый» составляет 1500 рублей. При необходимости клиент может получить дополнительно 5 анкет по цене 1000 рублей.</p>
                        <p className="text-[1.5rem] my-4">Базовый + Результат</p>
                        <p className="text-muted">1. Предоставление клиенту анкет соискателей. С каждым из соискателей предварительно проведено собеседование посредством аудио/видеосвязи менеджерами Исполнителя. Клиенту предоставляется по 1 анкете. </p>
                        <p className="text-muted">2. Взаимодействие клиента с соискателями при участии команды Исполнителя. </p>
                        <p className="text-muted">3. Поиск и подбор соискателей происходит до момента трудоустройства соискателя. </p>
                        <p className="text-muted">Стоимость пакета «Базовый + Результат» составляет 5 000 рублей.</p>
                        <p className="text-[1.5rem] my-4">Базовый + Результат + Гарантия</p>
                        <p className="text-muted">Поиск и подбор соискателей происходит до момента трудоустройства соискателя. В случае, если новый сотрудник отработает менее 2-х месяцев в штате Клиента, команда Исполнителя возобновит поиск на прежних условиях или вернет вам деньги.</p>
                        <p className="text-muted">Стоимость пакета «Базовый + Результат + Гарантия» составляет 10 000 рублей</p>
                        <p className="text-muted">Для организации поиска и подбора персонала нашим специалистом вам необходимо зарегистрироваться на сайте, заполнив данные работодателя. Далее в личном кабинете в блоке «Поиск и подбор персонала командой Исполнителя» создать вакансию. При создании вакансии выбрать пакет услуг</p>
                    </Modal>
                </div>
            </div>
        );
    }
};

export default BlankJobList;