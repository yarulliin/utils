const arr = [8, 3, 1, 50, 10];

const res = arr.reduce((val, el) => {
    return val + el;
}, 0)

const zero = arr.findIndex(el => el === 0)

const res2 = arr.reduce((val, el, index) => {
   if (zero === -1 || index < zero) {
       val += el;
   }

   return val;
}, 0)

const res3 = arr.reduce((val, el) => {
    if (val.sum < 10) {
        val.sum += el;
        val.count += 1; 
    }
    
    return val;
}, {count: 0, sum: 0})