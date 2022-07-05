test("Test 1", () => {
    expect( 2 + 3).toBe(5)
}, 5000)

test.only("Test 2", () => {
    expect( 3 + 3).toBe(6)
})

test("Test 3", () => {
    expect( 3 + 5).toBe(8)
})