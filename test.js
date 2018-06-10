const notAString = require('.');

describe('notAString', () => {
  it('is not a string.', () => {
    expect(typeof notAString).not.toEqual('string');
  });

  it('is "not a string".', () => {
    expect(new String(notAString)).toEqual('not a string');
  });
});
