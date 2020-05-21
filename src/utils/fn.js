export const pipe = (...fns) => val =>
  fns.reduce((result, func) => func(result), val);
