'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const sandbox = {
  Audio: function Audio() { return { play() { return Promise.resolve(); } }; },
  document: {},
  window: {},
  Blob: function Blob() {},
  console
};

vm.runInNewContext(
  `${source}\nglobalThis.__reviewApi = { answerReview, getIncorrectAnswerReviews };`,
  sandbox
);

const { answerReview, getIncorrectAnswerReviews } = sandbox.__reviewApi;
const correctSelections = ['c)', 'd)', 'b)', 'b)', 'a)', 'b)', 'b)', 'c)', 'd)', 'b)', 'c)', 'a)', 'a)', 'a)', 'd)', 'a)', 'c)', 'c)', 'd)', 'b)', 'a)'];

assert.equal(answerReview.length, 21, 'Every test question must have review data.');
answerReview.forEach((item, index) => {
  assert.equal(item.question, index + 1);
  assert.ok(item.correctAnswer.length > 3, `Question ${index + 1} needs full correct-answer text.`);
  assert.ok(item.explanation.length > 20, `Question ${index + 1} needs a short explanation.`);
});

assert.equal(
  getIncorrectAnswerReviews(correctSelections).length,
  0,
  'An all-correct submission must not list any incorrect answers.'
);

const withWrongQuestion11 = [...correctSelections];
withWrongQuestion11[10] = 'b)';
const incorrect = getIncorrectAnswerReviews(withWrongQuestion11);
assert.equal(incorrect.length, 1, 'Only incorrect questions should be shown.');
assert.equal(incorrect[0].question, 11);
assert.equal(incorrect[0].selectedAnswer, 'b)');
assert.match(incorrect[0].correctAnswer, /^c\)/);
assert.match(incorrect[0].explanation, /Main Output (Breaker|Bkr)/i);
assert.match(incorrect[0].explanation, /LOTO|lockout/i);

assert.match(html, /id="answer-review"[^>]*class="[^"]*hidden/, 'The page needs a hidden answer-review region.');
assert.match(html, /<button[^>]*type="button"[^>]*id="submit"|<button[^>]*id="submit"[^>]*type="button"/, 'Submit must not reload the page.');
assert.doesNotMatch(source, /audio\.play\(\);/, 'Audio playback promises must be handled instead of producing browser errors.');
assert.match(source, /\.catch\(\(\) => \{\}\)/, 'Rejected audio playback must be safely caught.');

console.log('Incorrect-answer review behavior is correct.');
