var player = {
  energy: 0,
  magic: 0,
  hp: {
    amount: 10,
    cost: 10
  },
  mana: {
    amount: 10,
    cost: 30
  },
  atk: {
    amount: 1,
    cost: 50
  },
  def: {
    amount: 1,
    cost: 50
  },
  elemental_power: {
    amount: 0,
    cost: 1000
  },
  elemental_resistance: {
    amount: 0,
    cost: 200
  }
}
var basicEnemy1 = {
  hp: 5,
  mana: 2,
  atk: 1,
  def: 1
}
var magicGenerators = []
for (let i = 0; i < 3; i++) {
  let magicGen = {
    amount: 0,
    cost: Math.pow(10, i+1)
  }
  magicGenerators.push(magicGen)
}

function format(amount) {
  let power = Math.floor(Math.log10(amount))
  let mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(0)
  return mantissa.toFixed(2) + "e" + power
}

function increaseEnergy() {
  player.energy++
}
function buyMagicGen(i) {
  let mg = magicGenerators[i - 1]
  if (mg.cost > player.energy) return
  player.energy -= mg.cost
  mg.amount++
  mg.cost *= Math.pow(10, i)
}
function buyHPUpgrade() {
  let p = player
  if (p.hp.cost > p.magic) return
  p.hp.amount++
  p.magic -= p.hp.cost
  p.hp.cost *= 10
  document.getElementById("hp").innerHTML = "HP" + "<br>Cost: " + format(p.hp.cost)
}

function updateGUI() {
  let p = player
  document.getElementById("stats").innerHTML = "HP: " + p.hp.amount + "<br>Mana: " + p.mana.amount + "<br>Attack: " + p.atk.amount + "<br>Defense: " + p.def.amount + "<br>Elemental Power: " + p.elemental_power.amount + "<br>Elemental Resistance: " + p.elemental_resistance.amount
  document.getElementById("energyAmount").textContent = format(p.energy)
  document.getElementById("magicAmount").textContent = format(p.magic)
  for (let i = 0; i < 3; i++) {
    let mg = magicGenerators[i]
    document.getElementById("gen" + (i+1)).innerHTML = "Magic Generators " + (i+1) + "<br>Amount:" + format(mg.amount) + "<br>Cost: " + format(mg.cost)
  }
}
function magicProduction() {
  let p = player
  p.magic += magicGenerators[0].amount / 20
  for (let i = 1; i < 3; i++) {
    magicGenerators[i - 1].amount += magicGenerators[i].amount / 20
  }
  updateGUI()
}

setInterval(magicProduction, 50)