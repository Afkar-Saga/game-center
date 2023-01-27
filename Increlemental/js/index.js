const { createApp } = Vue

createApp({
    data() {
        return {
            player: player,
            format: format
        }
    },
    methods: {
        format(amount) {
            format(amount)
        },
        increaseEnergy() {
            this.player.energy++
        },
        buyMagicGenerators(i) {
            let g = this.player.magicGenerators[i]
            if (g.cost > this.player.energy) return
            this.player.energy -= g.cost
            this.player.magicGenerators[i].cost *= 3 + i
            this.player.magicGenerators[i].amount++
            this.player.magicGenerators[i].bought++
            if (player.magicGenerators[i].amount % 3 == 0) {
                    player.magicGenerators[i].mult *= 3
            }
        },
        gameLoop() {
            gameLoop(this)
        }
    },
    mounted() {
        setInterval(this.gameLoop, 50)
    }
}).mount('#app')