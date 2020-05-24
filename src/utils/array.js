export const unwrapFirst = arr => (arr && arr[0] ? arr[0] : null);

export const map = mapper => arr => arr.map(mapper);

export const concat = withArr => arr => withArr.concat(arr);
