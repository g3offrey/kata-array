const { appendCounterToName } = require("./countering/counter");
const { filterCountriesPeopleByAnimalsName } = require("./filtering/filter");
const { data: countriesData } = require("./data");

const [, , ...args] = process.argv;

function hasArgument(argument) {
  return args.some((arg) => arg.includes(argument));
}

function getArgumentsValue(argument) {
  const arg = args.find((arg) => arg.includes(argument));

  const [, value] = new RegExp(`${argument}=(.*)`).exec(arg);

  return value;
}

function echoResult(result) {
  console.log(JSON.stringify(result, null, 2));
}

let finalResult = countriesData;

if (hasArgument("--filter")) {
  const filterPattern = getArgumentsValue("--filter");
  finalResult = filterCountriesPeopleByAnimalsName(finalResult, filterPattern);
}

if (hasArgument("--count")) {
  finalResult = appendCounterToName(finalResult);
}

echoResult(finalResult);
