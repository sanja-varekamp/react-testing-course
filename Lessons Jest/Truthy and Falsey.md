### Truthiness
In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false

### Truthy vs Falsy values in JavaScript

The following values are always falsy:

false
0 (zero)
-0 (minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null
undefined
NaN


Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

Comprehensive documentation: https://www.sitepoint.com/javascript-truthy-falsy/