
## 🎣 4. React Hooks (51–80)

51. What are Hooks in React?
52. Why were Hooks introduced?
53. What are the Rules of Hooks?
54. What is `useState`?
55. What is `useEffect`?
56. What is `useContext`?
57. What is `useRef`?
58. What is `useMemo`?
59. What is `useCallback`?
60. What is `useReducer`?
61. What is `useLayoutEffect`?
62. What is `useImperativeHandle`?
63. What is `useTransition`?
64. What is `useDeferredValue`?
65. What is `useId`?
66. What is `useDebugValue`?
67. What is the difference between `useEffect` and `useLayoutEffect`?
68. What is dependency array in `useEffect`?
69. What happens when dependency array is empty?
70. What causes infinite loops in `useEffect`?
71. How do you clean up side effects?
72. What is a custom hook?
73. Why should custom hooks be used?
74. How do you share logic using custom hooks?
75. What is hook reusability?
76. When should you use `useMemo`?
77. When should you use `useCallback`?
78. What is memoization?
79. What is React Hook Form?
80. What are common mistakes with Hooks?


## 🎣 4. React Hooks (51–80)

# 51. What are Hooks in React?

## Definition

**Hooks are special built-in functions introduced in React 16.8 that allow Functional Components to use React features such as state, lifecycle methods, context, refs, and side effects without writing Class Components.**

Before Hooks, developers had to use Class Components for state management and lifecycle methods. Hooks made Functional Components much more powerful and easier to use.

---

## Why Are They Called Hooks?

They are called "Hooks" because they allow components to **hook into React features**.

For example:

```jsx
useState()
```

hooks into React's state management system.

```jsx
useEffect()
```

hooks into React's lifecycle and side-effect system.

---

## Before Hooks

Only Class Components could use state.

```jsx
class Counter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <h1>{this.state.count}</h1>
    );
  }
}
```

---

## After Hooks

Functional Components can also use state.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <h1>{count}</h1>
  );
}
```

Much cleaner and easier to understand.

---

## Common React Hooks

### useState

Manages component state.

```jsx
const [count, setCount] = useState(0);
```

---

### useEffect

Handles side effects.

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

---

### useContext

Accesses Context API data.

```jsx
const user = useContext(UserContext);
```

---

### useRef

References DOM elements.

```jsx
const inputRef = useRef();
```

---

### useReducer

Advanced state management.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### useMemo

Memoizes expensive calculations.

```jsx
const total = useMemo(() => calculate(), []);
```

---

### useCallback

Memoizes functions.

```jsx
const handleClick = useCallback(() => {}, []);
```

---

## Benefits of Hooks

### Simpler Code

Less boilerplate than class components.

---

### Reusable Logic

Create custom Hooks.

```jsx
useFetch();
useAuth();
useTheme();
```

---

### Better Readability

Easier to understand.

---

### No `this` Keyword

Class components often caused confusion.

```jsx
this.state
this.props
this.setState()
```

Hooks eliminate this problem.

---

### Better Organization

Related logic stays together.

---

## Real-World Example

### Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

---

## Interview Answer

**Hooks are special functions introduced in React 16.8 that allow Functional Components to use React features such as state, lifecycle methods, context, and refs. They eliminate the need for Class Components in many cases and make React code simpler, more reusable, and easier to maintain. Common Hooks include `useState`, `useEffect`, `useContext`, `useRef`, and `useReducer`.**

---

# 52. Why Were Hooks Introduced?

## Definition

Hooks were introduced to solve several problems associated with Class Components and to make React development simpler and more reusable.

Before Hooks, stateful logic and lifecycle methods could only be used inside Class Components.

---

## Problems with Class Components

### 1. Complex and Verbose Code

Class Components required a lot of boilerplate.

```jsx
class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

---

### Hooks Version

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

Much cleaner.

---

## 2. Reusing Stateful Logic Was Difficult

Before Hooks:

```text
Higher Order Components (HOC)
Render Props
Mixins
```

These patterns increased complexity.

---

### With Hooks

Reusable logic becomes simple.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}
```

Used anywhere.

---

## 3. Confusing `this` Keyword

Class Components use:

```jsx
this.state
this.props
this.handleClick
```

Developers often faced issues with:

```jsx
this binding
```

---

### Hooks Remove This Problem

```jsx
const [count, setCount] = useState(0);
```

No `this`.

---

## 4. Lifecycle Logic Was Scattered

Class Components:

```jsx
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

Logic often spread across multiple methods.

---

### Hooks Keep Logic Together

```jsx
useEffect(() => {
  // all related logic here
});
```

---

## Goals of Hooks

### Reuse Stateful Logic

### Simpler Components

### Better Readability

### Less Boilerplate

### Avoid Class Components

### Better Code Organization

---

## Interview Answer

**Hooks were introduced to simplify React development and solve the limitations of Class Components. They allow Functional Components to manage state, lifecycle methods, and other React features without using classes. Hooks reduce boilerplate code, eliminate the need for the `this` keyword, improve code reusability through custom Hooks, and make component logic easier to organize and maintain.**

---

# 53. What are the Rules of Hooks?

## Definition

React Hooks follow specific rules to ensure React can correctly track state and Hook calls across renders.

Breaking these rules can cause bugs and unexpected behavior.

---

## Rule 1: Only Call Hooks at the Top Level

### Correct

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

---

### Wrong

```jsx
if (true) {
  useState(0);
}
```

❌ Do not call Hooks inside:

* if statements
* loops
* switch statements
* nested functions

---

## Why?

React tracks Hooks based on call order.

```text
Render 1
Hook #1
Hook #2

Render 2
Hook #1
Hook #2
```

Order must remain consistent.

---

## Rule 2: Only Call Hooks Inside React Functions

### Correct

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

---

### Correct

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
}
```

Custom Hook.

---

### Wrong

```jsx
function calculate() {
  useState(0);
}
```

❌ Regular JavaScript function.

---

## Rule 3: Hooks Must Start with "use"

Custom Hooks should follow naming convention.

### Correct

```jsx
function useFetch() {
}
```

---

### Wrong

```jsx
function fetchData() {
}
```

---

## Rule 4: Keep Hook Order Consistent

### Good

```jsx
useState();
useEffect();
useContext();
```

Always same order.

---

### Bad

```jsx
if (loggedIn) {
  useEffect();
}
```

Order changes.

---

## ESLint Support

React provides:

```bash
eslint-plugin-react-hooks
```

which automatically detects Hook rule violations.

---

## Interview Answer

**The Rules of Hooks are: (1) Only call Hooks at the top level of a component or custom Hook, (2) Only call Hooks inside React Functional Components or custom Hooks, and (3) Maintain the same Hook call order on every render. These rules allow React to correctly track state and lifecycle behavior across renders.**

---

# 54. What is `useState`?

## Definition

`useState` is a React Hook used to add and manage state inside Functional Components.

It allows components to store dynamic values and automatically update the UI whenever those values change.

---

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

## Breakdown

### State Variable

```jsx
count
```

Current value.

---

### Setter Function

```jsx
setCount
```

Updates state.

---

### Initial Value

```jsx
useState(0)
```

Initial state.

---

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
```

---

## State Update Process

```text
Button Click
      ↓
setCount()
      ↓
State Changes
      ↓
Component Re-renders
      ↓
UI Updates
```

---

## Different Types of State

### String

```jsx
const [name, setName] = useState("Rishi");
```

---

### Number

```jsx
const [age, setAge] = useState(24);
```

---

### Boolean

```jsx
const [isOpen, setIsOpen] = useState(false);
```

---

### Array

```jsx
const [items, setItems] = useState([]);
```

---

### Object

```jsx
const [user, setUser] = useState({
  name: "Rishi"
});
```

---

## Functional Update

Recommended when using previous state.

```jsx
setCount(prev => prev + 1);
```

---

## Interview Answer

