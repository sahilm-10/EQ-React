import { GetUserAsync } from "./GetUserAsync";
test('UserName should be Ervin',async()=>{
    // expect.assertions(1);
    const data =  GetUserAsync()
    expect(data.name).toEqual("Ervin Howell")
        
})