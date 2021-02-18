const { tenItems, printItems } = require("./tenItems");

describe("tenItems", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation();
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it("should create an array from 0 to 9", () => {
    expect(tenItems.length).toBe(10);
  });

  it("should print 10 times", () => {
    printItems(tenItems);
    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenLastCalledWith(10);
  });

  it("should not print if no items", () => {
    printItems();
    expect(console.log).toHaveBeenCalledTimes(0);
  });
});
