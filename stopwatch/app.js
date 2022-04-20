const minute = document.getElementById("minute");
const second = document.getElementById("second");
//selected inputs
const selectedMn = document.getElementById("selected-mn");
const selectedSc = document.getElementById("selected-sc");

//Buttons
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

var intervalid;

selectedMn.addEventListener("change", () => {
    minute.textContent = selectedMn.value;
})

selectedSc.addEventListener("change", () => {
    second.textContent = selectedSc.value < 10 ? "0" + selectedSc.value : selectedSc.value;
})

startButton.addEventListener("click", startTimer);

resetButton.addEventListener("click", () => {
    clearInterval(intervalid);
    intervalid = null;
    selectedMn.value = "00";
    selectedSc.value = "00";
    minute.textContent = "00";
    second.textContent = "00";


})

function startTimer() {
    let mn = minute.textContent;
    let sc = second.textContent;
    if ((mn == 00 && sc == 00 || (mn == 0 && sc == 0))){
        window.alert("Time's up!");
    }
    else {
        intervalid = setInterval(() => {
            sc--;
            sc = sc < 10 ? "0" + sc : sc;
            if (sc == "0-1") {
                mn--;
                sc = 59;
            }
            if (mn == 00 && sc == 00 || (mn == 0 && sc == 0)) {
                clearInterval(intervalid);
                window.alert("Time's up!");
                selectedMn.value = "00";
                selectedSc.value = "00";
            }
            minute.textContent = mn;
            second.textContent = sc;

        }, 1000);

    }
}