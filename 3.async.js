export const getDataThroughCallback = fn => {
    setTimeout(() => {
        fn({ name: 'xj' });
    }, 1000)
}

export const getDataThroughPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: "xj" });
        }, 1000);
    })
}