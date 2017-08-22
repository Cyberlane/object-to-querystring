const objectToQuery = input => (
  input
    ? (`?${Object.keys(input)
          .filter(key => Boolean(input[key]) || input[key] === 0)
        .map(key => `${key}=${encodeURIComponent(input[key])}`)
        .join('&')
      }`.trim())
    : '?'
);

export default objectToQuery;
