function createObj(str) {
    if (typeof str == 'string') {        
        const res = {};
        const set = [...new Set(str.split('.'))];

        if (set.length == 1) {
            res[set] = null;
        }

        if (set.length > 1) {
            set.forEach((el, index) => {
                if (index < set.length - 1) {
                    res[el] = {};
                }
                else res[el] = null;
            })
        } 
        
        return res;
    }
}