import React from 'react';
import { Header, PyramidChart } from '../../components';

const Pyramid = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="Food Comparison Chart" />
            <div className="w-full">
                <PyramidChart/>
            </div>
        </div>
    );
};

export default Pyramid;