**`useState` is a React Hook that allows Functional Components to manage state. It returns an array containing the current state value and a setter function used to update that value. Whenever the state changes, React automatically re-renders the component and updates the UI. It can store strings, numbers, booleans, arrays, objects, and other data types.**

---

# 55. What is `useEffect`?

## Definition

`useEffect` is a React Hook used to perform **side effects** in Functional Components.

A side effect is any operation that interacts with something outside the component rendering process.

Examples include:

* API calls
* Data fetching
* Timers
* Event listeners
* Local Storage
* DOM manipulation
* Subscriptions

---

## Syntax

```jsx
useEffect(() => {
  // side effect code

  return () => {
    // cleanup code
  };
}, [dependencies]);
```

---

## Basic Example

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Rendered");
  });

  return <h1>Hello</h1>;
}
```

Runs after every render.

---

## Run Only Once

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

### Empty Dependency Array

```jsx
[]
```

Means:

```text
Run Only Once
```

after component mounts.

---

## Run When State Changes

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed");
}, [count]);
```

Runs whenever:

```text
count changes
```

---

## Cleanup Function

Used to remove subscriptions, timers, or listeners.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

## API Fetch Example

```jsx
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

Runs once when component loads.

---

## Lifecycle Mapping

Class Components:

```jsx
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

---

`useEffect` can handle all three.

```jsx
useEffect(() => {
  // mount/update logic

  return () => {
    // unmount logic
  };
});
```

---

## Dependency Array Behavior

| Dependency Array | Behavior                        |
| ---------------- | ------------------------------- |
| No Array         | Runs after every render         |
| `[]`             | Runs once after mount           |
| `[count]`        | Runs when count changes         |
| `[count, name]`  | Runs when count or name changes |

---

## Interview Answer

**`useEffect` is a React Hook used to perform side effects in Functional Components. It runs after rendering and is commonly used for API calls, timers, event listeners, subscriptions, local storage operations, and DOM updates. The dependency array controls when the effect runs, and an optional cleanup function can be used to remove resources when the component unmounts or before the effect re-runs.**

---

## Quick Revision Table

| Question | Key Concept                                             |
| -------- | ------------------------------------------------------- |
| 51       | Hooks allow Functional Components to use React features |
| 52       | Hooks solve Class Component limitations                 |
| 53       | Follow React's Rules of Hooks                           |
| 54       | `useState` manages component state                      |
| 55       | `useEffect` handles side effects and lifecycle behavior |


# 56. What is `useContext` in React?

## Definition

`useContext` is a React Hook that allows components to access data from the **Context API** without manually passing props through every level of the component tree.

It helps solve the problem of **Prop Drilling**.

---

## What is Prop Drilling?

Suppose we have:

```text
App
 └── Dashboard
      └── Sidebar
           └── UserProfile
```

If UserProfile needs user data:

```jsx
<App user={user} />
```

Then:

```jsx
<Dashboard user={user} />
```

Then:

```jsx
<Sidebar user={user} />
```

Then:

```jsx
<UserProfile user={user} />
```

This repeated passing of props is called:

```text
Prop Drilling
```

---

## Solution: Context API + useContext

Store data globally.

```text
Context Provider
       ↓
Any Component Can Access Data
```

without passing props manually.

---

## Creating Context

### Step 1: Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### Step 2: Provide Context

```jsx
import { UserContext } from "./UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{ name: "Rishi", role: "Developer" }}
    >
      <Dashboard />
    </UserContext.Provider>
  );
}
```

---

### Step 3: Consume Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <h2>{user.name}</h2>
  );
}
```

Output:

```text
Rishi
```

---

## Real-World Use Cases

### Authentication

```jsx
Current Logged-In User
```

---

### Theme Management

```jsx
Dark Mode
Light Mode
```

---

### Language Settings

```jsx
English
Hindi
French
```

---

### Shopping Cart

```jsx
Cart Data Shared Across Components
```

---

## Benefits

### Eliminates Prop Drilling

### Cleaner Component Tree

### Global Data Access

### Built into React

---

## Interview Answer

**`useContext` is a React Hook used to access values from the Context API. It allows components to consume shared data without passing props through multiple component levels. It is commonly used for authentication, themes, language settings, shopping carts, and other global application data. By using `useContext`, React applications become cleaner and easier to maintain.**

---

# 57. What is `useRef` in React?

## Definition

`useRef` is a React Hook used to create a mutable reference that persists across re-renders without causing component re-renders when its value changes.

It is commonly used for:

* Accessing DOM elements
* Storing mutable values
* Managing timers
* Tracking previous values

---

## Syntax

```jsx
const ref = useRef(initialValue);
```

---

## Accessing DOM Elements

### Example

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}
```

---

### How It Works

```text
inputRef
     ↓
Points to Input Element
     ↓
inputRef.current
     ↓
Actual DOM Node
```

---

## Storing Values Without Re-render

```jsx
const renderCount = useRef(0);

renderCount.current++;
```

React does not re-render.

---

## Difference Between useRef and useState

| Feature          | useState | useRef |
| ---------------- | -------- | ------ |
| Causes Re-render | Yes      | No     |
| Stores Data      | Yes      | Yes    |
| DOM Access       | No       | Yes    |
| Mutable          | No       | Yes    |

---

## Example: Previous Value

```jsx
const previousCount = useRef();

useEffect(() => {
  previousCount.current = count;
}, [count]);
```

Now:

```jsx
previousCount.current
```

stores old count value.

---

## Real-World Uses

### Input Focus

```jsx
inputRef.current.focus();
```

---

### Timers

```jsx
timerRef.current = setInterval(...);
```

---

### Store Previous State

```jsx
previousValue.current
```

---

### Scroll Position

```jsx
divRef.current.scrollTop
```

---

## Interview Answer

**`useRef` is a React Hook that creates a mutable reference object whose value persists across component re-renders. It is commonly used to access DOM elements, store mutable values, manage timers, and keep track of previous values. Unlike `useState`, updating a ref does not trigger a component re-render.**

---

# 58. What is `useMemo` in React?

## Definition

`useMemo` is a React Hook used to **memoize expensive calculations** so that they are only recomputed when their dependencies change.

It improves performance by avoiding unnecessary calculations during re-renders.

---

## Problem Without useMemo

```jsx
function App() {
  const [count, setCount] = useState(0);

  const expensiveValue = calculateLargeData();

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  );
}
```

Every render:

```text
calculateLargeData()
```

runs again.

Even if data didn't change.

---

## Solution: useMemo

### Syntax

```jsx
const memoizedValue = useMemo(
  () => calculation(),
  [dependencies]
);
```

---

## Example

```jsx
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <>
      <h2>{squaredValue}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

---

## How It Works

### First Render

```text
Calculating...
```

Result stored.

---

### Next Render

If dependency unchanged:

```text
Uses Cached Value
```

No recalculation.

---

### Dependency Changes

```text
Recalculate Value
```

and store again.

---

## Real-World Example

### Large Filtering

```jsx
const filteredUsers = useMemo(
  () => users.filter(user =>
    user.active
  ),
  [users]
);
```

---

### Complex Sorting

```jsx
const sortedProducts = useMemo(
  () => sortProducts(products),
  [products]
);
```

---

## Benefits

### Better Performance

### Avoid Expensive Recalculations

### Faster UI

### Efficient Rendering

---

## Interview Answer

**`useMemo` is a React Hook used to memoize the result of expensive computations. It stores the calculated value and only recomputes it when one of its dependencies changes. This optimization helps improve performance by preventing unnecessary calculations during component re-renders.**

---

# 59. What is `useCallback` in React?

## Definition

`useCallback` is a React Hook used to memoize functions so that the same function instance is reused between renders unless dependencies change.

It helps prevent unnecessary re-renders in child components.

---

## Syntax

```jsx
const memoizedFunction = useCallback(
  () => {
    // logic
  },
  [dependencies]
);
```

---

## Problem Without useCallback

```jsx
function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```

Every render:

```text
New Function Created
```

React sees:

```text
Different Function Reference
```

Child may re-render unnecessarily.

---

## Solution

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Now:

```text
Same Function Reference
```

until dependencies change.

---

## Example

```jsx
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />

      <button
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </>
  );
}
```

---

## useMemo vs useCallback

| Hook        | Memoizes |
| ----------- | -------- |
| useMemo     | Value    |
| useCallback | Function |

---

### useMemo

```jsx
const total = useMemo(() => calculate(), []);
```

Stores:

```text
Calculated Value
```

---

### useCallback

```jsx
const handleClick = useCallback(() => {}, []);
```

Stores:

```text
Function Reference
```

---

## Real-World Use Cases

### Passing Functions to Child Components

### Optimized Lists

### Event Handlers

### React.memo Components

---

## Interview Answer

**`useCallback` is a React Hook that memoizes functions and returns the same function instance across renders unless dependencies change. It is primarily used for performance optimization, especially when passing callback functions to child components that rely on reference equality, such as components wrapped with `React.memo`.**

---

# 60. What is `useReducer` in React?

## Definition

`useReducer` is a React Hook used for managing complex state logic.

It works similarly to Redux by using:

```text
State
   ↓
