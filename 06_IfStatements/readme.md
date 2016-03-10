


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

## 6F: Triangles

For all triangles, the sum of the lengths of any two sides must be greater than the length of the third side. For example: a triangle of 3, 4, 5 (in whatever units you want) is valid (since `3 + 4 > 5`, `3 + 5 > 4`, and `4 + 5 > 3`), whereas a triangle of 3, 4, 7 is not (since `3 + 4` is not greater than `7`).

![](http://cl.ly/brne/triangle-inequality-demonstration2.png)

![](http://cl.ly/brHB/tumblr_inline_mlryndqmmW1qio24w.png)

Write a program which prompts your user for the lengths of the 3 legs of a triangle (this input can be an integer or a floating point number, but it can't be a string), and which then reports whether this is a valid triangle. It's probably worthwhile to output the results of your behind-the-scenes calculations to the console, but the ultimate output ("This is a valid triangle" or "This is not a valid triangle" should be handled with an alert).

### Questions

Don't start on these questions (or even read them) until after you've written the code for **6F**. For these questions, first make (and record) your prediction, then test it, then write down what actually happened when you tested this. By the end, you'll probably have a list of at least a few errors. Go back and fix them; make one git commit per correction.

- What happens if one (or more) of the lengths aren't input correctly and thus end up as `NaN`?
- What happens if one of the lengths of the triangle is `0`? Two of the lengths? All three lengths?
- What happens if the user inputs one or more negative integers for the lengths of the triangle's legs?

Assuming errors exist, note that all of these errors come from the user inputting one or more invalid values. What are some strategies you might use to prevent this from happening (or at least to prevent those invalid values from being used)?

### Bonuses

These are some optional extensions to the exercise.

- *Equilateral* triangles are triangles where all three legs have the same length. Your program should output (however you want) whether the triangle is equilateral.
- *Scalene* triangles have no sides that are the same length. Your program should output whether the triangle in question is scalene.
- *Isosceles* triangles have at least two legs that are the same length (Fun Fact: all equilateral triangles are also isosceles triangles). Your program should output whether the triangle is isosceles.
- *Right* triangles follow the pattern **a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>** (where **c** is the longest leg, called the *hypotenuse*). Your program should output whether the triangle in question is a right triangle. A triangle can be *right* and *scalene*, or *right* and *isosceles*. A triangle <u>cannot</u> be *right* and *equilateral*. There are a couple of ways to do this, both with and without methods from the *Math* object.