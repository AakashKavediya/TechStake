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
        "points": 20,
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
          }
        ]
    },
  {
    "level": "Medium",
    "points": 20,
    "questions": [
      {
        "question": "This function is meant to calculate the sum of numbers in a list, but it always returns nothing (`None` or `undefined`). What is the bug?\n\n```python\ndef calculate_sum(numbers):\n  total = 0\n  for num in numbers:\n    total += num\n  # Missing something here\n\nresult = calculate_sum([1, 2, 3])\n```",
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
          "The condition `i < 5` is always true.",
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
      }
    ]
  },
  {
    "level": "Hard",
    "points": 20,
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
      }
    ]
  }
];

const roundDurations = [5 * 60, 5 * 60, 10 * 60];
let currentRoundIndex = 0,
    currentQuestionIndex = 0,
    totalScore = 0,
    timerInterval,
    userDetails = {},
    selectedAnswerIndex = -1,
    roundStartTime = 0,
    quizEndedByTimeout = false;

const roundResults = [
    { points: 0, timeTaken: 0, attempted: 0 },
    { points: 0, timeTaken: 0, attempted: 0 },
    { points: 0, timeTaken: 0, attempted: 0 }
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
    currentQuestionIndex = Math.floor(Math.random() * currentRound.questions.length);
    roundStartTime = Date.now();
    startTimer(roundDurations[currentRoundIndex]);
    loadQuestion();
}

function loadQuestion() {
    selectedAnswerIndex = -1;
    const currentRound = quizData[currentRoundIndex];
    const questionData = currentRound.questions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options-container');

    document.getElementById('round-title').textContent = `Round ${currentRoundIndex + 1}: ${currentRound.level}`;
    // Render question with simple markdown (code blocks and inline code)
    document.getElementById('question-text').innerHTML = renderMarkdownLite(questionData.question);
    optionsContainer.innerHTML = '';
    document.getElementById('next-btn').classList.add('hidden');

    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-button';
        // Render options with inline code formatting
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
    const isCorrect = selectedAnswerIndex === currentRound.questions[currentQuestionIndex].correctIndex;

    roundResults[currentRoundIndex].attempted++;

    if (isCorrect) {
        totalScore += currentRound.points;
        roundResults[currentRoundIndex].points += currentRound.points;
    }
    // Regardless of correctness, proceed to the next round after answering
    finishRound();
}

function finishRound() {
    clearInterval(timerInterval);
    recordRoundTime();
    quizEndedByTimeout = false;

    if (currentRoundIndex >= quizData.length - 1) {
        showResults();
    } else {
        currentRoundIndex++;
        alert(`Round Complete! Get ready for the ${quizData[currentRoundIndex].level} round.`);
        startNewRound();
    }
}

// =========================================================
// TIMER & RESULTS
// =========================================================
function startTimer(duration) {
    let timeLeft = duration;
    const timeDisplay = document.getElementById('time-display');

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeDisplay.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Time's up for this round; continue to next round instead of ending the quiz
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
    // Escape HTML to avoid injection, then allow only our code tags
    const escaped = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Convert triple backtick blocks to <pre><code>...</code></pre>
    const withBlockCode = escaped.replace(/```([\s\S]*?)```/g, (m, code) => {
        return `<pre><code>${code}</code></pre>`;
    });

    // Convert inline `code` to <code>code</code>
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
        tableBody.innerHTML += `
            <tr>
                <td>Round ${idx + 1}</td>
                <td>${round.level}</td>
                <td>${res.points} / ${round.points}</td>
                <td>${res.timeTaken}s</td>
                <td>${res.attempted} / 1</td>
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
