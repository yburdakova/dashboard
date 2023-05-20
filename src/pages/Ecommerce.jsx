import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import {Staked, Pie, Button, SparkLine} from '../components';
import { earningData, SparklineAreaData, ecomPieChartData, welcome01 } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Ecommerce = () => {
    return (
        <div className="mt-24">
            <div className="flex flex-wrap justify-center lg:flex-nowrap ">
                <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl pt-9 bg-hero-pattern">
                    <div className="flex items-center justify-between">
                        <div >
                            <p className="font-bold text-gray-400">Earnings</p>
                            <p className="text-2xl">$63,448.78</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color='white'
                            bgColor='blue'
                            text='Download'
                            borderRadius='10px'
                            size='md'
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 m-3">
                    {earningData.map((item)=> (
                        <div className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl" key={item.title}>
                            <button 
                                type="button" 
                                style={{color: item.iconColor, backgroundColor: item.iconBg}}
                                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Ecommerce;