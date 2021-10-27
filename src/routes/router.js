import express from 'express';
import Generator from '../services/generator.service.js';

const Gen = new Generator();

export const router = express.Router();

router.use("/random", function(request, response){
    const max = +request.query.max || 99;
    const min = +request.query.min || 1;
    const maxFirst = +request.query.maxFirst || max;
    const minFirst = +request.query.minFirst || min;
    const maxSecond = +request.query.maxSecond || max;
    const minSecond = +request.query.minSecond || min;
    const negative = Boolean(+request.query.negative) || false;
    try {
        response.send(Gen.random(maxFirst, minFirst, maxSecond, minSecond, negative));
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
        response.send(Gen.addition(maxFirst, minFirst, maxSecond, minSecond));
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
        response.send(Gen.subtraction(maxFirst, minFirst, maxSecond, minSecond, negative));
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
        response.send(Gen.multiplication(maxFirst, minFirst, maxSecond, minSecond));
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
        response.send(Gen.division(maxFirst, minFirst));
    } catch (error) {
        console.log(error);
        response.send({error: 'Something went wrong...'});
    }
});