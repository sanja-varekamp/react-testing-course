function check(){
    throw new Error('Fatal')
}

test("Test for error", ()=> {
    expect(check).toThrow()
    expect(check).toThrow(Error)
    expect(check).toThrow("Fatal")

    // the /i is for case insensitive. Tests only for the string
    expect(check).toThrow(/fatal/i)
})