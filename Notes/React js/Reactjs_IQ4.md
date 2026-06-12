
## 🔄 5. Lifecycle Methods & Effects (81–95)

81. What are lifecycle methods in React?
82. What are mounting lifecycle methods?
83. What are updating lifecycle methods?
84. What are unmounting lifecycle methods?
85. What is `componentDidMount()`?
86. What is `componentDidUpdate()`?
87. What is `componentWillUnmount()`?
88. Why is `componentWillMount()` deprecated?
89. How do lifecycle methods work in functional components?
90. Which Hook replaces lifecycle methods?
91. What are side effects?
92. What is cleanup in React?
93. What are memory leaks in React?
94. How do you prevent memory leaks?
95. What is React Strict Mode?

---

## 🌐 6. Event Handling & Forms (96–110)

96. What is event handling in React?
97. How are React events different from DOM events?
98. What is Synthetic Event?
99. How do you pass parameters to event handlers?
100. What is event bubbling?
101. What is event capturing?
102. What is a controlled component?
103. What is an uncontrolled component?
104. What is the difference between controlled and uncontrolled components?
105. What is form validation?
106. How do you handle forms in React?
107. What is React Hook Form?
108. What is Formik?
109. How do you upload files in React?
110. How do you handle multiple form inputs?

---

## 🌍 7. Routing (111–120)

111. What is React Router?
112. Why do we use React Router?
113. What is BrowserRouter?
114. What is Routes component?
115. What is Route component?
116. What is Link component?
117. What is NavLink?
118. What is useNavigate Hook?
119. What are route parameters?
120. What is protected routing?

---

## 📦 8. Context API & State Libraries (121–135)

121. What is Context API?
122. Why is Context API used?
123. How do you create a context?
124. What is Context Provider?
125. What is Context Consumer?
126. What is `useContext`?
127. What are the limitations of Context API?
128. What is Redux?
129. Why do we use Redux?
130. What is Redux Toolkit?
131. What is Redux Store?
132. What are Actions in Redux?
133. What are Reducers?
134. What is Middleware in Redux?
135. What is Zustand?

---

# 🔄 5. Lifecycle Methods & Effects (81–85) – React Interview Questions & Answers

---

# 81. What are Lifecycle Methods in React?

### Answer

Lifecycle methods are special methods in **React Class Components** that allow developers to execute code at specific stages of a component's life.

A React component goes through three major phases:

1. **Mounting** → Component is created and inserted into the DOM.
2. **Updating** → Component re-renders because props or state change.
3. **Unmounting** → Component is removed from the DOM.

Lifecycle methods help developers:

* Fetch data from APIs
* Update UI
* Perform side effects
* Clean up resources
* Manage subscriptions

---

### Lifecycle Flow

```text
Mounting
   ↓
Updating
   ↓
Unmounting
```

---

### Common Lifecycle Methods

| Phase      | Method                    |
| ---------- | ------------------------- |
| Mounting   | constructor()             |
| Mounting   | render()                  |
| Mounting   | componentDidMount()       |
| Updating   | shouldComponentUpdate()   |
| Updating   | getSnapshotBeforeUpdate() |
| Updating   | componentDidUpdate()      |
| Unmounting | componentWillUnmount()    |

---

### Example

```jsx
class User extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return <h1>Hello User</h1>;
  }
}
```

---

### Lifecycle Methods in Functional Components

Modern React uses **Hooks** instead of lifecycle methods.

Example:

```jsx
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
```

---

### Interview Tip

Lifecycle methods are mainly used in **Class Components**, while **Hooks (useEffect)** are used in Functional Components to achieve the same behavior.

---

# 82. What are Mounting Lifecycle Methods?

### Answer

Mounting refers to the phase when a component is:

1. Created
2. Rendered
3. Added to the DOM

During this phase React executes several lifecycle methods.

---

### Mounting Lifecycle Sequence

```text
constructor()
    ↓
render()
    ↓
componentDidMount()
```

---

## 1. constructor()

Used for:

* Initializing state
* Binding methods

```jsx
constructor(props) {
  super(props);

  this.state = {
    count: 0
  };
}
```

---

## 2. render()

Responsible for returning JSX.

```jsx
render() {
  return <h1>Hello React</h1>;
}
```

---

## 3. componentDidMount()

Runs after component appears in the DOM.

```jsx
componentDidMount() {
  console.log("Mounted");
}
```

---

### Real Example

```jsx
class User extends React.Component {
  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return <h1>Users</h1>;
  }
}
```

---

### Functional Component Equivalent

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

---

### Interview Tip

API calls are usually made inside **componentDidMount()** because the component is already rendered.

---

# 83. What are Updating Lifecycle Methods?

### Answer

Updating lifecycle methods execute whenever:

* State changes
* Props change
* Force update occurs

These methods control how React updates the DOM.

---

### Updating Lifecycle Flow

```text
New Props / State
        ↓
shouldComponentUpdate()
        ↓
render()
        ↓
getSnapshotBeforeUpdate()
        ↓
componentDidUpdate()
```

---

## 1. shouldComponentUpdate()

Determines whether component should re-render.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```

### Benefit

Improves performance by preventing unnecessary renders.

---

## 2. render()

Runs again whenever updates occur.

```jsx
render() {
  return <h1>{this.state.count}</h1>;
}
```

---

## 3. getSnapshotBeforeUpdate()

Captures DOM information before update.

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  return document.documentElement.scrollTop;
}
```

---

## 4. componentDidUpdate()

Runs after update is completed.

```jsx
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    console.log("ID Changed");
  }
}
```

---

### Example

```jsx
class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState({
            count: this.state.count + 1
          })
        }
      >
        {this.state.count}
      </button>
    );
  }
}
```

---

### Functional Component Equivalent

```jsx
useEffect(() => {
  console.log("Count Updated");
}, [count]);
```

---

### Interview Tip

`componentDidUpdate()` is commonly used for:

* API calls after changes
* Updating third-party libraries
* Synchronizing state

---

# 84. What are Unmounting Lifecycle Methods?

### Answer

Unmounting occurs when a component is removed from the DOM.

React executes cleanup logic during this phase.

---

### Why Cleanup is Important

Without cleanup:

* Memory leaks occur
* Timers continue running
* API subscriptions remain active
* Event listeners accumulate

---

### Unmounting Lifecycle Method

```jsx
componentWillUnmount()
```

This method runs just before component destruction.

---

### Example

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Running...");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>Timer</h1>;
  }
}
```

---

### Event Listener Cleanup

```jsx
componentDidMount() {
  window.addEventListener("resize", this.handleResize);
}

componentWillUnmount() {
  window.removeEventListener("resize", this.handleResize);
}
```

---

### Functional Component Equivalent

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

---

### Interview Tip

`componentWillUnmount()` is mainly used for:

* Clearing timers
* Cancelling subscriptions
* Removing event listeners
* Cleaning WebSocket connections

---

# 85. What is componentDidMount()?

### Answer

`componentDidMount()` is a mounting lifecycle method that executes immediately after a component has been rendered and inserted into the DOM.

It runs only once during the component's lifecycle.

---

### Syntax

```jsx
componentDidMount() {
  // Code here
}
```

---

### Why Use componentDidMount()?

Because the DOM is fully available at this point.

Common tasks include:

* API Calls
* Fetching Data
* DOM Manipulation
* Event Registration
* Initializing Libraries

---

### Example 1: API Call

```jsx
class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data
        })
      );
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
}
```

---

### Example 2: Event Listener

```jsx
componentDidMount() {
  window.addEventListener(
    "resize",
    this.handleResize
  );
}
```

---

### Example 3: Third-Party Library

```jsx
componentDidMount() {
  new Chart(document.getElementById("chart"));
}
```

---

### Functional Component Equivalent

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

The empty dependency array (`[]`) ensures the effect runs only once after the initial render.

---

### Key Characteristics

| Feature               | componentDidMount() |
| --------------------- | ------------------- |
| Lifecycle Phase       | Mounting            |
| Runs Once             | Yes                 |
| DOM Available         | Yes                 |
| API Calls             | Yes                 |
| State Updates Allowed | Yes                 |
| Class Components      | Yes                 |

---

### Interview Tip

One of the most common React interview questions is:

**"Why are API calls usually made inside componentDidMount()?"**

**Answer:** Because the component is already rendered in the DOM, making it safe to fetch data and update the state without blocking the initial UI rendering.

---

## Quick Revision

| Method                  | Purpose              |
| ----------------------- | -------------------- |
| constructor()           | Initialize state     |
| render()                | Render UI            |
| componentDidMount()     | Run code after mount |
| shouldComponentUpdate() | Optimize rendering   |
| componentDidUpdate()    | React to updates     |
| componentWillUnmount()  | Cleanup resources    |

These lifecycle methods form the foundation of understanding how React components are created, updated, and destroyed, and they are frequently asked in React interviews for both freshers and experienced developers.


# 🔄 5. Lifecycle Methods & Effects (86–90) – React Interview Questions & Answers

---

# 86. What is `componentDidUpdate()`?

## Answer

`componentDidUpdate()` is an **updating lifecycle method** in React Class Components.

It executes **immediately after a component re-renders because of a change in state or props**.

This method allows developers to perform side effects after updates such as:

* API Calls
* DOM Updates
* Logging
* Data Synchronization
* Updating Third-Party Libraries

---

## Syntax

```jsx
componentDidUpdate(prevProps, prevState) {
  // code here
}
```

### Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| prevProps | Previous props before update |
| prevState | Previous state before update |

These parameters help compare old and new values.

---

## Lifecycle Flow

```text
State Change
      ↓
Render
      ↓
DOM Update
      ↓
componentDidUpdate()
```

---

## Example 1: Detect State Changes

```jsx
class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count changed");
    }
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState({
            count: this.state.count + 1
          })
        }
      >
        {this.state.count}
      </button>
    );
  }
}
```

### Output

```text
Count changed
Count changed
Count changed
```

Each click updates state and triggers `componentDidUpdate()`.

---

## Example 2: API Call After Prop Change

```jsx
componentDidUpdate(prevProps) {
  if (prevProps.userId !== this.props.userId) {
    this.fetchUserData();
  }
}
```

When the user ID changes, fresh data is loaded.

---

## Avoid Infinite Loops

❌ Wrong

```jsx
componentDidUpdate() {
  this.setState({
    count: this.state.count + 1
  });
}
```

This creates an endless update cycle.

---

✅ Correct

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("Updated");
  }
}
```

Always compare previous values before calling `setState()`.

---

## Functional Component Equivalent

```jsx
useEffect(() => {
  console.log("Count Updated");
}, [count]);
```

Runs whenever `count` changes.

---

## Interview Tip

A common interview question is:

**"When should you use componentDidUpdate()?"**

Answer:

Use it when you need to perform actions after a component updates, such as fetching data based on changed props, updating the DOM, or synchronizing external systems.

---

# 87. What is `componentWillUnmount()`?

## Answer

`componentWillUnmount()` is an **unmounting lifecycle method**.

It runs just before a component is removed from the DOM.

This method is primarily used for cleanup operations.

---

## Syntax

```jsx
componentWillUnmount() {
  // cleanup code
}
```

---

## Why Cleanup Is Important

Without cleanup:

* Memory leaks can occur
* Timers keep running
* Event listeners remain attached
* WebSocket connections stay open

---

## Lifecycle Flow

```text
Component Mounted
       ↓
Component Running
       ↓
Component Removed
       ↓
componentWillUnmount()
```

---

## Example 1: Clearing Interval

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>Timer</h1>;
  }
}
```

---

## Example 2: Removing Event Listener

```jsx
componentDidMount() {
  window.addEventListener(
    "resize",
    this.handleResize
  );
}

