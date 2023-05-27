const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('check that the shuffle returns an array',()=>{
    const result = shuffle([1,2,3,4,5,6])
    expect(Array.isArray(result)).toBe(true)
  })
  test('should shuffle the array', ()=>{
    let numarray = [1,2,3,4,5]
   const result = shuffle(numarray)
   expect(result).toEqual(expect.arrayContaining(numarray));
   expect(result).not.toEqual(numarray);
  })
});
