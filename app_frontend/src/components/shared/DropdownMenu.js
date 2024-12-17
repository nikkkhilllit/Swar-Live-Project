import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeAuthenticatedGETRequest } from '../../utils/serverHelpers';
import { removeCookie } from './cookieUtils'; // Utility function to remove cookies
import {Icon} from "@iconify/react";
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove token from cookies
        removeCookie('token');
        // Redirect to login page
        window.location.reload();
    };

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/auth/register"
            );
            setUserData(response.data);
        };
        getData();
    }, []);


    return (
        <div className="relative">
            <div
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon icon="solar:user-bold" width="30" />
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                    <ul>
                        {/* <li >
                        <div className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        {userData.name}
                        </div>
                            
                        </li> */}
                        <li>
                            <button
                                onClick={handleLogout}
                               
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                <Link to ="/home">Logout</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;