componentWillUnmount() {
  window.removeEventListener(
    "resize",
    this.handleResize
  );
}
```

---

## Example 3: Closing WebSocket

```jsx
componentDidMount() {
  this.socket = new WebSocket("ws://localhost");
}

componentWillUnmount() {
  this.socket.close();
}
```

---

## Functional Component Equivalent

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

The returned function acts as cleanup logic.

---

## Interview Tip

`componentWillUnmount()` is one of the most important lifecycle methods because it prevents memory leaks and improves application performance.

---

# 88. Why is `componentWillMount()` Deprecated?

## Answer

`componentWillMount()` was a lifecycle method that executed **before the initial render**.

---

## Old Usage

```jsx
componentWillMount() {
  console.log("Before Mounting");
}
```

---

## Problem with componentWillMount()

React introduced:

* Concurrent Rendering
* Async Rendering
* Better Performance Optimizations

These improvements made `componentWillMount()` unsafe.

The method could execute multiple times before rendering, causing unexpected behavior.

---

## Common Issues

### Multiple API Requests

```jsx
componentWillMount() {
  fetch("/users");
}
```

Could accidentally run more than once.

---

### Side Effects Before Render

```jsx
componentWillMount() {
  localStorage.setItem("user", "Rishi");
}
```

Side effects before rendering created inconsistencies.

---

## Modern Replacement

Use:

```jsx
componentDidMount()
```

Instead.

---

### Before

```jsx
componentWillMount() {
  fetchData();
}
```

---

### After

```jsx
componentDidMount() {
  fetchData();
}
```

---

## Deprecated Lifecycle Methods

React deprecated:

```jsx
componentWillMount()
componentWillReceiveProps()
componentWillUpdate()
```

and replaced them with safer alternatives.

---

## UNSAFE Methods

React renamed them:

```jsx
UNSAFE_componentWillMount()
UNSAFE_componentWillReceiveProps()
UNSAFE_componentWillUpdate()
```

to discourage usage.

---

## Interview Tip

If asked:

**"Why was componentWillMount deprecated?"**

Answer:

Because React's asynchronous rendering model could invoke it multiple times, causing bugs, duplicate API calls, and inconsistent side effects.

---

# 89. How Do Lifecycle Methods Work in Functional Components?

## Answer

Functional Components do not have traditional lifecycle methods like Class Components.

Instead, React uses **Hooks** to manage lifecycle behavior.

The most important Hook is:

```jsx
useEffect()
```

---

## Mapping Lifecycle Methods to Hooks

| Class Lifecycle      | Functional Equivalent             |
| -------------------- | --------------------------------- |
| componentDidMount    | useEffect(() => {}, [])           |
| componentDidUpdate   | useEffect(() => {}, [dependency]) |
| componentWillUnmount | Cleanup Function                  |
| All Combined         | useEffect()                       |

---

## Mounting Example

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

Runs only once.

Equivalent to:

```jsx
componentDidMount()
```

---

## Updating Example

```jsx
useEffect(() => {
  console.log("Count Updated");
}, [count]);
```

Runs whenever count changes.

Equivalent to:

```jsx
componentDidUpdate()
```

---

## Unmounting Example

```jsx
useEffect(() => {
  return () => {
    console.log("Unmounted");
  };
}, []);
```

Equivalent to:

```jsx
componentWillUnmount()
```

---

## Complete Lifecycle Example

```jsx
function User() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

## Benefits of Hooks

* Less code
* Cleaner syntax
* Better reusability
* Easier maintenance
* No class components required

---

## Interview Tip

Modern React development is primarily based on Functional Components and Hooks rather than lifecycle methods.

---

# 90. Which Hook Replaces Lifecycle Methods?

## Answer

The Hook that replaces most lifecycle methods is:

```jsx
useEffect()
```

It allows Functional Components to perform side effects and manage lifecycle behavior.

---

## Import

```jsx
import { useEffect } from "react";
```

---

## Syntax

```jsx
useEffect(() => {
  // Side Effect

  return () => {
    // Cleanup
  };
}, [dependencies]);
```

---

## Lifecycle Equivalents

### 1. componentDidMount()

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

Runs once after initial render.

---

### 2. componentDidUpdate()

```jsx
useEffect(() => {
  console.log("Updated");
}, [count]);
```

Runs when dependencies change.

---

### 3. componentWillUnmount()

```jsx
useEffect(() => {
  return () => {
    console.log("Unmounted");
  };
}, []);
```

Runs before component removal.

---

## Visual Understanding

```text
useEffect(() => {}, [])
           ↓
     componentDidMount

useEffect(() => {}, [value])
           ↓
     componentDidUpdate

return () => {}
           ↓
   componentWillUnmount
```

---

## Real Example

```jsx
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(data => setUsers(data));

    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <div>
      {users.length} Users
    </div>
  );
}
```

---

## Why React Introduced useEffect

Before Hooks:

```jsx
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

Developers often duplicated logic across multiple methods.

With Hooks:

```jsx
useEffect()
```

All related logic can stay together.

---

## Key Advantages of useEffect

✅ Replaces multiple lifecycle methods

✅ Works in Functional Components

✅ Supports cleanup

✅ Easier to read

✅ Better code organization

✅ Encourages reusable custom hooks

---

## Quick Revision (86–90)

| Question                                                | Short Answer                              |
| ------------------------------------------------------- | ----------------------------------------- |
| What is componentDidUpdate()?                           | Runs after props or state update          |
| What is componentWillUnmount()?                         | Runs before component removal for cleanup |
| Why is componentWillMount deprecated?                   | Unsafe with async/concurrent rendering    |
| How do lifecycle methods work in Functional Components? | Through Hooks, mainly useEffect           |
| Which Hook replaces lifecycle methods?                  | useEffect                                 |

These five questions are among the most frequently asked React lifecycle and Hooks interview questions, especially when interviewers want to test your understanding of the transition from Class Components to modern Functional Components.


# 🔄 5. Lifecycle Methods & Effects (91–95) – React Interview Questions & Answers

---

# 91. What are Side Effects in React?

## Answer

In React, a **side effect** is any operation that interacts with something outside the component's rendering process.

React components should ideally be pure functions that only return UI based on props and state.

Whenever a component performs work beyond rendering UI, it is called a **side effect**.

---

## Examples of Side Effects

### API Calls

```jsx
fetch("/api/users");
```

---

### Setting Timers

```jsx
setInterval(() => {
  console.log("Running");
}, 1000);
```

---

### Updating Document Title

```jsx
document.title = "Dashboard";
```

---

### Accessing Local Storage

```jsx
localStorage.setItem("user", "Rishi");
```

---

### Event Listeners

```jsx
window.addEventListener("resize", handleResize);
```

---

## Why Are Side Effects Important?

Applications often need to:

* Fetch data
* Store data
* Listen to browser events
* Connect WebSockets
* Update page titles
* Work with third-party libraries

All of these are side effects.

---

## Managing Side Effects in Functional Components

React provides:

```jsx
useEffect()
```

for handling side effects.

---

### Example: API Call

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.length} Users
    </div>
  );
}
```

---

## Side Effect Flow

```text
Component Render
        ↓
UI Displayed
        ↓
useEffect Executes
        ↓
Side Effect Runs
```

---

## Common Side Effects

| Side Effect    | Example            |
| -------------- | ------------------ |
| API Request    | fetch()            |
| Timer          | setInterval()      |
| Storage        | localStorage       |
| DOM Update     | document.title     |
| Event Listener | addEventListener() |
| WebSocket      | socket.connect()   |

---

## Interview Tip

A common interview question is:

**"Why shouldn't side effects run directly inside render?"**

Answer:

Because rendering should remain pure and predictable. Running side effects during render can cause repeated executions, performance issues, and unexpected behavior.

---

# 92. What is Cleanup in React?

## Answer

Cleanup refers to removing or stopping resources that were created by a component when they are no longer needed.

Cleanup prevents:

* Memory leaks
* Unnecessary API activity
* Duplicate event listeners
* Performance issues

---

## Why Cleanup Is Necessary

Suppose a component creates:

```jsx
setInterval()
```

If the component disappears but the interval keeps running, unnecessary code continues executing.

Cleanup stops it.

---

## Cleanup with useEffect

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, []);
```

The returned function is called the **cleanup function**.

---

## Example 1: Clearing Interval

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

## Example 2: Removing Event Listener

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

## Example 3: Closing WebSocket

```jsx
useEffect(() => {
  const socket = new WebSocket(
    "ws://localhost"
  );

  return () => {
    socket.close();
  };
}, []);
```

---

## Cleanup Execution Times

React runs cleanup:

### Before Component Unmounts

```text
Component Removed
       ↓
Cleanup Runs
```

---

### Before Re-running Effect

```text
Dependency Changed
       ↓
Old Cleanup Runs
       ↓
New Effect Runs
```

---

## Interview Tip

Always clean up:

* Intervals
* Timeouts
* Event listeners
* WebSockets
* Subscriptions

This prevents performance problems in large applications.

---

# 93. What are Memory Leaks in React?

## Answer

A memory leak occurs when unused resources continue consuming memory even after a component has been removed.

This leads to:

* Increased memory usage
* Slower applications
* Unexpected behavior
* Browser crashes in extreme cases

---

## Simple Definition

Memory leak means:

```text
Component Removed
       ↓
Resources Still Active
       ↓
