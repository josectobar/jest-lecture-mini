function adder(a, b) {
  return a + b
}

test("if given 2 and 2, return 4", () => {
  expect(adder(2, 2)).toBe(4)
})

it("should return 5 if given 2 and 3", () => {
  expect(adder(2, 3)).toBe(5)
})
