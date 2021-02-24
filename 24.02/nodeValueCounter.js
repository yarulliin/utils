let tree = {
    valueNode: 1,
    next: [
        {
            valueNode: 3,
            next: [
                {
                    valueNode: 8,
                    next: null
                }
            ]
        },
        {
            valueNode: 2,
            next: null
        }
    ]
}

let res = 0;

function counter(obj) {
    res += obj.valueNode;

    if (obj.next != null) {
        for (let i = 0; i < obj.next.length; i++) {
            counter(obj.next[i])
        }
    }

    return res;
}