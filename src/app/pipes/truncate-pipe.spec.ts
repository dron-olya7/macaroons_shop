import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return original string when shorter than limit', () => {
    const input = 'Short text';
    expect(pipe.transform(input)).toBe(input);
  });

  it('should truncate text longer than limit', () => {
    const input = 'This is a very long text that needs to be truncated';
    expect(pipe.transform(input, 10)).toBe('This is a...');
  });

  it('should respect completeWords option', () => {
    const input = 'This is a complete words test';
    expect(pipe.transform(input, 15, true)).toBe('This is a...');
  });

  it('should use custom ellipsis', () => {
    const input = 'Text with custom ellipsis';
    expect(pipe.transform(input, 10, false, '~~~')).toBe('Text with~~~');
  });

  it('should handle empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle undefined input', () => {
    expect(pipe.transform(undefined as any)).toBe('');
  });
});
