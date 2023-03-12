import PlanetAge from "./../src/ageCalc.js";

describe("PlanetAge", () => {
  let planetAge;

  beforeEach(() => {
    const ageInDays = 48;
    planetAge = new PlanetAge(ageInDays);
  });

  it("should calculate age on Mercury correctly", () => {
    expect(planetAge.compAge("mercury")).toBeCloseTo(199.3, 2);
  });

  it("should calculate age on Venus correctly", () => {
    expect(planetAge.compAge("venus")).toBeCloseTo(78.02, 2);
  });

  it("should calculate age on Mars correctly", () => {
    expect(planetAge.compAge("mars")).toBeCloseTo(25.52, 2);
  });

  it("should calculate age on Jupiter correctly", () => {
    expect(planetAge.compAge("jupiter")).toBeCloseTo(4.05, 2);
  });

  it("should calculate age on Saturn correctly", () => {
    expect(planetAge.compAge("saturn")).toBeCloseTo(1.63, 2);
  });

  it("should calculate age on Uranus correctly", () => {
    expect(planetAge.compAge("uranus")).toBeCloseTo(0.57, 2);
  });

  it("should calculate age on Neptune correctly", () => {
    expect(planetAge.compAge("neptune")).toBeCloseTo(0.29, 2);
  });

  it("should calculate age on Earth correctly", () => {
    expect(planetAge.compAge("earth")).toBeCloseTo(48, 2);
  });
  it("should calculate age on Pluto correctly", () => {
    expect(planetAge.compAge("pluto")).toBeCloseTo(0.19, 2);
  });
  it("should calculate years passed since last birthday", () => {
    expect(planetAge.yearsHavePast(48, 40, "earth")).toBeCloseTo(8, 2);
  });
});
