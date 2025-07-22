// static opp
class Counter {
    count: number = 0

    increament() {
        this.count = this.count + 1
    }
    decreament() {
        this.count = this.count - 1
    }
}

const call1 = new Counter()
const call2 = new Counter()
