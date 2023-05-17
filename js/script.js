const inputText = document.querySelector("input[type=text]")
const upperCheck = document.querySelector("#upper")
const numberCheck = document.querySelector("#number")
const symbolCheck = document.querySelector("#symbol")
const indicatorBar = document.querySelector(".indicator")

let valueRange = 4

function generatePassword() {
    let chars = "abcdefghijklmnpqrstuvwxyz"

    const upperCase = "ABCDEFGHIJKLIMNPQRSTUVWXYZ"
    const numbers = "123456789"
    const symbol = "?!@&*()[]"

    if (upperCheck.checked) {
        chars += upperCase
    }
    if (numberCheck.checked) {
        chars += numbers
    }
    if (symbolCheck.checked) {
        chars += symbol
    }

    let password = ""

    for (let i = 0; i < valueRange; i++) {
        const randomN = Math.floor(Math.random() * chars.length)
        password += chars[randomN]
    }

    inputText.value = password

    security()
}

function security() {
    let numberBar = 0
    let upperBar = 0
    let symbolBar = 0

    if (upperCheck.checked) {
        upperBar = 15
    } else {
        upperBar = 0
    }
    if (numberCheck.checked) {
        numberBar = 25
    } else {
        numberBar = 0
    }
    if (symbolCheck.checked) {
        symbolBar = 35
    } else {
        symbolBar = 0
    }

    const percent = Math.round((((valueRange / 20) * 25) + upperBar + numberBar + symbolBar))
    indicatorBar.style.width = `${percent}%`

    if ((percent < 40)) {
        indicatorBar.classList.remove("warning")
        indicatorBar.classList.add("critical")
    } else if (percent >= 40 && percent <= 80) {
        indicatorBar.classList.remove("critical")
        indicatorBar.classList.add("warning")
    } else if (percent > 80) {
        indicatorBar.classList.remove("warning")
        indicatorBar.classList.add("safe")
    }
}

function copy() {
    navigator.clipboard.writeText(inputText.value)
}

const inputRange = document.querySelector("input[type=range]")

inputRange.addEventListener("input", () => {
    valueRange = inputRange.value
    document.querySelector("#value-span").innerHTML = valueRange
    generatePassword()
})

upperCheck.addEventListener("click", generatePassword)
numberCheck.addEventListener("click", generatePassword)
symbolCheck.addEventListener("click", generatePassword)

const copyButtonEl = document.querySelector("button")
copyButtonEl.addEventListener("click", copy)

copyButtonEl.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Copiado',
        showConfirmButton: false,
        timer: 1500
    })
})

const copyIcon = document.querySelector(".fa-copy")
copyIcon.addEventListener("click", copy)

copyIcon.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Copiado',
        showConfirmButton: false,
        timer: 1500
    })
})

const iconArrow = document.querySelector(".fa-arrows-rotate")
iconArrow.addEventListener("click", generatePassword)

generatePassword()