function filterByType(type, ...arr){
    return arr.filter(e => typeof e === type)
}
let obj = filterByType ('string', 10, 20, 'a', 'b', true, false);
alert(JSON.stringify(obj));