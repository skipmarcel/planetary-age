import PlanetAge from "./../src/ageCalc.js";

describe("PlanetAge", () => {
  test("should correctly divide one earth year in days by one planet year in days", () => {
    const planetAge = new PlanetAge();
    const expected = 365.25 / 87.97;
    const result = planetAge.compAge("mercury");
    expect(result).toBeCloseTo(expected);
  });
});