Memory Wasted
```

---

## Common Causes

### Uncleaned Timers

```jsx
useEffect(() => {
  setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);
```

The interval continues forever.

---

### Event Listeners

```jsx
window.addEventListener(
  "resize",
  handleResize
);
```

If not removed, listeners accumulate.

---

### WebSockets

```jsx
const socket = new WebSocket(
  "ws://localhost"
);
```

If not closed, the connection remains active.

---

### API Requests

```jsx
fetch("/users");
```

A response may arrive after the component is gone.

---

## Memory Leak Example

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);
```

After unmounting:

```text
Component Removed
Interval Still Running
```

This causes a leak.

---

## Fixed Version

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

---

## Symptoms of Memory Leaks

* App becomes slow
* Increased RAM usage
* Duplicate API requests
* Multiple event triggers
* Browser lag

---

## Interview Tip

Most React memory leaks are caused by forgetting cleanup logic in `useEffect`.

---

# 94. How Do You Prevent Memory Leaks?

## Answer

Preventing memory leaks means properly releasing resources when a component is updated or removed.

The best approach is using cleanup functions.

---

## 1. Clear Intervals

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
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

## 2. Clear Timeouts

```jsx
useEffect(() => {
  const timeout = setTimeout(() => {
    console.log("Done");
  }, 3000);

  return () => {
    clearTimeout(timeout);
  };
}, []);
```

---

## 3. Remove Event Listeners

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

## 4. Close WebSockets

```jsx
useEffect(() => {
  const socket = new WebSocket(
    "ws://localhost"
  );

  return () => {
    socket.close();
  };
}, []);
```

---

## 5. Abort API Requests

```jsx
useEffect(() => {
  const controller =
    new AbortController();

  fetch("/users", {
    signal: controller.signal
  });

  return () => {
    controller.abort();
  };
}, []);
```

---

## Prevention Checklist

✅ Clear intervals

✅ Clear timeouts

✅ Remove listeners

✅ Close WebSockets

✅ Cancel subscriptions

✅ Abort requests

---

## Interview Tip

If asked:

**"What is the most common way to prevent memory leaks in React?"**

Answer:

Use cleanup functions inside `useEffect` to release resources when components unmount.

---

# 95. What is React Strict Mode?

## Answer

React Strict Mode is a development-only tool that helps identify potential problems in a React application.

It does not affect the production build.

Strict Mode provides additional checks and warnings to improve code quality.

---

## Syntax

```jsx
import React from "react";

<React.StrictMode>
  <App />
</React.StrictMode>;
```

---

## Example in main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## What Strict Mode Detects

### Unsafe Lifecycle Methods

```jsx
UNSAFE_componentWillMount()
```

---

### Deprecated APIs

Warns about outdated React features.

---

### Side Effects

Detects unexpected side effects during rendering.

---

### Missing Cleanup

Helps reveal issues with effects that aren't properly cleaned up.

---

## Why Does useEffect Run Twice in Development?

Many beginners notice:

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

Output:

```text
Mounted
Mounted
```

This happens because Strict Mode intentionally re-runs certain lifecycle operations in development to detect bugs.

Production runs only once.

---

## Benefits

### Better Code Quality

Finds hidden problems early.

---

### Detects Memory Leaks

Reveals missing cleanup functions.

---

### Encourages Best Practices

Promotes modern React patterns.

---

### Future Compatibility

Prepares applications for future React features.

---

## Strict Mode vs Production

| Feature                 | Development | Production |
| ----------------------- | ----------- | ---------- |
| Warnings                | Yes         | No         |
| Extra Checks            | Yes         | No         |
| Double Effect Execution | Yes         | No         |
| Performance Impact      | Small       | None       |

---

## Example

```jsx
function App() {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Cleanup");
    };
  }, []);

  return <h1>Hello React</h1>;
}
```

Development output:

```text
Mounted
Cleanup
Mounted
```

This helps React verify cleanup behavior.

---

## Interview Tip

A very common React interview question is:

**"Why does useEffect execute twice in React 18 development mode?"**

**Answer:** Because React Strict Mode intentionally mounts, unmounts, and re-mounts components in development to detect side effects, cleanup issues, and unsafe code patterns. This behavior does not occur in production.

---

# 🚀 Quick Revision (91–95)

| Question                         | Short Answer                                                            |
| -------------------------------- | ----------------------------------------------------------------------- |
| What are Side Effects?           | Operations outside rendering such as API calls, timers, and DOM updates |
| What is Cleanup?                 | Removing resources when effects are no longer needed                    |
| What are Memory Leaks?           | Unused resources continuing to consume memory                           |
| How do you Prevent Memory Leaks? | Cleanup intervals, listeners, WebSockets, subscriptions, and requests   |
| What is React Strict Mode?       | A development tool that detects potential React problems                |

These concepts are extremely important because modern React development revolves around **useEffect, side effects, cleanup functions, memory management, and Strict Mode**, making them favorite topics in React interviews for both freshers and experienced developers.


## 🌐 6. Event Handling & Forms (96–110)

# 🌐 6. Event Handling & Forms (96–100) – React Interview Questions & Answers

---

# 96. What is Event Handling in React?

## Answer

**Event Handling** in React is the process of responding to user interactions such as:

* Clicking a button
* Typing in an input field
* Submitting a form
* Hovering over an element
* Pressing keyboard keys

Events allow React applications to become interactive and dynamic.

---

## Why Event Handling is Important

Without event handling, a React application would only display static content.

Event handling allows users to:

* Submit forms
* Update data
* Trigger API calls
* Navigate pages
* Interact with UI components

---

## Basic Example

```jsx
function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

---

## How It Works

```text
User Clicks Button
        ↓
onClick Event Fires
        ↓
handleClick Executes
        ↓
UI Responds
```

---

## Common React Events

| Event        | Description          |
| ------------ | -------------------- |
| onClick      | Mouse click          |
| onChange     | Input value changes  |
| onSubmit     | Form submission      |
| onMouseEnter | Mouse enters element |
| onMouseLeave | Mouse leaves element |
| onKeyDown    | Key pressed          |
| onKeyUp      | Key released         |
| onFocus      | Element gets focus   |
| onBlur       | Element loses focus  |

---

## Example: Input Event

```jsx
function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  );
}
```

---

## Event Handling in Class Components

```jsx
class App extends React.Component {
  handleClick = () => {
    alert("Clicked");
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click
      </button>
    );
  }
}
```

---

## Interview Tip

In React, event handlers are passed as functions, not function calls.

✅ Correct

```jsx
<button onClick={handleClick}>
```

❌ Wrong

```jsx
<button onClick={handleClick()}>
```

The second version executes immediately during rendering.

---

# 97. How are React Events Different from DOM Events?

## Answer

React events look similar to native JavaScript DOM events, but they are implemented differently.

React uses a system called **Synthetic Events** to provide consistent behavior across all browsers.

---

## Key Differences

| React Events                | DOM Events               |
| --------------------------- | ------------------------ |
| CamelCase naming            | Lowercase naming         |
| Uses SyntheticEvent         | Uses Native Event        |
| Passed as function          | String attribute allowed |
| Cross-browser compatibility | Browser-dependent        |
| Better performance          | Direct browser event     |

---

## Event Naming

### HTML DOM

```html
<button onclick="handleClick()">
  Click
</button>
```

---

### React

```jsx
<button onClick={handleClick}>
  Click
</button>
```

Notice:

```text
onclick  → HTML
onClick  → React
```

React uses CamelCase.

---

## Event Handler Syntax

### DOM

```html
<button onclick="alert('Hello')">
  Click
</button>
```

---

### React

```jsx
<button onClick={() => alert("Hello")}>
  Click
</button>
```

React requires a JavaScript function.

---

## Event Object

### DOM

```javascript
button.addEventListener(
  "click",
  function(event) {
    console.log(event);
  }
);
```

---

### React

```jsx
<button
  onClick={(event) => {
    console.log(event);
  }}
>
  Click
</button>
```

React provides a Synthetic Event object.

---

## Browser Compatibility

React normalizes event behavior across browsers.

Example:

```text
Chrome
Firefox
Safari
Edge
```

React ensures consistent event handling in all of them.

---

## Interview Tip

A common interview answer:

**React events are wrappers around native browser events and are implemented using the Synthetic Event system for consistency and performance.**

---

# 98. What is Synthetic Event?

## Answer

A **Synthetic Event** is React's wrapper around the native browser event.

It provides a consistent API that works the same way across all browsers.

Instead of dealing directly with browser-specific events, React uses Synthetic Events.

---

## Definition

```text
Native Browser Event
          ↓
React Wrapper
          ↓
Synthetic Event
```

---

## Why React Created Synthetic Events

Different browsers handle events differently.

React solves this problem by creating a unified event system.

Benefits:

* Cross-browser compatibility
* Consistent behavior
* Better performance
* Simplified event handling

---

## Example

```jsx
function App() {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}
```

The `event` object is a Synthetic Event.

---

## Common Properties

```jsx
event.target
event.type
event.preventDefault()
event.stopPropagation()
```

Example:

```jsx
function handleClick(event) {
  console.log(event.type);
}
```

Output:

```text
click
```

---

## Access Native Event

If needed:

```jsx
function handleClick(event) {
  console.log(event.nativeEvent);
}
```

---

## Example: Form Submission

```jsx
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}
```

---

## Interview Tip

**Synthetic Event** is React's cross-browser event wrapper that behaves consistently regardless of browser implementation.

---

# 99. How Do You Pass Parameters to Event Handlers?

## Answer

Often event handlers need additional data besides the event object.

React allows parameters to be passed using:

1. Arrow Functions
2. bind()

Arrow functions are the most commonly used approach.

---

## Method 1: Arrow Function (Recommended)

```jsx
function App() {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <button
      onClick={() => handleClick(101)}
    >
      Click
    </button>
  );
}
```

Output:

```text
101
```

---

## Passing Multiple Parameters

```jsx
<button
  onClick={() =>
    handleClick(101, "Rishi")
  }
>
  Click
</button>
```

Handler:

```jsx
const handleClick = (id, name) => {
  console.log(id, name);
};
```

Output:

```text
101 Rishi
```

---

## Method 2: Using bind()

```jsx
<button
  onClick={handleClick.bind(null, 101)}
>
  Click
</button>
```

Handler:

```jsx
function handleClick(id) {
  console.log(id);
}
```

---

## Passing Event and Parameter

```jsx
<button
  onClick={(event) =>
    handleClick(event, 101)
  }
>
  Click
</button>
```

Handler:

```jsx
const handleClick = (
  event,
  id
) => {
  console.log(id);
};
```

---

## Common Mistake

❌ Wrong

```jsx
<button onClick={handleClick(101)}>
```

This executes immediately during render.

---

✅ Correct

```jsx
<button
  onClick={() => handleClick(101)}
>
```

---

## Real-World Example

```jsx
function ProductList() {
  const addToCart = (id) => {
    console.log(
      `Product ${id} Added`
    );
  };

  return (
    <button
      onClick={() => addToCart(5)}
    >
      Add To Cart
    </button>
  );
}
```

---

## Interview Tip

Use arrow functions when passing arguments because they are cleaner, easier to read, and widely used in modern React applications.

---

# 100. What is Event Bubbling?

## Answer

Event Bubbling is a process where an event starts from the target element and propagates upward through its parent elements.

React follows the same event bubbling mechanism as the DOM.

---

## Example Structure

```html
<div>
  <button>
    Click Me
  </button>
</div>
```

When the button is clicked:

```text
Button Click
      ↓
Div Click
      ↓
Parent Elements
```

The event travels upward.

---

## React Example

```jsx
function App() {
  return (
    <div
      onClick={() =>
        console.log("Div Clicked")
      }
    >
      <button
        onClick={() =>
          console.log("Button Clicked")
        }
      >
        Click Me
      </button>
    </div>
  );
}
```

---

## Output

```text
Button Clicked
Div Clicked
```

The event first occurs on the button and then bubbles to the parent div.

---

## Visual Flow

```text
Button
   ↓
Div
   ↓
Body
   ↓
Document
```

---

## Stopping Event Bubbling

Use:

```jsx
event.stopPropagation();
```

Example:

```jsx
function App() {
  const handleButton = (e) => {
    e.stopPropagation();

    console.log("Button Click");
  };

  return (
    <div
      onClick={() =>
        console.log("Div Click")
      }
    >
      <button onClick={handleButton}>
        Click
      </button>
    </div>
  );
}
```

---

## Output

```text
Button Click
```

The parent div does not receive the event.

---

## Real-World Example

### Modal Window

```text
Click Modal Content
       ↓
Do Not Close Modal
```

Using:

```jsx
event.stopPropagation();
```

prevents clicks inside the modal from triggering the background click handler.

---

## Event Bubbling vs Event Capturing

| Bubbling         | Capturing                 |
| ---------------- | ------------------------- |
| Child → Parent   | Parent → Child            |
| Default behavior | Requires special handling |
| Most common      | Less common               |

---

## Interview Tip

A frequently asked React interview question:

**"Why does clicking a child element also trigger the parent's click event?"**

Answer:

Because React follows the DOM event bubbling mechanism, where events propagate from the target element upward through its ancestors unless `event.stopPropagation()` is used.

---

# 🚀 Quick Revision (96–100)

| Question                 | Short Answer                                    |
| ------------------------ | ----------------------------------------------- |
| What is Event Handling?  | Responding to user interactions                 |
| React vs DOM Events?     | React uses Synthetic Events and CamelCase names |
| What is Synthetic Event? | React's cross-browser event wrapper             |
| How to Pass Parameters?  | Arrow functions or bind()                       |
| What is Event Bubbling?  | Event propagation from child to parent          |

These five questions are among the most frequently asked React interview questions because event handling forms the foundation of user interaction, form management, and dynamic UI behavior in React applications.


# 🌐 6. Event Handling & Forms (101–105) – Detailed React Interview Answers

---

# 101. What is Event Capturing in React?

## Answer

**Event Capturing** (also known as **Event Trickling**) is one of the phases of event propagation in which an event travels from the outermost parent element down to the target element.

When a user clicks an element, the browser follows three phases:

```text
1. Capturing Phase
2. Target Phase
3. Bubbling Phase
```

### Example Structure

```html
<div>
    <button>Click Me</button>
