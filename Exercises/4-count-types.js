'use strict';

const countTypesInArray = a => {
  const types = {};
  for (const w of a) {
    const t = typeof w;
    // eslint-disable-next-line
    types.hasOwnProperty(t) ? types[t] += 1 : types[t] = 1;
  }
  return types;
};

module.exports = { countTypesInArray };
