import { CheckValue } from "./CheckValue";

test('Check For Any Value', ()=>{
    expect(CheckValue(undefined)).toBeUndefined()
})

// regex
test('This is my Team' , ()=>{
    expect('Team').not.toMatch(/I/)
})

test('TestName in UserNames', ()=>{
    const userNames = ['Sahil','Test1','Test2','TestName']
    expect(userNames).toContain('TestName')
})