</div>
```

If the button is clicked:

### Capturing Phase

```text
Document
   ↓
HTML
   ↓
Body
   ↓
Div
   ↓
Button
```

### Bubbling Phase

```text
Button
   ↑
Div
   ↑
Body
   ↑
Document
```

---

## Event Propagation Phases

### Phase 1: Capturing

Event travels from parent to child.

```text
Parent → Child
```

### Phase 2: Target

Event reaches the clicked element.

```text
Button Clicked
```

### Phase 3: Bubbling

Event travels back upward.

```text
Child → Parent
```

---

## Event Capturing in React

React provides special capture events.

### Syntax

```jsx
onClickCapture
onFocusCapture
onBlurCapture
onMouseDownCapture
```

---

### Example

```jsx
function App() {
  return (
    <div
      onClickCapture={() =>
        console.log("Div Capture")
      }
    >
      <button
        onClickCapture={() =>
          console.log("Button Capture")
        }
      >
        Click Me
      </button>
    </div>
  );
}
```

### Output

```text
Div Capture
Button Capture
```

Parent executes first because capturing flows downward.

---

## Capturing vs Bubbling Example

```jsx
function App() {
  return (
    <div
      onClickCapture={() =>
        console.log("Capture Div")
      }
      onClick={() =>
        console.log("Bubble Div")
      }
    >
      <button
        onClickCapture={() =>
          console.log("Capture Button")
        }
        onClick={() =>
          console.log("Bubble Button")
        }
      >
        Click
      </button>
    </div>
  );
}
```

### Output

```text
Capture Div
Capture Button
Bubble Button
Bubble Div
```

---

## Real-World Use Cases

### Analytics Tracking

```jsx
<div
  onClickCapture={() =>
    trackUserActivity()
  }
>
```

Track user actions before child components process them.

### Logging

Capture events before they reach business logic.

### Security Monitoring

Monitor interactions globally before child components react.

---

## Interview Tip

**Difference Between Event Capturing and Event Bubbling**

| Event Capturing     | Event Bubbling |
| ------------------- | -------------- |
| Parent → Child      | Child → Parent |
| Happens First       | Happens After  |
| Uses onClickCapture | Uses onClick   |
| Less Common         | Most Common    |

---

# 102. What is a Controlled Component?

## Answer

A **Controlled Component** is a form element whose value is controlled entirely by React State.

React becomes the **single source of truth** for the form data.

Instead of the DOM managing the value, React manages it through state.

---

## Concept

```text
User Input
     ↓
onChange
     ↓
React State Updates
     ↓
Input Re-renders
```

---

## Basic Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] =
    useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) =>
        setName(e.target.value)
      }
    />
  );
}
```

---

## How It Works

Suppose user types:

```text
Rishi
```

Flow:

```text
User Types
      ↓
onChange Fires
      ↓
setName()
      ↓
State Updates
      ↓
Component Re-renders
      ↓
Input Value Updates
```

---

## Real Example: Login Form

```jsx
import { useState } from "react";

function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />
    </>
  );
}
```

---

## Advantages

### Easy Validation

```jsx
if (email === "") {
  alert("Email Required");
}
```

### Real-Time Updates

```jsx
<h2>{email}</h2>
```

Updates instantly.

### Better Debugging

All form data exists in React state.

### Predictable Behavior

React always knows current values.

---

## Disadvantages

* More code
* Re-renders on every change
* Slightly heavier for very large forms

---

## Interview Tip

Modern React applications primarily use Controlled Components because they provide better control and validation.

---

# 103. What is an Uncontrolled Component?

## Answer

An **Uncontrolled Component** is a form element whose value is managed by the DOM instead of React state.

React accesses the value only when needed using **Refs**.

---

## Concept

```text
User Input
     ↓
DOM Stores Value
     ↓
React Reads Using Ref
```

---

## Basic Example

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(
      inputRef.current.value
    );
  };

  return (
    <>
      <input ref={inputRef} />

      <button
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}
```

---

## Flow

```text
User Types
      ↓
DOM Stores Value
      ↓
Button Click
      ↓
Ref Reads Value
```

---

## Example

```jsx
function App() {
  const nameRef = useRef();

  const submit = () => {
    alert(
      nameRef.current.value
    );
  };

  return (
    <>
      <input ref={nameRef} />

      <button onClick={submit}>
        Submit
      </button>
    </>
  );
}
```

---

## Advantages

### Less Code

No state management required.

### Better Performance

No re-render on every keystroke.

### Easy Integration

Works well with traditional JavaScript libraries.

---

## Disadvantages

### Hard Validation

```jsx
nameRef.current.value
```

must be manually checked.

### Less Predictable

React doesn't always know the current value.

### Harder State Synchronization

Data exists outside React state.

---

## Special Case: File Input

```jsx
<input type="file" />
```

File inputs are typically uncontrolled.

---

## Interview Tip

Uncontrolled components are useful for simple forms, but controlled components are generally preferred in React applications.

---

# 104. What is the Difference Between Controlled and Uncontrolled Components?

## Answer

Both are used to handle form inputs, but they manage data differently.

---

# Controlled Component

Value stored in React State.

```jsx
const [name, setName] =
  useState("");
```

```jsx
<input
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>
```

---

# Uncontrolled Component

Value stored in DOM.

```jsx
const nameRef = useRef();
```

```jsx
<input ref={nameRef} />
```

---

# Comparison Table

| Feature        | Controlled  | Uncontrolled |
| -------------- | ----------- | ------------ |
| Data Stored In | React State | DOM          |
| Uses State     | Yes         | No           |
| Uses Ref       | Optional    | Yes          |
| Validation     | Easy        | Hard         |
| Re-render      | Yes         | No           |
| Predictability | High        | Low          |
| Debugging      | Easier      | Harder       |
| Recommended    | Yes         | Sometimes    |

---

## Controlled Flow

```text
User Types
      ↓
State Updates
      ↓
React Re-renders
      ↓
Input Updates
```

---

## Uncontrolled Flow

```text
User Types
      ↓
DOM Stores Value
      ↓
Ref Reads Value
```

---

## When to Use Controlled Components

✔ Login Forms

✔ Registration Forms

✔ Search Inputs

✔ Dynamic Forms

✔ Validation Required

---

## When to Use Uncontrolled Components

✔ Simple Forms

✔ Legacy Integrations

✔ File Upload Inputs

✔ Performance-Critical Cases

---

## Interview Tip

If an interviewer asks:

**"Which one should we use?"**

Answer:

Controlled Components are generally preferred because React can fully manage and validate form data.

---

# 105. What is Form Validation?

## Answer

Form Validation is the process of checking whether user input satisfies predefined rules before the data is submitted.

Validation ensures that data is:

* Correct
* Complete
* Secure
* Properly formatted

---

## Why Validation Is Important

Without validation users can submit:

```text
Empty Fields
Invalid Emails
Weak Passwords
Incorrect Phone Numbers
```

This leads to poor data quality and security issues.

---

## Common Validation Rules

### Required Fields

```text
Name Required
Email Required
Password Required
```

### Email Format

```text
rishi@gmail.com ✔

rishi123 ❌
```

### Password Length

```text
Minimum 8 Characters
```

### Phone Number Validation

```text
Must contain 10 digits
```

---

## Example: Required Field Validation

```jsx
import { useState } from "react";

function App() {
  const [name, setName] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name Required");
      return;
    }

    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button>
        Submit
      </button>
    </form>
  );
}
```

---

## Email Validation Example

```jsx
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  alert("Invalid Email");
}
```

---

## Password Validation Example

```jsx
if (password.length < 8) {
  alert(
    "Password must be at least 8 characters"
  );
}
```

---

# Types of Validation

## 1. Client-Side Validation

Runs inside browser.

```jsx
<input required />
```

or React validation.

### Benefits

* Faster feedback
* Better user experience

---

## 2. Server-Side Validation

Runs on backend.

```javascript
if (!email.includes("@")) {
  return res.status(400).json({
    message: "Invalid Email"
  });
}
```

### Benefits

* More secure
* Cannot be bypassed

---

# Popular React Validation Libraries

| Library         | Purpose              |
| --------------- | -------------------- |
| React Hook Form | Form Management      |
| Yup             | Schema Validation    |
| Zod             | Type-Safe Validation |
| Formik          | Form Handling        |

---

## Example Using React Hook Form

```jsx
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();
```

```jsx
<input
  {...register("email", {
    required: "Email Required"
  })}
/>
```

---

## Interview Tip

A very common React interview question is:

**"Why should validation exist on both frontend and backend?"**

**Answer:** Frontend validation improves user experience by providing immediate feedback, while backend validation ensures security and data integrity because frontend validation can be bypassed.

---

# 🚀 Quick Revision (101–105)

| Question                           | Short Answer                           |
| ---------------------------------- | -------------------------------------- |
| What is Event Capturing?           | Event propagation from parent to child |
| What is a Controlled Component?    | Input value controlled by React state  |
| What is an Uncontrolled Component? | Input value controlled by the DOM      |
| Controlled vs Uncontrolled?        | State-managed vs DOM-managed           |
| What is Form Validation?           | Checking input before form submission  |

These concepts are extremely important because almost every React application contains forms, user input handling, validation logic, and event management. Interviewers frequently ask these questions to test your understanding of real-world React development.


# 🌐 6. Event Handling & Forms (106–110) – React Interview Questions & Answers

---

# 106. How Do You Handle Forms in React?

## Answer

Forms are one of the most common features in React applications. They are used for:

* Login Forms
* Registration Forms
* Contact Forms
* Search Forms
* Payment Forms
* Profile Update Forms

In React, forms are typically handled using **Controlled Components**, where React State manages form data.

---

## Traditional HTML Form

```html
<form>
  <input type="text" />
  <button>Submit</button>
</form>
```

In HTML, the DOM manages form values.

---

## React Form Handling

In React:

```text
Input Value
     ↓
React State
     ↓
UI Updates
```

React becomes the source of truth.

---

## Basic Example

```jsx
import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
```

---

## How It Works

```text
User Types
      ↓
onChange Event
      ↓
State Updates
      ↓
Component Re-renders
      ↓
Input Value Updates
```

---

## Handling Multiple Fields

```jsx
const [formData, setFormData] =
  useState({
    name: "",
    email: ""
  });
```

```jsx
<input
  name="name"
  value={formData.name}
  onChange={handleChange}
/>

<input
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
```

---

## Form Submission

```jsx
const handleSubmit = (e) => {
  e.preventDefault();

  console.log(formData);
};
```

`preventDefault()` prevents page refresh.

---

## Validation Example

```jsx
if (!email) {
  alert("Email Required");
}
```

---

## Best Practices

✅ Use Controlled Components

✅ Validate Inputs

✅ Prevent Default Form Submission

✅ Show User-Friendly Error Messages

✅ Use Libraries for Complex Forms

---

## Interview Tip

In React, forms are generally handled using state (`useState`) and event handlers (`onChange`, `onSubmit`) to keep form data synchronized with the UI.

---

# 107. What is React Hook Form?

## Answer

**React Hook Form (RHF)** is a popular React library used for managing and validating forms with minimal code and excellent performance.

It is built using React Hooks and reduces unnecessary re-renders.

---

## Why React Hook Form?

Without RHF:

```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
```

Large forms become difficult to manage.

---

## With React Hook Form

```jsx
const {
  register,
  handleSubmit
} = useForm();
```

Much cleaner.

---

## Installation

```bash
npm install react-hook-form
```

---

## Basic Example

```jsx
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("email")}
      />

      <input
        {...register("password")}
      />

      <button>
        Login
      </button>
    </form>
  );
}
```

---

## Validation Example

```jsx
<input
  {...register("email", {
    required: true
  })}
