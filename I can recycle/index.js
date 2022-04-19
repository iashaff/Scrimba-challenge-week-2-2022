const recycleBtn = document.getElementById("recycle-btn")
recycleBtn.addEventListener("click", recycle)
const recycleSelect = document.getElementById("recycle-select")
const recycleBin = document.getElementById("recycle-bin")
const infoParagraph = document.getElementById("info-paragraph")
const emptyBtn = document.getElementById("empty-bin")
emptyBtn.addEventListener("click", emptyTheBin)

let count = 0;
let limit = 18

function recycle() {
    if (count < limit) {
        let newEl = document.createElement("p")
        newEl.textContent = recycleSelect.value
        newEl.classList.add("empty-bin")
        recycleBin.append(newEl)
        count++
    } else if (count => limit) {
        infoParagraph.style.color = "red"
        infoParagraph.textContent = "Ooops! Your bin is full"
        emptyBtn.style.display = "block"
    }
}


function emptyTheBin() {
    count = 0;
    recycleSelect.value = ""
    recycleBin.textContent = ""
    infoParagraph.textContent = "Recycled items will appear above ⬆️"
    infoParagraph.style.color = "white"
    emptyBtn.style.display = "none"
}

