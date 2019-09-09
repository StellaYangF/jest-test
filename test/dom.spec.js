// 测试dom库是否符合

import { removeNode, append, insetBefore } from '../2.dom';

it('测试能否成功删除 removeNode', () => {
    document.body.innerHTML = '<div><button></button></div>';
    let button = document.querySelector('button');
    console.log(button);
    expect(button).not.toBe(null);

    removeNode(button);
    button = document.querySelector('button');
    expect(button).toBe(null);

    let input = document.createElement('input');
    append(input, document.body);
})

// jsdom环境
// 也可以使用jquery 更加方便