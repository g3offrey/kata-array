function appendAnimalsCountToPeopleNames(people) {
  return people.map((person) => {
    return {
      ...person,
      name: `${person.name} [${person.animals.length}]`,
    };
  });
}

function appendCounterToName(countries) {
  return countries.map((country) => {
    return {
      ...country,
      name: `${country.name} [${country.people.length}]`,
      people: appendAnimalsCountToPeopleNames(country.people),
    };
  });
}

module.exports = {
  appendCounterToName,
};
