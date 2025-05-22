// Hardcoded calender
document.querySelector("#last-week").addEventListener("click", tester);

function tester() {
    console.log("sidste uge");
    document.querySelector("#prev").classList = "calender-container-prev";
    document.querySelector("#current").classList = "calender-container cal-hide"
}

document.querySelector("#next-week").addEventListener("click", tester3);

function tester3() {
    console.log("næste uge");
    document.querySelector("#current").classList = "calender-container cal-hide";
    document.querySelector("#next").classList = "calender-container-next";
}

document.querySelector("#prev-week-next").addEventListener("click", tester2);

function tester2() {
    console.log("sidste uge - frem");
    document.querySelector("#current").classList = "calender-container";
    document.querySelector("#prev").classList = "calender-container-prev cal-hide";
}

document.querySelector("#next-week-prev").addEventListener("click", tester4);

function tester4() {
    console.log("næste uge - tilbage")
    document.querySelector("#next").classList = "calender-container-next cal-hide";
    document.querySelector("#current").classList = "calender-container"
}