function createCalculator(numb) {
  return {
    numb,
    sum: (_numb) => (numb += _numb),
    mult: (_numb) => (numb *= _numb),
    sub: (_numb) => (numb -= _numb),
    div: (_numb) => (numb /= _numb),
    set: (_numb) => (numb = _numb),
    get: () => numb,
  };
}

let calc = createCalculator(2);

// calc.sum(5);
// calc.mult(10);
// calc.sub(40);
// calc.div(10);
// calc.set(100);
