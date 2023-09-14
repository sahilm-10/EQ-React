import { CloneArray } from "./CloneArray";

test('Array Clone', ()=>{
    const array = [1,2,3,4];
    // Equal - for checking value of the array [By Reference use hota internally.]
    expect(CloneArray(array))
        .toEqual(array);
})