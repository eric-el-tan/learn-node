function stringInclude() {
    
    const strArr = ['a', 'b', 'c'];
    const found = strArr.includes('b');
    console.log(`found = ${found}`);
    return true;
}

function stringIndexOf() {
    
    const strArr = ['ab', 'bc', 'cd', 'Bay'];
    let found = [];

    for (let str of strArr){
        if (str.toLocaleUpperCase().indexOf('b'.toLocaleUpperCase()) > -1){
            found.push(str);
        }
    }
    console.log(`found = ${found}`);
    return true;
}

module.exports = [stringInclude, stringIndexOf];