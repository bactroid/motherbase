// first :: [a] -> a
const first = xs => xs[0]

// flatten :: [[a]] -> [a]
const flatten = arr => [].concat(...arr)

// setDifference :: [a] -> [a] -> [a]
const setDifference = (a, b) => {
  const set = new Set(b)
  return a.filter(x => !set.has(x))
}

// intersection :: [a] -> [a] -> [a]
const intersection = xs => ys => xs.filter(x => ys.find(y => y === x) !== undefined)

// getDeepProp :: Object -> String -> a
const getDeepProp = (obj, path) =>
  path
    .split('.')
    .reduce((obj, prop) => obj[prop], obj)

// createObj :: a -> String -> Object
const createObj = (value, key) => ({[key]: value})

// createNestedObj :: String -> a -> Object
const createNestedObj = (path, value) =>
  path
    .split('.')
    .reverse()
    .reduce(createObj, value)

// makePropArray :: Object -> String -> Object
const makePropArray = (obj, path) =>
  Array.isArray(getDeepProp(obj, path))
    ? obj
    : createNestedObj(path, [getDeepProp(obj, path)])

// range :: Number -> Number -> [Number]
const range = (start, end) => Array(parseInt(end) - parseInt(start) + 1).fill().map((x, i) => i + start)

module.exports = {
  first,
  flatten,
  setDifference,
  intersection,
  getDeepProp,
  createObj,
  createNestedObj,
  makePropArray,
  range
}
