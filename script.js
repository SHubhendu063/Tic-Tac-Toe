let boxes = document.querySelectorAll(".items");
let container = document.querySelector(".container");
let reFresh_btn = document.querySelector(".refresh-btn");
let winContainer = document.querySelector(".wincontainer");
let newHtmlEle = document.createElement('h1');
winContainer.appendChild(newHtmlEle);
let val = false;
let arrOfBoxes = Array.from(boxes);
arrOfBoxes.forEach((ele) => {
    ele.addEventListener("click", (event) => {
        if (val == false) {
            event.target.textContent = "X";
            val = true;
        }
        else if (val == true) {
            event.target.textContent = "O";
            val = false;
        }
        event.target.disabled = true;
        checkWinner();
    });
});
reFresh_btn.addEventListener("click", () => {
    boxes.forEach((ele) => {
        ele.textContent = " ";
        newHtmlEle.textContent = "";
        ele.disabled = false;
        val = false;

    })
});
let winPatten = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];

let checkWinner = () => {
    winPatten.forEach((ele) => {

        let val1item = arrOfBoxes[ele[0]].innerText;
        let val2item = arrOfBoxes[ele[1]].innerText;
        let val3item = arrOfBoxes[ele[2]].innerText;

        if (val1item != "" && val2item != "" && val3item != "") {

            if (val1item == val2item && val2item == val3item) {
                newHtmlEle.textContent = val1item + " is winner";

                boxes.forEach((ele) => {
                    ele.disabled = true;
                })
            }
        }

    })
};

