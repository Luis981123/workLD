import React, { Component } from 'react';
import SubMenu from '../../components/layout/SubMenu';
import List from '../../components/Jobs/List';
import FeedBacks from '../../components/FeedBacks/FeedBacks';


class Vacancy extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            checkState: 0,
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
                <div className='container relative flex flex-1 first:flex-row xs:flex-col mx-auto max-w-[1163px]'>
                    <div className='flex justify-start first:w-[67%] xs:w-full first:p-1 xs:p-4 flex-col'>
                        <div className='flex flex-wrap basic-full items-center relative w-full'>
                            <h2 className='text-[32px] tracking-[1px] font-semibold'>Мои вакансии</h2>
                        </div>
                        <SubMenu check={this.state.checkState} category="vacancy" active="active"/>
                        <div className='flex flex-col items-start w-full mt-1 first:pr-10 pb-10'>
                            <List
                                key={1}
                                deleteState={false}
                                registerState={1}
                                active={true}
                                category={"vac"}
                                proposal_count={2}
                                checkState={this.handleChange} />
                            <List
                                key={2}
                                deleteState={false}
                                registerState={1}
                                active={true}
                                category={"vac"}
                                proposal_count={4}
                                checkState={this.handleChange}
                            />
                            <List
                                key={3}
                                deleteState={false}
                                registerState={1}
                                active={true}
                                category={"vac"}
                                proposal_count={3}
                                checkState={this.handleChange}
                            />
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

export default Vacancy;