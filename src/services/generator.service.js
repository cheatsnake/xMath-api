import { randomNumber, findingDivisor } from "./helper.service.js";

class Generator {
    addition(maxFirst, minFirst, maxSecond, minSecond) {
        const first = randomNumber(maxFirst, minFirst);
        const second = randomNumber(maxSecond, minSecond);
        const operation = '+';
        const expression = `${first} ${operation} ${second}`;
        const answer = first + second;
    
        return {first, second, operation, expression, answer};
    }
    
    subtraction(maxFirst, minFirst, maxSecond, minSecond, negative) {
        let first = randomNumber(maxFirst, minFirst);
        let second = randomNumber(maxSecond, minSecond);
    
        if (first < second && !negative) {
            const thrid = first;
            first = second;
            second = thrid;
        }
    
        const operation = '-';
        const expression = `${first} ${operation} ${second}`;
        const answer = first - second;
    
        return {first, second, operation, expression, answer};
    }

    multiplication(maxFirst, minFirst, maxSecond, minSecond) {
        const first = randomNumber(maxFirst, minFirst);
        const second = randomNumber(maxSecond, minSecond);
        const operation = '*';
        const expression = `${first} ${operation} ${second}`;
        const answer = first * second;
    
        return {first, second, operation, expression, answer};
    }

    division(maxFirst, minFirst) {
        const first = randomNumber(maxFirst, minFirst);
        const second = findingDivisor(first) || 1;
        const operation = '/';
        const expression = `${first} ${operation} ${second}`;
        const answer = first / second;
    
        return {first, second, operation, expression, answer};
    }

    random(maxFirst, minFirst, maxSecond, minSecond, negative) {
        const n = randomNumber(4, 1);
        switch (n) {
            case 1:
                return this.addition(maxFirst, minFirst, maxSecond, minSecond);
            case 2:
                return this.subtraction(maxFirst, minFirst, maxSecond, minSecond, negative);
            case 3:
                return this.multiplication(maxFirst, minFirst, maxSecond, minSecond);
            case 4:
                return this.division(maxFirst, minFirst);
            default:
                throw Error;
        }
    }
}

export default new Generator();