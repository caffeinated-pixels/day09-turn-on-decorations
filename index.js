const house = document.getElementById('house')
const message = document.getElementById('message')
const decorator = document.getElementById('decorator')
decorator.addEventListener('click', deckTheHalls)

function deckTheHalls(e) {
  if (e.target.checked) {
    house.textContent = '☃️🏡🎄'
    message.style.visibility = 'visible'
  } else {
    house.textContent = '🏡'
    message.style.visibility = 'hidden'
  }
}

// Task:
// Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled.

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
