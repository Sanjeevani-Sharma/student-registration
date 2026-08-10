const fs = require("fs");

console.log("Starting file existence tests...\n");

const files = [
    "index.html",
    "style.css",
    "script.js",
    "test.json"
];

let allTestsPassed = true;

files.forEach(function(file) {

    if (fs.existsSync(file)) {
        console.log(`PASS: ${file} exists`);
    } else {
        console.log(`FAIL: ${file} does not exist`);
        allTestsPassed = false;
    }

});

console.log("\n------------------------------");

if (allTestsPassed) {
    console.log("All file existence tests passed.");
    process.exit(0);
} else {
    console.log("Some file existence tests failed.");
    process.exit(1);
}