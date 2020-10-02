import getYearOfHighestPopulation, {
  Person,
} from "./getYearOfHighestPopulation";

describe("getYearOfHighestPopulation", () => {
  it("should return undefined when passed an empty list of people", () => {
    expect(getYearOfHighestPopulation([])).toEqual(undefined);
  });

  it("should return the year that has the most people living at the same time", () => {
    const people: Person[] = [
      { birthYear: 1, deathYear: 5 },
      { birthYear: 5, deathYear: 5 },
      { birthYear: 2, deathYear: 4 },
      { birthYear: 6, deathYear: 9 },
      { birthYear: 3, deathYear: 7 },
      { birthYear: 3, deathYear: 3 },
    ];
    expect(getYearOfHighestPopulation(people)).toEqual(3);
  });

  it("should handle ties by choosing the earliest year with the most living people", () => {
    // Could technically say year 3 or 4
    const people: Person[] = [
      { birthYear: 1, deathYear: 5 },
      { birthYear: 5, deathYear: 5 },
      { birthYear: 2, deathYear: 4 },
      { birthYear: 6, deathYear: 9 },
      { birthYear: 3, deathYear: 7 },
    ];
    expect(getYearOfHighestPopulation(people)).toEqual(3);
  });
});
