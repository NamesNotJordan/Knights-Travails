// Runs some test cases for the Knight Travails challenge
import KnightMoves from './KnightTravails.js'

console.log("Test 1:\nstart: [0, 0]\nend: [3, 3]");
KnightMoves([0,0],[3,3]);

console.log("Test 2:\nstart: [3, 3]\nend: [0, 0]");
KnightMoves([3,3],[0,0],true);