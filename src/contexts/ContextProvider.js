import { modelChanged } from "@syncfusion/ej2-grids";
import React, {useState, createContext, useContext} from "react";

const StateContext = createContext();

const initialState = {
    cart:false,
    chat: false,
    userProfile: false,
    notification: false,
};


export const ContextProvider = ( { children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) =>  isClicked[clicked] === false ?  setIsClicked({ ...initialState, [clicked]: true }) :  setIsClicked({ ...initialState, [clicked]: false })


    return (
        <StateContext.Provider
            value={{ 
                activeMenu, setActiveMenu,
                screenSize, setScreenSize,
                isClicked, setIsClicked,
                handleClick,
                currentColor, setColor,
                currentMode, setMode,  
                themeSettings, setThemeSettings  ,
                isCartVisible, setIsCartVisible,         
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);