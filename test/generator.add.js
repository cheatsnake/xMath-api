import assert from 'assert';
import Generator from '../src/services/generator.service.js';

describe("Testing addition expressions", function(){
    it("Addition of positive numbers", function(){
         
        const expected = {
            first: 10,
            second: 20,
            operation: "+",
            expression: "10 + 20",
            answer: 30
        };
        const result = Generator.addition(10, 10, 20, 20);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
    it("Adding negative numbers", function(){
         
        const expected = {
            first: -50,
            second: -30,
            operation: "+",
            expression: "-50 + -30",
            answer: -80
        };
        const result = Generator.addition(-50, -50, -30, -30);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
});