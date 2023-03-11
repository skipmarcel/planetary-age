export default class PlanetAge {
  constructor() {
    this.orbitalPeriods = {
      earth: 365.25,
      mercury: 87.97,
      venus: 224.7,
      mars: 686.97,
      jupiter: 4332.7,
      saturn: 10759.22,
      uranus: 30685.49,
      neptune: 60191.19,
      pluto: 90799.98,
    };
  }

  compAge(planet) {
    const earthDaysPerYear = this.orbitalPeriods["earth"];
    const planetDaysPerYear = this.orbitalPeriods[planet];
    return Number((earthDaysPerYear / planetDaysPerYear).toFixed(2));
  }
}
