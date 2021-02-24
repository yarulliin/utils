class Person {
    name;

    constructor(name) {
        if (typeof name == 'string') {
            this.name = name;
        }
    }

    getName() {
        return this.name;
    }
}

class Man extends Person {
    facialHair;

    constructor(name, facialHair) {
        super(name);
        if (typeof facialHair == 'boolean') {
            this.facialHair = facialHair;
        }
    }

    getFacialHair() {
        return this.facialHair;
    }
}