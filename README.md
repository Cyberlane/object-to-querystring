[![Version](http://img.shields.io/npm/v/object-to-querystring.svg)](https://www.npmjs.org/package/object-to-querystring)
[![npm](https://img.shields.io/npm/dt/object-to-querystring.svg)](Downloads)

# object-to-querystring

Convert an object into a query string.

## Example 1

```js
import objectToQuery from 'object-to-querystring';

const params = {
  name: 'Justin',
  number: 12345,
};
const querystring = objectToQuery(params);
/*
 querystring === '?name=Justin&number=12345'
*/
```

## Example 2

```js
import objectToQuery from 'object-to-querystring';

const params = {
  numbers: [5, 10, 15],
};

const querystring = objectToQuery(params);
/*
 querystring === '?numbers=5&numbers=10&numbers=15'
*/
```

## Support

If you find any scenarios that my code does not cover, then create an issue on the GitHub repo, and I will try to fix it ASAP.
