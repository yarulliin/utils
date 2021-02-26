function bindPoly(func, context) {
    return function() {
        return func.apply(context, args);
    }
}

function objCreate(proto) {
    function Text() {
        obj = {};
        obj.__proto__ = proto;
        return obj;
    }

    return new Text();
}