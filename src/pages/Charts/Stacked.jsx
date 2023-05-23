import React from 'react';
import { Header, StackedChart } from '../../components';

const Stacked = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Revenue Breakdown" />
            <div className="w-full">
                <StackedChart/>
            </div>
        </div>
    );
};

export default Stacked;