Action
   ↓
Reducer Function
   ↓
New State
```

---

## Why useReducer?

For simple state:

```jsx
useState()
```

is enough.

For complex state:

```jsx
useReducer()
```

is often better.

---

## Syntax

```jsx
const [state, dispatch] =
  useReducer(reducer, initialState);
```

---

## Components of useReducer

### State

Current state.

```jsx
state
```

---

### Dispatch

Sends actions.

```jsx
dispatch()
```

---

### Reducer

Updates state.

```jsx
function reducer(state, action) {
  return newState;
}
```

---

## Example: Counter

### Reducer

```jsx
function reducer(state, action) {
  switch (action.type) {

    case "increment":
      return {
        count: state.count + 1
      };

    case "decrement":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}
```

---

### Component

```jsx
import { useReducer } from "react";

const initialState = {
  count: 0
};

function Counter() {
  const [state, dispatch] =
    useReducer(reducer, initialState);

  return (
    <>
      <h2>{state.count}</h2>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: "decrement" })
        }
      >
        -
      </button>
    </>
  );
}
```

---

## Flow of useReducer

```text
Button Click
      ↓
dispatch({ type: "increment" })
      ↓
Reducer Executes
      ↓
Returns New State
      ↓
Component Re-renders
```

---

## When to Use useReducer?

### Multiple Related State Values

```jsx
user
loading
error
```

---

### Complex Updates

### Form Handling

### Shopping Cart Logic

### Authentication Flow

---

## useState vs useReducer

| Feature               | useState      | useReducer |
| --------------------- | ------------- | ---------- |
| Simple State          | Excellent     | Possible   |
| Complex State         | Less Suitable | Excellent  |
| Multiple State Values | Harder        | Easier     |
| Redux-like Pattern    | No            | Yes        |
| Scalability           | Medium        | High       |

---

## Real-World Example

### Authentication State

```jsx
{
  user: null,
  loading: false,
  error: null
}
```

Managing this with multiple `useState` calls can become messy.

`useReducer` keeps all related state logic in one place.

---

## Interview Answer

**`useReducer` is a React Hook used to manage complex state logic through a reducer function and dispatched actions. It follows a Redux-like pattern where actions describe state changes and the reducer determines how the state should be updated. It is particularly useful when state transitions are complex, involve multiple related values, or require centralized update logic.**

---

# Quick Revision Table

| Hook          | Purpose                                               |
| ------------- | ----------------------------------------------------- |
| `useContext`  | Access Context API data                               |
| `useRef`      | Store mutable values and access DOM elements          |
| `useMemo`     | Memoize expensive calculations                        |
| `useCallback` | Memoize functions                                     |
| `useReducer`  | Manage complex state logic using reducers and actions |

### Interview One-Liner

* **useContext** → Share data globally without prop drilling.
* **useRef** → Store values without causing re-renders and access DOM nodes.
* **useMemo** → Cache expensive calculations.
* **useCallback** → Cache function references.
* **useReducer** → Manage complex state using reducer logic and actions.


# 61. What is `useLayoutEffect` in React?

## Definition

`useLayoutEffect` is a React Hook that works similarly to `useEffect`, but it runs **synchronously after React updates the DOM and before the browser paints the screen**.

In simple terms:

```text
Render Component
      ↓
DOM Updated
      ↓
useLayoutEffect Runs
      ↓
Browser Paints Screen
```

While `useEffect` runs after painting:

```text
Render Component
      ↓
DOM Updated
      ↓
Browser Paints Screen
      ↓
useEffect Runs
```

---

## Syntax

```jsx
useLayoutEffect(() => {
  // effect logic

  return () => {
    // cleanup logic
  };
}, [dependencies]);
```

---

## Why Use useLayoutEffect?

Sometimes we need to:

* Measure DOM dimensions
* Calculate element positions
* Modify DOM before user sees it
* Prevent visual flickering

For such cases, `useLayoutEffect` is preferred.

---

## Example: Measuring Element Width

```jsx
import { useRef, useLayoutEffect } from "react";

function App() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.offsetWidth);
  }, []);

  return (
    <div ref={divRef}>
      Hello React
    </div>
  );
}
```

---

## Example: Prevent UI Flicker

```jsx
useLayoutEffect(() => {
  document.title = "Dashboard";
}, []);
```

Runs before paint.

User never sees the old title.

---

## useEffect vs useLayoutEffect

| Feature                   | useEffect   | useLayoutEffect |
| ------------------------- | ----------- | --------------- |
| Execution                 | After Paint | Before Paint    |
| Blocks Rendering          | No          | Yes             |
| Performance               | Faster      | Slightly Slower |
| DOM Measurement           | Not Ideal   | Ideal           |
| Visual Flicker Prevention | No          | Yes             |

---

## When Should You Use useLayoutEffect?

### DOM Measurements

```jsx
element.offsetWidth
element.offsetHeight
```

---

### Scroll Position

```jsx
window.scrollTo()
```

---

### Animations

---

### Layout Calculations

---

## When NOT to Use It

Avoid using it for:

* API Calls
* Data Fetching
* Timers
* Event Listeners

Use `useEffect` instead.

---

## Interview Answer

**`useLayoutEffect` is a React Hook that works similarly to `useEffect`, but it runs synchronously after DOM updates and before the browser paints the screen. It is mainly used for DOM measurements, layout calculations, animations, and preventing visual flickering. Because it blocks painting, it should only be used when immediate DOM access is required.**

---

# 62. What is `useImperativeHandle` in React?

## Definition

`useImperativeHandle` is a React Hook used to customize the value exposed to a parent component when using `ref`.

Normally:

```jsx
ref.current
```

gives direct access to a child component or DOM element.

With `useImperativeHandle`, we can control exactly what methods or values the parent can access.

---

## Why Do We Need It?

Suppose a parent component wants to call:

```jsx
focusInput()
clearInput()
```

inside a child component.

Instead of exposing the entire child component, we expose only selected methods.

---

## Syntax

```jsx
useImperativeHandle(
  ref,
  () => ({
    customMethod() {
      // logic
    }
  })
);
```

---

## Example

### Child Component

```jsx
import {
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";

const Input = forwardRef((props, ref) => {

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

export default Input;
```

---

### Parent Component

```jsx
import { useRef } from "react";
import Input from "./Input";

function App() {

  const inputRef = useRef();

  return (
    <>
      <Input ref={inputRef} />

      <button
        onClick={() =>
          inputRef.current.focusInput()
        }
      >
        Focus
      </button>
    </>
  );
}
```

---

## Benefits

### Better Encapsulation

Only expose necessary methods.

---

### More Secure

Hide internal implementation.

---

### Cleaner API

Parent accesses only approved methods.

---

## Real-World Examples

### Custom Input Components

### Modal Components

### Form Components

### Video Players

### Custom UI Libraries

---

## Interview Answer

**`useImperativeHandle` is a React Hook used with `forwardRef` to customize the instance value exposed to parent components through refs. Instead of exposing the entire child component, developers can selectively expose specific methods or properties, improving encapsulation and component design.**

---

# 63. What is `useTransition` in React?

## Definition

`useTransition` is a React Hook introduced in React 18 that allows developers to mark certain state updates as **non-urgent (low-priority)**.

This helps keep the UI responsive during expensive updates.

---

## Why Was It Introduced?

Imagine:

```jsx
Search Input
      ↓
10,000 Items Filtered
      ↓
UI Freezes
```

Every keystroke triggers heavy rendering.

User experiences lag.

---

## Solution

Mark expensive updates as transitions.

```jsx
useTransition()
```

React prioritizes important updates first.

---

## Syntax

```jsx
const [isPending, startTransition] =
  useTransition();
```

---

## Parameters

### isPending

```jsx
isPending
```

Boolean indicating whether transition is running.

---

### startTransition

```jsx
startTransition(() => {
  // low priority updates
});
```

Marks updates as non-urgent.

---

## Example

```jsx
import { useState, useTransition } from "react";

function App() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] =
    useTransition();

  const handleChange = (e) => {

    const value = e.target.value;

    setText(value);

    startTransition(() => {
      const items = Array(10000)
        .fill(value);

      setList(items);
    });
  };

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />

      {isPending && <p>Loading...</p>}
    </>
  );
}
```

---

## Benefits

### Smooth User Experience

### Responsive UI

### Better Performance

### Prioritized Rendering

---

## Real-World Uses

### Search Filtering

### Large Lists

### Dashboard Updates

### Data Visualization

---

## Interview Answer

**`useTransition` is a React 18 Hook that allows developers to mark state updates as non-urgent. React prioritizes urgent updates such as user input while processing transition updates in the background. This improves responsiveness and prevents UI blocking during expensive rendering operations.**

---

# 64. What is `useDeferredValue` in React?

## Definition

`useDeferredValue` is a React Hook that delays updating a value until higher-priority updates are completed.

It helps optimize rendering performance when working with expensive computations.

---

## Concept

Suppose user types:

```text
R
Ri
Ris
Rish
Rishi
```

Without optimization:

```text
Every Keystroke
      ↓
