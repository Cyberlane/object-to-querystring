const objectToQuery = input => (
  input
    ? (`?${Object.keys(input)
          .filter(key => Boolean(input[key]) || input[key] === 0)
        .map(key => (Array.isArray(input[key])
          ? input[key].map(val => `${key}=${encodeURIComponent(val)}`).join('&')
          : `${key}=${encodeURIComponent(input[key])}`)
        )
        .join('&')
      }`.trim())
    : '?'
);

export default objectToQuery;
