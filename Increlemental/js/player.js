var player = {
    energy: 0,
    magic: 0,
    magicGenerators: [],
    lastUpdate: Date.now(),
    hp: {
        amount: 10,
        cost: 10,
    },
    mana: {
        amount: 10,
        cost: 30,
    },
    atk: {
        amount: 1,
        cost: 50,
    },
    def: {
        amount: 1,
        cost: 50,
    },
    elemental_power: {
        amount: 0,
        cost: 1000,
    },
    elemental_resistance: {
        amount: 0,
        cost: 200,
    },
}
for (let i = 0; i < 3; i++) {
    let magicGen = {
        name: "Magic Generator " + (i+1),
        amount: 0,
        bought: 0,
        mult: 1,
        cost: Math.pow(3, i + 1)
    }
    player.magicGenerators.push(magicGen)
}