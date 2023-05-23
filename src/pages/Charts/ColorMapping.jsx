import React from 'react';
import { Header, ColorMappingChart } from '../../components';

const ColorMapping = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg'>
            <Header category="Chart" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className="w-full">
                <ColorMappingChart/>
            </div>
        </div>
    );
};

export default ColorMapping;