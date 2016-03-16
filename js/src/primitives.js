const isTruthy = (v) => v.length !== 0;

module.exports = {
  quote: (_, values) => values[0],

  cond: (eval, cases) => cases
    .find((cse) => isTruthy(eval(cse[0])))[1],

  atom: (eval, values) => !Array.isArray(eval(values[0])),

  eq: (eval, values) => eval(values[0]) === eval(values[1]) ? [[]] : [],

  car: (eval, values) => eval(values[0])[0],

  cdr: (eval, values) => eval(values[0])[1],

  cons: (eval, values) => [eval(values[0]), eval(values[1])]
};
