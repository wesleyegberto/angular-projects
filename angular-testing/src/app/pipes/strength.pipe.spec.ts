import { StrengthPipe } from './strength.pipe';

describe('Pipe: Strength', () => {
  let pipe: StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  });

  it('should display the strengh with sufix `weak` when between 0 and 10', () => {
    expect(pipe.transform(0)).toBe('0 (weak)');
    expect(pipe.transform(5)).toBe('5 (weak)');
    expect(pipe.transform(9)).toBe('9 (weak)');
  });

  it('should display the strengh with sufix `strong` when between 10 and 20', () => {
    expect(pipe.transform(10)).toBe('10 (strong)');
    expect(pipe.transform(15)).toBe('15 (strong)');
    expect(pipe.transform(19)).toBe('19 (strong)');
  });

  it('should display the strengh with sufix `unbelievable` when >= 20', () => {
    expect(pipe.transform(20)).toBe('20 (unbelievable)');
    expect(pipe.transform(57)).toBe('57 (unbelievable)');
    expect(pipe.transform(100)).toBe('100 (unbelievable)');
  });

  it('should display the invalid when < 0', () => {
    expect(pipe.transform(-1)).toBe('(invalid)');
  });
});
