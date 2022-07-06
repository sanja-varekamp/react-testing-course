let someNumber = 5;
let name = "Sanja"
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test("Testing a number in different ways", () => {
    expect(someNumber).toBe(5);
    expect(someNumber).toEqual(5);

    expect(someNumber).toBeGreaterThan(1)
    expect(someNumber).toBeLessThan(13)
    expect(someNumber).toBeLessThanOrEqual(5)

    expect(name).toMatch(/Sanja/i);
})

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});