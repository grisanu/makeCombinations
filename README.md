# Combinations

> The `combinations()` function that takes a `String` or an `Array` and return an `Array` all possible combinations of elements

## Examples


## Syntax

```
combinations(input[, choiceLength, repetition])
```

## Parameters

`input`

* Collection (can only be `String` or `Array`) that contains all possible choices
* Each element in the `Array` or each character in the `String` is treated as a choice

`choiceLength`

* An positive integer that represent the number of choices in a complete selection
* If `choiceLength <= 0`, or `input.length < choiceLength`, then `[]` is returned
* If `choiceLength` is omitted, all possible combinations at all possible `choiceLength` is returned

`repetition`

* A boolean representing whether an item in the collection can be picked more than once
* If `repetition` is omitted, `repetition` defaults to `false`

### Return value

## Description

> Combinations is a way of selecting items from a collection such that the order of the selection does not matter (as opposed to permutations where the order matters)

### ie.

```
'abc' == 'bca' // is considered the same
'abc' != 'def' // is considered different
```


