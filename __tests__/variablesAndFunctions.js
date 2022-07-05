let myValue = 1;

function add(x, y) {
    return x + y;
}

function alwaysTrue(x,y) {
    return 3;
}

test("Test an imported value", () => {
    expect(myValue).toBe(1);
})

test('Test a declared value', () => {
    let myValue2 = 3;
    expect(myValue2).toBe(3);
})

test('Test a function', () => {
    expect(add(1,2)).toBe(3);
    expect(add(5,4)).toBe(9);
})

test('Test a false positive function', () => {
    expect(alwaysTrue(6,2)).toBe(3);
})