beforeEach( () => {
    console.log("I fire before each test")
})

afterEach( () => {
    console.log("I fire after each test")
})

test('Test one', () => {
    console.log('I am in the first test')
})

test('Test two', () => {
    console.log('I am in the second test')
})