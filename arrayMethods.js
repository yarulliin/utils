function union(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...new Set([...a, ...b])];
    }
}

function intersection(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        let res = a.filter(el => b.includes(el));
        return res;
    }
}

function difference(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        let res = a.filter(el => !b.includes(el));
        return res;
    }
}

function repeat(arr, count) {
    if (Array.isArray(a)) {
        let res = [];
        arr.forEach(el => {
            for (let i = 0; i < count; i++) {
                res.push(el)
            }
        });
        return res;
    }
}