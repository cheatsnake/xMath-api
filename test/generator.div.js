import assert from 'assert';
import Generator from '../src/services/generator.service.js';

describe("Testing division expressions", function(){
    it("Division of positive numbers", function(){
         
        const expected = {
            first: 1,
            second: 1,
            operation: "/",
            expression: "1 / 1",
            answer: 1
        };
        const result = Generator.division(1, 1);
        assert.equal(result.answer, expected.answer);
        assert.equal(result.expression, expected.expression);
        assert.equal(result.operation, expected.operation);
        assert.equal(result.second, expected.second);
        assert.equal(result.first, expected.first);
    });
});