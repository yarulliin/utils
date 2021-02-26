function Person(name) {
    if (typeof name == 'string') {
        this.name = name;
    }
}

Person.prototype.getName = function() {
    return this.name;
}

function Man(name, facialHair) {
    Person.call(this, name);

    if (typeof facialHair == 'boolean') {
        this.facialHair = facialHair;
    }
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

Man.prototype.getFacialHair = function() {
    return this.facialHair;
}