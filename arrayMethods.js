function union(a, b) {
    return [...new Set([...a, ...b])];
}

function intersection(a, b) {
    const res = a.filter(el => b.includes(el));
    return res;
}

function difference(a, b) {
    const res = a.filter(el => !b.includes(el));
    return res;
}

function repeat(arr, count) {
    return Array.from({length: count}, () => arr).flat()
}