Heavy Filtering
      ↓
Lag
```

---

## Solution

Use deferred value.

```jsx
const deferredValue =
  useDeferredValue(value);
```

React delays expensive updates.

---

## Syntax

```jsx
const deferredValue =
  useDeferredValue(value);
```

---

## Example

```jsx
import {
  useState,
  useDeferredValue
} from "react";

function Search() {

  const [query, setQuery] =
    useState("");

  const deferredQuery =
    useDeferredValue(query);

  return (
    <>
      <input
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <SearchResults
        query={deferredQuery}
      />
    </>
  );
}
```

---

## How It Works

### Immediate Update

```jsx
query
```

Updates instantly.

---

### Deferred Update

```jsx
deferredQuery
```

Updates later.

---

## Difference from useTransition

| Feature                   | useTransition | useDeferredValue |
| ------------------------- | ------------- | ---------------- |
| Controls State Update     | Yes           | No               |
| Delays Value              | No            | Yes              |
| Requires Wrapper Function | Yes           | No               |
| Performance Optimization  | Yes           | Yes              |

---

## Real-World Uses

### Search Suggestions

### Large Data Filtering

### Product Search

### Dashboard Analytics

---

## Interview Answer

**`useDeferredValue` is a React 18 Hook that delays updating a value until higher-priority rendering tasks are completed. It is useful for optimizing expensive UI updates such as filtering large datasets or rendering complex components, helping maintain a smooth and responsive user experience.**

---

# 65. What is `useId` in React?

## Definition

`useId` is a React Hook introduced in React 18 that generates unique, stable IDs for accessibility and form elements.

It helps avoid ID collisions and ensures consistency between server-side and client-side rendering.

---

## Why Do We Need It?

Suppose we have:

```jsx
<label htmlFor="email">
  Email
</label>

<input id="email" />
```

If multiple components use:

```text
email
```

there may be duplicate IDs.

---

## Solution

Generate unique IDs automatically.

```jsx
const id = useId();
```

---

## Syntax

```jsx
const id = useId();
```

---

## Example

```jsx
import { useId } from "react";

function EmailInput() {

  const id = useId();

  return (
    <>
      <label htmlFor={id}>
        Email
      </label>

      <input id={id} />
    </>
  );
}
```

---

## Output

Generated ID may look like:

```text
:r1:
:r2:
:r3:
```

Each component receives a unique value.

---

## Multiple IDs

```jsx
const id = useId();

<input id={`${id}-name`} />
<input id={`${id}-email`} />
```

Result:

```text
:r1:-name
:r1:-email
```

---

## Benefits

### Accessibility Support

Proper label-input association.

---

### Unique IDs

No collisions.

---

### SSR Compatibility

Works with Server-Side Rendering.

---

### Cleaner Forms

Automatic ID generation.

---

## Real-World Uses

### Forms

### Accessibility

### Dynamic Inputs

### Reusable Components

### Server-Side Rendered Applications

---

## Interview Answer

**`useId` is a React 18 Hook used to generate unique and stable IDs for accessibility and form-related elements. It helps prevent duplicate IDs, improves label-input associations, and ensures consistency between server-side and client-side rendering environments.**

---

# Quick Revision Table

| Hook                  | Purpose                                 |
| --------------------- | --------------------------------------- |
| `useLayoutEffect`     | Runs synchronously before browser paint |
| `useImperativeHandle` | Customizes values exposed through refs  |
| `useTransition`       | Marks updates as low-priority           |
| `useDeferredValue`    | Delays expensive value updates          |
| `useId`               | Generates unique IDs for accessibility  |

### Interview One-Liner

* **useLayoutEffect** → Runs before browser paint for DOM measurements.
* **useImperativeHandle** → Controls what a parent can access through refs.
* **useTransition** → Makes heavy updates non-blocking.
* **useDeferredValue** → Delays expensive value updates.
* **useId** → Generates unique IDs for forms and accessibility.

# 66. What is `useDebugValue` in React?

## Definition

`useDebugValue` is a React Hook used to display custom labels for **Custom Hooks** inside React Developer Tools.

It helps developers debug and understand the internal state of custom Hooks more easily.

Unlike Hooks such as `useState` or `useEffect`, `useDebugValue` does not affect the UI. It is purely a development and debugging tool.

---

## Why Was useDebugValue Introduced?

Imagine you have a custom Hook:

```jsx
function useAuth() {
  const [user, setUser] = useState(null);

  return user;
}
```

In React DevTools, it may not be obvious what state the Hook currently holds.

Using `useDebugValue`, you can show meaningful information.

---

## Syntax

```jsx
useDebugValue(value);
```

---

## Basic Example

```jsx
import { useState, useDebugValue } from "react";

function useOnlineStatus() {

  const [isOnline, setIsOnline] =
    useState(true);

  useDebugValue(
    isOnline ? "Online" : "Offline"
  );

  return isOnline;
}
```

React DevTools displays:

```text
useOnlineStatus
   Online
```

instead of a generic value.

---

## Formatting Values

You can provide a formatter function.

```jsx
useDebugValue(user, user =>
  user ? "Logged In" : "Guest"
);
```

---

## Example: Authentication Hook

```jsx
function useAuth() {

  const [user, setUser] = useState({
    name: "Rishi"
  });

  useDebugValue(
    user ? "Authenticated" : "Not Authenticated"
  );

  return user;
}
```

React DevTools:

```text
useAuth
   Authenticated
