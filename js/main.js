const timeFrame = document.getElementById("frame")
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const hours = document.getElementById("hours");
const last = document.getElementById("dinamic");
 

timeFrame[1].classList.add("active");
getData("weekly");

function handleClick(index, period) {
    timeFrame.forEach((event) => event.classList.remove("active"));
    timeFrame[index].classList.add("active");
    getData(period);
}

timeframe[0].addEventListener("click", () => handleClick(0, "daily"));
timeframe[1].addEventListener("click", () => handleClick(1, "weekly"));
timeframe[2].addEventListener("click", () => handleClick(2, "monthly"));


function getData(timeframe) {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let outHours = data[i].timeframes[timeframe].current;
                let outLast = data[i].timeframes[timeframe].last;
                hours[i].innerHTML = outHours;
                last[i].innerHTML = outLast;
            }
        });
}