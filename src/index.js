function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "HH:mm:ss [<small>] A[ </small>]"
    );
  }

  // Brazil
  let brazilElement = document.querySelector("#brazil");
  if (brazilElement) {
    let brazilDateElement = brazilElement.querySelector(".date");
    let brazilTimeElement = brazilElement.querySelector(".time");
    let brazilTime = moment().tz("Brazil/East");

    brazilDateElement.innerHTML = brazilTime.format("MMMM Do YYYY");
    brazilTimeElement.innerHTML = brazilTime.format(
      "HH:mm:ss [<small>] A[ </small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
