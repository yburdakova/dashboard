import React from 'react';
import { Header, SplineAreaChart } from '../../components';

const Area = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Inflation Rate in Percentage" />
            <div className="w-full">
                <SplineAreaChart/>
            </div>
        </div>
    );
};

export default Area;