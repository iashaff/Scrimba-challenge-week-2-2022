const poem = document.getElementById('poem')
// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
  color1: "green",
  color2: "blue",
  planet: "Earth",
  adjective: "clean",
  emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
  sentence: function (var1, var2, var3, var4) {
    return `Forests are <span style = "color:green"> ${var1}</span>, oceans are <span style="color:purple">${var2}</span>. Keep the <span style="color:blue">${var3}</span> ${obj.emojis[1]} <span style="color:orange">${var4}</span>, for me and for you`
  }
};

poem.innerHTML = obj.sentence(obj.color1, "purple", obj.planet, obj.adjective)
poem.style.opacity = "0.5"
const body = document.querySelector('body')
body.style.backgroundImage = "url(green-field.jpg)"
body.style.backgroundPosition = "center"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"




