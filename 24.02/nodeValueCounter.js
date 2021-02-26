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

function counter(obj) {
    let res = 0;

    function deep(obj) {
        res += obj.valueNode;

        if (obj.next != null) {
            obj.next.forEach(el => {
                deep(el);
            })
        }

        return res;
    }

    return deep(obj);
}