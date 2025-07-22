// static opp
class Counter {
   static count: number = 0

   static increament() {
        Counter.count = Counter.count + 1
    }
   static decreament() {
        Counter.count = Counter.count - 1
    }
}

const call1 = new Counter()
console.log(Counter.increament());
const call2 = new Counter()
console.log(Counter.decreament());
