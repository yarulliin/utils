const obj = {
    dec() {
        if (typeof this.num == 'number') {
            this.num--;
            return this;
        }
    },

    add() {
        if (typeof this.num == 'number') {
            this.num++;
            return this;
        }
    }
}

const number = {
    num: 10,
    __proto__: obj
}