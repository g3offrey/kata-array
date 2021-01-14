const { exec } = require("child_process");
const { promisify } = require("util");
const asyncExec = promisify(exec);

describe("e2e tests", () => {
  it("should filter", async () => {
    const result = await asyncExec("node ./src/index.js --filter=ry");
    const resultAsJSObject = JSON.parse(result.stdout);

    expect(resultAsJSObject).toEqual([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
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
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });

  it("should count", async () => {
    const result = await asyncExec("node ./src/index.js --count");
    const resultAsJSObject = JSON.parse(result.stdout);

    expect(resultAsJSObject[0].name).toEqual("Dillauti [5]");
    expect(resultAsJSObject[0].people[0].name).toEqual("Winifred Graham [6]");
  });

  it("should count and filter", async () => {
    const result = await asyncExec("node ./src/index.js --filter=ry --count");
    const resultAsJSObject = JSON.parse(result.stdout);

    expect(resultAsJSObject).toEqual([
      {
        name: "Uzuzozne [1]",
        people: [
          {
            name: "Lillie Abbott [1]",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi [1]",
        people: [
          {
            name: "Anthony Bruno [1]",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });
});
