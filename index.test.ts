import { minimalDistance } from './common';

describe('minimalDistance', () => {
    it('should return 0 for two empty strings', () => {
        expect(minimalDistance('', '')).toBe(0);
    });

    it('should return 0 when both words are identical', () => {
        expect(minimalDistance('word', 'word')).toBe(0);
    });

    it('should return the length of the longer word when one word is empty', () => {
        expect(minimalDistance('', 'word')).toBe(4);
        expect(minimalDistance('word', '')).toBe(4);
    });

    it('should return the correct distance for words with different lengths', () => {
        expect(minimalDistance('word', 'world')).toBe(1);
        expect(minimalDistance('cat', 'cats')).toBe(1);
    });

    it('should return the correct distance for words with different characters', () => {
        expect(minimalDistance('kitten', 'sitting')).toBe(3);
        expect(minimalDistance('flaw', 'lawn')).toBe(2);
    });

    it('should return the correct distance for words with similar characters but different order', () => {
        expect(minimalDistance('abc', 'acb')).toBe(2);
        expect(minimalDistance('abcdef', 'badcfe')).toBe(4);
    });

    it('should handle empty strings', () => {
        expect(minimalDistance('', '')).toBe(0);
    });
    it('should return the correct distance for words with one character', () => {
        expect(minimalDistance('a', 'b')).toBe(1);
        expect(minimalDistance('x', 'x')).toBe(0);
    });

    it('should return the correct distance for words with many identical characters at the beginning or end', () => {
        expect(minimalDistance('aaaab', 'aaaax')).toBe(1);
        expect(minimalDistance('xyzzz', 'xyz')).toBe(2);
    });

    it('should return the correct distance for long words with minimal differences', () => {
        expect(minimalDistance('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyy')).toBe(1);
        expect(minimalDistance('aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkl', 'aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkll')).toBe(1);
    });
});
