const p = require('parsimmon');

const regex = p.regex,
  string = p.string,
  optWhitespace = p.optWhitespace,
  lazy = p.lazy;

const lexeme = (p) =>
  p.skip(optWhitespace);

const listOpen = lexeme(string('('));
const listClose = lexeme(string(')'));

const identifier = lexeme(regex(/[a-zA-Z_-]+/i));

const expr = lazy(
  'an expression',
  () => list.or(identifier)
);

const list = listOpen
  .then(expr.many())
  .skip(listClose);

console.log(expr.parse('(foobar spaz)'))

console.log(expr.parse('()'))
console.log(expr.parse('(foo ((())))'))

module.exports = expr;
