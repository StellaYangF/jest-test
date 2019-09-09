export default {
    get(url) {
        return new Promise(resolve => {
            if (url === '/user') resolve({ name: 'xj' })
            if (url === '/list') resolve([1, 2, 3]);
        })
    }
}