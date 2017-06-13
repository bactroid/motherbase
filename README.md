# Motherbase

A handy collection of functions I might want to reuse.

Why is it called motherbase? Blame it on playing Metal Gear Solid 5 too much.

## Functions

### `first(xs)`

Returns the first element of an array.

### `flatten(arr)`

Flattens an array to one level.

### `setDifference(a, b)`

Returns an array representing the set difference between two arrays.

### `getDeepProp(obj, path)`

Returns the value of an object property path from an object.

### `createObj(value, key)`

Returns a new object with a single key/value property.

### `createNestedObj(path, value)`

Returns a new nested object matching the path provided, setting the value of the innermost property.

### `makePropArray(obj, path)`

Verifies whether an object property is an array, and if not, returns a new object changing that property into a single-item array.
