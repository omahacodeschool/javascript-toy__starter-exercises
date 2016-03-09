## 6C: Guess a Number

Pick a number and hardcode it into your program (like you did with the password above: `var secretNumber = 23;`). Prompt the user for a number, then display an alert letting the user know if their answer was correct or incorrect (much like you did with the "Password Game" atomic).

### Questions

- If you collect the user's input as a string (i.e. without using `parseInt()` to turn it into an integer), does `==` work to compare the input to the stored secret number? Would `===` work? Which is best?
- If you collect the user's input as an integer (i.e. by using `parseInt()` to turn it into an integer), can you use `==` to compare? `===`? Which is better in this case?
- What is the difference between `==` and `===`?
- In this case, does it make more sense to leave the user's guess as a string, or to convert it to an integer? Why? What are the relative advantages / disadvantages of each approach (particularly in terms of the types of new features that might be able to be added)?
