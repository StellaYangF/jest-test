// 使用__mocks__下的文件
// jest.mock('../4.mock');
// import { fetchList, fectchUser } from '../4.mock';
// let { forEach } = jest.requireActual('../4.mock');
import { forEach, fetchList, fetchUser, mockTimer } from '../4.mock';
jest.useFakeTimers();

it('test forEach method', () => {
    let fn = jest.fn();
    forEach([1, 2, 3], fn);
    expect(fn.mock.calls.length).toBe(3);
    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[1][0]).toBe(2);
    expect(fn.mock.calls[2][0]).toBe(3);
})


// 请求的逻辑都mock掉
it('test fetchUser to getUser', async() => {
    let data = await fetchUser();
    expect(data).toEqual({ name: 'xj' });
});

it('test fetchList to getList', async() => {
    let data = await fetchList();
    expect(data).toEqual([1, 2, 3]);
});

// mock timer  run immediately
it('测试timer事件到达后 可以调用方法', () => {
    let fn = jest.fn();
    mockTimer(fn);
    // jest.runAllTimers();
    // jest.runOnlyPendingTimers(); //只执行等待的定时器一次
    jest.advanceTimersByTime(4000);
    // expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(1);
})

// mock 函数 文件 某个第三方模块