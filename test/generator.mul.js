import assert from 'assert';
import Generator from '../src/services/generator.service.js';

const Gen = new Generator();

describe("Testing multiplication expressions", function(){
    it("Multiplication of positive numbers", function(){
         
        const expected = {
            first: 2,
            second: 3,
            operation: "*",
            expression: "2 * 3",
            answer: 6
        };
        const result = Gen.multiplication(2, 2, 3, 3);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
    it("Multiplication negative numbers", function(){
         
        const expected = {
            first: -2,
            second: -3,
            operation: "*",
            expression: "-2 * -3",
            answer: 6
        };
        const result = Gen.multiplication(-2, -2, -3, -3);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
});