/>
```

---

## Showing Errors

```jsx
{
  errors.email && (
    <p>Email Required</p>
  );
}
```

---

## Advantages

### Better Performance

Uses uncontrolled inputs internally.

### Less Code

Reduces state management.

### Built-In Validation

Supports validation rules.

### Easy Integration

Works with:

* Yup
* Zod
* Material UI
* Ant Design

---

## Real-World Use Cases

* Login Forms
* Registration Forms
* Checkout Forms
* Admin Dashboards

---

## Interview Tip

React Hook Form is preferred in modern React applications because it offers better performance and simpler form management than manually managing state for large forms.

---

# 108. What is Formik?

## Answer

Formik is another popular React library used for building and managing forms.

It simplifies:

* Form State Management
* Validation
* Error Handling
* Form Submission

---

## Installation

```bash
npm install formik
```

---

## Why Formik?

Managing large forms manually can become complex.

Formik provides:

```text
Form State
Validation
Error Messages
Submission Logic
```

in one solution.

---

## Basic Example

```jsx
import { Formik } from "formik";

function Login() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange }) => (
        <form>
          <input
            name="email"
            onChange={handleChange}
          />

          <input
            name="password"
            onChange={handleChange}
          />
        </form>
      )}
    </Formik>
  );
}
```

---

## Validation with Yup

Formik is commonly paired with Yup.

```bash
npm install yup
```

---

### Example

```jsx
const schema = Yup.object({
  email: Yup.string()
    .email()
    .required()
});
```

---

## Advantages

### Easy Form Management

Handles state automatically.

### Built-In Validation

Works seamlessly with Yup.

### Better Organization

Useful for enterprise applications.

---

## Formik vs React Hook Form

| Feature           | Formik | RHF       |
| ----------------- | ------ | --------- |
| Performance       | Good   | Excellent |
| Re-renders        | More   | Fewer     |
| Bundle Size       | Larger | Smaller   |
| Learning Curve    | Easy   | Easy      |
| Modern Popularity | Medium | High      |

---

## Interview Tip

Formik is still widely used, but React Hook Form has become more popular because of its superior performance and smaller bundle size.

---

# 109. How Do You Upload Files in React?

## Answer

File upload in React is typically handled using:

```html
<input type="file" />
```

The selected file can then be sent to a server using:

* FormData
* Fetch API
* Axios

---

## Basic Example

```jsx
function App() {
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <input
      type="file"
      onChange={handleFileChange}
    />
  );
}
```

---

## Understanding `files`

```jsx
e.target.files
```

Returns:

```text
FileList
```

Example:

```jsx
const file =
  e.target.files[0];
```

---

## Upload Using FormData

```jsx
const formData =
  new FormData();

formData.append(
  "file",
  selectedFile
);
```

---

## Upload with Fetch

```jsx
fetch("/upload", {
  method: "POST",
  body: formData
});
```

---

## Upload with Axios

```jsx
import axios from "axios";

await axios.post(
  "/upload",
  formData
);
```

---

## Complete Example

```jsx
import { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] =
    useState(null);

  const handleUpload =
    async () => {
      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      await axios.post(
        "/upload",
        formData
      );
    };

  return (
    <>
      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={handleUpload}
      >
        Upload
      </button>
    </>
  );
}
```

---

## Multiple Files

```jsx
<input
  type="file"
  multiple
/>
```

---

## Interview Tip

File inputs are usually **uncontrolled components** because browsers do not allow React to directly control file values.

---

# 110. How Do You Handle Multiple Form Inputs?

## Answer

Large forms often contain multiple fields such as:

* Name
* Email
* Phone
* Password
* Address

Managing separate state variables for every field becomes difficult.

---

## Poor Approach

```jsx
const [name, setName] =
  useState("");

const [email, setEmail] =
  useState("");

const [phone, setPhone] =
  useState("");
```

This becomes hard to maintain.

---

## Better Approach

Store all values in a single object.

```jsx
const [formData, setFormData] =
  useState({
    name: "",
    email: "",
    phone: ""
  });
```

---

## Generic Change Handler

```jsx
const handleChange = (e) => {
  const { name, value } =
    e.target;

  setFormData({
    ...formData,
    [name]: value
  });
};
```

---

## Inputs

```jsx
<input
  name="name"
  value={formData.name}
  onChange={handleChange}
/>

<input
  name="email"
  value={formData.email}
  onChange={handleChange}
/>

<input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
/>
```

---

## How It Works

Suppose user types:

```text
Name = Rishi
```

React executes:

```jsx
setFormData({
  ...formData,
  name: "Rishi"
});
```

Only the `name` field changes.

---

## Complete Example

```jsx
import { useState } from "react";

function Register() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: ""
    });

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button>
        Submit
      </button>
    </form>
  );
}
```

---

## Benefits

### Less Code

One handler manages all fields.

### Easier Maintenance

Adding new fields is simple.

### Scalable

Works well for large forms.

### Better Readability

Single source of form state.

---

## Interview Tip

The most common approach for handling multiple inputs in React is to store form values in a single state object and use a generic `handleChange()` function that updates fields dynamically using the input's `name` attribute.

---

# 🚀 Quick Revision (106–110)

| Question                           | Short Answer                                    |
| ---------------------------------- | ----------------------------------------------- |
| How do you handle forms in React?  | Using state, onChange, and onSubmit             |
| What is React Hook Form?           | High-performance form library using Hooks       |
| What is Formik?                    | Form management library with validation support |
| How do you upload files?           | Using file inputs and FormData                  |
| How do you handle multiple inputs? | Single state object + generic change handler    |

These topics are highly important for React interviews because nearly every real-world React application involves **form handling, validation, file uploads, and form libraries like React Hook Form and Formik**.



## 🌍 7. Routing (111–120)

# 🛣️ 7. React Router (111–115) – React Interview Questions & Answers

---

# 111. What is React Router?

## Answer

**React Router** is a popular library used for implementing routing in React applications.

It allows developers to create **Single Page Applications (SPAs)** where users can navigate between different pages without reloading the entire webpage.

In traditional websites, every page navigation sends a request to the server and loads a new HTML page.

```text
Home Page
    ↓
Server Request
    ↓
New HTML Page
```

In React Router:

```text
Home
   ↓
About
   ↓
Contact
```

Navigation happens instantly without refreshing the browser.

---

## What is Routing?

Routing means deciding which component should be displayed based on the URL.

Example URLs:

```text
/
```

Home Page

```text
/about
```

About Page

```text
/contacts
```

Contact Page

```text
/profile
```

Profile Page

Each URL displays a different React component.

---

## Why React Router Was Created

React itself only handles UI rendering.

It does not provide:

* Page Navigation
* URL Management
* Route Matching
* Route Parameters

React Router solves these problems.

---

## Installation

```bash
npm install react-router-dom
```

---

## Basic Example

### Home Component

```jsx
function Home() {
  return <h1>Home Page</h1>;
}
```

### About Component

```jsx
function About() {
  return <h1>About Page</h1>;
}
```

### App Component

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## How It Works

```text
User Visits /about
          ↓
React Router Checks Route
          ↓
About Component Rendered
```

---

## Real-World Usage

Almost every React application uses React Router:

* E-Commerce Websites
* Learning Management Systems
* Banking Applications
* Dashboards
* Social Media Platforms

---

## Advantages

### Fast Navigation

No page reload.

### Better User Experience

Feels like a desktop application.

### Dynamic Routing

URLs can contain parameters.

### Nested Routing

Supports layouts and sub-pages.

---

## Interview Tip

**React Router is the standard routing library for React that enables navigation between views without refreshing the page.**

---

# 112. Why Do We Use React Router?

## Answer

React Router is used to create navigation between different pages inside a React Single Page Application (SPA).

Without React Router, React can display only one component tree.

---

## Problem Without React Router

Suppose we have:

```text
Home Page
About Page
Contact Page
```

Without routing:

```jsx
<Home />
<About />
<Contact />
```

All components render together.

Users cannot navigate using URLs.

---

## Solution

React Router maps URLs to components.

```text
/         → Home
/about    → About
/contact  → Contact
```

---

## Benefits

### 1. No Page Refresh

Traditional Website:

```text
Click Link
    ↓
Server Request
    ↓
Page Reload
```

React Router:

```text
Click Link
    ↓
Component Changes
    ↓
No Refresh
```

---

### 2. Better Performance

Only required components update.

---

### 3. Bookmarkable URLs

Users can directly visit:

```text
/profile
```

or

```text
/products
```

---

### 4. Browser History Support

Back button works naturally.

```text
Back
Forward
Refresh
```

---

### 5. Dynamic Routing

```text
/user/101
/user/102
/user/103
```

Each URL displays different data.

---

## Example

```jsx
<Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/about"
    element={<About />}
  />
</Routes>
```

---

## Real-World Example

### E-Commerce Website

```text
/
```

Home

```text
/products
```

Products

```text
/products/5
```

Product Details

```text
/cart
```

Shopping Cart

```text
/checkout
```

Checkout

React Router manages all navigation.

---

## Interview Tip

If asked:

**Why not use normal anchor tags for navigation?**

Answer:

Because anchor tags reload the page, while React Router provides client-side navigation, resulting in faster performance and a better user experience.

---

# 113. What is BrowserRouter?

## Answer

`BrowserRouter` is a router component provided by React Router that enables routing using the browser's History API.

It keeps the UI synchronized with the URL.

---

## Definition

```text
Browser URL
      ↓
BrowserRouter
      ↓
React Components
```

---

## Why BrowserRouter Is Needed

Without BrowserRouter:

```jsx
<Routes>
  <Route
    path="/"
    element={<Home />}
  />
</Routes>
```

React Router cannot track URL changes.

---

## Syntax

```jsx
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
```

---

## Example

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## How BrowserRouter Works

When URL changes:

```text
/about
```

BrowserRouter detects the change.

```text
URL Change
      ↓
Route Matching
      ↓
Render About Component
```

---

## Uses Browser History API

BrowserRouter internally uses:

```javascript
window.history.pushState()
window.history.replaceState()
```

This enables navigation without page reloads.

---

## Where Is BrowserRouter Used?

Usually in:

```jsx
main.jsx
```

or

```jsx
index.js
```

Example:

```jsx
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## Interview Tip

**BrowserRouter is the top-level router component that enables client-side routing using the browser's History API.**

---

# 114. What is the Routes Component?

## Answer

`Routes` is a container component introduced in React Router v6.

It contains multiple `Route` components and decides which route should be rendered.

---

## Definition

```text
Routes
   ↓
Checks URL
   ↓
Chooses Matching Route
```

---

## Syntax

```jsx
<Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/about"
    element={<About />}
  />
</Routes>
```

---

## Example

```jsx
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  );
}
```

---

## How It Works

Current URL:

```text
/about
```

Routes checks:

```text
/       ❌
/about  ✅
/contact ❌
```

Result:

```jsx
<About />
```

is rendered.

---

## Why Routes Was Introduced

Older versions used:

```jsx
<Switch>
```

React Router v6 replaced it with:

```jsx
<Routes>
```

because it provides better route matching and improved performance.

---

## Interview Tip

**Routes acts as a route matcher and renders the first matching Route based on the current URL.**

---

# 115. What is the Route Component?

## Answer

`Route` is a component that maps a URL path to a React component.

Whenever the URL matches the specified path, React Router renders the corresponding component.

---

## Syntax

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

Meaning:

```text
URL = /about
        ↓
Render About Component
```

---

## Basic Example

```jsx
<Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/about"
    element={<About />}
  />
</Routes>
```

