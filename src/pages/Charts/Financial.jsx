import React from 'react';
import { Header, FinancialChart } from '../../components';

const Financial = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Financial: AAPLE Historical" />
            <div className="w-full">
                <FinancialChart/>
            </div>
        </div>
    );
};

export default Financial;
