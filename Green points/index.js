const pointsEl = document.getElementById("points-p")
const btnsContainer = document.getElementById("btns-container")
const btnNewDay = document.getElementById("btn-new-day")

let point = 0

const actionsArr = [
  {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false
  },
  {
    name: "useRecycableMaterials",
    emoji: "♻️",
    text: "Use recyclable materials",
    good: true
  },
  {
    name: "threwTrashAway",
    emoji: "🏭",
    text: "threw trash away",
    good: false
  }
]

function renderBtns() {
  for (let i = 0; i < actionsArr.length; i++) {
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btnsContainer.append(btn)
    btn.innerHTML += `${actionsArr[i].emoji}${actionsArr[i].text}`
    btn.addEventListener('click', function () {
      if (actionsArr[i].good) {
        btn.classList.add('btn-good')
        point += 5
        pointsEl.textContent = `${point} points today!`
      } else {
        btn.classList.add('btn-bad')
        point -= 5
        pointsEl.textContent = `${point} points today!`
      }
      if (point >= 0) {
        document.body.style.backgroundColor = `var(--turquoise-green)`
      } else document.body.style.backgroundColor = `var(--red)`
    })

  }

}

renderBtns()

btnNewDay.addEventListener('click', function () {
  const btns = document.querySelectorAll('.btn')
  btns.forEach(elem => {
    elem.classList.remove("btn-good", "btn-bad")
  })
  point = 0
  pointsEl.textContent = `${point} points today!`
  document.body.style.backgroundColor = `var(--turquoise-green)`
})



