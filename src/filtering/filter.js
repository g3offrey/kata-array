function getAnimalsThatMatchPattern(person, pattern) {
  return person.animals.filter((animal) => animal.name.includes(pattern));
}

function getPeopleWithAnimalsMatching(people, pattern) {
  return people.reduce((matches, person) => {
    const animalsThatMatchPattern = getAnimalsThatMatchPattern(person, pattern);

    if (animalsThatMatchPattern.length === 0) {
      return matches;
    }

    return [
      ...matches,
      {
        ...person,
        animals: animalsThatMatchPattern,
      },
    ];
  }, []);
}

function getCountryWithPeoplesAnimalMatching(countries, pattern) {
  return countries.reduce((matches, country) => {
    const peopleWithMatch = getPeopleWithAnimalsMatching(
      country.people,
      pattern
    );

    if (peopleWithMatch.length === 0) {
      return matches;
    }

    return [
      ...matches,
      {
        ...country,
        people: peopleWithMatch,
      },
    ];
  }, []);
}

function filterCountriesPeopleByAnimalsName(countries, pattern) {
  const countriesWithMatch = getCountryWithPeoplesAnimalMatching(
    countries,
    pattern
  );

  if (countriesWithMatch.length === 0) {
    return null;
  }

  return countriesWithMatch;
}

module.exports = {
  filterCountriesPeopleByAnimalsName,
};
