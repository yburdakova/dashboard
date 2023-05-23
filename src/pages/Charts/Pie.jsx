import React from 'react';
import { Header, PieChart } from '../../components';

const Pie = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Project Cost Breakdown" />
            <div className="w-full">
                <PieChart/>
            </div>
        </div>
    );
};

export default Pie;