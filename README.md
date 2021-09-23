# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anshaalhussain/lotide`

**Require it:**

`const _ = require('@anshaalhussain/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return the first element of array

* `tail(array)`: return every element of array after the first

* `middle(array)`: return middle element of an array (returns median of the middle two values if array has even amount of elements)

* `without(array, itemsToRemove)`: removes the specified element from an array

* `takeUntil(array, callback)`: returns elements in an array until conditional returned through callback

* `map(array, callback))`: returns elements that are returned by the callback. Ex. can use to return first letter of each element map(array, words => word[0])

* `letterPositions(string)`: returns an object containing letters and their position from an inputted string

* `findKeyByValue(object)`: searches for an returns the key of a value from inputted object


* `findKey(obj, callback)`: returns boolean for each element in object based on callback

* `eqObjects(obj1, obj2)`: returns boolean on whether two objects are equal


* `countOnly(element, itemsToCount)`: returns number of times specified element(s) appear in inputted object

* `countLetters(string)`: returns number of letters in specified string