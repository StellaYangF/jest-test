export const fetchUser = () => {
    return new Promise(resolve => {
        resolve({ name: 'xj' });
    })
};

export const fetchList = () => {
    return new Promise(resolve => {
        resolve([1, 2, 3]);
    })
}