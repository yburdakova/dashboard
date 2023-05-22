import React from 'react';

const Header = ({category, title}) => {
    return (
        <div className='mb-10 '>
            <p className="text-gray-400">
                {category}
            </p>
            <p className="text-3xl tracking-tight font-extralight text-slate-900 dark:text-white">
                {title}
            </p>
        </div>
    );
};

export default Header;