// =========================================================
// INITIALIZATION
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const inputFields = document.querySelectorAll('.details-input');

  function validateForm() {
      let allFilled = true;
      inputFields.forEach(input => {
          if (input.value.trim() === '') allFilled = false;
      });
      startBtn.disabled = !allFilled;
  }

  inputFields.forEach(input => input.addEventListener('input', validateForm));
});

// =========================================================
// QUIZ DATA & GLOBAL STATE
// =========================================================
const quizData = [
  {
    "level": "Easy",
    "points": 100,
    "penalty": 50,
    "questions": [
      {
        "question": "This code is supposed to print 'Hello, World!', but it has a very common syntax error. What is it?\n\n```python\nprint(\"Hello, World!)\n```",
        "options": [
          "The `print` function is spelled wrong.",
          "The text is missing a closing double quote.",
          "Python cannot print text with an exclamation mark.",
          "There should be a semicolon at the end."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is meant to add two numbers, but it gives the wrong result. What is the bug?\n\n```python\nnum1 = 5\nnum2 = 10\nresult = num1 * num2 # Bug is here\nprint(result)\n```",
        "options": [
          "The variables should be strings, not numbers.",
          "The `print` function is used incorrectly.",
          "The code uses the multiplication operator `*` instead of the addition operator `+`.",
          "The variables are not defined correctly."
        ],
        "correctIndex": 2
      },
      {
        "question": "The code defines a variable `my_name` but then causes an error. Why?\n\n```python\nmy_name = \"Alice\"\nprint(my_nam)\n```",
        "options": [
          "The variable name is misspelled in the `print` function.",
          "You cannot print variables.",
          "The name \"Alice\" is not a valid value.",
          "The code is missing a loop."
        ],
        "correctIndex": 0
      },
      {
        "question": "This `if` statement is supposed to print 'Welcome' but it never does. What is the logical error?\n\n```python\nx = 10\nif x > 10:\n  print('Welcome')\n```",
        "options": [
          "The `print` statement has a syntax error.",
          "The variable `x` is not a number.",
          "The condition `x > 10` is false because `x` is exactly 10, not greater than 10.",
          "You cannot use the variable `x` in an `if` statement."
        ],
        "correctIndex": 2
      },
      {
        "question": "This code is supposed to combine a string and a number to print 'Score: 100', but it causes a type error. How do you fix it?\n\n```python\nscore = 100\nmessage = \"Score: \" + score\n```",
        "options": [
          "Change `score = 100` to `score = \"100\"`.",
          "Use the `str()` function to convert the number to a string: `str(score)`.",
          "Both of the above options would work.",
          "This code has no errors."
        ],
        "correctIndex": 2
      },
      {
        "question": "This `for` loop is supposed to print numbers 1, 2, and 3, but it has a syntax error. What is missing?\n\n```python\nfor i in range(1, 4)\n  print(i)\n```",
        "options": [
          "The `range` function is incorrect.",
          "A colon `:` is missing after `range(1, 4)`.",
          "The `print(i)` line has an error.",
          "The variable `i` is not allowed."
        ],
        "correctIndex": 1
      },
      {
        "question": "A key line of code is 'commented out', which means the computer ignores it. Which line is the bug that prevents the total from being calculated?\n\n```python\nprice = 50\nquantity = 2\n# total = price * quantity\nprint(total)\n```",
        "options": [
          "The line `price = 50` has an error.",
          "The line `# total = price * quantity` is a comment and doesn't run, so `total` is never created.",
          "The `print(total)` line is incorrect.",
          "The line `quantity = 2` has an error."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code tries to get the first item from a list. Why does it cause an 'index out of range' error?\n\n```python\nmy_list = [] # An empty list\nprint(my_list[0])\n```",
        "options": [
          "The `print` function is wrong.",
          "The list is empty, so there is no element at index 0.",
          "The index should be `[1]` instead of `[0]`.",
          "You cannot create an empty list."
        ],
        "correctIndex": 1
      },
      {
        "question": "The code defines a function `say_hello` but it never runs. Why?\n\n```python\ndef say_hello():\n  print(\"Hello!\")\n\n# The program ends here\n```",
        "options": [
          "The function is defined incorrectly.",
          "The function is never called.",
          "The `print` statement is wrong.",
          "Functions cannot be empty."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code should print 'Correct!', but it doesn't. What is the bug in the `if` statement's logic?\n\n```python\nanswer = \"A\"\nif answer == \"a\":\n  print(\"Correct!\")\n```",
        "options": [
          "The `==` operator is used incorrectly.",
          "The variable `answer` is invalid.",
          "String comparison is case-sensitive; 'A' is not the same as 'a'.",
          "The `print` statement should be outside the `if` block."
        ],
        "correctIndex": 2
      },
      {
        "question": "This code is supposed to check if a number is 5, but it has a syntax error. What's wrong?\n\n```python\nnum = 5\nif num = 5:\n  print(\"It's five!\")\n```",
        "options": [
          "The `if` statement is missing a colon `:`.",
          "The assignment operator `=` is used instead of the equality operator `==`.",
          "The `print` statement is not indented.",
          "The variable `num` cannot be compared to 5."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why does this code cause an IndentationError?\n\n```python\nprint(\"Start\")\n  print(\"Indented line\")\n```",
        "options": [
          "The first `print` statement is wrong.",
          "The second `print` statement is unnecessarily indented.",
          "There should be a semicolon after the first print.",
          "The word 'Indented' is a reserved keyword."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to create a list of three items. What is the syntax error?\n\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"\n```",
        "options": [
          "The list items should be numbers, not strings.",
          "The list is missing a closing square bracket `]`.",
          "The list should be created with parentheses `()`.",
          "There should be commas at the start of each line."
        ],
        "correctIndex": 1
      },
      {
        "question": "This loop should run 3 times, but it runs forever. What is the logical error?\n\n```python\ncount = 1\nwhile count < 3:\n  print(\"Looping\")\n```",
        "options": [
          "The `while` keyword is misspelled.",
          "The variable `count` never increases, so the condition is always true.",
          "The condition should be `count > 3`.",
          "The `print` statement is indented wrong."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code tries to convert user input to a number, but it crashes if the user types text. Why?\n\n```python\nuser_input = input(\"Enter a number: \")\nnumber = int(user_input)\n```",
        "options": [
          "The `input` function is used incorrectly.",
          "`int()` cannot convert text like \"hello\" to a number, causing a ValueError.",
          "The variable `number` is a bad name.",
          "The conversion should use `str()` instead of `int()`."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the error in this dictionary definition?\n\n```python\nperson = {\"name\": \"Alice\", \"age\" 30}\n```",
        "options": [
          "Dictionary keys must be numbers.",
          "A colon `:` is missing between `\"age\"` and `30`.",
          "The dictionary should use square brackets `[]`.",
          "The commas are in the wrong place."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to print the first three letters of 'Python'. What's the bug?\n\n```python\nlanguage = \"Python\"\nprint(language[0:2])\n```",
        "options": [
          "String indices start at 1, not 0.",
          "The slice `[0:2]` gets characters at index 0 and 1 ('Py'), not 0, 1, and 2.",
          "You cannot use slicing on strings.",
          "The variable `language` is not defined correctly."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why does this code only print 'Bye' once, instead of three times?\n\n```python\nfor i in range(3):\nprint(\"Bye\")\n```",
        "options": [
          "The `range(3)` is incorrect; it should be `range(1, 4)`.",
          "The `print` statement is not indented, so it's not part of the loop.",
          "The variable `i` is not used in the loop.",
          "The word 'Bye' is too short."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to calculate the average of two numbers. What's the logical error?\n\n```python\na = 10\nb = 20\naverage = a + b / 2\nprint(average)\n```",
        "options": [
          "The variables `a` and `b` are not defined.",
          "Due to operator precedence, `b / 2` is calculated first, then added to `a`.",
          "The `print` function cannot print decimals.",
          "The average should be calculated with `(a + b) * 2`."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the simple syntax error in this code?\n\n```python\nmessage = 'It's a sunny day'\n```",
        "options": [
          "The string uses single quotes, which are not allowed.",
          "The apostrophe in \"It's\" ends the string early.",
          "The variable name `message` is invalid.",
          "The string is not assigned correctly."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to be a simple counter. What's the bug?\n\n```python\ncount = 0\ncount = count + 1\nprint(\"Count:\" count)\n```",
        "options": [
          "The variable `count` cannot be used in its own assignment.",
          "A comma `,` is missing in the `print` function between the string and variable.",
          "The `+` operator should be used to combine the string and variable.",
          "The initial value of `count` should be 1."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why will this code never print 'Access Granted'?\n\n```python\npassword = \"12345\"\nif password == \"12345\":\n  # print(\"Access Granted\")\nprint(\"End of program\")\n```",
        "options": [
          "The condition `password == \"12345\"` is false.",
          "The `print(\"Access Granted\")` line is commented out, so it is ignored.",
          "The `if` statement is missing an `else` clause.",
          "The variable `password` is a number, not a string."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code tries to change the first item in a list. What's wrong?\n\n```python\nmy_list = (1, 2, 3)\nmy_list[0] = 99\n```",
        "options": [
          "The index `[0]` is out of range.",
          "`my_list` is a tuple, which is immutable and cannot be changed.",
          "The value `99` is too large for the list.",
          "You need a loop to change list items."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the error in this function definition?\n\n```python\ndef greet(name)\n  print(\"Hello,\" name)\n```",
        "options": [
          "The `def` keyword is misspelled.",
          "The function header is missing a colon `:`.",
          "The function parameter `name` is invalid.",
          "The `print` statement is incorrect."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to print numbers from 0 to 4. What's the logical error?\n\n```python\nfor i in range(5):\n  print(i)\n  i = i + 1 # This line is unnecessary\n```",
        "options": [
          "The `range(5)` should be `range(4)`.",
          "The `i = i + 1` is not needed because the `for` loop automatically increments `i`.",
          "The variable `i` should be called `index`.",
          "The `print` statement should be outside the loop."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why does this code cause a NameError?\n\n```python\ndef create_greeting():\n  greeting = \"Hello there!\"\n\ncreate_greeting()\nprint(greeting)\n```",
        "options": [
          "The function `create_greeting` is defined incorrectly.",
          "The variable `greeting` is defined inside the function and is not accessible outside of it.",
          "The function is called before the `print` statement.",
          "The string \"Hello there!\" has a grammar error."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to check if a number is even. What's the bug?\n\n```python\nnum = 4\nif num % 2 == 0:\nprint(\"Even\")\n```",
        "options": [
          "The modulus operator `%` is used for division instead of `/`.",
          "The `print` statement is not indented under the `if` statement.",
          "The condition should be `num % 2 != 0`.",
          "The variable `num` should be a string."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the simple typo in this code that causes an error?\n\n```python\nfirst_name = \"Bob\"\nlast_name = \"Smith\"\nfull_name = first_name + last_name\nprint(ful_name)\n```",
        "options": [
          "The `+` operator cannot be used for strings.",
          "The variable `full_name` is misspelled as `ful_name` in the print statement.",
          "The variables `first_name` and `last_name` need a space between them.",
          "The `print` function is missing parentheses."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to be a simple calculator. What is the logical error?\n\n```python\noperator = \"+\"\nresult = 10 operator 5\nprint(result)\n```",
        "options": [
          "The `operator` variable should be a number.",
          "You cannot use a variable as an operator like this; you need an `if` statement or `eval()`.",
          "The `print` statement should be `print(\"result\")`.",
          "The values 10 and 5 should be in quotes."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why does this code print `None` at the end?\n\n```python\ndef simple_function():\n  print(\"This is a function\")\n\nresult = simple_function()\nprint(result)\n```",
        "options": [
          "The function `simple_function` does not have a `return` statement, so it returns `None`.",
          "The variable `result` is not defined.",
          "The function call is missing parentheses.",
          "You cannot assign a function call to a variable."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is supposed to print each item in a list. What's the bug?\n\n```python\nitems = [\"book\", \"pen\", \"laptop\"]\nfor item in items\n  print(item)\n```",
        "options": [
          "The `for` loop uses `in` which is incorrect.",
          "A colon `:` is missing after the `for` statement.",
          "The list `items` should be a tuple.",
          "The variable `item` is a reserved keyword."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the error in this attempt to use an f-string?\n\n```python\nname = \"Charlie\"\nage = 25\nmessage = f\"Name: {name}, Age: {age}\nprint(message)\n```",
        "options": [
          "F-strings cannot contain commas.",
          "The f-string is missing a closing double quote.",
          "The variables should not be inside curly braces `{}`.",
          "The `print` statement is not needed."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to exit a loop when a condition is met. Why does it not work?\n\n```python\nfor i in range(10):\n  if i == 5:\n    break\n  print(i)\nprint(\"Loop ended.\")\n```",
        "options": [
          "The `break` statement is misspelled.",
          "The `print(i)` statement is after the `break`, so it will not print for `i=5`.",
          "The condition `i == 5` will never be true.",
          "The `break` statement should be outside the `if` block."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to create a list of squares. What's the logical error?\n\n```python\nnumbers = [1, 2, 3, 4]\nsquares = numbers ** 2\n```",
        "options": [
          "The `**` operator cannot be applied directly to a list.",
          "The list `numbers` contains strings.",
          "The variable `squares` is not defined correctly.",
          "The exponent operator `**` should be `^`."
        ],
        "correctIndex": 0
      },
      {
        "question": "Why does this code cause a SyntaxError?\n\n```python\nx = 5\nif x == 5:\nprint(\"x is 5\")\nelse:\nprint(\"x is not 5\")\n```",
        "options": [
          "The `==` operator is used incorrectly.",
          "The `else` statement is missing a colon `:`.",
          "The `print` statements under `if` and `else` are not indented.",
          "The variable `x` cannot be compared to 5."
        ],
        "correctIndex": 2
      },
      {
        "question": "This code is supposed to be a simple number checker. What's the bug?\n\n```python\nnumber = \"10\"\nif number > 5:\n  print(\"Number is greater than 5\")\n```",
        "options": [
          "The `if` statement is missing an `else` clause.",
          "You cannot compare a string `\"10\"` with an integer `5`.",
          "The `print` statement has a syntax error.",
          "The variable `number` should be a float."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the error in this list indexing operation?\n\n```python\nmy_list = [10, 20, 30]\nprint(my_list[3])\n```",
        "options": [
          "List indices start at 1, not 0.",
          "The index `[3]` is out of range; the last valid index is `[2]`.",
          "The list `my_list` is empty.",
          "The `print` function cannot print list items."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to double a number. What's wrong?\n\n```python\ndef double(x):\n  result = x * 2\n\nprint(double(5))\n```",
        "options": [
          "The function parameter `x` is not defined.",
          "The function `double` does not return the `result`, so `print` receives `None`.",
          "The multiplication operator `*` cannot be used with numbers.",
          "The function call `double(5)` is missing the `x=` keyword."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why does this code print `False` when it should print `True`?\n\n```python\nprint(\"python\" == \"Python\")\n```",
        "options": [
          "The `==` operator is case-sensitive, and the strings have different cases.",
          "The `print` function cannot print boolean values.",
          "The strings should be compared using `is` instead of `==`.",
          "One of the strings has a typo."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is supposed to print a message 5 times. What's the logical error?\n\n```python\ncount = 0\nwhile count < 5:\n  print(\"Hello!\")\n  count - 1 # Bug is here\n```",
        "options": [
          "The `while` loop condition is incorrect.",
          "The line `count - 1` subtracts 1 but doesn't assign it back to `count`, so it's an infinite loop.",
          "The `print` statement is indented wrong.",
          "The variable `count` should start at 5."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the syntax error in this `import` statement?\n\n```python\nimport math\nprint(math.pi)\n```",
        "options": [
          "The `math` module does not have a `pi` constant.",
          "The `import` statement is missing parentheses.",
          "There is no error; this code is correct.",
          "The `print` statement should be `print(\"math.pi\")`."
        ],
        "correctIndex": 2
      },
      {
        "question": "This code is supposed to check if a list is empty. What's the bug?\n\n```python\nmy_list = []\nif len(my_list) = 0:\n  print(\"List is empty\")\n```",
        "options": [
          "The assignment operator `=` is used instead of the equality operator `==`.",
          "The `len()` function cannot be used in an `if` condition.",
          "You should check `my_list == []` instead.",
          "The `print` statement is missing a comma."
        ],
        "correctIndex": 0
      },
      {
        "question": "Why does this code cause a TypeError?\n\n```python\ntext = \"100\"\nnumber = 5\ntotal = text + number\n```",
        "options": [
          "The variable `text` is a string and `number` is an integer; they cannot be added with `+`.",
          "The `+` operator is used for multiplication here.",
          "The variable `total` is not defined.",
          "The value of `text` should be 100 without quotes."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is supposed to print the type of a variable. What's the error?\n\n```python\nvalue = 3.14\nprint(type(value))\n```",
        "options": [
          "The `type` function is misspelled.",
          "The `print` function is missing the variable.",
          "There is no error; this code is correct.",
          "The value `3.14` should be in quotes."
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the logical error in this temperature check?\n\n```python\ntemp = 30\nif temp > 20 and < 30:\n  print(\"Perfect weather!\")\n```",
        "options": [
          "The `and` operator is used incorrectly.",
          "The condition must be written as `if temp > 20 and temp < 30:`.",
          "The variable `temp` is not a number.",
          "The `print` statement should be outside the `if` block."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to get the last character of a string. What's the bug?\n\n```python\nword = \"Hello\"\nlast_char = word[5]\nprint(last_char)\n```",
        "options": [
          "The index `[5]` is out of range; the last character is at index `[4]` or `[-1]`.",
          "Strings are immutable, so you cannot get a single character.",
          "The variable `word` should be a list of characters.",
          "The `print` function cannot print single characters."
        ],
        "correctIndex": 0
      },
      {
        "question": "Why does this code print an unexpected result when the input is 0?\n\n```python\nnum = 0\nif num = 0:\n  print(\"Number is zero\")\nelse:\n  print(\"Number is not zero\")\n```",
        "options": [
          "The assignment operator `=` is used in the condition instead of `==`.",
          "The `else` clause is missing.",
          "The variable `num` should be a string.",
          "The `print` statements are swapped."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is supposed to append an item to a list. What's wrong?\n\n```python\nshopping_list = [\"bread\", \"milk\"]\nshopping_list.append \"eggs\"\n```",
        "options": [
          "The `append` method requires parentheses: `shopping_list.append(\"eggs\")`.",
          "The list `shopping_list` is full.",
          "The item \"eggs\" is already in the list.",
          "You cannot append strings to a list."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the error in this `try-except` block?\n\n```python\ntry:\n  number = int(\"abc\")\n  print(number)\nexcept:\n  print(\"An error occurred\")\n```",
        "options": [
          "The `try` block is missing a colon `:`.",
          "The `except` block should specify the type of error, like `except ValueError:`.",
          "The string \"abc\" cannot be printed.",
          "There is no error; this code is correct and will print \"An error occurred\"."
        ],
        "correctIndex": 3
      },
      {
        "question": "This code is supposed to be a simple switch between two variables. What's the logical error?\n\n```python\na = 1\nb = 2\na = b\nb = a\nprint(a, b)\n```",
        "options": [
          "Both `a` and `b` become 2 because the original value of `a` is lost.",
          "The variables `a` and `b` are not defined correctly.",
          "The `print` statement cannot print two variables.",
          "You need a third temporary variable to correctly swap values."
        ],
        "correctIndex": 0
      },
      {
        "question": "Why does this code cause an AttributeError?\n\n```python\nname = \"Alice\"\nname.append(\" Smith\")\n```",
        "options": [
          "The `append` method is for lists, not strings. Use `+` or string formatting.",
          "The string `name` is too short.",
          "The `append` method is misspelled.",
          "Strings are immutable, so you cannot change them at all."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is supposed to print a countdown from 3 to 1. What's the bug?\n\n```python\ncount = 3\nwhile count > 0:\n  print(count)\n  count += 1\nprint(\"Go!\")\n```",
        "options": [
          "The `while` condition should be `count >= 0`.",
          "The operator `+= 1` increases the count, creating an infinite loop. It should be `-= 1`.",
          "The `print(\"Go!\")` statement is inside the loop.",
          "The variable `count` should start at 1."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the simple typo that causes this code to fail?\n\n```python\nfirst_num = 10\nsecond_num = 5\nproduct = first_num x second_num\nprint(product)\n```",
        "options": [
          "The multiplication operator is `*`, not `x`.",
          "The variables should be in uppercase.",
          "The `print` function is missing.",
          "The word `product` is a reserved keyword."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is supposed to print the first two items of a list. What's the error?\n\n```python\nitems = [\"cat\", \"dog\", \"bird\"]\nprint(items[0:1])\n```",
        "options": [
          "The slice `[0:1]` only gets the item at index 0 (\"cat\"). To get two items, use `[0:2]`.",
          "List slicing is not allowed in Python.",
          "The indices should start at 1.",
          "The `print` function cannot print slices."
        ],
        "correctIndex": 0
      },
      {
        "question": "Why does this code not print anything?\n\n```python\ntemperature = 35\nif temperature < 0:\n  print(\"Freezing!\")\nelif temperature > 30:\n  print(\"It's hot!\")\n```",
        "options": [
          "The `elif` condition is `temperature > 30`, which is true, so \"It's hot!\" should print. The code is correct.",
          "The `if` condition should be `temperature == 35`.",
          "The `print` statements are missing parentheses.",
          "The variable `temperature` is a string."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "level": "Medium",
    "points": 200,
    "penalty": 50,
    "questions": [
      {
        "question": "This function is meant to calculate the sum of numbers in a list, but it always returns nothing (`None`). What is the bug?\n\n```python\ndef calculate_sum(numbers):\n  total = 0\n  for num in numbers:\n    total += num\n  # Missing something here\n\nresult = calculate_sum([1, 2, 3])\n```",
        "options": [
          "The `total` variable should be initialized to 1.",
          "The loop is incorrect.",
          "The function is missing a `return` statement.",
          "You cannot add a number to `total` like that."
        ],
        "correctIndex": 2
      },
      {
        "question": "The following code is intended to print numbers from 0 to 4, but it runs forever. Why?\n\n```python\ni = 0\nwhile i < 5:\n  print(i)\n  # A step is missing\n```",
        "options": [
          "The condition `i < 5` is always true because `i` never increases.",
          "The `print(i)` statement is wrong.",
          "You should use a `for` loop instead of `while`.",
          "`i` should be initialized to 1."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is meant to find the largest number in a list of negative numbers, but it returns 0. What is the bug?\n\n```python\ndef find_max(numbers):\n  max_num = 0 # Problematic line\n  for num in numbers:\n    if num > max_num:\n      max_num = num\n  return max_num\n\nresult = find_max([-10, -5, -2, -1])\n```",
        "options": [
          "The `if` condition should be `num < max_num`.",
          "Initializing `max_num` to 0 is incorrect for a list of all negative numbers.",
          "The `return` statement is in the wrong place.",
          "The loop is not working correctly."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to print 'Access Granted' if `password` is 'secret', but it always prints it. What's the error?\n\n```javascript\nlet password = 'wrong';\n\nif (password = 'secret') { // A common typo\n  console.log('Access Granted');\n}\n```",
        "options": [
          "The variable `password` cannot be a string.",
          "The condition should use `==` or `===` for comparison, not `=`.",
          "There should be a semicolon after the condition.",
          "The string 'secret' needs to be in double quotes."
        ],
        "correctIndex": 1
      },
      {
        "question": "This function is meant to remove all even numbers from a list. Why does it fail to remove all of them, returning `[1, 3, 6, 5]`?\n\n```python\nnumbers = [1, 2, 4, 3, 6, 5]\nfor num in numbers:\n  if num % 2 == 0:\n    numbers.remove(num)\n```",
        "options": [
          "The `remove()` method is incorrect.",
          "Modifying a list while iterating over it skips elements.",
          "The condition `num % 2 == 0` is wrong for even numbers.",
          "The code needs a `return` statement."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why will this code cause an error when it runs?\n\n```python\ndef get_user_age():\n  age = 30\n  return age\n\nget_user_age()\nprint(age) # This line is the problem\n```",
        "options": [
          "The function `get_user_age` is not called correctly.",
          "The `print()` function cannot be used on numbers.",
          "The variable `age` is out of scope.",
          "The function must have parameters."
        ],
        "correctIndex": 2
      },
      {
        "question": "This code tries to print the last element of a list, but it throws an 'index out of range' error. Why?\n\n```python\nmy_list = [10, 20, 30]\nlength = len(my_list) # length is 3\nprint(my_list[length]) # Problem here\n```",
        "options": [
          "The `len()` function is calculating the wrong length.",
          "List indexes start at 0, so the last index is `length - 1`.",
          "You cannot use a variable to access a list index.",
          "The list is too short."
        ],
        "correctIndex": 1
      },
      {
        "question": "This factorial function is not working. What is the bug?\n\n```python\ndef factorial(n):\n  return n * factorial(n - 1)\n```",
        "options": [
          "It's missing the recursive step.",
          "It's missing a base case to stop the recursion.",
          "The multiplication `n * ...` is incorrect.",
          "The parameter should be `n + 1`."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is meant to create a full name from a dictionary, but it causes an error. Why?\n\n```python\nperson = {'first_name': 'John'}\nfull_name = person['first_name'] + ' ' + person['last_name']\n```",
        "options": [
          "You cannot add strings together.",
          "The dictionary is missing the key 'last_name'.",
          "Dictionary values cannot be accessed with square brackets.",
          "The space ' ' cannot be added."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the primary issue with this code, which is supposed to check a user's role?\n\n```javascript\nlet user = { role: 'editor' };\n\nfunction isAdmin() {\n  return user.role.toLowerCase() === 'admin';\n}\n\n// Later, the user object is changed\nuser = null;\n\nif (isAdmin()) { // This line will crash\n  console.log('Admin access');\n}\n```",
        "options": [
          "The `isAdmin` function is written incorrectly.",
          "The code tries to access a property (`.role`) on a `null` value.",
          "The `if` statement is wrong.",
          "The `toLowerCase()` method is the source of the error."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to create a new list with each number doubled, but it returns `[2, 4, 6]` instead of `[2, 4, 6, 8, 10]`. Why?\n\n```python\nnumbers = [1, 2, 3, 4, 5]\ndoubled = []\nfor i in range(3):\n  doubled.append(numbers[i] * 2)\n```",
        "options": [
          "The `range(3)` only loops 3 times instead of 5.",
          "The multiplication should be `* 3` instead of `* 2`.",
          "The `append()` method is incorrect.",
          "The list `numbers` has the wrong values."
        ],
        "correctIndex": 0
      },
      {
        "question": "This function is supposed to check if a number is prime, but it returns incorrect results. What's the bug?\n\n```python\ndef is_prime(n):\n  for i in range(2, n):\n    if n % i == 0:\n      return False\n  # Missing return statement for prime numbers\n```",
        "options": [
          "The loop should start from 1 instead of 2.",
          "The function doesn't return `True` when no divisors are found.",
          "The condition `n % i == 0` is backwards.",
          "It should check numbers up to `n/2` instead of `n`."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to count how many times each word appears, but it gives unexpected results. Why?\n\n```python\nwords = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']\ncounts = {}\nfor word in words:\n  counts[word] = 1  # Problem here\n```",
        "options": [
          "The dictionary `counts` should be a list.",
          "It sets each word's count to 1 instead of incrementing.",
          "The loop is iterating incorrectly.",
          "The words should be sorted first."
        ],
        "correctIndex": 1
      },
      {
        "question": "This recursive function to calculate Fibonacci numbers is extremely slow for larger inputs. Why?\n\n```python\ndef fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n-1) + fibonacci(n-2)\n```",
        "options": [
          "It uses recursion instead of iteration.",
          "It recalculates the same values multiple times.",
          "The base case is incorrect.",
          "It should use a while loop instead."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code is supposed to reverse a string, but it returns the original string. Why?\n\n```python\ndef reverse_string(s):\n  result = ''\n  for char in s:\n    result = char + result  # Bug here\n  return result\n```",
        "options": [
          "It should be `result = result + char` instead.",
          "The loop should go backwards.",
          "The variable `result` should be a list.",
          "Strings are immutable, so this approach won't work."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code is meant to find common elements between two lists, but it's inefficient for large lists. Why?\n\n```python\ndef find_common(list1, list2):\n  common = []\n  for item1 in list1:\n    for item2 in list2:\n      if item1 == item2:\n        common.append(item1)\n  return common\n```",
        "options": [
          "It uses nested loops, giving O(n²) time complexity.",
          "The `append()` method is slow.",
          "It should use a while loop instead.",
          "The comparison `item1 == item2` is incorrect."
        ],
        "correctIndex": 0
      },
      {
        "question": "This class is supposed to represent a bank account, but the balance can be directly modified. What's the issue?\n\n```python\nclass BankAccount:\n  def __init__(self, balance):\n    self.balance = balance\n\naccount = BankAccount(100)\naccount.balance = 1000  # Can directly modify!\n```",
        "options": [
          "The class is missing methods.",
          "The balance attribute should be private (prefixed with `_`).",
          "The constructor is incorrect.",
          "It should use a dictionary instead of a class."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code uses a default mutable argument. What unexpected behavior might occur?\n\n```python\ndef add_item(item, items=[]):\n  items.append(item)\n  return items\n\nresult1 = add_item('apple')\nresult2 = add_item('banana')  # result2 will be ['apple', 'banana']!\n```",
        "options": [
          "The function doesn't return anything.",
          "Default arguments are evaluated once when the function is defined.",
          "The `append()` method is used incorrectly.",
          "The parameter `item` should come after `items`."
        ],
        "correctIndex": 1
      },
      {
        "question": "This asynchronous JavaScript code doesn't work as expected. What's the issue?\n\n```javascript\nasync function getData() {\n  let data = await fetch('/api/data');\n  console.log(data.json());\n}\n\ngetData();\nconsole.log('Finished');\n```",
        "options": [
          "The `await` keyword is missing.",
          "'Finished' will log before the data is fetched.",
          "The `fetch` function is incorrect.",
          "The `async` keyword should be on the console.log."
        ],
        "correctIndex": 1
      },
      {
        "question": "This Python code using threads may have race conditions. Why?\n\n```python\nimport threading\n\ncounter = 0\n\ndef increment():\n  global counter\n  for _ in range(1000):\n    counter += 1\n\nthreads = []\nfor i in range(10):\n  thread = threading.Thread(target=increment)\n  threads.append(thread)\n  thread.start()\n\nfor thread in threads:\n  thread.join()\n\nprint(counter)  # May not be 10000\n```",
        "options": [
          "Threads are not started correctly.",
          "The `counter += 1` operation is not atomic.",
          "The range should be larger.",
          "The global keyword is misused."
        ],
        "correctIndex": 1
      },
      {
        "question": "This React component has an infinite loop. Why?\n\n```javascript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  setCount(count + 1);  // Problem here\n  \n  return <div>Count: {count}</div>;\n}\n```",
        "options": [
          "The state update should use a callback.",
          "The state update triggers a re-render, which calls setCount again.",
          "The useState hook is used incorrectly.",
          "The return statement is in the wrong place."
        ],
        "correctIndex": 1
      },
      {
        "question": "This SQL query is vulnerable to injection attacks. Why?\n\n```python\nuser_id = input(\"Enter user ID: \")\nquery = f\"SELECT * FROM users WHERE id = {user_id}\"\n```",
        "options": [
          "The f-string is inefficient.",
          "It directly concatenates user input into the query.",
          "The SELECT statement is wrong.",
          "It should use WHERE id LIKE instead of =."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code attempts deep copying but fails. Why?\n\n```python\nimport copy\n\noriginal = {'data': [1, 2, 3]}\nshallow_copy = copy.copy(original)\nshallow_copy['data'].append(4)\n\nprint(original['data'])  # [1, 2, 3, 4] - unexpected!\n```",
        "options": [
          "The copy module is not imported correctly.",
          "`copy.copy()` creates a shallow copy, not deep copy.",
          "Dictionaries cannot be copied.",
          "The append method doesn't work on copied lists."
        ],
        "correctIndex": 1
      },
      {
        "question": "This generator function consumes too much memory. Why?\n\n```python\ndef get_large_list():\n  result = []\n  for i in range(1000000):\n    result.append(i * 2)\n  return result\n```",
        "options": [
          "The range is too large.",
          "It builds the entire list in memory before returning.",
          "The multiplication is inefficient.",
          "It should use a while loop."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code using `setTimeout` in JavaScript has a common closure issue. What will it output?\n\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(function() {\n    console.log(i);\n  }, 100);\n}\n```",
        "options": [
          "0, 1, 2",
          "3, 3, 3",
          "0, 0, 0",
          "1, 2, 3"
        ],
        "correctIndex": 1
      },
      {
        "question": "This Python decorator doesn't work as expected. What's wrong?\n\n```python\ndef my_decorator(func):\n  def wrapper():\n    print(\"Before function\")\n    func()\n    print(\"After function\")\n  return wrapper\n\n@my_decorator\ndef say_hello(name):\n  print(f\"Hello {name}\")\n\nsay_hello(\"Alice\")  # Error!\n```",
        "options": [
          "The decorator doesn't handle function arguments.",
          "The @ symbol is used incorrectly.",
          "The wrapper function should return func().",
          "Decorators cannot be used on functions with parameters."
        ],
        "correctIndex": 0
      },
      {
        "question": "This code using `map` and `filter` is hard to read. What's a better approach?\n\n```python\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nresult = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, numbers)))\n```",
        "options": [
          "Use a list comprehension instead.",
          "The lambdas should be named functions.",
          "Use reduce instead of map and filter.",
          "The filter should come after map."
        ],
        "correctIndex": 0
      },
      {
        "question": "This React effect hook runs on every render. How to fix it?\n\n```javascript\nuseEffect(() => {\n  fetchData();\n}); // Missing dependency array\n```",
        "options": [
          "Add an empty dependency array: `[]`",
          "Remove the useEffect hook.",
          "Wrap fetchData in useCallback.",
          "Move fetchData outside the component."
        ],
        "correctIndex": 0
      },
      {
        "question": "This Python context manager implementation is incorrect. What's missing?\n\n```python\nclass MyContext:\n  def __enter__(self):\n    print(\"Entering context\")\n    return self\n  \n  # Missing __exit__ method\n```",
        "options": [
          "Missing `__init__` method.",
          "Missing `__exit__` method for cleanup.",
          "Missing `__del__` method.",
          "The return statement is wrong."
        ],
        "correctIndex": 1
      },
      {
        "question": "This code has a memory leak in JavaScript. Why?\n\n```javascript\nfunction createClosure() {\n  let largeData = new Array(1000000).fill('data');\n  return function() {\n    return largeData.length;\n  };\n}\n\nlet closures = [];\nfor (let i = 0; i < 100; i++) {\n  closures.push(createClosure());\n}\n```",
        "options": [
          "The array is too large.",
          "Each closure maintains reference to `largeData`.",
          "The for loop is inefficient.",
          "Closures cannot be stored in arrays."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "level": "Hard",
    "points": 300,
    "penalty": 50,
    "questions": [
      {
        "question": "The following binary search implementation has a bug that can cause an infinite loop if the target element is not present. What is the correct fix?\n\n```python\ndef binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid # Bug is here\n    return -1\n```",
        "options": [
          "The line `high = mid` should be `high = mid - 1`",
          "The loop condition should be `while low < high`",
          "The line `low = mid + 1` should be `low = mid`",
          "The `mid` calculation is wrong and should be `mid = (low + high) // 2`"
        ],
        "correctIndex": 0
      },
      {
        "question": "This function to reverse a linked list is buggy. It enters an infinite loop because it loses the reference to the next node. How do you fix it?\n\n```python\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head):\n    prev = None\n    current = head\n    while current:\n        current.next = prev # Loses the rest of the list\n        prev = current\n        current = current.next # Error: current.next is now prev\n    return prev\n```",
        "options": [
          "Change the loop to `while current.next:`",
          "Store `current.next` in a temporary variable before reassigning it",
          "Initialize `prev` as `prev = head`",
          "The final return should be `current` instead of `prev`"
        ],
        "correctIndex": 1
      },
      {
        "question": "This recursive DFS function for a graph will cause a stack overflow on graphs with cycles. What is the fix?\n\n```python\ndef dfs_util(graph, v, visited):\n    # Bug: Node is not marked as visited at the correct time\n    print(v)\n    for neighbor in graph.get(v, []):\n        if neighbor not in visited:\n             # This is too late, leading to re-visiting\n            visited.add(v)\n            dfs_util(graph, neighbor, visited)\n```",
        "options": [
          "The `visited` set should be a list",
          "Add `visited.add(v)` as the first line inside the function, before the loop",
          "Change `if neighbor not in visited:` to `if visited:`",
          "Initialize `visited = set()` inside the function"
        ],
        "correctIndex": 1
      },
      {
        "question": "This `max_heapify` function for a 0-indexed array has a bug in calculating child indices. What is the correct calculation for the left and right children of index `i`?\n\n```python\ndef max_heapify(arr, n, i):\n    largest = i\n    left = 2 * i      # Bug\n    right = 2 * i + 1 # Bug\n\n    if left < n and arr[left] > arr[largest]:\n        largest = left\n    if right < n and arr[right] > arr[largest]:\n        largest = right\n    # ... rest of logic\n```",
        "options": [
          "`left = i - 1`, `right = i + 1`",
          "`left = i // 2`, `right = i // 2 + 1`",
          "`left = 2 * i + 1`, `right = 2 * i + 2`",
          "The calculation is correct for a 1-indexed array, not 0-indexed"
        ],
        "correctIndex": 2
      },
      {
        "question": "The following `two_sum` function fails for inputs like `[3, 3]` with `target=6` because it finds the same index twice. How do you fix this logical error?\n\n```python\ndef two_sum(nums, target):\n    num_map = {}\n    for i, num in enumerate(nums):\n        num_map[num] = i # Adds current number to map first\n        complement = target - num\n        if complement in num_map and num_map[complement] != i:\n            return [num_map[complement], i]\n    return []\n```",
        "options": [
          "Remove the check `num_map[complement] != i`",
          "Use a list instead of a dictionary for `num_map`",
          "Check for the complement in the map *before* adding the current number to it",
          "Sort the `nums` array before iterating"
        ],
        "correctIndex": 2
      },
      {
        "question": "This memoized Fibonacci function is not efficient. It correctly calculates the result but doesn't actually benefit from memoization because it fails to return the stored value. What is the fix?\n\n```python\ndef fib(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    \n    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)\n    # Bug: Function ends without returning memo[n]\n```",
        "options": [
          "The base case should be `if n <= 2: return 1`",
          "The `memo` dictionary should be initialized outside the function",
          "The function must `return memo[n]` after calculating and storing the value",
          "The first line should be `if n == 0: return 0`"
        ],
        "correctIndex": 2
      },
      {
        "question": "The `dequeue` method in this two-stack queue implementation will raise an error if `s2` (the output stack) is empty. What is the correct order of operations?\n\n```python\nclass Queue:\n    def __init__(self):\n        self.s1 = [] # for enqueue\n        self.s2 = [] # for dequeue\n\n    def enqueue(self, val):\n        self.s1.append(val)\n\n    def dequeue(self):\n        # Bug: Tries to pop before checking if s2 is empty and refilling\n        val = self.s2.pop()\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        return val\n```",
        "options": [
          "The `enqueue` method should push to `s2` directly",
          "First, check if `s2` is empty. If so, pour from `s1`. Then, pop from `s2`.",
          "Both stacks should be combined into one list",
          "If `s2` is empty, it should return `None` immediately"
        ],
        "correctIndex": 1
      },
      {
        "question": "This implementation of Kadane's algorithm fails for arrays containing only negative numbers (e.g., `[-2, -1]`), returning 0 instead of the correct `-1`. What is the fix?\n\n```python\ndef max_subarray_sum(nums):\n    max_so_far = -float('inf')\n    current_max = 0\n    for num in nums:\n        current_max += num\n        if max_so_far < current_max:\n            max_so_far = current_max\n        if current_max < 0:\n            current_max = 0 # Bug is here\n    return max_so_far\n```",
        "options": [
          "Initialize `max_so_far = 0`",
          "Initialize `current_max = -float('inf')`",
          "The update for `current_max` should be `current_max = max(num, current_max + num)`",
          "The final return should be `max(max_so_far, 0)`"
        ],
        "correctIndex": 2
      },
      {
        "question": "This function for deleting a node from a BST has a bug when handling a node with two children. It correctly copies the inorder successor's value but leaves the original successor node in the tree. What is the missing step?\n\n```python\ndef deleteNode(root, key):\n    # ... (code for finding the node to delete)\n    if root.key == key:\n        # ... (code for 0 or 1 child)\n        if root.left and root.right:\n            successor = find_min_node(root.right)\n            root.key = successor.key\n            # Bug: The original successor node is now a duplicate and must be removed\n            # MISSING STEP HERE\n    # ... (rest of the recursive calls)\n    return root\n```",
        "options": [
          "Set `successor = None`",
          "Recursively call `deleteNode` on the right subtree to remove the node with `successor.key`",
          "Set `root.right = successor.right`",
          "Recursively call `deleteNode` on the left subtree to remove the predecessor"
        ],
        "correctIndex": 1
      },
      {
        "question": "The `merge_sort` function below has a bug in its recursive base case that will cause an infinite recursion for certain inputs. What should the base case be to handle all arrays correctly?\n\n```python\ndef merge_sort(arr):\n    # Buggy base case\n    if len(arr) == 1:\n        return arr\n    if not arr:\n        return [] # Handles empty but not single element properly\n\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    # ... call to merge function\n```",
        "options": [
          "The base case should be `if len(arr) == 0:`",
          "The base case should be `if len(arr) <= 1: return arr`",
          "The base case is unnecessary; the split `arr[:mid]` will handle it",
          "The base case should be `if len(arr) == 2: return sorted(arr)`"
        ],
        "correctIndex": 1
      },
      {
        "question": "This implementation of Dijkstra's algorithm fails to correctly update distances when a shorter path is found. What is the bug in the relaxation step?\n\n```python\ndef dijkstra(graph, start):\n    distances = {node: float('inf') for node in graph}\n    distances[start] = 0\n    pq = [(0, start)]\n    \n    while pq:\n        current_dist, current_node = heapq.heappop(pq)\n        \n        for neighbor, weight in graph[current_node].items():\n            distance = current_dist + weight\n            # Bug: Missing check if this path is better\n            distances[neighbor] = distance\n            heapq.heappush(pq, (distance, neighbor))\n    \n    return distances\n```",
        "options": [
          "The priority queue should be a stack instead",
          "Add check: `if distance < distances[neighbor]:` before updating",
          "The weight should be multiplied by -1 for max-heap behavior",
          "The algorithm needs to track visited nodes to avoid cycles"
        ],
        "correctIndex": 1
      },
      {
        "question": "This LRU Cache implementation has a race condition in a multi-threaded environment. What synchronization mechanism is needed?\n\n```python\nclass LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.order = deque()\n    \n    def get(self, key):\n        if key in self.cache:\n            self.order.remove(key)\n            self.order.append(key)\n            return self.cache[key]\n        return -1\n    \n    def put(self, key, value):\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.capacity:\n            oldest = self.order.popleft()\n            del self.cache[oldest]\n        self.cache[key] = value\n        self.order.append(key)\n```",
        "options": [
          "Add a `threading.Lock()` and acquire/release it around critical sections",
          "Use `asyncio` instead of threading",
          "The deque should be replaced with a list",
          "Add a `time.sleep(0)` after each operation"
        ],
        "correctIndex": 0
      },
      {
        "question": "This thread pool implementation has a bug where worker threads never exit. What condition is missing in the worker loop?\n\n```python\nclass ThreadPool:\n    def __init__(self, num_threads):\n        self.tasks = queue.Queue()\n        self.workers = []\n        for _ in range(num_threads):\n            worker = threading.Thread(target=self._worker)\n            worker.start()\n            self.workers.append(worker)\n    \n    def _worker(self):\n        while True:  # Bug: Infinite loop\n            task = self.tasks.get()\n            task()\n            self.tasks.task_done()\n```",
        "options": [
          "Add `if task is None: break` after `self.tasks.get()`",
          "The loop should be `while self.tasks.empty():`",
          "Add `time.sleep(1)` inside the loop",
          "The workers should be daemon threads"
        ],
        "correctIndex": 0
      },
      {
        "question": "This function to detect cycles in a directed graph using DFS has a bug where it incorrectly reports cycles. What's missing in the visited tracking?\n\n```python\ndef has_cycle(graph):\n    visited = set()\n    \n    def dfs(node):\n        if node in visited:\n            return True  # Bug: Always returns True for visited nodes\n        visited.add(node)\n        for neighbor in graph.get(node, []):\n            if dfs(neighbor):\n                return True\n        return False\n    \n    for node in graph:\n        if dfs(node):\n            return True\n    return False\n```",
        "options": [
          "Need a separate `recursion_stack` set to track nodes in current DFS path",
          "The `visited` set should be cleared after each DFS call",
          "Remove nodes from `visited` after processing their neighbors",
          "The DFS should be iterative instead of recursive"
        ],
        "correctIndex": 0
      },
      {
        "question": "This implementation of the A* search algorithm has a bug in the heuristic function that makes it non-admissible. What's the issue?\n\n```python\ndef a_star(start, goal, graph):\n    def heuristic(node):\n        # Manhattan distance\n        return abs(node[0] - goal[0]) + abs(node[1] - goal[1]) * 2  # Bug here\n    \n    # ... rest of A* implementation\n```",
        "options": [
          "The heuristic overestimates the actual cost, violating admissibility",
          "The heuristic should be Euclidean distance instead",
          "The multiplication by 2 should be removed to make it admissible",
          "The heuristic should return 0 for all nodes"
        ],
        "correctIndex": 0
      },
      {
        "question": "This producer-consumer implementation has a bug that can cause deadlock. What's the issue with the lock acquisition order?\n\n```python\nclass Buffer:\n    def __init__(self, capacity):\n        self.buffer = []\n        self.capacity = capacity\n        self.lock = threading.Lock()\n        self.not_empty = threading.Condition(self.lock)\n        self.not_full = threading.Condition(self.lock)\n    \n    def produce(self, item):\n        with self.not_full:  # Bug: Wrong condition variable\n            while len(self.buffer) >= self.capacity:\n                self.not_full.wait()\n            self.buffer.append(item)\n            self.not_empty.notify()\n    \n    def consume(self):\n        with self.not_empty:  # Bug: Wrong condition variable\n            while len(self.buffer) == 0:\n                self.not_empty.wait()\n            item = self.buffer.pop(0)\n            self.not_full.notify()\n            return item\n```",
        "options": [
          "Both methods should use the same lock object, not condition variables",
          "The condition variables should use separate locks",
          "Both methods should acquire `self.lock` directly, not the condition variables",
          "The `with` statements should use `self.lock`, and condition waits should be inside"
        ],
        "correctIndex": 3
      },
      {
        "question": "This function to serialize a binary tree has a bug when handling null nodes. What's the correct way to represent null nodes in the serialization?\n\n```python\ndef serialize(root):\n    if not root:\n        return \"\"\n    \n    result = []\n    queue = deque([root])\n    while queue:\n        node = queue.popleft()\n        if node:\n            result.append(str(node.val))\n            queue.append(node.left)\n            queue.append(node.right)\n        else:\n            result.append(\"null\")  # Bug: This breaks the level order\n    return \",\".join(result)\n```",
        "options": [
          "Don't append null nodes to the queue, only non-null ones",
          "The serialization should use pre-order traversal instead",
          "Continue processing until the queue is empty, including null markers",
          "Use a special character instead of \"null\""
        ],
        "correctIndex": 2
      },
      {
        "question": "This function to find the k-th smallest element in a BST has a bug in the in-order traversal counter. What's the correct way to track the count?\n\n```python\ndef kth_smallest(root, k):\n    count = 0\n    result = None\n    \n    def inorder(node):\n        nonlocal count, result\n        if not node:\n            return\n        \n        inorder(node.left)\n        count += 1\n        if count == k:\n            result = node.val\n            return\n        inorder(node.right)  # Bug: Continues traversal after finding result\n    \n    inorder(root)\n    return result\n```",
        "options": [
          "Add a check after setting result: `if result is not None: return`",
          "The count should start from k and decrement",
          "Use iterative DFS instead of recursion",
          "The function should return the node instead of the value"
        ],
        "correctIndex": 0
      },
      {
        "question": "This implementation of the Rabin-Karp string search algorithm has a bug in the rolling hash calculation. What's wrong with the hash update when sliding the window?\n\n```python\ndef rabin_karp(text, pattern):\n    n, m = len(text), len(pattern)\n    if m > n:\n        return -1\n    \n    base = 256\n    mod = 101\n    \n    pattern_hash = 0\n    text_hash = 0\n    \n    # Calculate initial hashes\n    for i in range(m):\n        pattern_hash = (pattern_hash * base + ord(pattern[i])) % mod\n        text_hash = (text_hash * base + ord(text[i])) % mod\n    \n    for i in range(n - m + 1):\n        if text_hash == pattern_hash:\n            if text[i:i+m] == pattern:\n                return i\n        \n        if i < n - m:\n            # Update rolling hash - BUG HERE\n            text_hash = (text_hash - ord(text[i]) * (base ** (m-1))) % mod\n            text_hash = (text_hash * base + ord(text[i+m])) % mod\n    \n    return -1\n```",
        "options": [
          "The modulo operation should be applied after the subtraction",
          "The power calculation `base ** (m-1)` should be precomputed and taken modulo `mod`",
          "The hash should use a different base value",
          "The comparison should happen before the hash update"
        ],
        "correctIndex": 1
      },
      {
        "question": "This function to calculate the number of islands in a grid has a bug where it doesn't mark all connected land cells as visited. What's missing in the BFS?\n\n```python\ndef num_islands(grid):\n    if not grid:\n        return 0\n    \n    rows, cols = len(grid), len(grid[0])\n    visited = set()\n    islands = 0\n    \n    def bfs(r, c):\n        queue = deque([(r, c)])\n        visited.add((r, c))\n        \n        while queue:\n            row, col = queue.popleft()\n            # Check neighbors\n            for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:\n                nr, nc = row + dr, col + dc\n                if 0 <= nr < rows and 0 <= nc < cols:\n                    if grid[nr][nc] == '1' and (nr, nc) not in visited:\n                        queue.append((nr, nc))\n                        # Bug: Missing visited.add((nr, nc))\n    \n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1' and (r, c) not in visited:\n                bfs(r, c)\n                islands += 1\n    \n    return islands\n```",
        "options": [
          "Add `visited.add((nr, nc))` inside the neighbor check",
          "The BFS should use DFS instead",
          "The visited set should be cleared for each island",
          "The grid should be modified in-place instead of using a visited set"
        ],
        "correctIndex": 0
      }
    ]
  }
];

const roundDurations = [10 * 60, 10 * 60, 10 * 60]; // All levels: 10 minutes each
let currentRoundIndex = 0,
  currentQuestionIndex = 0,
  totalScore = 0,
  timerInterval,
  userDetails = {},
  selectedAnswerIndex = -1,
  roundStartTime = 0,
  quizEndedByTimeout = false,
  questionsPerRound = [10, 3, 2], // Easy: 10, Medium: 3, Hard: 2
  currentRoundQuestions = [],
  currentQuestionInRound = 0;

const roundResults = [
  { points: 0, timeTaken: 0, attempted: 0, correct: 0, incorrect: 0 },
  { points: 0, timeTaken: 0, attempted: 0, correct: 0, incorrect: 0 },
  { points: 0, timeTaken: 0, attempted: 0, correct: 0, incorrect: 0 }
];

// =========================================================
// QUIZ FUNCTIONS
// =========================================================
function showView(viewId) {
  document.querySelectorAll('.view').forEach(viewEl => {
      viewEl.classList.add('hidden');
      viewEl.classList.remove('active');
  });
  const target = document.getElementById(viewId);
  if (target) {
      target.classList.remove('hidden');
      target.classList.add('active');
  }
}

function startQuiz() {
  userDetails = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      division: document.getElementById('division').value,
      branch: document.getElementById('branch').value,
      year: document.getElementById('year').value
  };
  // Show timer when quiz starts
  const timerBox = document.getElementById('quiz-timer');
  if (timerBox) {
      timerBox.classList.remove('hidden');
  }
  showView('quiz-view');
  startNewRound();
}

function startNewRound() {
  const currentRound = quizData[currentRoundIndex];
  
  // Select random questions for this round based on level
  const questionCount = questionsPerRound[currentRoundIndex];
  currentRoundQuestions = getRandomQuestions(currentRound.questions, questionCount);
  currentQuestionInRound = 0;
  
  roundStartTime = Date.now();
  startTimer(roundDurations[currentRoundIndex]);
  loadQuestion();
}

function getRandomQuestions(questions, count) {
  // For Easy level with 10 questions, use all available questions
  if (count >= questions.length) {
    return [...questions];
  }
  
  // For other levels, select random questions without repetition
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function loadQuestion() {
  selectedAnswerIndex = -1;
  const currentRound = quizData[currentRoundIndex];
  const questionData = currentRoundQuestions[currentQuestionInRound];
  const optionsContainer = document.getElementById('options-container');

  const questionCount = questionsPerRound[currentRoundIndex];
  document.getElementById('round-title').textContent = `Round ${currentRoundIndex + 1}: ${currentRound.level} (Question ${currentQuestionInRound + 1}/${questionCount})`;
  document.getElementById('question-text').innerHTML = renderMarkdownLite(questionData.question);
  optionsContainer.innerHTML = '';
  document.getElementById('next-btn').classList.add('hidden');

  questionData.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-button';
      btn.innerHTML = renderMarkdownLite(option);
      btn.onclick = () => selectAnswer(btn, index);
      optionsContainer.appendChild(btn);
  });
}

function selectAnswer(btn, index) {
  if (selectedAnswerIndex !== -1) return;
  selectedAnswerIndex = index;
  document.querySelectorAll('.option-button').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
  const currentRound = quizData[currentRoundIndex];
  const questionData = currentRoundQuestions[currentQuestionInRound];
  const isCorrect = selectedAnswerIndex === questionData.correctIndex;

  roundResults[currentRoundIndex].attempted++;

  if (isCorrect) {
      totalScore += currentRound.points;
      roundResults[currentRoundIndex].points += currentRound.points;
      roundResults[currentRoundIndex].correct++;
  } else {
      totalScore -= currentRound.penalty;
      roundResults[currentRoundIndex].points -= currentRound.penalty;
      roundResults[currentRoundIndex].incorrect++;
  }

  // Move to next question in current round
  currentQuestionInRound++;

  if (currentQuestionInRound >= currentRoundQuestions.length) {
      // All questions in this round completed
      finishRound();
  } else {
      // Load next question in same round
      loadQuestion();
  }
}

function finishRound() {
  if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
  }
  recordRoundTime();
  
  // Show round completion dialog with continue/stop options
  showRoundCompleteDialog();
}

function showRoundCompleteDialog() {
  const currentRound = quizData[currentRoundIndex];
  const dialog = document.createElement('div');
  dialog.className = 'round-complete-dialog';
  dialog.innerHTML = `
      <div class="dialog-content">
          <h2>Round ${currentRoundIndex + 1} Complete!</h2>
          <p>Your current score: <strong>${totalScore} points</strong></p>
          <p>Round ${currentRoundIndex + 1} Results:</p>
          <ul>
              <li>Correct: ${roundResults[currentRoundIndex].correct}</li>
              <li>Incorrect: ${roundResults[currentRoundIndex].incorrect}</li>
              <li>Points earned this round: ${roundResults[currentRoundIndex].points}</li>
          </ul>
          <div class="dialog-buttons">
              <button id="continue-btn" class="btn-primary">Continue to Next Round</button>
              <button id="stop-btn" class="btn-secondary">Stop Game & See Results</button>
          </div>
      </div>
  `;
  
  document.body.appendChild(dialog);

  // Use event delegation to avoid potential timing issues
  dialog.addEventListener('click', (e) => {
    if (e.target.id === 'continue-btn') {
      document.body.removeChild(dialog);
      proceedToNextRound();
    } else if (e.target.id === 'stop-btn') {
      document.body.removeChild(dialog);
      showResults();
    }
  });
}

function proceedToNextRound() {
  if (currentRoundIndex >= quizData.length - 1) {
      showResults();
  } else {
      currentRoundIndex++;
      startNewRound();
  }
}

// =========================================================
// TIMER & RESULTS
// =========================================================
function startTimer(duration) {
  let timeLeft = duration;
  const timeDisplay = document.getElementById('time-display');
  
  // Clear any existing timer
  if (timerInterval) {
      clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      if (timeDisplay) {
          timeDisplay.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
      }

      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          quizEndedByTimeout = true;
          finishRound();
      }
      timeLeft--;
  }, 1000);
}

function recordRoundTime() {
  const timeTaken = Math.round((Date.now() - roundStartTime) / 1000);
  roundResults[currentRoundIndex].timeTaken = timeTaken;
}

function showResults() {
  showView('score-view');
  displayScorecard();
  sendResultsToCSV();
}

// =========================================================
// LIGHTWEIGHT MARKDOWN RENDERING (code blocks + inline code)
// =========================================================
function renderMarkdownLite(text) {
  if (!text) return '';
  const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const withBlockCode = escaped.replace(/```([\s\S]*?)```/g, (m, code) => {
      return `<pre><code>${code}</code></pre>`;
  });

  const withInlineCode = withBlockCode.replace(/`([^`]+)`/g, (m, code) => {
      return `<code>${code}</code>`;
  });

  return withInlineCode;
}

function displayScorecard() {
  document.getElementById('final-score').textContent = totalScore;
  document.getElementById('user-info-display').innerHTML = `
      <p><strong>Name:</strong> ${userDetails.name}</p>
      <p><strong>Phone:</strong> ${userDetails.phone}</p>
      <p><strong>Branch:</strong> ${userDetails.branch} | <strong>Division:</strong> ${userDetails.division} | <strong>Year:</strong> ${userDetails.year}</p>
  `;

  const tableBody = document.querySelector('#scorecard-table tbody');
  tableBody.innerHTML = '';

  quizData.forEach((round, idx) => {
      const res = roundResults[idx];
      const questionsInRound = idx <= currentRoundIndex ? questionsPerRound[idx] : 0;
      tableBody.innerHTML += `
          <tr>
              <td>Round ${idx + 1}</td>
              <td>${round.level}</td>
              <td>${res.points} points</td>
              <td>${res.timeTaken}s</td>
              <td>${res.correct} / ${questionsInRound}</td>
          </tr>
      `;
  });
}

// =========================================================
// SEND RESULTS TO CSV (via Flask endpoint)
// =========================================================
function sendResultsToCSV() {
  const totalTimeTaken = roundResults.reduce((sum, r) => sum + r.timeTaken, 0);
  const levelCompleted = currentRoundIndex + 1;

  const data = {
      username: userDetails.name,
      division: userDetails.division,
      year: userDetails.year,
      phone_no: userDetails.phone,
      total_time_taken: totalTimeTaken,
      level_completed: levelCompleted,
      points: totalScore
  };

  fetch('/save_results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  }).then(res => console.log('Results saved!'))
    .catch(err => console.error(err));
}
