import React, { Component } from 'react';
import SubMenu from '../../components/layout/SubMenu';
import List from '../../components/Jobs/List';
import FeedBacks from '../../components/FeedBacks/FeedBacks';

class DeleteVacancy extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            checkState: 0,
            modalState: false,
            divStatus: false,
            dialogState: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            checkState: value
        });   
    }

    render() {
        return (
            <div className='w-full flex flex-1 mt-10 p-1'>
                <div className='container relative flex first:flex-row xs:flex-col mx-auto max-w-[1163px]'>
                    <div className='flex justify-start first:w-[67%] xs:w-full first:p-1 xs:p-4 flex-col'>
                        <div className='flex flex-wrap basic-full items-center relative w-full'>
                            <h2 className='text-[32px] tracking-[1px] font-semibold'>Мои вакансии</h2>
                        </div>
                        <SubMenu check={this.state.checkState} category="vacancy" active="delete"/>
                        <div className='flex flex-col items-start w-full mt-1 first:pr-10 pb-10'>
                            <List deleteState={true} proposal_count={2} checkState={this.handleChange} />
                            <List deleteState={true} proposal_count={2} checkState={this.handleChange} />
                            <List deleteState={true} proposal_count={2} checkState={this.handleChange} />
                        </div>
                    </div>
                    <div className='flex first:w-[33%] xs:w-full'>
                        <FeedBacks showUrl={ true } />
                    </div>
                </div>
            </div>
        );
    }
};

export default DeleteVacancy;