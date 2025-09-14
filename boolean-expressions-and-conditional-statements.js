/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

const hasCoin = false;
const hasWits = true; 

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  console.log(`
    As you're nearing the exit of the mountain path, you start to see the start of a wooden bridge and a booth. 
    Out of the booth jumps a unifrmed troll. She says you must pay the toll or answer a riddle inorder to pass.`);

    let tollAnswer = readline.question("How would you like to pass? Pay the 'toll' or answer the 'riddle': ");

    if (tollAnswer === "toll" && hasCoin) {
      console.log("You gladly pay your way and are free to countinue on your adventure.");
    } else if (tollAnswer === "toll" && !hasCoin) {
      console.log("Sadly all you find in your pockets is lint and a couple of loose mints. You must return the way you came.");
    } else if (tollAnswer === "riddle" && hasWits) {
      console.log(`
        The troll really tries to give you a tricky one, but of course you're too smart for that. 
        You answer with expert wit and try not to gloat as you pass the troll toward the bridge.`);
    } else if (tollAnswer === "riddle" && !hasWits) {
      console.log(`
        The troll looks at you with deep disappointment. She's never seen anyone answer a riddle so badly.
        You leave the mountain path with your head low.`);
    }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

if (choice === "village") {
  console.log(`
    As you wander through the village, you stumble upon a mercheants market. It has a vendor for all your possible needs. 
    You catch a wiff of something delicious and follow the scent. Your stomach grumbles as you look upon the pies and pastries.`);

    let foodAnswer = readline.question("Would you like to buy something to fulfill your hunger? Yes or No: ");

    if (foodAnswer.toLowerCase() === "yes") {
      console.log("You gorge yourself on the delicious pastries, giving yourself a second wind to continue on your journey.");
    } else {
      console.log("You resist the urge. Continuing until you find something more enticing.");
    }
}