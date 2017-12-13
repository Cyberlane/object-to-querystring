const objectToQuery = input => (
  input
    ? (`?${Object.keys(input)
          .filter(key => Boolean(input[key]) || input[key] === 0)
        .map(key => [].concat(input[key]).map(val =>
          `${key}=${encodeURIComponent(val)}`).join('&'))
        .join('&')
      }`.trim())
    : '?'
);

export default objectToQuery;
