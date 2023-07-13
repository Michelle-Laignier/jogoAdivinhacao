const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const tryButton = document.querySelector("#try-button")
const playAgainButton = document.querySelector("#screen2-button")
const warningP = document.querySelector(".warning")
let randomNumber = Math.floor(Math.random() * 10)
let xAttempts = 1

tryButton.addEventListener("click", tryClick)
playAgainButton.addEventListener("click", playAgain)
document.addEventListener("keydown", (event) => {
    if (event.key == "Enter" && screen1.classList.contains("hide")) {
        playAgain()
    }
})

function tryClick (event) {
    event.preventDefault()

    let tryInput = document.querySelector("#try")

    if (tryInput.value >= 0 && tryInput.value <= 10) {
        warningP.classList.add("hide")
        if (tryInput.value == randomNumber) {
            changeScreen()
            if (xAttempts == 1) {
            screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} tentativa`
            } else {
            screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} tentativas`
            }
        }
    } else {
        warningP.classList.remove("hide")
    }

    if (tryInput.value == "") {
        warningP.classList.remove("hide")
        return
    }
    tryInput.value = ""
    xAttempts++
}

function playAgain () {
    changeScreen()
    xAttempts = 1
    randomNumber = Math.floor(Math.random() * 10)
}

function changeScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}