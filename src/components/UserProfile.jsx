import React from 'react';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
    const { currentColor } = useStateContext();

    return (
        <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
            </div>
            <div className="flex items-center gap-5 pb-6 mt-6 border-color border-b-1">
                <img
                className="w-24 h-24 rounded-full"
                src={avatar}
                alt="user-profile"
                />
                <div>
                <p className="text-xl font-semibold dark:text-gray-200"> Max Roberts </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">  Administrator   </p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400"> info@shop.com </p>
                </div>
            </div>
            <div>
                {userProfileData.map((item, index) => (
                <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
                    <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="p-3 text-xl rounded-lg hover:bg-light-gray"
                    >
                    {item.icon}
                    </button>

                    <div>
                    <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400"> {item.desc} </p>
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-5">
                <Button
                color="white"
                bgColor={currentColor}
                text="Logout"
                borderRadius="10px"
                width="full"
                />
            </div>
        </div>

    );
};

export default UserProfile;