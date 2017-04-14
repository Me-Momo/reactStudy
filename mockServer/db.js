'use strict'
const faker = require('faker');

const fakerTest=require('./mock/test.js');
const cartItems=require('./mock/cartItems.js');

module.exports = function () {
    let data = {
        'activity': [{
            id: 1,
            title: faker.lorem.words(),
            img: faker.image.image()
        }]
    };

    Object.assign(data,fakerTest);
    Object.assign(data,cartItems);
    return data;
}