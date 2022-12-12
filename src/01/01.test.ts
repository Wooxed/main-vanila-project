import {mult, splitIntoWords, sum} from "./01";
let a: number;
let b: number;
let c: number;

beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be correct', () => {

    //action
    a = 100
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    //expect result
    expect(result1).toBe(102)
    expect(result2).toBe(5)
})

test('multiply should be correct', () => {

    //action
    const result = mult(a, b)
    const result1 = mult(b, c)

    //expect result
    expect(result).toBe(2)
    expect(result1).toBe(6)
})

test('splitting into words should be correct', () => {

    //data
    const sent1 = 'Hello my friend!';
    const sent2 = 'JS the best programming language.';

    //action
    const result = splitIntoWords(sent1)
    const result1 = splitIntoWords(sent2)

    //expect result
    expect(result.length).toBe(3)
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')

    expect(result1.length).toBe(5)
    expect(result1[0]).toBe('js')
    expect(result1[1]).toBe('the')
    expect(result1[2]).toBe('best')
    expect(result1[3]).toBe('programming')
    expect(result1[4]).toBe('language')
})