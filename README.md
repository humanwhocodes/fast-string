# Fast String

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A small utility for fast string comparison by character codes. The package provides functions for comparing strings efficiently without the overhead of locale-specific comparisons. This is useful for cases where raw character code comparison is needed for performance reasons.

## Installation

Install using [npm][npm] or [yarn][yarn]:

```bash
npm install @humanwhocodes/fast-string

# or

yarn add @humanwhocodes/fast-string
```

## Usage

### Node.js

Import into your Node.js project:

```js
// CommonJS
const { compare, equals } = require("@humanwhocodes/fast-string");

// ESM
import { compare, equals } from "@humanwhocodes/fast-string";
```

### Functions

#### compare(str1, str2)

Compares two strings by character codes.

**Arguments:**

* `str1` (string): The first string to compare.
* `str2` (string): The second string to compare.

**Returns:**

* `number`: Returns 0 if the strings are equal, a negative number if `str1` comes before `str2`, and a positive number if `str1` comes after `str2`.

**Throws:**

* `TypeError`: If either argument is not a string.

**Example:**

```js
import { compare } from "@humanwhocodes/fast-string";

// Equal strings
console.log(compare("hello", "hello"));  // 0

// Different strings
console.log(compare("abc", "def"));      // negative number
console.log(compare("def", "abc"));      // positive number

// Error case
try {
    compare("hello", 123);               // throws TypeError
} catch (error) {
    console.error(error.message);
}
```

#### equals(str1, str2)

Checks if two strings are equal by character codes.

**Arguments:**

* `str1` (any): The first value to compare.
* `str2` (any): The second value to compare.

**Returns:**

* `boolean`: Returns `true` if both arguments are strings and are equal by character codes, otherwise `false`.

**Example:**

```js
import { equals } from "@humanwhocodes/fast-string";

// Equal strings
console.log(equals("hello", "hello"));  // true

// Different strings
console.log(equals("abc", "def"));      // false

// Different lengths
console.log(equals("abc", "abcd"));     // false

// Non-string values
console.log(equals("hello", 123));      // false
console.log(equals(123, "hello"));      // false
```

## License

Apache 2.0

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
