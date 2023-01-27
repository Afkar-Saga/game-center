function gameLoop(that) {
    let diff = (Date.now() - that.player.lastUpdate)/1000
    that.player.magic += that.player.magicGenerators[0].amount * that.player.magicGenerators[0].mult * diff
    for(let i = 1; i < 3; i++) {
        that.player.magicGenerators[i-1].amount += that.player.magicGenerators[i].amount * that.player.magicGenerators[i].mult * diff / 3
    }
    

    that.player.lastUpdate = Date.now()
}