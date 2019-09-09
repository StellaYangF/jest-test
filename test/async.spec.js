import { getDataThroughCallback, getDataThroughPromise } from '../3.async';

// 1. 异步回调的方式 想用jest 测试用 done
it('测试 传入callback能否拿到最终的结果', (done) => {
    // expect.assertions(1);  可加可不加
    getDataThroughCallback((data) => {
        expect(data).toEqual({ name: "xj" });
        done();
    })
})

it('测试promise 能否拿到最终结果 1', () => {
    expect.assertions(1);
    return getDataThroughPromise().then(data => {
        expect(data).toEqual({ name: 'xj' });
    })
})

it.only('测试promise', async() => {
    let data = await getDataThroughPromise();
    expect(data).toEqual({ name: 'xj' });
})

// it.only  skipped