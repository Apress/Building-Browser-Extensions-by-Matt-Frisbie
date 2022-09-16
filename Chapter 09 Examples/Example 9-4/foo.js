import apiTest from "./api-test.js";

export function bar() {
  console.log("Called bar!");
}

console.log("Loaded foo module!");
apiTest();
