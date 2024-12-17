import Cookies from 'js-cookie';

// Utility function to remove a cookie
export const removeCookie = (name) => {
    Cookies.remove(name, { path: '/' });
};
