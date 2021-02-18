const { triangleArea } = require("./triangleArea");

describe("triangleArea", () => {
  it("should throw error if incorrect vertices", () => {
    const t = () => triangleArea();
    expect(t).toThrow("Incorrect vertices");
  });

  it("should throw error if incorrect vertices", () => {
    const t = () => triangleArea();
    expect(t).toThrow("Incorrect vertices");
  });

  it("should correctly calculate the area", () => {
    expect(triangleArea([13, 14], [16, 30], [50, 10])).toBe(302);
    expect(triangleArea([1, 1], [2, 3], [4, 5])).toBe(1);
    expect(triangleArea([1, 8], [8, 9], [2, 1])).toBe(25);
  });
});
