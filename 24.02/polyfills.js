function bindPoly(func, context) {
    return function() {
        return func.apply(context, args);
    }
}