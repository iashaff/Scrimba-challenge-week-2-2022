const body = document.body
const formSubmit = document.getElementById("form-submit")
const checkboxes = document.getElementsByClassName("checkbox")
const checkboxesContainer = document.getElementById("checkboxes-container")
const form = document.getElementById("form")
const headerEl = document.getElementById("header")


checkboxesContainer.addEventListener('input', function () {
    isPledgeChecked()
})


function isPledgeChecked() {
    if (Array.from(checkboxes).some(elem => elem.checked)) {
        formSubmit.removeAttribute("disabled")
    } else {
        formSubmit.setAttribute("disabled", "")
    }
}
isPledgeChecked()


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    form.style.display = "none"
    headerEl.textContent = `Thanks, ${data.name} for your climate pledge!💕`
    headerEl.classList.add('submited-message')
})
