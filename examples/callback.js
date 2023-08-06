const chanceof = require("../src/index.js");

chanceof(
    0.5,
    (e) => {
        console.log("Hello, world!");
        console.log("chance:", e.chance);
        console.log("result:", e.result);
    }
);
