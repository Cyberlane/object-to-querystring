import tape from 'tape';
import objToQuery from './obj-to-query';

const begin = funcTest => (funcName, check) => {
  funcTest(`-| ${funcName}`, ({ test }) => {
    if (check) {
      check((checkName, tests) => {
        test(`-|=> ${checkName}`, (assert) => {
          tests(assert);
          assert.end();
        });
      });
    }
  });
};

tape('obj-to-query.js', ({ test}) => {
  const testFunction = begin(test);

  testFunction('default', (check) => {
    check('no object returns question mark', (assert) => {
      const result = objToQuery();
      assert.equal(result, '?');
    });
    check('null returns question mark', (assert) => {
      const result = objToQuery(null);
      assert.equal(result, '?');
    });
    check('empty object returns question mark', (assert) => {
      const result = objToQuery({});
      assert.equal(result, '?');
    });
    check('object with string formats correctly', (assert) => {
      const result = objToQuery({ name: 'Justin' });
      assert.equal(result, '?name=Justin');
    });
    check('object with number 0 formats correctly', (assert) => {
      const result = objToQuery({ number: 0 });
      assert.equal(result, '?number=0');
    });
    check('object with multiple values formats correctly', (assert) => {
      const result = objToQuery({
        name: 'Justin',
        number: 0,
        foo: 'bar',
        moreNumbers: 123,
      });
      assert.equal(result, '?name=Justin&number=0&foo=bar&moreNumbers=123');
    });
    check('object with array formats correctly', (assert) => {
      const result = objToQuery({ numbers: [5, 10, 15] });
      assert.equal(result, '?numbers=5&numbers=10&numbers=15');
    });
  });
});
