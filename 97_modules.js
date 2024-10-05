// Without destructing 

// const hello = require("./module1")
// hello.hello()
// hello.ahello(" naman")

// Using destructing 
// const {hello, ahello} = require("./module1")

import namanjeet, { hello, ahello } from "./module2.js";
hello();
ahello(" Naman");
namanjeet()




