export const unwrapFirst = arr => arr[0];

export const map = mapper => arr => arr.map(mapper);

export const concat = withArr => arr => withArr.concat(arr);
