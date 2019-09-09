import axios from 'axios';

export const forEach = (arr, fn) => {
    arr.forEach(fn);
}

export const fectchUser = () => axios.get('/user');

export const fetchList = () => axios.get('/list');

export const mockTimer = fn => {
    setTimeout(() => {
        fn();
    }, 2000);
}