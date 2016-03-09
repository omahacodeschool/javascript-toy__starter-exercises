## 6E: Driver's Ed, Part 2

This exercise is pretty similar to Part 1, but in this case you'll *only display one message* depending on the range your user's age falls into:

- **Age 25 and older**: "You can rent a car"
- **Age 21 - 24**: "Please don't drink and drive"
- **Age 16 - 20**: "You're eligible for a driver's license"
- **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
- **Any negative number**: "You haven't been born yet"
- **NaN**: "Sorry, but that's not a number"

All of your program logic (i.e. the part that decides which output to display) should be contained in a single `if` / `else if` / `else` block, rather than in separate `if` statements.

### Questions

- Does it matter what order your `if` / `else if` statements happen? If you reorder them, does your program still produce correct output?
- What's wrong with this conditional: `if (age < 16 && age > 21)`?
- Let's say that your program needs to be easy to modify so that it works in parts of the country/world where the age ranges are different. How would you replace the numbers in your `if` statements with variables to make the program make sense? Or is it easier to just have the numbers be there? Does it matter?
