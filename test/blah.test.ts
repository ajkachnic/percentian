import { Percent } from '../src';

describe('Convert from various types', () => {
  it('Allows numbers', () => {
    const percent = new Percent(5);
    expect(percent.text).toEqual('500%');
    expect(percent.number).toEqual(5);
    expect(percent.rawText).toEqual('500');
  });
  it('Allows text', () => {
    const percent = new Percent('200%');
    expect(percent.text).toEqual('200%');
    expect(percent.number).toEqual(2);
    expect(percent.rawText).toEqual('200');
  });
});
describe('Update value', () => {
  it('Update with numbers', () => {
    const percent = new Percent(2);

    percent.update(5);
    expect(percent.text).toEqual('500%');
    expect(percent.number).toEqual(5);
  });
  it('Update with strings', () => {
    const percent = new Percent('200%');

    percent.update('500%');
    expect(percent.text).toEqual('500%');
    expect(percent.number).toEqual(5);
  });
});
