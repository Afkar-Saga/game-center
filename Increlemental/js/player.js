var player = {
    energy: 0,
    magic: 0,
    magicGenerators: [],
    lastUpdate: Date.now(),
    stat_points: {
        amount: 0,
        cost: 10
    },
    stats: {
        hp: new Stats("HP", 1),
        mana: new Stats("Mana", 2),
        atk: new Stats("Attack", 3),
        def: new Stats("Defense", 3),
        elemental_power: new Stats("Elemental Power", 10),
        elemental_resistance: new Stats("Elemental Resistance", 15)
    }
}
for (let i = 0; i < 3; i++) {
    let magicGen = {
        name: "Magic Generator " + (i+1),
        amount: 0,
        bought: 0,
        mult: 1,
        cost: Math.pow(Math.pow(3, i + 1), i + 1)
    }
    player.magicGenerators.push(magicGen)
}