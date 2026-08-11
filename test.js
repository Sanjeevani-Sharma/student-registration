const fs = require("fs");

let passed = true;

console.log("Registration Test\n");

// TC01: Check index.html
if (fs.existsSync("index.html")) {
    console.log("TC01: index.html exists: PASS");
} else {
    console.log("TC01: index.html exists: FAIL");
    passed = false;
}

// TC02: Check style.css
if (fs.existsSync("style.css")) {
    console.log("TC02: style.css exists: PASS");
} else {
    console.log("TC02: style.css exists: FAIL");
    passed = false;
}

// TC03: Check script.js
if (fs.existsSync("script.js")) {
    console.log("TC03: script.js exists: PASS");
} else {
    console.log("TC03: script.js exists: FAIL");
    passed = false;
}

// TC04: Check test.json
if (fs.existsSync("test.json")) {
    console.log("TC04: test.json exists: PASS");
} else {
    console.log("TC04: test.json exists: FAIL");
    passed = false;
}


// Read JSON file
const data = JSON.parse(fs.readFileSync("test.json", "utf8"));
const student = data.students[0];


// TC05: Name validation
if (student.name.trim() !== "") {
    console.log("TC05: Name validation: PASS");
} else {
    console.log("TC05: Name validation: FAIL");
    passed = false;
}


// TC06: Email validation
if (student.email.includes("@")) {
    console.log("TC06: Email validation: PASS");
} else {
    console.log("TC06: Email validation: FAIL");
    passed = false;
}


// TC07: Mobile validation
if (student.mobile.length === 10) {
    console.log("TC07: Mobile validation: PASS");
} else {
    console.log("TC07: Mobile validation: FAIL");
    passed = false;
}


// TC08: Branch validation
if (student.branch !== "") {
    console.log("TC08: Branch validation: PASS");
} else {
    console.log("TC08: Branch validation: FAIL");
    passed = false;
}


// TC09: Password validation
if (student.password.length >= 6) {
    console.log("TC09: Password validation: PASS");
} else {
    console.log("TC09: Password validation: FAIL");
    passed = false;
}


// TC10: Registration successful
if (passed) {
    console.log("TC10: Registration successful: PASS");
    console.log("\nBuild Success");
} else {
    console.log("TC10: Registration successful: FAIL");
    console.log("\nBuild Failed");
    passed = false;
}