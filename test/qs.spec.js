// jest只能测试模块
import { parser, stringify } from '../'

describe('测试qs库是否合法', () => {
    it('测试parser是否能解析数据', () => {
        expect(parser("name=tom")).toEqual({ name: "tom" });
    });

    it('测试stringify 是否符合功能', () => {
        expect(stringify({ name: "tom" })).toBe(["name=tom"])
    });
})