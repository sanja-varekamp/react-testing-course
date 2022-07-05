test('First', () => {
expect(3 + 3).toBe(6);
})

it("Second", () => {
    expect(2+1).toBe(3);
})

describe("A group of tests", () => {
    test('First', () => {
        expect(3 + 3).toBe(6);
    })

    it("Second", () => {
        expect(2+1).toBe(3);
    })
})