function bindPoly(func, context) {
    return function() {
        return func.apply(context, args);
    }
}

function objCreate(proto) {
    const obj = {};
    obj.__proto__ = proto;
    return obj;
}