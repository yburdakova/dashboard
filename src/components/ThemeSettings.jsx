import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {

    const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();
    
    return (
        <div className='fixed top-0 right-0 w-screen bg-half-transparent nav-item'>
            <div className="float-right h-screen bg-white dark:text-gray-200  dark:bg-main-dark-bg dark:[#484B52] w-400">
                <div className="flex items-center justify-between p-4 ml-4">
                    <p className="text-xl font-semibold">Settings</p>
                    <button 
                        type='button' 
                        onClick={()=> setThemeSettings(false)}
                        className='p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray'
                        style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}>
                            <MdOutlineCancel/>
                        </button>
                </div>
                <div className="flex-col p-4 ml-4 border-t-1 border-color">
                    <p className="text-lg font-semibold">Theme Options</p>
                    <div className="mt-4">
                        <input 
                            type="radio"
                            id='light'
                            name='theme'
                            value='Light'
                            className='cursor-pointer'
                            onChange={setMode}
                            checked={currentMode === 'Light'}
                        />
                        <label htmlFor="light" className='ml-2 cursor-pointer text-md'>Light</label>
                    </div>
                    <div className="mt-4">
                        <input 
                            type="radio"
                            id='dark'
                            name='theme'
                            value='Dark'
                            className='cursor-pointer'
                            onChange={setMode}
                            checked={currentMode === 'Dark'}
                        />
                        <label htmlFor="dark" className='ml-2 cursor-pointer text-md'>Dark</label>
                    </div>
                </div>
                <div className="flex-col p-4 ml-4 border-t-1 border-color">
                    <p className="text-lg font-semibold">Theme Colors</p>
                    <div className="flex gap-3">
                        {themeColors.map((item, index)=> (
                            <TooltipComponent 
                                key={index}
                                content={item.name}
                                position='TopCenter'
                            >
                                <div className="relative flex items-center gap-5 mt-2 cursor-pointer">
                                    <button 
                                        type='button' 
                                        className='w-10 h-10 rounded-full cursor-pointer'
                                        style={{ backgroundColor: item.color }}
                                        onClick={()=> setColor(item.color)}
                                        
                                    >
                                        <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}/>
                                    </button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;