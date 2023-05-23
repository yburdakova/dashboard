import React from 'react';
import { Header, BarChart } from '../../components';

const Bar = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Olympic Medal Counts - RIO" />
            <div className="w-full">
                <BarChart/>
            </div>
        </div>
    );
};

export default Bar;