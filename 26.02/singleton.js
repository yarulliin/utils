class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
    }
}

const m = new Singleton();
const n = new Singleton();

console.log(m === n);
console.log(m, n);