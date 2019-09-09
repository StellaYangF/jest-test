import { forEach } from '../4.mock';

it('test forEach method', () => {
    let fn = jest.fn();
    forEach([1, 2, 3], fn);
    expect(fn.mock.calls.length).toBe(3);
    console.log(fn.mock);
})