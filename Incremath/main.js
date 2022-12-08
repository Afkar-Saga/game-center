var number = 0
var increaseAmount = {
  NpC: 1,
  cost: 10
}
var clicksPerSecond = {
  CpS: 0,
  cost: 100
}

function format(amount) {
  let power = Math.floor(Math.log10(amount))
  let mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(1)
  return mantissa.toFixed(2) + "e" + power
}

function increaseNumber() {
  number += increaseAmount.NpC
}

function increaseNPC() {
  let npc = increaseAmount
  if (npc.cost > number) return
  number -= npc.cost
  npc.NpC += 0.1
  npc.cost = Math.pow(Math.pow(npc.NpC, 2), 1.3)*10
}

function increaseCPS() {
  let cps = clicksPerSecond
  if (cps.cost > number) return
  number -= cps.cost
  cps.CpS++
  cps.cost = Math.pow(cps.cost, 1.1)
}

function updateGUI() {
  let npc = increaseAmount
  let cps = clicksPerSecond
  document.getElementById("number").textContent = format(number)
  document.getElementById("increaseNPC").innerHTML = "NpC<br>Number per Clicks: " + format(npc.NpC) + "<br>Cost: " + format(npc.cost)
  document.getElementById("increaseCPS").innerHTML = "CpS<br>Clicks per Second: " + cps.CpS + "<br>Cost: " + format(cps.cost)
}

function numberProduction() {
  let cps = clicksPerSecond
  number += cps.CpS / 20
  updateGUI()
}

setInterval(numberProduction, 50)