import React from "react";
// import { Subtract } from "./Subtract";

const subtract = jest.fn(() => 1);
test('Subtraction should be 1',()=>{
    expect(subtract(2,1)).toBe(1)
    expect(subtract).toHaveBeenCalledTimes(1)
})