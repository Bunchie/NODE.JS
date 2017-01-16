/**
 * Created by ziberman on 1/16/17.
 */

function sayWorld() {

    console.info(" World! ");

}

function x() {

    console.log('x');

    z();

}

function y() {

    console.log('y');

    z();

}

function z() {

    console.log('z');

}

exports.x = x;

exports.y = y;

exports.sayWorld = sayWorld;