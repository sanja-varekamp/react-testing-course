// Simple loop test through an array and a function

let numbers = [1, 2, 3]

function add(x, y) {
    return x + y
}

test.each(numbers)("Add 2 to %i", number => {
    expect(add(2, number)).toBe(number + 2)
})

// Loop test through a multidimensional array

let moreNumbers = [
    [1, 2, 3],
    [2, 2, 4],
    [4, 5, 9]
]

test.each(moreNumbers)("If youn add %i to %i, the result is %i", (a, b, total) => {
    expect(add(a, b)).toBe(total);
})