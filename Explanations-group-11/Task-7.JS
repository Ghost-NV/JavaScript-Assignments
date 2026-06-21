/*
  Map And Set + What You Learn = > Challenge
    Requirements:
    - No numbers no true or false no loops no Array indexing no high order function
    - Only One Line Solution Inside Console
    - If You Use Length, Then Only Time
    Hints
    - You Can Use * Operator Only In Calculation
    Set
    - Spread Operator
    - MathObject Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(`Your solution is: ${[[...n1, ...n2].length] * Math.max(...n1)}`); // 210
