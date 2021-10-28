import assert from 'assert';
import Generator from '../src/services/generator.service.js';

describe("Testing subtraction expressions", function(){
    it("Subtraction of positive numbers", function(){
         
        const expected = {
            first: 10,
            second: 3,
            operation: "-",
            expression: "10 - 3",
            answer: 7
        };
        const result = Generator.subtraction(10, 10, 3, 3);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
    it("Subtraction negative numbers", function(){
         
        const expected = {
            first: -5,
            second: -3,
            operation: "-",
            expression: "-5 - -3",
            answer: -2
        };
        const result = Generator.subtraction(-5, -5, -3, -3, 1);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
});