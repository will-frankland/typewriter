const sentence = "hello there from lighthouse labs\n";

// use process.stdout.write instead of console.log in order to print all on one line in terminal.
// for (const char of sentence) {
//   setTimeout(() => {
//   process.stdout.write(char);
//   }, 1000);
// }


let delay = 0
  for (let char of sentence) {
   setTimeout(() => 
    process.stdout.write(char), delay);
    delay += 50
};