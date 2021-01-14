const { appendCounterToName } = require("./counter");

describe("appendCounterToName", () => {
  const countriesData = [
    {
      name: "Dillauti",
      people: [
        {
          name: "Winifred Graham",
          animals: [
            { name: "Anoa" },
            { name: "Duck" },
            { name: "Narwhal" },
            { name: "Badger" },
            { name: "Cobra" },
            { name: "Crow" },
          ],
        },
        {
          name: "Blanche Viciani",
          animals: [
            { name: "Barbet" },
            { name: "Rhea" },
            { name: "Snakes" },
            { name: "Antelope" },
            { name: "Echidna" },
            { name: "Crow" },
            { name: "Guinea Fowl" },
            { name: "Deer Mouse" },
          ],
        },
      ],
    },
  ];

  it("should append the counter of people at the end of country name", () => {
    const result = appendCounterToName(countriesData);

    expect(result[0].name).toBe("Dillauti [2]");
  });

  it("should append the counter of animals at the end of each person name", () => {
    const result = appendCounterToName(countriesData);

    expect(result[0].people[0].name).toBe("Winifred Graham [6]");
    expect(result[0].people[1].name).toBe("Blanche Viciani [8]");
  });
});
