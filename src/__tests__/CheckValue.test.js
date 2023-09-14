import { CheckValue } from "./CheckValue";

test('Check For Any Value', ()=>{
    expect(CheckValue(undefined)).toBeUndefined()
})

// regex
test('This is my Team' , ()=>{
    expect('Team').not.toMatch(/I/)
})