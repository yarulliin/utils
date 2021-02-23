function union(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b];
    }
}

function intersection(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        const res = a.filter(el => b.includes(el));
        return res;
    }
}

function difference(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        const res = a.filter(el => !b.includes(el));
        return res;
    }
}

function repeat(arr, count) {
    if (Array.isArray(a)) {
        const res = [];
        arr.forEach(el => {
            for (let i = 0; i < count; i++) {
                res.push(el)
            }
        });
        return res;
    }
}