let adviceButton = document.querySelector("button")
let idDisplay = document.getElementById("advice-id")
let adviceDisplay = document.getElementById("advice-text")

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
    idDisplay.innerHTML = data.slip.id;
    adviceDisplay.innerHTML = `"${data.slip.advice}"`

    })
    .catch(error => console.error(error))
}
getAdvice()
// idDisplay.innerHTML = ADVICE_ID
// adviceDisplay.innerHTML = ADVICE_TEXT
adviceButton.addEventListener("click", getAdvice)


setInterval(getAdvice,60000)