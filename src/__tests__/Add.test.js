import { Add } from "./Add";

test('CheckAddition', () =>{
    expect(Add(1.1,2.2)).toBeCloseTo(3.3);
});