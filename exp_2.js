//Synchronous programming

//Code runs one line at a time, in order. Each line must finish before the next one starts. If one task is slow, everything behind it waits (this is called blocking).

//Real-life example: A single counter at a ticket window. The second person can’t be served until the first person is completely done.
const fs = require("fs");

console.log("1. Start");

const data = fs.readFileSync("student.txt", "utf-8");
console.log("2. File content:", data);

console.log("3. End");

//Asynchronous programming
// A slow task is started, then the program moves on without waiting. When the task finishes, its result is handled later (through a callback, promise, or async/await). This is non-blocking.

// Real-life example: Ordering food at a restaurant. You place the order, sit and chat, and the waiter brings the food when it’s ready. You didn’t stand frozen at the kitchen door.
const fs = require("fs");

console.log("1. Start");

fs.readFile("student.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("2. File content:", data);
});

console.log("3. End");
