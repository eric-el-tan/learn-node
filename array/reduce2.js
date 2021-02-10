var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  console.log(groupBy(['one', 'two', 'three'], 'length'));
  
  // => {3: ["one", "two"], 5: ["three"]}
  