```

---

## Real-World Use Cases

### Custom Authentication Hooks

```jsx
useAuth()
```

---

### Theme Hooks

```jsx
useTheme()
```

---

### Data Fetching Hooks

```jsx
useFetch()
```

---

### Form Hooks

```jsx
useForm()
```

---

## Benefits

### Easier Debugging

### Better DevTools Experience

### Cleaner Custom Hook Inspection

### No Impact on Production UI

---

## Important Note

`useDebugValue` should generally be used only inside:

```jsx
Custom Hooks
```

not regular components.

---

## Interview Answer

**`useDebugValue` is a React Hook used for debugging custom Hooks in React Developer Tools. It allows developers to display meaningful labels or formatted values, making custom Hook state easier to inspect during development. It does not affect application behavior or UI and is intended solely for debugging purposes.**

---

# 67. What is the Difference Between `useEffect` and `useLayoutEffect`?

## Definition

Both Hooks perform side effects in Functional Components.

The major difference is **when they execute**.

---

## useEffect Execution

```text
Render Component
      ↓
DOM Updated
      ↓
Browser Paints Screen
      ↓
useEffect Executes
```

Runs asynchronously after painting.

---

## useLayoutEffect Execution

```text
Render Component
      ↓
DOM Updated
      ↓
useLayoutEffect Executes
      ↓
Browser Paints Screen
```

Runs synchronously before painting.

---

## Syntax Comparison

### useEffect

```jsx
useEffect(() => {
  console.log("Effect");
}, []);
```

---

### useLayoutEffect

```jsx
useLayoutEffect(() => {
  console.log("Layout Effect");
}, []);
```

---

## Example

### useEffect

```jsx
useEffect(() => {
  console.log("Runs After Paint");
}, []);
```

User sees page first.

Then effect runs.

---

### useLayoutEffect

```jsx
useLayoutEffect(() => {
  console.log("Runs Before Paint");
}, []);
```

Effect runs first.

Then page is painted.

---

## Use Cases

### useEffect

Best for:

* API Calls
* Timers
* Event Listeners
* Local Storage
* Network Requests

Example:

```jsx
useEffect(() => {
  fetchUsers();
}, []);
```

---

### useLayoutEffect

Best for:

* Measuring DOM Size
* Scroll Position
* Animations
* Layout Calculations
* Preventing Flicker

Example:

```jsx
useLayoutEffect(() => {
  console.log(
    divRef.current.offsetWidth
  );
}, []);
```

---

## Performance Comparison

### useEffect

```text
Non-blocking
Faster
Recommended Most of the Time
```

---

### useLayoutEffect

```text
Blocking
Can Affect Performance
Use Only When Necessary
```

---

## Comparison Table

| Feature          | useEffect   | useLayoutEffect |
| ---------------- | ----------- | --------------- |
| Execution        | After Paint | Before Paint    |
| Blocks UI        | No          | Yes             |
| Performance      | Better      | Slightly Slower |
| DOM Measurements | Not Ideal   | Ideal           |
| API Calls        | Yes         | No              |
| Prevent Flicker  | No          | Yes             |

---

## Interview Answer

**The primary difference between `useEffect` and `useLayoutEffect` is their execution timing. `useEffect` runs asynchronously after the browser paints the screen, making it suitable for API calls and side effects. `useLayoutEffect` runs synchronously after DOM updates but before painting, making it useful for DOM measurements, layout calculations, and preventing visual flickering. In most cases, `useEffect` should be preferred because it does not block rendering.**

---

# 68. What is Dependency Array in `useEffect`?

## Definition

The dependency array is the second argument of `useEffect` that tells React when the effect should run.

```jsx
useEffect(() => {
  // effect logic
}, [dependencies]);
```

React monitors the values inside the array.

If any dependency changes, React re-runs the effect.

---

## Syntax

```jsx
useEffect(() => {
  // side effect
}, [count]);
```

---

## Example

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

Effect runs whenever:

```text
count changes
```

---

## Multiple Dependencies

```jsx
useEffect(() => {
  console.log("Updated");
}, [count, name]);
```

Runs when:

```text
count changes
OR
name changes
```

---

## How React Checks Dependencies

React compares:

```text
Previous Dependency Value
          VS
Current Dependency Value
```

If different:

```text
Effect Re-runs
```

---

## Example Flow

```text
count = 0
      ↓
count = 1
      ↓
Dependency Changed
      ↓
Effect Runs Again
```

---

## Why Dependency Arrays Matter

### Performance Optimization

Avoid unnecessary effect execution.

---

### Controlled Execution

Run effects only when needed.

---

### Prevent Infinite Loops

Proper dependencies reduce bugs.

---

## Interview Answer

**The dependency array is the second parameter of `useEffect` that controls when the effect should execute. React watches the values inside the array and re-runs the effect whenever one of those values changes. Dependency arrays help optimize performance, prevent unnecessary executions, and provide precise control over side effects.**

---

# 69. What Happens When Dependency Array is Empty?

## Definition

An empty dependency array means:

```jsx
[]
```

React executes the effect only once after the component mounts.

---

## Syntax

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

---

## Execution Flow

```text
Component Mounts
      ↓
Effect Runs Once
      ↓
Never Runs Again
```

unless component unmounts and mounts again.

---

## Example: API Call

```jsx
useEffect(() => {
  fetchUsers();
}, []);
```

Runs only once.

---

## Example: Event Listener

```jsx
useEffect(() => {

  window.addEventListener(
    "resize",
    handleResize
  );

  return () => {
    window.removeEventListener(
      "resize",
      handleResize
    );
  };

}, []);
```

---

## Equivalent Class Lifecycle

```jsx
componentDidMount()
```

---

## Common Uses

### API Requests

### Authentication Checks

### Event Listeners

### Initial Setup

### One-Time Configuration

---

## Important Note

Empty dependency array does not mean:

```text
Run Forever
```

It means:

```text
Run Once After Mount
```

---

## Interview Answer

**When the dependency array is empty (`[]`), `useEffect` runs only once after the component is mounted. React does not re-run the effect during subsequent re-renders because there are no dependencies to monitor. This pattern is commonly used for API calls, event listener registration, initialization logic, and one-time setup operations.**

---

# 70. What Causes Infinite Loops in `useEffect`?

## Definition

An infinite loop occurs when a `useEffect` repeatedly triggers state updates, causing continuous re-renders and repeated execution of the effect.

---

## Common Cause #1: Missing Dependency Array

### Wrong

```jsx
useEffect(() => {
  setCount(count + 1);
});
```

Execution:

```text
Render
 ↓
Effect Runs
 ↓
State Updates
 ↓
Re-render
 ↓
Effect Runs Again
 ↓
Infinite Loop
```

---

## Correct

```jsx
useEffect(() => {
  setCount(count + 1);
}, []);
```

Runs once.

---

## Common Cause #2: Updating a Dependency Inside Effect

### Wrong

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

Flow:

```text
count changes
     ↓
effect runs
     ↓
setCount()
     ↓
count changes again
     ↓
effect runs again
```

Infinite cycle.

---

## Common Cause #3: Function Dependencies

### Wrong

```jsx
function calculate() {
  return 100;
}

useEffect(() => {
  console.log(calculate());
}, [calculate]);
```

Every render:

```text
New Function Created
```

Dependency changes.

Effect runs repeatedly.

---

## Solution

Use:

```jsx
useCallback()
```

```jsx
const calculate = useCallback(() => {
  return 100;
}, []);
```

---

## Common Cause #4: Object Dependencies

### Wrong

```jsx
const user = {
  name: "Rishi"
};

