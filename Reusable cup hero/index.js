const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10]
const reusableCupDiscount = 0.5
const coffeePrice = 3
const dailySavings = document.getElementById("daily-savings")
let savingsPerDayArr = []
const savingsSum = document.getElementById('total-p')
const totalSum = document.getElementById('total-s')
let totalDiscount = 0

savingsPerDayArr = coffeesPerDay.map(getDiscount)

function getDiscount(price) {
  const a = price * reusableCupDiscount
  const b = price * coffeePrice
  return {
    discount: a,
    sum: b,
  }
}

savingsPerDayArr.forEach(function (elem, index) {
  const euros = new Intl.NumberFormat(`fr-FR`, {
    currency: `EUR`,
    style: 'currency',
  }).format(elem.discount);


  const euroSum = new Intl.NumberFormat(`fr-FR`, {
    currency: `EUR`,
    style: 'currency',
  }).format(elem.sum);

  totalDiscount += elem.discount

  const euroDis = new Intl.NumberFormat(`fr-FR`, {
    currency: `EUR`,
    style: 'currency',
  }).format(totalDiscount);

  const euroCost = new Intl.NumberFormat(`fr-FR`, {
    currency: `EUR`,
    style: 'currency',
  }).format(elem.sum);

  dailySavings.innerHTML += `<p>Day ${index + 1} ☕️:  full price  <span class="price"> ${euroSum}</span>, discount: <span class="discount">${euros}</span></p>`
  totalSum.innerHTML = `Your full price without discount: <span class="price">${euroCost}</span>`
  savingsSum.innerHTML = `Your total savings: <span class="discount">${euroDis}</span>`
})



