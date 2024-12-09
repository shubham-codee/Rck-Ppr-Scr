let choices = ["stone", "paper", "scissor"];
let paused = false;


let wholeDiv = document.querySelector(".row");
wholeDiv.addEventListener("click", (event) => {
    paused = true;
    console.dir(event.target.parentElement);
    id = event.target.parentElement.getAttribute("id");
    console.log(id);
    let user = -1;
    user = choices.indexOf(id) + 1;
    console.log("user: ", id);
    ai = aiChoice();
    console.log("AI: ", choices[ai - 1])
    let diff = (user - ai + 3) % 3;
    console.log("difference: ", diff);
    let winner = null;
    if (diff == 0) winner = "Tie";
    else if (diff == 1) winner = "You Won";
    else if (diff == 2) winner = "AI Won";
    console.log("Result: ", winner);

    let whole = document.querySelector("body");
    let full = document.querySelector(".extreme");
    if (winner.toLowerCase() == "tie") {
        setTimeout(() => {
            whole.style.backgroundColor = "grey";
            full.style.display = "none";
        }, 1);
        setTimeout(() => {
            whole.style.backgroundColor = "white";
            full.style.display = "block";
        }, 150);
    } else if (winner.toLowerCase() == "you won") {
        setTimeout(() => {
            whole.style.backgroundColor = "lightgreen";
            full.style.display = "none";
        }, 1);
        setTimeout(() => {
            whole.style.backgroundColor = "white";
            full.style.display = "block";
        }, 150);
    } else if (winner.toLowerCase() == "ai won") {
        setTimeout(() => {
            whole.style.backgroundColor = "red";
            full.style.display = "none";
        }, 1);
        setTimeout(() => {
            whole.style.backgroundColor = "white";
            full.style.display = "block";
        }, 150);
    }

    let texts = document.querySelectorAll(".textual");
    for (text of texts) {
        text.classList.add("text-center", "mt-0", "mb-0");
    }

    let text1 = document.querySelector("#youText");
    text1.classList.add("text");
    text1.innerHTML = '<i class="fa-solid fa-arrow-down-long"></i>&nbsp;You&nbsp;<i class="fa-solid fa-arrow-down-long"></i>';

    let text2 = document.querySelector("#aiText");
    text2.classList.add("text");
    text2.innerHTML = '<i class="fa-solid fa-arrow-down-long"></i>&nbsp;AI&nbsp;<i class="fa-solid fa-arrow-down-long"></i>';

    let you = document.querySelector("#you");
    you.setAttribute("src", `${id}.png`)

    let vs = document.querySelector("#vs");
    vs.setAttribute("src", "versus.png");

    let aiImgChoice = choices[ai - 1];
    let aiImg = document.querySelector("#aiImg");
    aiImg.setAttribute("src", `${aiImgChoice}.png`)

    let res = document.querySelector("#res");
    res.classList.add("text", "resVisual", "resText", "mt-3")
    res.innerText = winner;
})


aiChoice = function () {
    let random = Math.ceil(Math.random() * 3);
    console.log("random: ", random);
    return random;
}

