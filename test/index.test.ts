import { describe, expect, test } from 'vitest';
import { evenOrOdd } from '../src/index';

describe("evenOrOdd", () => { 
    test("10 returns even", () => {
        expect(evenOrOdd(10)).toBe("even");
    }
});