class Stats {
    constructor(name, cost) {
        this.name = name
        this.amount = 0
        this.cost = cost
    }

    get canUpgrade() {
        return this.cost <= player.stat_points.amount
    }

    upgrade() {
        if (!this.canUpgrade) return
        player.stat_points.amount -= this.cost
        this.amount++
        this.cost *= 3 + (this.amount*0.3)
    }
}