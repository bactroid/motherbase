const {test} = require('tape')
const mb = require('./motherbase')

test('first', assert => {
  const arr = [1, 2, 3, 4, 5]
  assert.equal(mb.first(arr), 1, 'Should return the first element of an array')
  assert.end()
})

test('flatten', assert => {
  const arr = [[1, 2, 3], [4, 5, 6], 7]
  const expected = [1, 2, 3, 4, 5, 6, 7]
  assert.deepEqual(mb.flatten(arr), expected, 'Should flatten an array to one level')
  assert.end()
})

test('setDifference', assert => {
  const a = [1, 2, 3, 4]
  const b = [2, 3, 4, 5]
  const nullset = []
  const expected = [1]
  const actual = mb.setDifference(a, b)
  assert.deepEqual(actual, expected, 'setDifference should return an array representing the set difference between two arrays')

  const nullDiff = mb.setDifference(a, nullset)
  assert.deepEqual(a, nullDiff, 'setDifference of set A and null set should return set A')
  assert.end()
})

test('getDeepProp', assert => {
  const obj = {
    birth: {
      year: 2007,
      month: 7,
      day: 17
    }
  }
  assert.equal(mb.getDeepProp(obj, 'birth.year'), 2007, 'getDeepProp should return the value of an object property path from an object')
  assert.equal(mb.getDeepProp(obj, 'birth.nothere'), undefined, 'getDeepProp should return undefined if object path does not resolve')
  assert.end()
})

test('createObj', assert => {
  const expected = {name: 'Karl Marx'}
  const actual = mb.createObj('Karl Marx', 'name')
  assert.deepEqual(actual, expected, 'createObj should return a new object with a single key/value property')
  assert.end()
})

test('createNestedObj', assert => {
  const expected = {
    firstLevel: {
      secondLevel: {
        thirdLevel: 'Test Value'
      }
    }
  }
  const actual = mb.createNestedObj('firstLevel.secondLevel.thirdLevel', 'Test Value')
  assert.deepEqual(actual, expected, 'createNestedObj should return a new nested object matching the path provided, setting the value of the innermost property')
  assert.end()
})

test('makePropArray', assert => {
  const obj = {
    firstLevel: {
      secondLevel: {
        thirdLevel: 'Test Value'
      }
    }
  }
  const expected = {
    firstLevel: {
      secondLevel: [
        {
          thirdLevel: 'Test Value'
        }
      ]
    }
  }
  const actual = mb.makePropArray(obj, 'firstLevel.secondLevel')
  assert.deepEqual(actual, expected, 'makePropArray should verify whether an object property is an array, and if not, return a new object changing that property into a single-item array')
  assert.end()
})

test('range', assert => {
  assert.deepEqual(mb.range(1, 5), [1, 2, 3, 4, 5], 'range should generate an array of Numbers starting with min and ending with max')
  assert.end()
})
