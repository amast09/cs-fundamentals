// Problem:
// Given a list of people with their birth and death years, find the year with
// the highest population

export interface Person {
  readonly birthYear: number;
  readonly deathYear: number;
}

interface StringMap {
  [n: string]: number | undefined;
}

interface YearWithPopulation {
  readonly year: number;
  readonly population: number;
}

interface DeltaWithHighest {
  readonly currentDelta: number;
  readonly yearWithPopulation: YearWithPopulation;
}

/*
  Naive approach:
    - keep hash of year => person living
    - iterate through person list and increment the hash for every year they were alive
    - return the entry with the highest number from hash
   O(n) = O((numPeople * numYearsAlive) + numYearsPeopleWereAliveIn)
*/
const naiveApproach = (persons: Person[]): number | undefined => {
  const yearToPopulationMap: StringMap = persons.reduce<StringMap>(
    (acc, person) => {
      const { birthYear, deathYear } = person;

      let currentYear = birthYear;
      while (currentYear <= deathYear) {
        const currentPopulationForCurrentYear = acc[currentYear] || 0;
        acc[currentYear] = currentPopulationForCurrentYear + 1;
        currentYear = currentYear + 1;
      }

      return acc;
    },
    {} as StringMap
  );

  const result = Object.entries(yearToPopulationMap).reduce<
    YearWithPopulation | undefined
  >((acc, entry) => {
    const [year, maybePopulation] = entry;

    if (maybePopulation !== undefined) {
      if (acc === undefined || maybePopulation > acc.population) {
        return { year: Number.parseInt(year), population: maybePopulation };
      }
    }

    return acc;
  }, undefined);

  return result ? result.year : undefined;
};

naiveApproach([]);

/*
  Little Less Naive approach:
    - iterate through person list and look at each birth year
    - iterate through person list again counting how many people were alive in year
    - keeping track of highest population, return the year
   O(n) = O(numPeople^2)
*/
const littleLessNaiveApproach = (persons: Person[]): number | undefined => {
  const result = persons.reduce<YearWithPopulation | undefined>(
    (yearWithHighestPopulation, person) => {
      const { birthYear } = person;

      const populationForYear = persons.reduce<number>(
        (numberPeopleLivingInYear, p) => {
          if (p.birthYear <= birthYear && p.deathYear >= birthYear) {
            return numberPeopleLivingInYear + 1;
          }
          return numberPeopleLivingInYear;
        },
        0
      );

      if (
        yearWithHighestPopulation === undefined ||
        populationForYear > yearWithHighestPopulation.population ||
        (populationForYear === yearWithHighestPopulation.population &&
          birthYear < yearWithHighestPopulation.year)
      ) {
        return { year: birthYear, population: populationForYear };
      } else {
        return yearWithHighestPopulation;
      }
    },
    undefined
  );

  return result ? result.year : undefined;
};

littleLessNaiveApproach([]);

/*
  Correct approach:
    - keep hash of year => person living
    - iterate through person list and increment the hash for every year they were alive
    - return the entry with the highest number from hash
   O(n) = O(numPeople  + uniqueBirthdays)
*/
const howManyApproachesCouldThereBe = (
  persons: Person[]
): number | undefined => {
  const birthYearDeltas = persons.reduce<StringMap>((acc, person) => {
    const currentBirthYearDelta = acc[person.birthYear] ?? 0;
    acc[person.birthYear] = currentBirthYearDelta + 1;
    const currentDeathYearDelta = acc[person.deathYear] ?? 0;
    acc[person.deathYear] = currentDeathYearDelta - 1;
    return acc;
  }, {} as StringMap);

  const deltaWithHighest = Object.entries(birthYearDeltas).reduce<
    DeltaWithHighest | undefined
  >((acc, entry) => {
    const [stringYear, delta = 0] = entry;
    const year = Number.parseInt(stringYear);

    if (acc === undefined) {
      const yearWithPopulation: YearWithPopulation = {
        year,
        population: delta,
      };
      const currentDelta: number = delta;

      return { currentDelta, yearWithPopulation };
    } else {
      const { currentDelta, yearWithPopulation } = acc;
      const populationForYear = currentDelta + delta;

      if (
        populationForYear > yearWithPopulation.population ||
        (populationForYear === yearWithPopulation.population &&
          year < yearWithPopulation.year)
      ) {
        const yearWithPopulation: YearWithPopulation = {
          year,
          population: populationForYear,
        };
        const currentDelta: number = populationForYear;

        return { currentDelta, yearWithPopulation };
      } else {
        return {
          currentDelta: populationForYear,
          yearWithPopulation: acc.yearWithPopulation,
        };
      }
    }
  }, undefined);

  return deltaWithHighest
    ? deltaWithHighest.yearWithPopulation.year
    : undefined;
};

export default howManyApproachesCouldThereBe;