useEffect(() => {
  console.log(user);
}, [user]);
```

Every render:

```text
New Object Created
```

Effect runs again.

---

## Solution

Use:

```jsx
useMemo()
```

```jsx
const user = useMemo(() => ({
  name: "Rishi"
}), []);
```

---

## How to Prevent Infinite Loops

### Use Correct Dependency Arrays

### Avoid Updating Dependencies Repeatedly

### Memoize Functions with useCallback

### Memoize Objects with useMemo

### Understand Re-render Behavior

---

## Interview Answer

**Infinite loops in `useEffect` usually occur when the effect updates state that causes the effect to run again continuously. Common causes include missing dependency arrays, updating a dependency inside the effect, using non-memoized functions as dependencies, and recreating objects or arrays on every render. Proper dependency management, along with Hooks like `useCallback` and `useMemo`, helps prevent infinite loops and unnecessary re-renders.**

---

# Quick Revision Table

| Question | Key Concept                                                       |
| -------- | ----------------------------------------------------------------- |
| 66       | `useDebugValue` helps debug custom Hooks                          |
| 67       | `useEffect` runs after paint, `useLayoutEffect` before paint      |
| 68       | Dependency array controls effect execution                        |
| 69       | Empty array means run once after mount                            |
| 70       | Infinite loops occur due to repeated state updates inside effects |

### Interview One-Liner

* **useDebugValue** → Adds debugging labels to custom Hooks.
* **useEffect vs useLayoutEffect** → After paint vs before paint.
* **Dependency Array** → Controls when effects run.
* **Empty Dependency Array** → Runs effect once after mount.
* **Infinite Loops** → Caused by effects continuously triggering state updates.


# 71. How Do You Clean Up Side Effects in React?

## Definition

In React, **cleanup** means removing or stopping side effects when a component unmounts or before an effect runs again.

Cleanup prevents:

* Memory leaks
* Unnecessary API subscriptions
* Duplicate event listeners
* Running timers after component removal
* Performance issues

React provides cleanup through the **return function inside `useEffect`**.

---

## Why is Cleanup Important?

Imagine:

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);
}, []);
```

If the component is removed:

```text
Component Destroyed
```

But:

```text
Event Listener Still Active
```

This causes:

```text
Memory Leak
```

and unwanted behavior.

---

## Cleanup Syntax

```jsx
useEffect(() => {

  // side effect

  return () => {
    // cleanup logic
  };

}, []);
```

---

## Example: Cleaning Event Listeners

### Without Cleanup

```jsx
useEffect(() => {
  window.addEventListener(
    "resize",
    handleResize
  );
}, []);
```

Problem:

```text
Listener remains active
```

after component removal.

---

### With Cleanup

```jsx
useEffect(() => {

  window.addEventListener(
    "resize",
    handleResize
  );

  return () => {
    window.removeEventListener(
      "resize",
      handleResize
    );
  };

}, []);
```

React removes listener automatically.

---

## Example: Cleaning Timers

### Wrong

```jsx
useEffect(() => {

  setInterval(() => {
    console.log("Running");
  }, 1000);

}, []);
```

Timer continues forever.

---

### Correct

```jsx
useEffect(() => {

  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };

}, []);
```

Timer stops on unmount.

---

## Example: Cleaning API Subscriptions

```jsx
useEffect(() => {

  const subscription =
    chatAPI.subscribe();

  return () => {
    subscription.unsubscribe();
  };

}, []);
```

---

## When Cleanup Runs

### Case 1: Component Unmount

```text
Component Removed
      ↓
Cleanup Executes
```

---

### Case 2: Dependency Changes

```text
Old Effect Cleanup
        ↓
New Effect Executes
```

---

## Lifecycle Flow

```text
Component Mount
      ↓
Effect Runs
      ↓
Dependency Changes
      ↓
Cleanup Runs
      ↓
Effect Runs Again
      ↓
Component Unmounts
      ↓
Cleanup Runs
```

---

## Common Things to Clean Up

### Event Listeners

```jsx
window.addEventListener()
```

---

### Timers

```jsx
setTimeout()
setInterval()
```

---

### WebSockets

```jsx
socket.disconnect()
```

---

### API Subscriptions

```jsx
unsubscribe()
```

---

### Observers

```jsx
disconnect()
```

---

## Interview Answer

**Side effects in React are cleaned up using the return function inside `useEffect`. Cleanup functions run when a component unmounts or before the effect executes again due to dependency changes. They are commonly used to remove event listeners, clear timers, unsubscribe from services, close WebSocket connections, and prevent memory leaks. Proper cleanup ensures better performance and predictable component behavior.**

---

# 72. What is a Custom Hook?

## Definition

A **Custom Hook** is a JavaScript function that uses one or more React Hooks and allows developers to extract and reuse stateful logic across multiple components.

Custom Hooks must follow React Hook rules and their names must start with:

```jsx
use
```

Examples:

```jsx
useFetch()
useAuth()
useTheme()
useCounter()
```

---

## Why Were Custom Hooks Introduced?

Imagine multiple components need:

```text
API Fetching Logic
```

Without Custom Hooks:

```jsx
Component A
   fetch code

Component B
   same fetch code

Component C
   same fetch code
```

Large amount of duplication.

---

## Solution

Create:

```jsx
useFetch()
```

once and reuse everywhere.

---

## Basic Custom Hook

### useCounter.js

```jsx
import { useState } from "react";

function useCounter() {

  const [count, setCount] =
    useState(0);

  const increment = () =>
    setCount(prev => prev + 1);

  const decrement = () =>
    setCount(prev => prev - 1);

  return {
    count,
    increment,
    decrement
  };
}

export default useCounter;
```

---

## Using the Hook

```jsx
import useCounter from "./useCounter";

function Counter() {

  const {
    count,
    increment,
    decrement
  } = useCounter();

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>
        +
      </button>

      <button onClick={decrement}>
        -
      </button>
    </>
  );
}
```

---

## Real-World Examples

### Authentication Hook

```jsx
useAuth()
```

---

### API Hook

```jsx
useFetch()
```

---

### Theme Hook

```jsx
useTheme()
```

---

### Form Hook

```jsx
useForm()
```

---

## Characteristics

### Uses React Hooks

### Reusable

### Independent

### Follows Hook Rules

### Starts with "use"

---

## Interview Answer

**A Custom Hook is a reusable JavaScript function that contains React Hook logic and starts with the prefix `use`. It allows developers to extract common stateful behavior from components and reuse it across the application. Custom Hooks improve code organization, reduce duplication, and make components cleaner and easier to maintain.**

---

# 73. Why Should Custom Hooks Be Used?

## Definition

Custom Hooks should be used whenever multiple components share the same logic.

They allow developers to write logic once and reuse it throughout the application.

---

## Problem Without Custom Hooks

Imagine three components:

```text
Login
Profile
Dashboard
```

All need authentication logic.

Without Custom Hooks:

```jsx
Login Component
  auth code

Profile Component
  auth code

Dashboard Component
  auth code
```

Repeated code everywhere.

---

## Solution

Create:

```jsx
useAuth()
```

---

## Benefits

### Code Reusability

Write once.

Use everywhere.

---

### Cleaner Components

Before:

```jsx
300 Lines Component
```

After:

```jsx
100 Lines Component
```

Logic moved to custom Hook.

---

### Better Maintainability

Change logic in one place.

---

### Easier Testing

Custom Hook can be tested independently.

---

### Better Separation of Concerns

UI and logic remain separate.

---

## Example

### Without Hook

```jsx
const [count, setCount] =
  useState(0);

const increment = () =>
  setCount(prev => prev + 1);
```

Repeated everywhere.

---

### With Hook

```jsx
const {
  count,
  increment
} = useCounter();
```

Simple and reusable.

---

## Real-World Use Cases

### Authentication

```jsx
useAuth()
```

---

### API Calls

```jsx
useFetch()
```

---

### Local Storage

```jsx
useLocalStorage()
```

---

### Form Validation

```jsx
useForm()
```

---

### Theme Management

```jsx
useTheme()
```

---

## Interview Answer

**Custom Hooks should be used to reuse stateful logic across multiple components. They reduce code duplication, improve maintainability, keep components clean, and promote separation of concerns. By encapsulating logic inside reusable Hooks, applications become easier to scale, test, and manage.**

---

# 74. How Do You Share Logic Using Custom Hooks?

## Definition

React allows logic sharing by moving common functionality into a Custom Hook and importing that Hook wherever needed.

Instead of copying code between components, the logic is centralized.

---

## Example: Shared Counter Logic

### Create Hook

