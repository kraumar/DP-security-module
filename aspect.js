const before = (fn, args) => {
  return function() {
    const queryStr = `${arguments[0]} WHERE ID=0`;

    // queryStr += checkSomething1();
    // queryStr += checkSomething2();
    // queryStr += checkSomething3();

    return fn.call(this, queryStr);
  };
};

let prepareQuery = query => {
  return `${query}`;
};

prepareQuery = before(prepareQuery);

module.exports = { prepareQuery };
