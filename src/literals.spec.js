import numberToRoman from "./literals"

describe("roman literals", () => {
  it("should convert 1 to I", () => {
    expect(numberToRoman(1)).toEqual("I")
  })

  it('should convert 2 to II', () => {
    expect(numberToRoman(2)).toEqual("II")
  })
  it('should convert 3 to III', () => {
    expect(numberToRoman(3)).toEqual("III")
  })

  it('should convert 4 to IV', () => {
    expect(numberToRoman(4)).toEqual("IV")
  })

  it('should convert 5 to V', () => {
    expect(numberToRoman(5)).toEqual("V")
  })
})

// M = 1000
// V = 5
// IV = 4
// III = 3
