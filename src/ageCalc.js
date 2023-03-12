export default class PlanetAge {
  constructor(ageInDays) {
    this.age = ageInDays;
    this.orbitalPeriods = {
      earth: 365.25,
      mercury: 87.97,
      venus: 224.7,
      mars: 686.97,
      jupiter: 4332.59,
      saturn: 10759.22,
      uranus: 30685.4,
      neptune: 60190.03,
      pluto: 90799.98,
    };
  }

  compAge(planet) {
    const earthDaysPerYear = this.orbitalPeriods["earth"];
    const planetDaysPerYear = this.orbitalPeriods[planet];
    return Number(
      ((this.age * earthDaysPerYear) / planetDaysPerYear).toFixed(2)
    );
  }

  yearsHavePast(pastAge, planet) {
    const earthDaysPerYear = this.orbitalPeriods["earth"];
    const planetDaysPerYear = this.orbitalPeriods[planet];
    const difference = this.age - pastAge;
    const multEarth = difference * earthDaysPerYear;
    const pastYears = multEarth / planetDaysPerYear;
    return Number(pastYears.toFixed(2));
  }

  yearsWillPass(futureAge, planet) {
    const earthDaysPerYear = this.orbitalPeriods["earth"];
    const planetDaysPerYear = this.orbitalPeriods[planet];
    const difference = futureAge - this.age;
    const multEarth = difference * earthDaysPerYear;
    const yearsWillPass = multEarth / planetDaysPerYear;
    return Number(yearsWillPass.toFixed(2));
  }
}
