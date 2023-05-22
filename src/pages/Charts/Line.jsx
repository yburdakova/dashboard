import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Inflation Rate" />
            <div className="w-full">
                <LineChart/>
            </div>
        </div>
    );
};

export default Line;