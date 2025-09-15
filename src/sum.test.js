import sum from "../sum"

test("sum function should calculate sum of two numbers",()=>{
    const result = sum(10,26)

    //Assertion
    expect(result).toBe(36)
})