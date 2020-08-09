'use strict'

const upper = (x) => x.toUpperCase()
const underscorify = (x) => x.split('').join('_')
const switchValueForX = (value) => (x) => x.replace(new RegExp(value,'g'), 'x')

const compose = (...funcs) => (x) => 
funcs.reduceRight((v,f) => f(v),x)

const upperAndUnderscorify = compose(upper, underscorify, switchValueForX('g'))
console.log(upperAndUnderscorify('geniton'))