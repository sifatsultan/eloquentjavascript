## Eloqoent JavaScript  

Refreshing JavaScript Fundamentals from the [book](https://eloquentjavascript.net/) 


### Functions

It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

Some functions results in a value while others result in side effects

Functions without return will return in undefined.

Return keyword without an expression after it will return undefined.

Each binding has a scope.

Binding defined outside of any functions are _global_

Binding passed as a parameter or defined inside a function is called _local_ binding.

``var`` is visible throughout the whole function

``let`` is more tight in the scope and is visible within the current scope that could just be a for/if/while block.

Lexical scope. 

Call stack: 

__Higher-order__ functions in JavaScript are a special category of functions that either accept functions as an argument or return functions.

On the other side, if the function uses only primitives or objects as arguments or return values, these functions are first-order.

Higher-order functions provide the reusability benefit: the main behavior is provided by the higher-order function itself, and by accepting a function as an argument you extend that behavior at your will. [link](https://dmitripavlutin.com/javascript-higher-order-functions/#5-conclusion)