```jsx
import { useState } from "react";

function useCounter() {

  const [count, setCount] =
    useState(0);

  const increment = () =>
    setCount(prev => prev + 1);

  return {
    count,
    increment
  };
}

export default useCounter;
```

---

## Component A

```jsx
function ProductCounter() {

  const {
    count,
    increment
  } = useCounter();

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>
        Add Product
      </button>
    </>
  );
}
```

---

## Component B

```jsx
function CartCounter() {

  const {
    count,
    increment
  } = useCounter();

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>
        Add To Cart
      </button>
    </>
  );
}
```

---

## Important Note

Each Hook call creates its own state.

```text
Component A State
       ≠
Component B State
```

Logic is shared.

State is not.

---

## Sharing API Logic

### Hook

```jsx
function useFetch(url) {

  const [data, setData] =
    useState([]);

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(setData);

  }, [url]);

  return data;
}
```

---

### Usage

```jsx
const users =
  useFetch("/users");

const products =
  useFetch("/products");
```

Same logic reused.

---

## Advantages

### Reuse Logic

### Avoid Duplication

### Cleaner Components

### Better Scalability

---

## Interview Answer

**Logic is shared in React by extracting common functionality into Custom Hooks. Components can then import and use the Hook wherever needed. This allows developers to reuse stateful logic without duplicating code. Although the logic is shared, each component receives its own independent state instance when using a Custom Hook.**

---

# 75. What is Hook Reusability?

## Definition

Hook Reusability refers to the ability to write React Hook logic once and reuse it across multiple components.

It is one of the biggest advantages of Hooks.

---

## Before Hooks

Logic sharing required:

```text
Higher-Order Components (HOC)
Render Props
Mixins
```

These patterns increased complexity.

---

## After Hooks

Simply create:

```jsx
useSomething()
```

and reuse it.

---

## Example

### Reusable Hook

```jsx
import { useState } from "react";

function useToggle() {

  const [isOpen, setIsOpen] =
    useState(false);

  const toggle = () =>
    setIsOpen(prev => !prev);

  return {
    isOpen,
    toggle
  };
}
```

---

## Component A

```jsx
function Modal() {

  const {
    isOpen,
    toggle
  } = useToggle();

  return (
    <button onClick={toggle}>
      Modal
    </button>
  );
}
```

---

## Component B

```jsx
function Sidebar() {

  const {
    isOpen,
    toggle
  } = useToggle();

  return (
    <button onClick={toggle}>
      Sidebar
    </button>
  );
}
```

---

## Benefits of Hook Reusability

### Less Code Duplication

### Faster Development

### Better Maintainability

### Easier Testing

### Consistent Logic Across App

### Improved Scalability

---

## Real-World Reusable Hooks

### useFetch

```jsx
useFetch(url)
```

---

### useAuth

```jsx
useAuth()
```

---

### useTheme

```jsx
useTheme()
```

---

### useLocalStorage

```jsx
useLocalStorage()
```

---

### useDebounce

```jsx
useDebounce()
```

---

## Hook Reusability vs Component Reusability

| Feature          | Hook Reusability | Component Reusability |
| ---------------- | ---------------- | --------------------- |
| Reuses Logic     | Yes              | No                    |
| Reuses UI        | No               | Yes                   |
| State Management | Yes              | Sometimes             |
| Business Logic   | Yes              | Limited               |

---

## Interview Answer

**Hook Reusability is the ability to encapsulate React logic inside Custom Hooks and reuse that logic across multiple components. It allows developers to avoid code duplication, maintain consistent behavior, improve scalability, and keep components focused on UI rendering while business logic remains centralized in reusable Hooks.**

---

# Quick Revision Table

| Question | Key Concept                                                 |
| -------- | ----------------------------------------------------------- |
| 71       | Cleanup side effects using return function in `useEffect`   |
| 72       | Custom Hook = reusable Hook-based logic                     |
| 73       | Custom Hooks reduce duplication and improve maintainability |
| 74       | Share logic by extracting it into Custom Hooks              |
| 75       | Hook Reusability means write once, use everywhere           |

### Interview One-Liners

* **Cleanup Side Effects** → Use the return function inside `useEffect`.
* **Custom Hook** → Reusable function that uses React Hooks.
* **Why Custom Hooks?** → Reduce duplication and improve maintainability.
* **Share Logic** → Extract common behavior into Custom Hooks.
* **Hook Reusability** → Write logic once and reuse across components.


# 76. When Should You Use `useMemo`?

## Definition

`useMemo` is a React Hook used to **memoize (cache) the result of expensive calculations** so that React does not recompute them on every render.

It recalculates the value only when one of its dependencies changes.

---

## Syntax

```jsx
const memoizedValue = useMemo(
  () => {
    return expensiveCalculation();
  },
  [dependencies]
);
```

---

## Why Do We Need useMemo?

Consider:

```jsx
function App() {

  const [count, setCount] = useState(0);

  const total = expensiveCalculation();

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
```

Every render:

```text
Component Re-renders
         ↓
expensiveCalculation()
         ↓
Runs Again
```

Even when the calculation result hasn't changed.

This wastes CPU resources.

---

## Solution: useMemo

```jsx
const total = useMemo(() => {
  return expensiveCalculation();
}, []);
```

Now:

```text
First Render
     ↓
Calculate Value
     ↓
Store in Memory
     ↓
Reuse Cached Value
```

until dependencies change.

---

# Example: Expensive Calculation

```jsx
import { useState, useMemo } from "react";

function App() {

  const [count, setCount] = useState(0);

  const square = useMemo(() => {

    console.log("Calculating...");

    return count * count;

  }, [count]);

  return (
    <>
      <h2>{square}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
```

---

## Real-World Use Cases

### Large Data Filtering

```jsx
const activeUsers = useMemo(() => {
  return users.filter(
    user => user.active
  );
}, [users]);
```

---

### Sorting Large Lists

```jsx
const sortedProducts = useMemo(() => {
  return products.sort(sortFn);
}, [products]);
```

---

### Data Transformation

```jsx
const chartData = useMemo(() => {
  return transform(data);
}, [data]);
```

---

### Heavy Mathematical Calculations

```jsx
const result = useMemo(() => {
  return calculateTax(income);
}, [income]);
```

---

## When You SHOULD Use useMemo

### Expensive Calculations

### Large Arrays

### Complex Data Transformations

### Filtering Large Datasets

### Sorting Large Collections

### Preventing Unnecessary Re-computation

---

## When You SHOULD NOT Use useMemo

Bad Example:

```jsx
const name = useMemo(() => {
  return "Rishi";
}, []);
```

Not needed.

Reason:

```text
Simple Calculation
No Performance Gain
Extra Memory Usage
```

---

## Advantages

### Better Performance

### Fewer Recalculations

### Optimized Rendering

### Faster Applications

---

## Interview Answer

**`useMemo` should be used when a component performs expensive calculations, filtering, sorting, or data transformations that do not need to run on every render. It memoizes the computed value and recalculates it only when dependencies change, improving performance and reducing unnecessary computation. However, it should not be used for simple calculations because it introduces additional memory overhead.**

---

# 77. When Should You Use `useCallback`?

## Definition

`useCallback` is used to memoize functions so React can reuse the same function reference across renders.

It prevents unnecessary function recreation.

---

## Syntax

```jsx
const memoizedFunction =
  useCallback(() => {

  }, [dependencies]);
```

---

## Problem Without useCallback

```jsx
function App() {

  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```

Every render:

```text
New Function Created
```

React sees:

```text
Different Function Reference
```

Child components may re-render unnecessarily.

---

## Solution

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Now React reuses:

```text
Same Function Reference
```

---

## Example

```jsx
import { useState, useCallback } from "react";

function App() {

  const [count, setCount] =
    useState(0);

  const handleClick =
    useCallback(() => {

      console.log("Button Clicked");

    }, []);

  return (
    <>
      <Child
        onClick={handleClick}
      />

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        {count}
      </button>
    </>
  );
}
```

