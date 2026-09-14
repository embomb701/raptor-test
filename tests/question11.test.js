'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

assert.match(
  html,
  /c\) Close the Bypass Bkr, open the Main Output Bkr, then open PDU2 In Bkr and PDU2 Out Bkr, and lock out the PDU2 In Bkr and PDU2 Out Bkr \(LOTO\)\./,
  'Question 11 option C must include the complete transfer sequence and LOTO.'
);

const question11 = js.match(/const getAnswer11 = \(\) => \{[\s\S]*?\n\};/);
assert.ok(question11, 'Question 11 scoring function must exist.');
assert.match(question11[0], /if \(a11 == 'c\)'\)/, 'Question 11 must score option C as correct.');
assert.doesNotMatch(question11[0], /if \(a11 == 'b\)'\)/, 'Question 11 must not score option B as correct.');

console.log('Question 11 answer and safety sequence are correct.');
