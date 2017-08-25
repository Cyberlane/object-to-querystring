[![Version](http://img.shields.io/npm/v/object-to-querystring.svg)](https://www.npmjs.org/package/object-to-querystring)

# object-to-querystring

Convert an object into a query string.

## Example

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
