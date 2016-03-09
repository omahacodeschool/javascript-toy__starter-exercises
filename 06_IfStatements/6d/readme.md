## 6D: Driver's Ed, Part 1

Prompt the user for their age and store it in a variable, then display any and all applicable messages below:

- **Age 25 and older**: "You can rent a car"
- **Age 21 and older**: "Please don't drink and drive"
- **Age 16 and older**: "You're eligible for a driver's license"
- **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
- **Any negative number**: "You haven't been born yet"
- **NaN**: "Sorry, but that's not a number"

For example, if I am 27, I should get the messages for 16, 21, and 25. If I am 23, I should get the messages for 16 and 21, but not 25, 0, or negative.

These messages can be displayed as alerts or as logs to the console.

You will not need to use `else` or `else if` in this exercise.

### Questions

- Does it matter what order your if-statements are in?
- When testing ranges, did you use `&&`, `||`, or something else entirely (e.g. nested if-statements)? If you used `&&`, why is that a better choice than `||` (and vice-versa)?
- What types of input produce a value of `NaN` after parsing? Is it important to check for `NaN` values? Is it possible for a `NaN` value to trigger any of the other if-statements? If so, how and why?
- What questions do you have?
