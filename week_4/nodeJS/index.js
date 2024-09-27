// console.log("Hello, Node!");

// global 
// console.log(global.variable);

// global.variable = 23;

// console.log(global.variable);

// console.log(process.platform);
// console.log(process.env.USER);

// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("lunch", () => {
//   console.log("yum 😋");
  
// })

// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");

// const {readFile, readFileSync} = require("fs");

// readFileSync is code blocking
// const txt = readFileSync("./hello.txt", "utf-8");

// console.log(txt);

// readFile("./hello.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// })

// console.log("do this ASAP");

// const { readFile } = require("fs").promises;

// async function hello() {
//   const file = await readFile("./hello.txt", "utf-8");
//   console.log(file);
// }  

// hello();

// const myModule = require("./my-module");
// console.log(myModule);

const express = require("express");
const { readFile } = require("fs");

const app = express();

app.get("/", (request, response) => {
  readFile("./home.html", "utf8", (err, html) => {
    
    if (err) {
      response.send("500").send("sorry, out of order");
    }
    
    response.send(html);

  })

});

app.listen(process.env.PORT || 3000, () => console.log("App avaible on http://localhost:3000"));
