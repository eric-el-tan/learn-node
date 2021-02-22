function tryToSort(a, b) {
    let vals = [5,4,9,2,1];
    console.log(vals);
    vals.sort();
    console.log(vals);

    return true;
}

function tryToSortString(a, b) {
    // let vals = ["a","hello","b","goodbye"];
    let vals = ["a","hello","B","goodbye", 200, "543"];
    console.log(vals);
    vals.sort();
    console.log(vals);

    return true;
}

// function tryToSortObject(a, b) {
//     // let vals = ["a","hello","b","goodbye"];
//     let vals = [{x:5,y:6},{x:2, y:10}];
//     console.log(vals);
//     console.log('does not sort');
//     vals.sort();
//     console.log(vals);

//     return true;
// }

function tryToSortObject(a, b) {
    // let vals = ["a","hello","b","goodbye"];
    let vals = [{x:5,y:6},{x:2, y:10}];
    console.log(vals);
    vals.sort(compare);
    console.log(vals);

    return true;
}

function compare(a,b){
    return b.y - a.y;
}

function tryToSortObject_inlineFunction() {
    // let vals = ["a","hello","b","goodbye"];
    let vals = [{x:5,y:6},{x:2, y:10}];
    console.log(vals);
    vals.sort((a,b) => b.y - a.y);
    console.log(vals);

    return true;
}



module.exports = [tryToSort, tryToSortString, tryToSortObject_inlineFunction];