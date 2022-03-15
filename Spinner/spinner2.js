// Refactor code below to remove the repeated timeout statements.

// group symbols in an array
// for loop to loop symbols
// setTimeout inside loop (+=) current delay + 200ms

let delay = 0;
let symbol = ['|', '/', '-', '\\'];
for (const elem of symbol) {
  delay += 500
  setTimeout(() => {
    process.stdout.write(`\r${elem}   `)}, delay);
};

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);