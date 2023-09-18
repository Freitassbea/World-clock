function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "HH:mm:ss [<small>] A[ </small>]"
  );

  // Brazil
  let brazilElement = document.querySelector("#brazil");
  let brazilDateElement = brazilElement.querySelector(".date");
  let brazilTimeElement = brazilElement.querySelector(".time");
  let brazilTime = moment().tz("Brazil/East");

  brazilDateElement.innerHTML = brazilTime.format("MMMM Do YYYY");
  brazilTimeElement.innerHTML = brazilTime.format(
    "HH:mm:ss [<small>] A[ </small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
