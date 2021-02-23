function sum(n) {
    let res = 0;
    let flag = true;

    if (n && n != null && isFinite(n)) {
        res += n;
    }
    else flag = false;

    function calc(m) {
        if (flag && m && m != null && isFinite(m)) {
            res += m;
        }
        else flag = false;
        return calc;
    }

    calc[Symbol.toPrimitive] = () => {
        return res;
    }

    return calc;
}