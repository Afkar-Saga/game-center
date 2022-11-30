var fun = 1
var funGenerators = []
var lastUpdate = Date.now()

for (let i = 0; i < 10; i++) {
  let funGen = {
    cost: Math.pow(Math.pow(10, i), i+1),
    bought: 0,
    amount: 0,
    multiplier: 1
  }
  funGenerators.push(funGen)
}

function format(amount) {
  let power = Math.floor(Math.log10(amount))
  let mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}

function buyFunGenerator(i) {
  let g = funGenerators[i - 1]
  if (g.cost > fun) return
  fun -= g.cost
  g.amount++
  g.bought++
  g.multiplier *= 1.25
  g.cost *= 2
}

function updateGUI() {
  document.getElementById("fun-amount").textContent = format(fun)
  for (let i = 0; i < 10; i++) {
    let g = funGenerators[i]
    document.getElementById("gen" + (i + 1)).innerHTML = "Amount: " + format(g.amount) + "<br>Bought: " + g.bought + "<br>Multiplier: " + format(g.multiplier) + "x<br>Cost: " + format(g.cost)
    if (g.cost > fun) document.getElementById("gen" + (i + 1)).classList.add("locked")
    else document.getElementById("gen" + (i + 1)).classList.remove("locked")
  }
}

function funProductionLoop(diff) {
  fun += funGenerators[0].amount * funGenerators[0].multiplier * diff
  for (let i = 1; i < 10; i++) {
    funGenerators[i - 1].amount += funGenerators[i].amount * funGenerators[i].multiplier * diff / 5
  }
}

function funMainLoop() {
  var diff = (Date.now() - lastUpdate) / 1000

  funProductionLoop(diff)
  updateGUI()

  lastUpdate = Date.now()
}

setInterval(funMainLoop, 50)

updateGUI()