import Generator from '../services/generator.service.js';

const defaultMax = 99,
      defaultMin = 1;

class GeneratorController {
    addition(request, response){
        try {
            let {max, min, maxFirst, minFirst, maxSecond, minSecond} = request.query;

            max = +max || defaultMax;
            min = +min || defaultMin;
            maxFirst = +maxFirst || max;
            minFirst = +minFirst || min;
            maxSecond = +maxSecond || max;
            minSecond = +minSecond || min;

            const expression = Generator.addition(maxFirst, minFirst, maxSecond, minSecond);
            return response.json(expression);
        } catch (error) {
            response.status(500).json(error)
        }
    }
    
    subtraction(request, response){
        try {
            let {max, min, maxFirst, minFirst, maxSecond, minSecond, negative} = request.query;

            max = +max || defaultMax;
            min = +min || defaultMin;
            maxFirst = +maxFirst || max;
            minFirst = +minFirst || min;
            maxSecond = +maxSecond || max;
            minSecond = +minSecond || min;
            negative = Boolean(+negative) || false;

            const expression = Generator.subtraction(maxFirst, minFirst, maxSecond, minSecond, negative);
            return response.json(expression);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    multiplication(request, response){
        try {
            let {max, min, maxFirst, minFirst, maxSecond, minSecond} = request.query;

            max = +max || defaultMax;
            min = +min || defaultMin;
            maxFirst = +maxFirst || max;
            minFirst = +minFirst || min;
            maxSecond = +maxSecond || max;
            minSecond = +minSecond || min;

            const expression = Generator.multiplication(maxFirst, minFirst, maxSecond, minSecond);
            return response.json(expression);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    division(request, response){
        try {
            let {max, min, maxFirst, minFirst} = request.query;

            max = +max || defaultMax;
            min = +min || defaultMin;
            maxFirst = +maxFirst || max;
            minFirst = +minFirst || min;

            const expression = Generator.division(maxFirst, minFirst);
            return response.json(expression);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    random(request, response){
        try {
            let {max, min, maxFirst, minFirst, maxSecond, minSecond, negative} = request.query;

            max = +max || defaultMax;
            min = +min || defaultMin;
            maxFirst = +maxFirst || max;
            minFirst = +minFirst || min;
            maxSecond = +maxSecond || max;
            minSecond = +minSecond || min;
            negative = Boolean(+negative) || false;

            const expression = Generator.random(maxFirst, minFirst, maxSecond, minSecond, negative);
            return response.json(expression);
        } catch (error) {
            response.status(500).json(error)
        }
    }
}

export default new GeneratorController();