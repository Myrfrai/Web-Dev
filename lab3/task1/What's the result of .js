alert( null || 2 || undefined );
// The answer is 2, that’s the first truthy value.

alert( alert(1) || 2 || alert(3) );
// The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 
// 2 is returned and then shown by the outer alert.

alert( 1 && null && 2 );
//The answer: null, because it’s the first falsy value from the list.

alert( alert(1) && alert(2) );
//The answer: 1, and then undefined.

alert( null || 2 && 3 || 4 );
//The answer: 3.
