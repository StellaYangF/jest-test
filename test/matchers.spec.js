// 匹配 > = < != contians
// --watchAll 监控所有文件
// --watch + git 如果提交过的内容 没有更改就不会测试这个文件


it("测试两个是否相等", () => {
    expect(1 + 1).toBe(2); // ===
    expect({ name: 1 }).toEqual({ name: 1 });
})