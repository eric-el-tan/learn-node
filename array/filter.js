function filter1(){
  let vals = [5,4,9,2,1];
  console.log(vals);
  // console.log(vals.filter(isEven));
  console.log(vals.filter(x => x % 2 == 0));
  console.log(vals.filter(x => !(x % 2 == 0)));
  return true;
}

function isEven(num){
  return ( num % 2 == 0 );
}

function filterTruvie(){
  let vals = [5,4,undefined,2,1];
  console.log(vals);
  console.log(vals.filter(x => x ));
  console.log(vals.filter(x => !x ));
  console.log(vals.filter(x => x !== undefined));
  return true;
}

function filterStr(){
  let s = "It was  a dark and stormy night.";
  // let words = s.split(" ");
  // let words = s.split(/\W+/);
  // let words = s.split(/\W+/).filter(word => word.length);
  let words = s.split(/\W+/).filter(word => word.length >=3);
  console.log(words);

  return true;
}

module.exports = [filter1, filterTruvie, filterStr];

// https://www.youtube.com/watch?v=qmnH5MT_luk