---

## Dynamic Route Example

```jsx
<Route
  path="/user/:id"
  element={<User />}
/>
```

URLs:

```text
/user/1
/user/2
/user/3
```

All match this route.

---

## Nested Route Example

```jsx
<Route
  path="/dashboard"
  element={<Dashboard />}
>
  <Route
    path="profile"
    element={<Profile />}
  />

  <Route
    path="settings"
    element={<Settings />}
  />
</Route>
```

URLs:

```text
/dashboard/profile

/dashboard/settings
```

---

## Route Props

### path

```jsx
path="/about"
```

Defines URL.

---

### element

```jsx
element={<About />}
```

Defines component to render.

---

## Complete Example

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Flow

```text
URL Entered
      ↓
Route Matches Path
      ↓
Component Rendered
```

---

## Interview Tip

**Route is used to define which React component should be displayed for a particular URL path. It is the core building block of React Router.**

---

# 🚀 Quick Revision (111–115)

| Question                    | Short Answer                                |
| --------------------------- | ------------------------------------------- |
| What is React Router?       | Library for routing in React applications   |
| Why do we use React Router? | To navigate between pages without reloading |
| What is BrowserRouter?      | Top-level router using Browser History API  |
| What is Routes?             | Container that matches routes               |
| What is Route?              | Maps URL paths to React components          |

These concepts form the foundation of React Router and are among the most frequently asked React interview questions because almost every modern React application uses routing for navigation and page management.


# 🛣️ 7. React Router (116–120) – React Interview Questions & Answers

---

# 116. What is the Link Component in React Router?

## Answer

The **Link** component is provided by React Router and is used for navigation between pages in a React application without reloading the browser.

It acts as a replacement for the traditional HTML `<a>` tag.

---

## Why Not Use `<a>` Tags?

Traditional HTML navigation:

```html
<a href="/about">About</a>
```

When clicked:

```text
Click Link
    ↓
Browser Sends Request
    ↓
Page Reload
    ↓
React App Reloads
```

This breaks the Single Page Application (SPA) experience.

---

## Using Link

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>
    </>
  );
}
```

---

## How It Works

```text
Click Link
      ↓
React Router Updates URL
      ↓
Matching Route Rendered
      ↓
No Page Refresh
```

---

## Example

```jsx
<Link to="/products">
  Products
</Link>
```

Navigates to:

```text
/products
```

---

## Passing Dynamic URLs

```jsx
<Link to="/user/101">
  View User
</Link>
```

Navigates to:

```text
/user/101
```

---

## Link vs Anchor Tag

| Link                 | Anchor Tag         |
| -------------------- | ------------------ |
| No page reload       | Reloads page       |
| Client-side routing  | Server request     |
| Faster navigation    | Slower navigation  |
| React Router support | Browser navigation |

---

## Real-World Example

### E-Commerce Navbar

```jsx
<nav>
  <Link to="/">
    Home
  </Link>

  <Link to="/products">
    Products
  </Link>

  <Link to="/cart">
    Cart
  </Link>
</nav>
```

---

## Interview Tip

**Link is used for client-side navigation in React applications and prevents full-page refreshes.**

---

# 117. What is NavLink?

## Answer

`NavLink` is a special version of the `Link` component that knows whether the current route is active or not.

It is commonly used for:

* Navigation Bars
* Sidebars
* Menus
* Dashboard Navigation

---

## Why NavLink?

With `Link`, you don't know which page is currently active.

Example:

```jsx
<Link to="/about">
  About
</Link>
```

No active indication.

---

## NavLink Solution

```jsx
import {
  NavLink
} from "react-router-dom";

<NavLink to="/about">
  About
</NavLink>;
```

React Router automatically tracks the active route.

---

## Example

```jsx
function Navbar() {
  return (
    <>
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>
    </>
  );
}
```

---

## Active Styling

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "active"
      : ""
  }
>
  About
</NavLink>
```

---

## CSS

```css
.active {
  color: red;
  font-weight: bold;
}
```

---

## How It Works

Current URL:

```text
/about
```

Result:

```text
Home
ABOUT ← Active
Contact
```

---

## Real Dashboard Example

```jsx
<NavLink to="/dashboard">
  Dashboard
</NavLink>

<NavLink to="/profile">
  Profile
</NavLink>

<NavLink to="/settings">
  Settings
</NavLink>
```

Automatically highlights current page.

---

## Link vs NavLink

| Link               | NavLink                   |
| ------------------ | ------------------------- |
| Navigation only    | Navigation + Active State |
| No route awareness | Knows current route       |
| Simple links       | Menus/Navbars             |

---

## Interview Tip

**NavLink is used when you need navigation links that can automatically identify and style the currently active route.**

---

# 118. What is useNavigate Hook?

## Answer

`useNavigate()` is a React Router Hook used for **programmatic navigation**.

Instead of users clicking a link, navigation happens through JavaScript code.

---

## Why useNavigate?

Sometimes navigation should happen after:

* Login
* Registration
* Form Submission
* Logout
* Payment Success

In such cases, Link cannot be used.

---

## Syntax

```jsx
import {
  useNavigate
} from "react-router-dom";

const navigate =
  useNavigate();
```

---

## Example

```jsx
function Login() {
  const navigate =
    useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <button
      onClick={handleLogin}
    >
      Login
    </button>
  );
}
```

---

## Flow

```text
Login Success
      ↓
navigate("/dashboard")
      ↓
Dashboard Opens
```

---

## Navigate Back

```jsx
navigate(-1);
```

Equivalent to browser back button.

---

## Navigate Forward

```jsx
navigate(1);
```

Equivalent to forward button.

---

## Replace Current History

```jsx
navigate("/home", {
  replace: true
});
```

Prevents going back to previous page.

---

## Real Login Example

```jsx
const handleSubmit =
  async () => {
    const response =
      await login();

    if (response.success) {
      navigate("/dashboard");
    }
  };
```

---

## Interview Tip

**useNavigate is used for programmatic navigation in React Router and replaces the older useHistory hook from React Router v5.**

---

# 119. What are Route Parameters?

## Answer

Route Parameters are dynamic values passed through the URL.

They allow routes to display different data using the same component.

---

## Example

Instead of creating:

```text
/user1
/user2
/user3
```

We create:

```text
/user/:id
```

---

## Route Definition

```jsx
<Route
  path="/user/:id"
  element={<User />}
/>
```

---

## Matching URLs

```text
/user/1
/user/2
/user/101
```

All match:

```text
/user/:id
```

---

## Accessing Parameters

React Router provides:

```jsx
useParams()
```

---

## Example

```jsx
import {
  useParams
} from "react-router-dom";

function User() {
  const { id } =
    useParams();

  return (
    <h1>User ID: {id}</h1>
  );
}
```

---

### URL

```text
/user/101
```

Output:

```text
User ID: 101
```

---

## Multiple Parameters

```jsx
<Route
  path="/user/:id/post/:postId"
  element={<Post />}
/>
```

URL:

```text
/user/10/post/50
```

---

### Access

```jsx
const {
  id,
  postId
} = useParams();
```

Result:

```text
id = 10
postId = 50
```

---

## Real-World Example

### E-Commerce Product Page

```jsx
<Route
  path="/product/:id"
  element={<Product />}
 />
```

URLs:

```text
/product/1
/product/2
/product/3
```

One component handles all products.

---

## Interview Tip

**Route Parameters allow dynamic values to be passed through URLs and accessed using the useParams Hook.**

---

# 120. What is Protected Routing?

## Answer

**Protected Routing** is a technique used to restrict access to certain routes unless the user is authenticated or authorized.

---

## Example

Anyone can access:

```text
/
```

Home Page

```text
/login
```

Login Page

But only logged-in users should access:

```text
/dashboard
```

```text
/profile
```

```text
/settings
```

---

## Problem

Without protection:

```text
User Types:
/dashboard
```

and gains access directly.

---

## Solution

Protected Routes.

---

## Flow

```text
User Visits Dashboard
          ↓
Check Authentication
          ↓
Logged In?
    ↓           ↓
  Yes          No
    ↓           ↓
Dashboard    Login Page
```

---

## Protected Route Component

```jsx
import {
  Navigate
} from "react-router-dom";

function ProtectedRoute({
  children
}) {
  const isAuthenticated =
    localStorage.getItem(
      "token"
    );

  return isAuthenticated
    ? children
    : <Navigate to="/login" />;
}
```

---

## Usage

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

## Complete Flow

```text
Dashboard Route
       ↓
ProtectedRoute
       ↓
Check Token
       ↓
Valid?
  ↓        ↓
Yes       No
 ↓         ↓
Dashboard Login
```

---

## JWT Authentication Example

```jsx
const token =
  localStorage.getItem(
    "token"
  );

if (!token) {
  return (
    <Navigate
      to="/login"
    />
  );
}
```

---

## Role-Based Protected Routes

Admin Only:

```jsx
if (user.role !== "admin") {
  return (
    <Navigate
      to="/unauthorized"
    />
  );
}
```

---

## Real-World Usage

Protected routes are used in:

* Banking Applications
* E-Commerce Admin Panels
* Learning Management Systems
* Social Media Dashboards
* Company Portals

---

## Advantages

### Security

Unauthorized users cannot access private pages.

### Better User Experience

Users are redirected automatically.

### Role Management

Supports Admin/User permissions.

---

## Interview Tip

**Protected Routing is a mechanism that restricts access to specific routes based on authentication or authorization. It is commonly implemented using a custom ProtectedRoute component and React Router's Navigate component.**

---

# 🚀 Quick Revision (116–120)

| Question                   | Short Answer                                     |
| -------------------------- | ------------------------------------------------ |
| What is Link?              | Component for client-side navigation             |
| What is NavLink?           | Link with active route awareness                 |
| What is useNavigate?       | Hook for programmatic navigation                 |
| What are Route Parameters? | Dynamic values in URLs accessed via useParams    |
| What is Protected Routing? | Restricting route access based on authentication |

These topics are among the most frequently asked React Router interview questions because they cover navigation, dynamic routing, authentication, and real-world application routing patterns used in almost every production React project.




## 📦 8. Context API & State Libraries (121–135)

# 📦 8. Context API & State Libraries (121–125)

---

# 121. What is Context API?

## Answer

**Context API** is a built-in feature of React that allows data to be shared across multiple components without manually passing props through every level of the component tree.

Normally, data is passed from a parent component to child components using props. When many components need the same data, passing props through intermediate components becomes difficult and messy. This problem is called **Prop Drilling**.

Context API provides a way to create global data that can be accessed by any component inside the application tree.

Common use cases:

* User Authentication
* Theme Management (Dark/Light Mode)
* Language Settings
* Application Configuration
* Shopping Cart Data

---

## Without Context API

```jsx
function App() {
  const user = "Rishi";

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>{user}</h1>;
}
```

Here `user` is passed through multiple components.

This is called **prop drilling**.

---

## With Context API

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

```jsx
<UserContext.Provider value="Rishi">
  <GrandChild />
</UserContext.Provider>
```

```jsx
import { useContext } from "react";

function GrandChild() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
```

Now any component can access the value directly.

---

## Advantages

* Eliminates prop drilling
* Centralized state sharing
* Easy to manage global data
* Built into React
* Improves code readability

---

## Interview Answer

**Context API is a React feature used to share data globally across components without passing props manually through every component level. It helps solve the prop drilling problem and is commonly used for themes, authentication, language settings, and application-wide state management.**

---

# 122. Why is Context API used?

## Answer

Context API is used to share data among multiple components without passing props through every intermediate component.

When an application grows, certain data needs to be accessed by many components. Passing props repeatedly becomes difficult and makes the code harder to maintain.

Context API provides a centralized way to manage and distribute such data.

---

