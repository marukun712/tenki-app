const readline = require("readline");
const asciify = require("asciify");

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readInterface.question("都道府県IDを入力してください。 >", (inputString) => {
  readInterface.close();
  console.log(`入力されたID [${inputString}]`);
  id = inputString;
  asciify("result", { font: "larry3d" }, function (err, aa) {
    console.log(aa);
  });

async function getdata(){
var tenki = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${id}`)
var json = await tenki.json();
var today = await json.forecasts[0]
var tomorrow = await json.forecasts[1]
var dayaftertomorrow = await json.forecasts[2]
var description = json.description
await console.log(
    "---------------------------------------------------------------------"
  );
  await console.log(description.text)
  await console.log("　今日の天気: " + today.telop);
  await console.log("　明日の天気: " + tomorrow.telop);
  await console.log("　明後日の天気: " + dayaftertomorrow.telop);
  await console.log(
    "---------------------------------------------------------------------"
  );
}
getdata();
});
