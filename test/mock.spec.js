// 使用__mocks__下的文件
// jest.mock('../4.mock');
// import { fetchList, fectchUser } from '../4.mock';
// let { forEach } = jest.requireActual('../4.mock');
import { forEach, fetchList, fectchUser } from '../4.mock';

it('test forEach method', () => {
    let fn = jest.fn();
    forEach([1, 2, 3], fn);
    expect(fn.mock.calls.length).toBe(3);
    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[1][0]).toBe(2);
    expect(fn.mock.calls[2][0]).toBe(3);
})


// 请求的逻辑都mock掉
it('test fetchList to getUser', async() => {
    let data = await fectchUser();
    expect(data).toEqual({ name: 'xj' });
});

it('test fetchList to getList', async() => {
    let data = await fetchList();
    expect(data).toEqual([1, 2, 3]);
});

// mock 函数 文件 某个第三方模块