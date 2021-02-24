function Person(name) {
    if (typeof name == 'string') {
        this.name = name;
    }

    this.getName = function() {
        return this.name;
    }
}

function Man(name, facialHair) {
    Person.call(this, name);

    if (typeof facialHair == 'boolean') {
        this.facialHair = facialHair;
    }

    this.getFacialHair = function() {
        return this.facialHair;
    }
}