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

  it('should convert 9 to IX', () => {
    expect(numberToRoman(9)).toEqual("IX")
  })

  it('should convert 10 to X', () => {
    expect(numberToRoman(10)).toEqual("X")
  })
})