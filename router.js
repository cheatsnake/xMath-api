const express = require('express');
const Generator = require('./generator');
const router = express.Router();

router.use("/random", function(request, response){
    const max = +request.query.max || 99;
    const min = +request.query.min || 1;
    const maxFirst = +request.query.maxFirst || max;
    const minFirst = +request.query.minFirst || min;
    const maxSecond = +request.query.maxSecond || max;
    const minSecond = +request.query.minSecond || min;
    const negative = Boolean(+request.query.negative) || false;
    try {
        response.send(Generator.random(maxFirst, minFirst, maxSecond, minSecond, negative));
    } catch (error) {
        console.log(error);
        response.send({error: 'Something went wrong...'});
    }
});

router.use("/add", function(request, response){
    const max = +request.query.max || 99;
    const min = +request.query.min || 1;
    const maxFirst = +request.query.maxFirst || max;
    const minFirst = +request.query.minFirst || min;
    const maxSecond = +request.query.maxSecond || max;
    const minSecond = +request.query.minSecond || min;
    try {
        response.send(Generator.addition(maxFirst, minFirst, maxSecond, minSecond));
    } catch (error) {
        console.log(error);
        response.send({error: 'Something went wrong...'});
    }
});

router.use("/sub", function(request, response){
    const max = +request.query.max || 99;
    const min = +request.query.min || 1;
    const maxFirst = +request.query.maxFirst || max;
    const minFirst = +request.query.minFirst || min;
    const maxSecond = +request.query.maxSecond || max;
    const minSecond = +request.query.minSecond || min;
    const negative = Boolean(+request.query.negative) || false;
    try {
        response.send(Generator.subtraction(maxFirst, minFirst, maxSecond, minSecond, negative));
    } catch (error) {
        console.log(error);
        response.send({error: 'Something went wrong...'});
    }
});

router.use("/mul", function(request, response){
    const max = +request.query.max || 99;
    const min = +request.query.min || 1;
    const maxFirst = +request.query.maxFirst || max;
    const minFirst = +request.query.minFirst || min;
    const maxSecond = +request.query.maxSecond || max;
    const minSecond = +request.query.minSecond || min;
    try {
        response.send(Generator.multiplication(maxFirst, minFirst, maxSecond, minSecond));
    } catch (error) {
        console.log(error);
        response.send({error: 'Something went wrong...'});
    }
});

router.use("/div", function(request, response){
    const max = +request.query.max || 99;
    const min = +request.query.min || 1;
    const maxFirst = +request.query.maxFirst || max;
    const minFirst = +request.query.minFirst || min;
    try {
        response.send(Generator.division(maxFirst, minFirst));
    } catch (error) {
        console.log(error);
        response.send({error: 'Something went wrong...'});
    }
});

module.exports = router;