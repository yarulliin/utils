function bindPoly(func, context) {
    return function(args) {
        return func.apply(context, args);
    }
}