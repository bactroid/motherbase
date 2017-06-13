// first :: [a] -> a
const first = xs => xs[0]

// flatten :: [[a]] -> [a]
const flatten = arr => [].concat(...arr)

// setDifference :: [a] -> [a] -> [a]
const setDifference = (a, b) => {
  const set = new Set(b)
  return a.filter(x => !set.has(x))
}

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

module.exports = {
  first,
  flatten,
  setDifference,
  getDeepProp,
  createObj,
  createNestedObj,
  makePropArray
}
