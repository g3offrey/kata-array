const { filterCountriesPeopleByAnimalsName } = require("./filter");

describe("filterCountriesPeopleByAnimalsName", () => {
  const countriesData = [
    {
      name: "Uzuzozne",
      people: [
        {
          name: "Tom Jerry",
          animals: [
            {
              name: "Pluto",
            },
            {
              name: "Mickey",
            },
          ],
        },
        {
          name: "Lillie Abbott",
          animals: [
            {
              name: "Dory",
            },
            {
              name: "Nemo",
            },
          ],
        },
      ],
    },
    {
      name: "Satanwi",
      people: [
        {
          name: "Anthony Bruno",
          animals: [
            {
              name: "Spongebob",
            },
          ],
        },
      ],
    },
  ];

  function findByName(data, name) {
    return data.find((item) => item.name === name);
  }

  it("should return for each country people with their animals that match pattern", () => {
    const result = filterCountriesPeopleByAnimalsName(countriesData, "ry");

    expect(result).toEqual([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "Dory",
              },
            ],
          },
        ],
      },
    ]);
  });

  it("should remove countries that don't have people with an animal that match pattern", () => {
    const result = filterCountriesPeopleByAnimalsName(countriesData, "ry");

    expect(findByName(result, "Satanwi")).toBeUndefined();
  });

  it("should remove people that don't have an animal that match pattern", () => {
    const result = filterCountriesPeopleByAnimalsName(countriesData, "ry");

    expect(findByName(result[0].people, "Tom Jerry")).toBeUndefined();
  });

  it("should keep people that have an animal that match pattern", () => {
    const result = filterCountriesPeopleByAnimalsName(countriesData, "ry");

    expect(findByName(result[0].people, "Lillie Abbott")).not.toBeUndefined();
  });

  it("should only keep animals that match pattern", () => {
    const result = filterCountriesPeopleByAnimalsName(countriesData, "ry");

    const lillieAbbott = findByName(result[0].people, "Lillie Abbott");
    expect(lillieAbbott.animals).toEqual([{ name: "Dory" }]);
  });

  it("should return null if their is no match", () => {
    const result = filterCountriesPeopleByAnimalsName(countriesData, "zz");

    expect(result).toBeNull();
  });
});