---

## Real-World Use Cases

### Passing Functions to Child Components

```jsx
<Child onSave={saveData} />
```

---

### React.memo Optimization

```jsx
export default React.memo(Child);
```

---

### Event Handlers

```jsx
handleSubmit
handleDelete
handleUpdate
```

---

### Dependency Arrays

```jsx
useEffect(() => {
  fetchData();
}, [fetchData]);
```

Use `useCallback` to prevent unnecessary effect execution.

---

## When You SHOULD Use useCallback

### Passing Callbacks to Child Components

### React.memo Components

### Preventing Effect Re-runs

### Performance Optimization

---

## When You SHOULD NOT Use useCallback

Bad Example:

```jsx
const add = useCallback(() => {
  return 1 + 1;
}, []);
```

Not necessary.

---

## useMemo vs useCallback

| Hook        | Memoizes |
| ----------- | -------- |
| useMemo     | Value    |
| useCallback | Function |

---

## Interview Answer

**`useCallback` should be used when a function is passed as a prop to child components, used in dependency arrays, or involved in performance-sensitive rendering. It memoizes the function reference and prevents unnecessary re-renders caused by creating new functions on every render. It is particularly useful with `React.memo` and optimized component trees.**

---

# 78. What is Memoization?

## Definition

Memoization is an optimization technique that stores the result of expensive computations and reuses the cached result when the same input occurs again.

Instead of recalculating:

```text
Input
  ↓
Calculation
  ↓
Result
```

every time,

React can:

```text
Input
  ↓
Cache Check
  ↓
Return Stored Result
```

---

## Example Without Memoization

```jsx
function square(num) {

  console.log("Calculating");

  return num * num;
}
```

Every call:

```jsx
square(5);
square(5);
square(5);
```

performs the calculation again.

---

## Example With Memoization

```jsx
const memoizedSquare =
  useMemo(() => {

    return num * num;

  }, [num]);
```

React stores:

```text
num = 5
result = 25
```

and reuses it.

---

## Memoization in React

### useMemo

Memoizes values.

```jsx
const total = useMemo(
  () => calculate(),
  [data]
);
```

---

### useCallback

Memoizes functions.

```jsx
const save =
  useCallback(() => {}, []);
```

---

### React.memo

Memoizes components.

```jsx
export default React.memo(UserCard);
```

---

## Benefits

### Better Performance

### Reduced Computation

### Faster Rendering

### Efficient Memory Usage

---

## Real-World Example

### Product Filtering

```jsx
const filteredProducts =
  useMemo(() => {

    return products.filter(
      p => p.price < 1000
    );

  }, [products]);
```

Without memoization:

```text
Filter Runs Every Render
```

With memoization:

```text
Filter Runs Only When Products Change
```

---

## Interview Answer

**Memoization is an optimization technique that stores the result of expensive calculations and reuses the cached result when the same inputs occur again. In React, memoization is implemented using `useMemo`, `useCallback`, and `React.memo` to reduce unnecessary computations and improve application performance.**

---

# 79. What is React Hook Form?

## Definition

React Hook Form is a popular React library used for handling forms, validation, and form state management efficiently using React Hooks.

It provides:

* Better Performance
* Less Re-rendering
* Easy Validation
* Cleaner Code
* Simpler Form Handling

---

## Installation

```bash
npm install react-hook-form
```

---

## Basic Example

```jsx
import { useForm }
from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={
        handleSubmit(onSubmit)
      }
    >

      <input
        {...register("name")}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}
```

---

## Important Functions

### register

Connects input fields.

```jsx
register("email")
```

---

### handleSubmit

Handles form submission.

```jsx
handleSubmit(onSubmit)
```

---

### watch

Monitors field values.

```jsx
watch("email")
```

---

### reset

Resets form values.

```jsx
reset()
```

---

### setValue

Updates form values.

```jsx
setValue("name", "Rishi")
```

---

## Validation Example

```jsx
<input
  {...register(
    "email",
    {
      required: true
    }
  )}
/>
```

---

## Why React Hook Form is Popular

### Minimal Re-renders

### Better Performance

### Easy Validation

### Small Bundle Size

### Excellent Developer Experience

---

## Real-World Uses

### Registration Forms

### Login Forms

### Contact Forms

### Checkout Forms

### Dynamic Forms

---

## Interview Answer

**React Hook Form is a lightweight form management library for React that uses Hooks to handle form state, validation, submission, and error handling efficiently. It minimizes re-renders, improves performance, and simplifies form development through APIs such as `register`, `handleSubmit`, `watch`, and `reset`.**

---

# 80. What are Common Mistakes with Hooks?

## Definition

Hooks are powerful, but incorrect usage can lead to bugs, performance issues, and unexpected behavior.

---

# Mistake 1: Calling Hooks Inside Conditions

### Wrong

```jsx
if (loggedIn) {
  useEffect(() => {});
}
```

---

### Correct

```jsx
useEffect(() => {

  if (loggedIn) {
    // logic
  }

}, [loggedIn]);
```

---

# Mistake 2: Calling Hooks Inside Loops

### Wrong

```jsx
for (let i = 0; i < 5; i++) {
  useState();
}
```

---

### Correct

Always call Hooks at the top level.

---

# Mistake 3: Missing Dependencies

### Wrong

```jsx
useEffect(() => {
  fetchUser(id);
}, []);
```

If `id` changes:

```text
Effect Doesn't Re-run
```

---

### Correct

```jsx
useEffect(() => {
  fetchUser(id);
}, [id]);
```

---

# Mistake 4: Infinite Loops

### Wrong

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

Creates:

```text
Infinite Re-render Loop
```

---

# Mistake 5: Mutating State

### Wrong

```jsx
user.name = "Rishi";
setUser(user);
```

---

### Correct

```jsx
setUser({
  ...user,
  name: "Rishi"
});
```

---

# Mistake 6: Overusing useMemo

### Wrong

```jsx
const name = useMemo(
  () => "Rishi",
  []
);
```

No performance benefit.

---

# Mistake 7: Overusing useCallback

### Wrong

```jsx
const add = useCallback(
  () => 1 + 1,
  []
);
```

Unnecessary optimization.

---

# Mistake 8: Forgetting Cleanup

### Wrong

```jsx
useEffect(() => {

  setInterval(() => {
    console.log("Running");
  }, 1000);

}, []);
```

---

### Correct

```jsx
useEffect(() => {

  const timer =
    setInterval(() => {}, 1000);

  return () => {
    clearInterval(timer);
  };

}, []);
```

---

# Mistake 9: Using State Instead of Ref

### Wrong

```jsx
const [timer, setTimer] =
  useState();
```

Causes re-renders.

---

### Better

```jsx
const timerRef = useRef();
```

---

# Mistake 10: Ignoring Hook Rules

Hooks should:

✅ Be called at the top level

✅ Be called inside React functions

❌ Not be called conditionally

❌ Not be called inside loops

---

## Interview Answer

**Common mistakes with Hooks include calling Hooks conditionally, using them inside loops, missing dependencies in `useEffect`, creating infinite loops, mutating state directly, forgetting cleanup functions, overusing `useMemo` and `useCallback`, and violating the Rules of Hooks. Following React's Hook guidelines ensures predictable behavior, better performance, and easier maintenance.**

---

# Quick Revision Table

| Question | Key Concept                                      |
| -------- | ------------------------------------------------ |
| 76       | `useMemo` caches expensive calculations          |
| 77       | `useCallback` caches function references         |
| 78       | Memoization stores results for reuse             |
| 79       | React Hook Form simplifies form handling         |
| 80       | Avoid common Hook mistakes and follow Hook rules |

### Interview One-Liners

* **useMemo** → Cache expensive computed values.
* **useCallback** → Cache function references.
* **Memoization** → Reuse previously computed results.
* **React Hook Form** → High-performance form management library.
* **Common Hook Mistakes** → Missing dependencies, infinite loops, conditional Hooks, and lack of cleanup.