## Problem Without Context API

Imagine:

```jsx
App
 └── Dashboard
      └── Profile
           └── UserInfo
```

If UserInfo needs user data:

```jsx
<App user={user} />
```

Must pass through:

```jsx
Dashboard → Profile → UserInfo
```

Even if Dashboard and Profile don't use it.

---

## Solution Using Context

```jsx
<UserContext.Provider value={user}>
   <Dashboard />
</UserContext.Provider>
```

Now:

```jsx
const user = useContext(UserContext);
```

Any child component can access it directly.

---

## Common Uses

### Authentication

```jsx
user.name
user.email
user.role
```

### Theme

```jsx
dark
light
```

### Language

```jsx
English
Hindi
French
```

### Shopping Cart

```jsx
cartItems
totalPrice
```

---

## Benefits

* Avoids prop drilling
* Cleaner code
* Better maintainability
* Easier state sharing
* Built-in React solution

---

## Interview Answer

**Context API is used to share common data across multiple components without passing props manually through every level. It helps avoid prop drilling and is commonly used for authentication, themes, language settings, and global application state.**

---

# 123. How do you create a context?

## Answer

A context is created using React's **createContext()** function.

### Step 1: Import createContext

```jsx
import { createContext } from "react";
```

---

### Step 2: Create Context

```jsx
const UserContext = createContext();
```

This creates a Context object.

---

### Step 3: Export Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### Step 4: Wrap Components with Provider

```jsx
<UserContext.Provider value="Rishi">
   <App />
</UserContext.Provider>
```

---

### Step 5: Consume Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
```

---

## Complete Example

### UserContext.js

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### App.js

```jsx
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function App() {
  return (
    <UserContext.Provider value="Rishi">
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
```

---

### Profile.js

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h1>Welcome {user}</h1>;
}

export default Profile;
```

---

## Interview Answer

**A context is created using React's createContext() function. First, we create a context object, then wrap components with a Provider and pass data using the value prop. Child components can access the data using useContext() or Context Consumer.**

---

# 124. What is Context Provider?

## Answer

A **Context Provider** is a component that supplies data to all components inside its tree.

Every context object automatically provides a `Provider` component.

The Provider accepts a `value` prop, which contains the data that should be shared.

---

## Syntax

```jsx
<Context.Provider value={data}>
    {children}
</Context.Provider>
```

---

## Example

### Create Context

```jsx
const UserContext = createContext();
```

---

### Provide Value

```jsx
<UserContext.Provider value="Rishi">
   <Dashboard />
</UserContext.Provider>
```

Now every child component can access `"Rishi"`.

---

## Providing Object Data

```jsx
<UserContext.Provider
  value={{
    name: "Rishi",
    age: 23
  }}
>
  <App />
</UserContext.Provider>
```

---

## Accessing Provider Data

```jsx
const user = useContext(UserContext);

console.log(user.name);
```

Output:

```jsx
Rishi
```

---

## Why Provider is Important

Without Provider:

```jsx
const UserContext = createContext();
```

Context exists but doesn't supply any data.

Provider is responsible for:

* Supplying data
* Updating data
* Sharing state globally

---

## Interview Answer

**Context Provider is a React component used to supply data to all child components within its tree. It uses the value prop to pass data, allowing components to access shared state without prop drilling.**

---

# 125. What is Context Consumer?

## Answer

A **Context Consumer** is a component used to read values from a Context.

Before React Hooks were introduced, Context Consumer was the primary way to access Context data.

Today, developers usually use **useContext()**, but Context Consumer still exists and works.

---

## Syntax

```jsx
<Context.Consumer>
  {(value) => (
    <h1>{value}</h1>
  )}
</Context.Consumer>
```

---

## Example

### Create Context

```jsx
const UserContext = createContext();
```

---

### Provider

```jsx
<UserContext.Provider value="Rishi">
   <Profile />
</UserContext.Provider>
```

---

### Consumer

```jsx
<UserContext.Consumer>
  {(user) => (
    <h1>Welcome {user}</h1>
  )}
</UserContext.Consumer>
```

Output:

```jsx
Welcome Rishi
```

---

## Consumer vs useContext

### Context Consumer

```jsx
<UserContext.Consumer>
 {(user) => <h1>{user}</h1>}
</UserContext.Consumer>
```

---

### useContext Hook

```jsx
const user = useContext(UserContext);

return <h1>{user}</h1>;
```

The Hook version is cleaner and easier to read.

---

## When Consumer is Useful

* Class Components
* Legacy React Code
* Projects not using Hooks

---

## Interview Answer

**Context Consumer is a React component used to access values from a Context. It uses a render function to receive the context value. Although it still works, modern React applications generally use the useContext Hook because it provides cleaner and more readable code.**

# 📦 8. Context API & State Libraries (126–130)

---

# 126. What is `useContext`?

## Answer

`useContext` is a built-in React Hook that allows functional components to access data from a Context directly without using the `Context.Consumer` component.

It is the modern and recommended way to consume Context values in React applications.

Before Hooks, developers had to use `Context.Consumer`, which often made code lengthy and harder to read. `useContext` simplifies this process by allowing direct access to Context data.

---

## Why use `useContext`?

Suppose a user object is needed by many components.

Without Context:

```jsx
App → Dashboard → Profile → UserInfo
```

The user data must be passed through every component using props.

```jsx
<Dashboard user={user} />
```

This creates **Prop Drilling**.

Using Context and `useContext`, any component can access the data directly.

---

## Syntax

```jsx
const value = useContext(MyContext);
```

* `MyContext` → Context object created by `createContext()`
* `value` → Data provided by the Provider

---

## Example

### Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### Provide Context

```jsx
import { UserContext } from "./UserContext";

function App() {
  return (
    <UserContext.Provider value="Rishi">
      <Profile />
    </UserContext.Provider>
  );
}
```

---

### Consume Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h1>Welcome {user}</h1>;
}
```

---

## Using Object Data

```jsx
<UserContext.Provider
  value={{
    name: "Rishi",
    role: "Developer",
    age: 23
  }}
>
  <Profile />
</UserContext.Provider>
```

Accessing:

```jsx
const user = useContext(UserContext);

return <h1>{user.name}</h1>;
```

---

## Benefits

### Cleaner Syntax

```jsx
const user = useContext(UserContext);
```

instead of:

```jsx
<UserContext.Consumer>
 {(user) => <h1>{user}</h1>}
</UserContext.Consumer>
```

---

### Less Boilerplate

Fewer lines of code.

---

### Better Readability

Easy to understand and maintain.

---

### Works Perfectly with Hooks

Can be combined with:

* useState
* useEffect
* useReducer
* Custom Hooks

---

## Interview Answer

**`useContext` is a React Hook used to access values from a Context directly inside functional components. It eliminates the need for Context.Consumer, provides cleaner code, and helps share global data such as themes, authentication, and application settings without prop drilling.**

---

# 127. What are the limitations of Context API?

## Answer

Although Context API is very useful for sharing global data, it is not a complete state management solution for large applications.

When applications become large and complex, Context API can lead to performance and maintainability issues.

---

## 1. Unnecessary Re-renders

When a Context value changes, all components consuming that Context re-render.

Example:

```jsx
<UserContext.Provider value={user}>
```

If the user object changes:

```jsx
setUser(newUser);
```

Every consumer component re-renders.

Even components using only one property will re-render.

---

## Example

```jsx
const user = {
  name: "Rishi",
  age: 23,
  city: "Indore"
};
```

If only:

```jsx
age
```

changes, components using:

```jsx
name
```

also re-render.

This can hurt performance in large applications.

---

## 2. Difficult State Updates

For small applications:

```jsx
Theme
Language
Authentication
```

Context is great.

For complex state:

```jsx
Products
Orders
Payments
Notifications
Cart
```

Managing updates becomes difficult.

---

## 3. No Built-in Middleware

Redux provides middleware support.

Examples:

* Logging
* API Calls
* Analytics
* Async Actions

Context API does not provide these features.

---

## 4. Debugging is Harder

Redux offers powerful debugging tools like:

* Redux DevTools
* Action Tracking
* State History

Context API lacks these capabilities.

---

## 5. Scalability Issues

Large applications may require:

* Multiple contexts
* Nested providers

Example:

```jsx
<AuthProvider>
  <ThemeProvider>
    <CartProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </CartProvider>
  </ThemeProvider>
</AuthProvider>
```

This is often called:

### Provider Hell

---

## 6. No Predictable State Flow

Redux follows:

```text
Action
 ↓
Reducer
 ↓
Store Update
 ↓
UI Update
```

Context doesn't enforce a predictable architecture.

---

## When Context API is Good

✅ Authentication

✅ Theme Management

✅ Language Settings

✅ User Preferences

✅ Small-Medium Applications

---

## When Redux is Better

✅ Large Applications

✅ Complex State

✅ Frequent Updates

✅ Multiple Developers

✅ Enterprise Projects

---

## Interview Answer

**The main limitations of Context API are unnecessary re-renders, lack of middleware support, limited debugging tools, scalability issues, and difficulty managing complex state. It works well for small to medium applications, but large applications often use Redux or Redux Toolkit for better state management.**

---

# 128. What is Redux?

## Answer

Redux is a predictable state management library used to manage application state in a centralized store.

It helps multiple components access and update shared state efficiently.

Redux follows a unidirectional data flow and makes state changes predictable.

---

## What Problem Does Redux Solve?

Imagine an E-commerce Application:

```text
Navbar
Products
Cart
Checkout
Profile
Orders
```

Many components need access to:

```jsx
cartItems
user
products
orders
```

Passing props everywhere becomes difficult.

Redux stores all shared state in one central location called a Store.

---

## Redux Architecture

```text
Component
    ↓
Dispatch Action
    ↓
Reducer
    ↓
Store Update
    ↓
Component Re-render
```

---

## Core Concepts

### Store

Central location for state.

```jsx
const store = createStore(reducer);
```

---

### Action

Describes what happened.

```jsx
{
  type: "ADD_TO_CART"
}
```

---

### Reducer

Updates state.

```jsx
function cartReducer(state, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    default:
      return state;
  }
}
```

---

### Dispatch

Sends actions to Redux.

```jsx
dispatch({
  type: "ADD_TO_CART",
  payload: product
});
```

---

## Example

### Action

```jsx
dispatch({
  type: "INCREMENT"
});
```

---

### Reducer

```jsx
function counterReducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;

    default:
      return state;
  }
}
```

---

### Component

```jsx
const count = useSelector(state => state.count);

const dispatch = useDispatch();

<button onClick={() => dispatch({ type: "INCREMENT" })}>
  Increment
</button>
```

---

## Advantages

* Centralized State
* Predictable Updates
* Easier Debugging
* Better Scalability
* Excellent Developer Tools

---

## Interview Answer

**Redux is a state management library that stores application state in a centralized store. It uses actions, reducers, and a predictable unidirectional data flow to manage state changes efficiently. Redux is commonly used in large applications where multiple components need access to shared state.**

---

# 129. Why do we use Redux?

## Answer

Redux is used to manage complex application state in a predictable and centralized manner.

As applications grow, state becomes difficult to manage using only props or Context API.

Redux solves this by storing shared state in a single store accessible throughout the application.

---

## Problems Without Redux

Imagine:

```text
Navbar
Cart
Product List
Checkout
Orders
```

All need access to:

```jsx
cartItems
```

Passing props becomes:

```text
App
 ↓
Products
 ↓
Cart
 ↓
Checkout
```

This creates prop drilling and maintenance problems.

---

## Redux Solution

Store data once:

```jsx
Store
 ├── User
 ├── Cart
 ├── Products
 └── Orders
