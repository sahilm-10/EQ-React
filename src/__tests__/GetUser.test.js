import { GetUser } from "./GetUser";
import axios from "axios";
test('UserName should be Ervin',()=>{
    expect.assertions(1);
    return GetUser()
        .then(data =>{
            expect(data.name).toEqual("Ervin Howell")
        })
})