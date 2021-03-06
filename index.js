// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 has `let count = 0` inside the function whereas counter has it outside the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 because it has `counter` in `counterMaker`
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter 1 would be perferable when you want to use counterMaker in a future reference and counter2 is okay for a 1 time use.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();



// counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3)  
}

// console.log(rng())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(innings, num){
    let scoreH = 0;
    let scoreA = 0;
    for (let i = 0; i < num; i++) {
      scoreH =  inning() + scoreH
    }
    for (let i = 0; i < num; i++){
      scoreA = inning() + scoreA
    }
    return {"Home":scoreH, "Away":scoreA}
}

// console.log(finalScore(inning(), 9))


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


// function getInningScore(string){
//   let scoreA = 0
//   let scoreH =0
//   for (let i = 0; i < 1; i++) {
//     scoreH =  inning()
//   }
//   for (let i = 0; i < 1; i++){
//     scoreA = inning() 
//   }
//   return {"Away":scoreA,"Home": scoreH}
// }

// console.log(getInningScore(inning()))
function getInningScore(inningCB){
  return {
    "Home": inning(),
    "Away": inning()
  }
}
// console.log(getInningScore(inning))

function scoreboard(getInningScoreCB, inningCB, num) {
 let scoreA = 0;
 let scoreH =0;
 for (let i = 0; i < num; i++) {
   let currentScore = getInningScore(inningCB)
   scoreH = scoreH + currentScore.Home
   scoreA = scoreA + currentScore.Away
   console.log(`Inning ${i + 1} Home ${currentScore.Home}, Away ${currentScore.Away}`)
   if(i == num - 1){
     return `Final Score Home ${scoreH}, Away ${scoreA}`
   }
 }
}

console.log(scoreboard(getInningScore(), inning() ,9))