```

Any component can access it.

```jsx
const cart = useSelector(state => state.cart);
```

---

## Benefits of Redux

### Centralized State

Single source of truth.

---

### Predictable Updates

Reducers control all updates.

---

### Easy Data Sharing

No prop drilling.

---

### Better Debugging

Redux DevTools show:

* Actions
* State Changes
* History

---

### Scalable Architecture

Ideal for:

* Enterprise Applications
* Large Teams
* Complex Business Logic

---

## Real-World Example

Amazon-like Application:

```jsx
User Login
Cart
Wishlist
Products
Orders
Payments
Notifications
```

Managing this using only Context becomes difficult.

Redux handles it efficiently.

---

## Interview Answer

**Redux is used to manage complex application state centrally and predictably. It eliminates prop drilling, simplifies state sharing, improves debugging, and provides a scalable architecture for large React applications.**

---

# 130. What is Redux Toolkit?

## Answer

Redux Toolkit (RTK) is the official, modern, and recommended way to write Redux applications.

It was created by the Redux team to reduce boilerplate code and simplify Redux development.

Before Redux Toolkit, developers had to write:

* Actions
* Action Types
* Reducers
* Store Configuration

manually.

Redux Toolkit automates much of this process.

---

## Traditional Redux Example

### Action

```jsx
export const increment = () => ({
  type: "INCREMENT"
});
```

---

### Reducer

```jsx
function counterReducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;

    default:
      return state;
  }
}
```

---

### Store

```jsx
const store = createStore(counterReducer);
```

Many files and lots of boilerplate.

---

## Redux Toolkit Solution

### Slice

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } =
  counterSlice.actions;

export default counterSlice.reducer;
```

---

## Store Configuration

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

## Component Usage

```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";

function Counter() {
  const count = useSelector(
    state => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </>
  );
}
```

---

## Advantages of Redux Toolkit

### Less Boilerplate

Fewer files and less code.

### Easier Configuration

`configureStore()` simplifies setup.

### Built-in Best Practices

Official Redux recommendation.

### Better Performance

Optimized state updates.

### Immer Integration

Allows writing mutable-looking code safely.

```jsx
state.value += 1;
```

RTK internally creates immutable updates.

---

## Interview Answer

**Redux Toolkit (RTK) is the official Redux package that simplifies Redux development by reducing boilerplate code and providing utilities such as createSlice, configureStore, and createAsyncThunk. It is the recommended way to write modern Redux applications because it makes state management easier, cleaner, and more efficient.**

# 📦 8. Context API & State Libraries (131–135)

---

# 131. What is Redux Store?

## Answer

A **Redux Store** is the central repository that holds the entire state of a Redux application.

It is often called the **Single Source of Truth** because all shared application data is stored in one place.

Components do not directly modify the store. Instead, they dispatch actions, and reducers update the store accordingly.

---

## Why Do We Need a Store?

Consider an E-commerce application:

```text
Navbar
Cart
Products
Wishlist
Orders
Checkout
```

All these components need access to:

```js
user
cartItems
products
orders
wishlist
```

Instead of storing this data in multiple components, Redux keeps everything in one centralized store.

---

## Redux Data Flow

```text
Component
   ↓
Dispatch Action
   ↓
Reducer
   ↓
Store Updates
   ↓
UI Re-renders
```

---

## Creating a Store (Traditional Redux)

```jsx
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
```

---

## Creating a Store (Redux Toolkit)

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

## Example State in Store

```js
{
  user: {
    name: "Rishi",
    email: "rishi@gmail.com"
  },

  cart: [
    {
      id: 1,
      name: "Laptop"
    }
  ],

  theme: "dark"
}
```

---

## Accessing Store Data

Using `useSelector`:

```jsx
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector(
    state => state.user
  );

  return <h1>{user.name}</h1>;
}
```

---

## Updating Store Data

Using `dispatch`:

```jsx
dispatch(addToCart(product));
```

---

## Advantages of Redux Store

### Centralized State

All shared data is in one place.

### Predictable Updates

State changes happen through reducers.

### Easy Debugging

Works with Redux DevTools.

### Better Scalability

Suitable for large applications.

---

## Interview Answer

**Redux Store is the central object that holds the entire application state. It acts as the single source of truth in Redux and manages data through actions and reducers. Components access store data using useSelector and update it by dispatching actions.**

---

# 132. What are Actions in Redux?

## Answer

**Actions** are plain JavaScript objects that describe what happened in the application.

They are the only way to send data to the Redux Store.

An action tells Redux:

> "Something happened, and the state should be updated."

---

## Structure of an Action

Every action must have a `type` property.

```js
{
  type: "INCREMENT"
}
```

The `type` identifies the action.

---

## Action with Payload

Often additional data is needed.

```js
{
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    name: "Laptop"
  }
}
```

---

## Example

### Dispatching an Action

```jsx
dispatch({
  type: "INCREMENT"
});
```

---

### Another Example

```jsx
dispatch({
  type: "ADD_TO_CART",
  payload: product
});
```

---

## How Actions Work

```text
User Clicks Button
         ↓
Action Dispatched
         ↓
Reducer Receives Action
         ↓
Store Updates
         ↓
UI Re-renders
```

---

## Action Creator

Instead of writing actions repeatedly:

```jsx
dispatch({
  type: "INCREMENT"
});
```

Create a reusable function:

```jsx
const increment = () => {
  return {
    type: "INCREMENT"
  };
};
```

Usage:

```jsx
dispatch(increment());
```

---

## Redux Toolkit Version

```jsx
const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});
```

Redux Toolkit automatically generates actions.

```jsx
dispatch(increment());
```

---

## Benefits of Actions

* Describe state changes
* Easy to debug
* Predictable behavior
* Support logging and tracking
* Improve maintainability

---

## Interview Answer

**Actions are plain JavaScript objects that describe an event or state change in a Redux application. Every action contains a type property and may contain additional data through a payload. Actions are dispatched to reducers, which update the Redux store accordingly.**

---

# 133. What are Reducers?

## Answer

A **Reducer** is a pure JavaScript function that determines how the application's state changes in response to an action.

Reducers receive:

1. Current State
2. Action

and return:

3. New State

---

## Reducer Syntax

```jsx
function reducer(state, action) {
  return newState;
}
```

---

## Example

```jsx
function counterReducer(
  state = 0,
  action
) {
  switch (action.type) {

    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
}
```

---

## How Reducers Work

Action:

```jsx
dispatch({
  type: "INCREMENT"
});
```

Reducer receives:

```jsx
state = 0
action.type = "INCREMENT"
```

Returns:

```jsx
1
```

Store updates.

UI re-renders.

---

## Reducers Must Be Pure Functions

Given the same input, a reducer must always return the same output.

### Good

```jsx
function reducer(state, action) {
  return state + 1;
}
```

---

### Bad

```jsx
function reducer(state, action) {
  return Math.random();
}
```

Random values make state unpredictable.

---

## Immutable Updates

Wrong:

```jsx
state.count++;
return state;
```

Correct:

```jsx
return {
  ...state,
  count: state.count + 1
};
```

---

## Redux Toolkit Reducers

```jsx
const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});
```

Looks mutable, but Redux Toolkit uses Immer internally.

---

## Responsibilities of Reducers

* Handle actions
* Update state
* Return new state
* Keep updates predictable

---

## Interview Answer

**Reducers are pure functions in Redux that determine how the state changes based on dispatched actions. They receive the current state and an action as input and return a new updated state without directly mutating the existing state.**

---

# 134. What is Middleware in Redux?

## Answer

**Middleware** is a function that sits between the action dispatch process and the reducer.

It intercepts actions before they reach reducers and allows developers to perform additional tasks such as:

* API Calls
* Logging
* Authentication
* Error Handling
* Analytics
* Async Operations

---

## Why Middleware is Needed

Reducers must remain pure functions.

This means reducers cannot:

```jsx
fetch()
axios()
setTimeout()
console.log()
```

or perform side effects.

Middleware handles these operations.

---

## Redux Flow Without Middleware

```text
Component
    ↓
Dispatch Action
    ↓
Reducer
    ↓
Store Update
```

---

## Redux Flow With Middleware

```text
Component
    ↓
Dispatch Action
    ↓
Middleware
    ↓
Reducer
    ↓
Store Update
```

---

## Logging Middleware Example

```jsx
const logger =
  store => next => action => {

    console.log(action);

    return next(action);
};
```

This logs every action before it reaches the reducer.

---

## Example: API Request

```jsx
dispatch(fetchUsers());
```

Middleware:

```jsx
fetch("/api/users")
```

After receiving data:

```jsx
dispatch(usersLoaded(data));
```

---

## Popular Redux Middleware

### Redux Thunk

Handles async actions.

```jsx
dispatch(fetchUsers());
```

---

### Redux Saga

Handles complex side effects.

```jsx
yield call(api.fetchUsers);
```

---

### Logger

Logs actions and state changes.

---

## Middleware in Redux Toolkit

Redux Toolkit includes Redux Thunk by default.

```jsx
const store = configureStore({
  reducer: rootReducer
});
```

No extra setup is required.

---

## Advantages

* Handles async operations
* Keeps reducers pure
* Improves code organization
* Enables logging
* Supports error handling

---

## Interview Answer

**Middleware in Redux is a function that intercepts actions before they reach reducers. It is used to perform side effects such as API calls, logging, authentication, and asynchronous operations while keeping reducers pure and predictable.**

---

# 135. What is Zustand?

## Answer

**Zustand** is a lightweight and modern state management library for React that provides a simple way to manage global state without the complexity of Redux.

The name "Zustand" comes from the German word for **State**.

It is becoming increasingly popular because it requires very little boilerplate code and is easy to learn.

---

## Why Zustand Was Created

Redux often requires:

```text
Store
Actions
Reducers
Action Types
Middleware
Selectors
```

For small and medium projects this can feel excessive.

Zustand provides global state management with minimal setup.

---

## Installing Zustand

```bash
npm install zustand
```

---

## Creating a Store

```jsx
import { create } from "zustand";

const useCounterStore = create(
  (set) => ({
    count: 0,

    increment: () =>
      set((state) => ({
        count: state.count + 1
      })),

    decrement: () =>
      set((state) => ({
        count: state.count - 1
      }))
  })
);
```

---

## Using Zustand Store

```jsx
function Counter() {

  const {
    count,
    increment
  } = useCounterStore();

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={increment}
      >
        Increment
      </button>
    </>
  );
}
```

---

## Redux vs Zustand

| Feature               | Redux Toolkit  | Zustand   |
| --------------------- | -------------- | --------- |
| Learning Curve        | Medium         | Easy      |
| Boilerplate           | More           | Very Less |
| Setup                 | Complex        | Simple    |
| Performance           | Excellent      | Excellent |
| Middleware            | Strong Support | Limited   |
| Large Enterprise Apps | Excellent      | Good      |
| Small Projects        | Good           | Excellent |

---

## Advantages of Zustand

### Very Simple API

Minimal code required.

### No Provider Needed

Unlike Context API:

```jsx
<Provider>
```

is not required.

---

### Fast Performance

Only subscribed components re-render.

---

### Less Boilerplate

No reducers or action types.

---

### Easy Integration

Works with existing React projects.

---

## When to Use Zustand

✅ Small Projects

✅ Medium Applications

✅ Dashboards

✅ Admin Panels

✅ SaaS Applications

✅ Rapid Development

---

## When Redux Toolkit is Better

✅ Large Enterprise Projects

✅ Complex Business Logic

✅ Extensive Middleware Usage

✅ Advanced Debugging Requirements

---

## Interview Answer

**Zustand is a lightweight React state management library that allows developers to create and manage global state with minimal boilerplate code. It provides a simple API, excellent performance, and does not require providers, making it a popular alternative to Redux for small and medium-sized applications.**
