import axios from 'axios';

export const forEach = (arr, fn) => {
    arr.forEach(fn);
}

export const fetchUser = () => axios.get('/user');

export const fetchList = () => axios.get('/list');

export const mockTimer = fn => {
    setTimeout(() => {
        fn();
    }, 2000);
}