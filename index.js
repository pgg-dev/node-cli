#!/usr/bin/env node
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
const answerCallback = (answer) => {
  if (answer === "y") {
    console.log("ㄱㅅ");
    rl.close();
  } else if (answer === "n") {
    console.log("ㅈㅅ");
    rl.close();
  } else {
    console.clear();
    console.log("y / n 입력");
    rl.question("예제 잼? (y/n)", answerCallback);
  }
};

rl.question("예제 잼? (y/n)", answerCallback);
