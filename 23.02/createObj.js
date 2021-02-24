function createObj(str) {
    const keys = str.split('.');
    const res = {};

    keys.reduce((val, el, index) => {
        if (index < keys.length - 1) {
            val[el] = {};
        }
        else val[el] = null;

        return val[el];
    }, res)

    return res;
}