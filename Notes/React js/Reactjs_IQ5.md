## 🧪 9. Testing (136–145)

136. What is testing in React?
137. What is unit testing?
138. What is integration testing?
139. What is end-to-end testing?
140. What is Jest?
141. What is React Testing Library?
142. What is snapshot testing?
143. How do you test React components?
144. How do you mock API calls in tests?
145. What are testing best practices in React?

---

## ⚡ 10. Performance Optimization (146–160)

146. What is React performance optimization?
147. What is React.memo()?
148. How does React.memo work?
149. What is useMemo?
150. What is useCallback?
151. What is lazy loading?
152. What is code splitting?
153. What is React.lazy()?
154. What is Suspense?
155. What are unnecessary re-renders?
156. How do you prevent re-renders?
157. What is tree shaking?
158. What is bundle optimization?
159. What are performance profiling tools?
160. How do you optimize large React applications?

---

## 🚀 11. Advanced React Concepts (161–180)

161. What is reconciliation?
162. What is React Fiber?
163. How does React rendering work?
164. What are portals?
165. What are fragments?
166. What is forwardRef?
167. What is lazy hydration?
168. What is concurrent rendering?
169. What is server-side rendering (SSR)?
170. What is client-side rendering (CSR)?
171. What is static site generation (SSG)?
172. What is hydration?
173. What is React Suspense?
174. What are Error Boundaries?
175. What is code splitting?
176. What is dynamic import?
177. What are render props?
178. What are compound components?
179. What are Higher-Order Components (HOCs)?
180. What is dependency injection in React?

---

## ⚛️ 12. React with TypeScript (181–190)

181. Why use TypeScript with React?
182. How do you type React props?
183. How do you type React state?
184. How do you type event handlers?
185. What is React.FC?
186. How do you type custom hooks?
187. How do you type Context API?
188. How do you type Redux state?
189. What are generic React components?
190. What are TypeScript best practices in React?

---


## 🧪 9. Testing (136–145)

# 🧪 9. Testing in React (136–140)

---

# 136. What is Testing in React?

## Answer

**Testing in React** is the process of verifying that React components, functions, hooks, and application features work correctly as expected.

The goal of testing is to find bugs early, improve code quality, and ensure that future changes do not break existing functionality.

In modern React development, testing is considered an essential part of building reliable applications.

---

## Why is Testing Important?

Imagine you build a Login Form:

```jsx
function Login() {
  return (
    <form>
      <input type="email" />
      <input type="password" />
      <button>Login</button>
    </form>
  );
}
```

Today it works perfectly.

Tomorrow another developer changes the code and accidentally breaks the Login button.

Without tests:

❌ Bug may reach production.

With tests:

✅ Bug is detected immediately.

---

## Benefits of Testing

### 1. Finds Bugs Early

Testing helps identify issues before deployment.

### 2. Improves Code Quality

Developers write cleaner and more maintainable code.

### 3. Enables Safe Refactoring

Code can be modified confidently.

### 4. Saves Time

Fixing bugs early is cheaper than fixing them in production.

### 5. Increases Reliability

Applications behave consistently.

---

## Types of Testing in React

### Unit Testing

Tests individual functions or components.

```jsx
<Button />
```

---

### Integration Testing

Tests interaction between multiple components.

```jsx
LoginForm + API + Validation
```

---

### End-to-End (E2E) Testing

Tests the entire user journey.

```text
Open Website
 ↓
Login
 ↓
Add Product
 ↓
Checkout
```

---

## Common React Testing Tools

### Jest

Testing framework.

### React Testing Library (RTL)

Tests components like users interact with them.

### Cypress

E2E testing.

### Playwright

Modern E2E testing tool.

---

## Example

Component:

```jsx
function Welcome() {
  return <h1>Welcome User</h1>;
}
```

Test:

```jsx
import { render, screen } from "@testing-library/react";

test("renders welcome text", () => {
  render(<Welcome />);

  expect(
    screen.getByText("Welcome User")
  ).toBeInTheDocument();
});
```

---

## Real-World Example

For an E-commerce Website:

You may test:

* User Login
* Product Search
* Add to Cart
* Remove from Cart
* Payment Process
* Order Placement

---

## Interview Answer

**Testing in React is the process of verifying that components, hooks, and application features work correctly. It helps detect bugs early, improves code quality, enables safe code changes, and ensures a reliable user experience. Common testing types include unit testing, integration testing, and end-to-end testing.**

---

# 137. What is Unit Testing?

## Answer

**Unit Testing** is a testing technique where individual units of code are tested independently.

A unit can be:

* Function
* Component
* Hook
* Utility Method

The purpose is to verify that each unit behaves correctly in isolation.

---

## Why Unit Testing?

Suppose you have a function:

```jsx
function add(a, b) {
  return a + b;
}
```

You want to ensure:

```jsx
add(2, 3);
```

always returns:

```jsx
5
```

Unit testing verifies this behavior automatically.

---

## Characteristics of Unit Testing

### Small Scope

Tests only one unit.

### Fast Execution

Runs very quickly.

### Independent

Does not depend on databases or APIs.

### Easy Debugging

Errors can be identified quickly.

---

## Example Using Jest

Function:

```jsx
function multiply(a, b) {
  return a * b;
}

export default multiply;
```

---

Test:

```jsx
import multiply from "./multiply";

test("multiplies two numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});
```

---

## Component Unit Test

Component:

```jsx
function Button() {
  return <button>Submit</button>;
}
```

Test:

```jsx
import { render, screen } from "@testing-library/react";

test("renders submit button", () => {
  render(<Button />);

  expect(
    screen.getByText("Submit")
  ).toBeInTheDocument();
});
```

---

## Advantages

* Detects bugs early
* Improves confidence
* Makes code maintainable
* Simplifies debugging

---

## Real-World Example

Testing:

```jsx
calculateTax()
calculateDiscount()
validateEmail()
formatCurrency()
```

Each function can be tested separately.

---

## Interview Answer

**Unit Testing is a testing technique that verifies individual units of code, such as functions, components, or hooks, in isolation. It ensures that each unit works correctly and helps developers detect bugs early while improving code reliability and maintainability.**

---

# 138. What is Integration Testing?

## Answer

**Integration Testing** verifies that multiple units or components work together correctly.

Instead of testing individual components separately, it tests how they interact with one another.

---

## Why Integration Testing?

Suppose a Login page contains:

```text
Email Input
Password Input
Login Button
API Request
Dashboard Redirect
```

Unit tests may verify each part individually.

Integration tests verify the complete interaction.

---

## Example

User enters credentials:

```text
Email
Password
```

Clicks:

```text
Login
```

Application:

```text
Validates Data
 ↓
Calls API
 ↓
Receives Response
 ↓
Shows Dashboard
```

Integration testing verifies this entire flow.

---

## Example Component

```jsx
function LoginForm() {
  const [message, setMessage] =
    useState("");

  const handleLogin = () => {
    setMessage("Login Successful");
  };

  return (
    <>
      <button onClick={handleLogin}>
        Login
      </button>

      <p>{message}</p>
    </>
  );
}
```

---

## Test

```jsx
import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

test("shows success message", () => {

  render(<LoginForm />);

  fireEvent.click(
    screen.getByText("Login")
  );

  expect(
    screen.getByText("Login Successful")
  ).toBeInTheDocument();
});
```

---

## Benefits

### Tests Component Communication

Verifies data flow.

### More Realistic

Simulates actual usage.

### Detects Interaction Bugs

Finds problems between components.

---

## Real-World Example

Testing:

```text
Add Product
 ↓
Cart Updates
 ↓
Total Price Updates
```

This is integration testing.

---

## Interview Answer

**Integration Testing verifies that multiple components or modules work together correctly. It focuses on interactions between different parts of an application and ensures that complete workflows behave as expected.**

---

# 139. What is End-to-End Testing (E2E)?

## Answer

**End-to-End Testing (E2E)** tests the entire application from the user's perspective.

It simulates real user behavior and verifies that complete business workflows function correctly.

---

## Goal of E2E Testing

Ensure that the application works correctly in a real browser environment.

---

## Example

For an E-commerce Website:

```text
Open Website
 ↓
Login
 ↓
Search Product
 ↓
Add To Cart
 ↓
Checkout
 ↓
Payment
 ↓
Order Success
```

E2E testing verifies this complete journey.

---

## Difference from Other Tests

### Unit Testing

Tests one function.

```jsx
calculateTotal()
```

---

### Integration Testing

Tests component interaction.

```jsx
Cart + ProductList
```

---

### E2E Testing

Tests the entire application.

```text
Login → Cart → Checkout
```

---

## Popular E2E Tools

### Cypress

Widely used for React applications.

### Playwright

Modern and fast testing framework.

### Selenium

Traditional browser automation tool.

---

## Example Using Cypress

```jsx
describe("Login", () => {

  it("logs in user", () => {

    cy.visit("/login");

    cy.get("input[type=email]")
      .type("user@gmail.com");

    cy.get("input[type=password]")
      .type("123456");

    cy.contains("Login").click();

    cy.contains("Dashboard");
  });

});
```

---

## Advantages

### Tests Complete User Journey

Verifies actual workflows.

### Closest to Real Usage

Runs in real browsers.

### Detects Production Issues

Finds bugs missed by other tests.

---

## Disadvantages

### Slower Execution

Compared to unit tests.

### More Complex

Requires environment setup.

---

## Interview Answer

**End-to-End (E2E) Testing is a testing approach that verifies complete application workflows from the user's perspective. It simulates real user actions in a browser and ensures that all parts of the application work together correctly.**

---

# 140. What is Jest?

## Answer

**Jest** is a JavaScript testing framework developed by Meta Platforms and is the most popular testing framework for React applications.

It provides everything needed to write and run tests, including:

* Test Runner
* Assertions
* Mocking
* Code Coverage
* Snapshot Testing

Jest is commonly used with React Testing Library.

---

## Why Jest is Popular?

### Easy Setup

Works out of the box with React projects.

### Fast Execution

Runs tests efficiently.

### Built-in Mocking

Mocks APIs and functions easily.

### Snapshot Testing

Detects unexpected UI changes.

### Code Coverage Reports

Shows how much code is tested.

---

## Basic Example

Function:

```jsx
function add(a, b) {
  return a + b;
}
```

Test:

```jsx
test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

---

## Common Matchers

### toBe()

```jsx
expect(5).toBe(5);
```

---

### toEqual()

```jsx
expect({
  name: "Rishi"
}).toEqual({
  name: "Rishi"
});
```

---

### toContain()

```jsx
expect(["React", "Node"])
  .toContain("React");
```

---

### toBeTruthy()

```jsx
expect(true)
  .toBeTruthy();
```

---

## Mock Function Example

```jsx
const mockFn = jest.fn();

mockFn();

expect(mockFn)
  .toHaveBeenCalled();
```

---

## Snapshot Testing

```jsx
import renderer from "react-test-renderer";

test("matches snapshot", () => {

  const tree =
    renderer
      .create(<Button />)
      .toJSON();

  expect(tree)
    .toMatchSnapshot();

});
```

---

## Jest + React Testing Library

```jsx
import {
  render,
  screen
} from "@testing-library/react";

test("renders button", () => {

  render(<button>Submit</button>);

  expect(
    screen.getByText("Submit")
  ).toBeInTheDocument();

});
```

---

## Advantages of Jest

* Fast and lightweight
* Easy setup
* Supports mocking
* Snapshot testing
* Great React integration
* Excellent developer experience

---

## Interview Answer

**Jest is a JavaScript testing framework developed by Meta and widely used for testing React applications. It provides features such as test execution, assertions, mocking, snapshot testing, and code coverage, making it a powerful tool for writing reliable and maintainable tests.**


# 🧪 9. Testing in React (141–145)

---

# 141. What is React Testing Library?

## Answer

**React Testing Library (RTL)** is a popular testing utility used for testing React components by focusing on how users interact with the application rather than testing implementation details.

It was created to encourage developers to write tests that resemble real user behavior.

The main philosophy of React Testing Library is:

> "The more your tests resemble the way your software is used, the more confidence they can give you."

Unlike Enzyme (an older React testing library), RTL does not encourage testing internal component state or methods. Instead, it tests what users actually see and do.

---

## Why Use React Testing Library?

Traditional testing often focuses on:

```jsx
component.state
component.instance()
private methods
```

Users never see these things.

Users interact with:

* Buttons
* Forms
* Inputs
* Text
* Images
* Links

React Testing Library focuses on these visible elements.

---

## Installation

```bash
npm install --save-dev @testing-library/react
```

Often installed with:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

---

## Basic Example

### Component

```jsx
function Welcome() {
  return <h1>Welcome Rishi</h1>;
}

export default Welcome;
```

---

### Test

```jsx
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders welcome message", () => {
  render(<Welcome />);

  expect(
    screen.getByText("Welcome Rishi")
  ).toBeInTheDocument();
});
```

---

## Common RTL Methods

### render()

Renders component.

```jsx
render(<App />);
```

---

### screen

Searches elements.

```jsx
screen.getByText("Login");
```

---

### fireEvent()

Simulates events.

```jsx
fireEvent.click(button);
```

---

### userEvent()

Simulates real user interactions.

```jsx
await userEvent.type(input, "Rishi");
```

---

## Example: Button Click

### Component

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

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

### Test

```jsx
import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

test("increments count", () => {

  render(<Counter />);

  fireEvent.click(
    screen.getByText("Increment")
  );

  expect(
    screen.getByText("1")
  ).toBeInTheDocument();

});
```

---

## Advantages

### User-Centric Testing

Tests real user behavior.

### Less Fragile

Tests don't break due to internal refactoring.

### Easy to Learn

Simple API.

### Works Perfectly with Jest

Industry-standard combination.

---

## Interview Answer

**React Testing Library is a testing utility for React applications that focuses on testing components from the user's perspective. It encourages testing visible behavior instead of implementation details and is commonly used with Jest to create reliable and maintainable tests.**

---

# 142. What is Snapshot Testing?

## Answer

**Snapshot Testing** is a testing technique that captures the rendered output of a component and stores it as a snapshot file.

Future test runs compare the current output against the saved snapshot.

If the output changes unexpectedly, the test fails.

---

## Why Snapshot Testing?

Suppose a component initially renders:

```html
<button>Login</button>
```

A snapshot is created.

Later a developer accidentally changes it:

```html
<button>Sign In</button>
```

The snapshot test detects the difference immediately.

---

## How Snapshot Testing Works

### Step 1

Render component.

### Step 2

Generate snapshot.

### Step 3

Save snapshot file.

### Step 4

Compare future outputs.

---

## Example Component

```jsx
function Button() {
  return <button>Submit</button>;
}
```

---

## Snapshot Test

```jsx
import renderer from "react-test-renderer";
import Button from "./Button";

test("matches snapshot", () => {

  const tree =
    renderer
      .create(<Button />)
      .toJSON();

  expect(tree)
    .toMatchSnapshot();

});
```

---

## Snapshot File

```jsx
exports[`matches snapshot 1`] = `
<button>
  Submit
</button>
`;
```

---

## Benefits

### Detects Unexpected UI Changes

Protects UI consistency.

### Fast Testing

Quick comparison.

### Easy Maintenance

Simple to create.

---

## Limitations

### Not a Replacement for Functional Tests

Snapshots only verify output structure.

### Large Snapshots Become Hard to Review

Too many snapshots reduce usefulness.

---

## Best Use Cases

* Reusable UI Components
* Design Systems
* Buttons
* Cards
* Layout Components

---

## Interview Answer

**Snapshot Testing is a technique that captures a component's rendered output and compares it against a previously saved version. It helps detect unexpected UI changes and is commonly implemented using Jest snapshots.**

---

# 143. How do you test React Components?

## Answer

React components are usually tested using:

* Jest
* React Testing Library

The goal is to verify that components render correctly and behave as expected when users interact with them.

---

## What Should Be Tested?

### Rendering

Does the component appear correctly?

### User Interaction

Do clicks and typing work?

### State Changes

Does the UI update correctly?

### Conditional Rendering

Are elements shown or hidden correctly?

### API Responses

Does the component display fetched data?

---

## Example Component

```jsx
function Greeting() {
  return <h1>Hello User</h1>;
}
```

---

## Test Rendering

```jsx
import { render, screen }
from "@testing-library/react";

test("renders greeting", () => {

  render(<Greeting />);

  expect(
    screen.getByText("Hello User")
  ).toBeInTheDocument();

});
```

---

## Testing User Interaction

### Component

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

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

### Test

```jsx
import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

test("increments count", () => {

  render(<Counter />);

  fireEvent.click(
    screen.getByText("Increment")
  );

  expect(
    screen.getByText("1")
  ).toBeInTheDocument();

});
```

---

## Testing Forms

### Component

```jsx
function Login() {
  return (
    <input
      placeholder="Email"
    />
  );
}
```

---

### Test

```jsx
import userEvent from
"@testing-library/user-event";

test("types email", async () => {

  render(<Login />);

  const input =
    screen.getByPlaceholderText(
      "Email"
    );

  await userEvent.type(
    input,
    "test@gmail.com"
  );

  expect(input.value)
    .toBe("test@gmail.com");

});
```

---

## Best Practice

Test components the way users use them.

Avoid:

```jsx
component.state
```

Prefer:

```jsx
screen.getByRole()
screen.getByText()
screen.getByLabelText()
```

---

## Interview Answer

**React components are typically tested using Jest and React Testing Library. Developers test rendering, user interactions, state changes, conditional UI behavior, and API responses to ensure components work correctly from the user's perspective.**

---

# 144. How do you mock API calls in tests?

## Answer

When testing components, we usually don't want to make real API requests because:

* Tests become slow
* External services may fail
* Results become unpredictable

Instead, we use **mocking** to simulate API responses.

---

## What is Mocking?

Mocking means replacing a real API call with a fake response during testing.

---

## Example API Function

```jsx
export async function getUsers() {

  const response =
    await fetch("/api/users");

  return response.json();
}
```

---

## Mocking Fetch

```jsx
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Rishi"
        }
      ])
  })
);
```

---

## Example Component

```jsx
function Users() {

  const [users, setUsers] =
    useState([]);

  useEffect(() => {

    fetch("/api/users")
      .then(res => res.json())
      .then(data =>
        setUsers(data)
      );

  }, []);

  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}
```

---

## Test

```jsx
import {
  render,
  screen
} from "@testing-library/react";

test("loads users", async () => {

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "Rishi"
          }
        ])
    })
  );

  render(<Users />);

  expect(
    await screen.findByText("Rishi")
  ).toBeInTheDocument();

});
```

---

## Mocking Axios

```jsx
import axios from "axios";

jest.mock("axios");

axios.get.mockResolvedValue({
  data: [
    {
      id: 1,
      name: "Rishi"
    }
  ]
});
```

---

## Why Mock APIs?

### Faster Tests

No network requests.

### Reliable Results

Predictable responses.

### Independent Tests

No dependency on external servers.

---

## Interview Answer

**API calls are mocked in tests to avoid making real network requests. Jest provides mocking capabilities that allow developers to replace API calls with predefined responses, making tests faster, more reliable, and independent of external services.**

---

# 145. What are Testing Best Practices in React?

## Answer

Testing best practices help create reliable, maintainable, and meaningful tests.

The goal is not to test implementation details but to test behavior from the user's perspective.

---

## 1. Test User Behavior

✅ Good

```jsx
screen.getByRole("button");
```

❌ Bad

```jsx
component.state.count
```

Focus on what users see and do.

---

## 2. Use React Testing Library

React Testing Library encourages user-centric testing.

```jsx
render(<App />);
```

---

## 3. Prefer Accessible Queries

Best order:

```jsx
getByRole()
getByLabelText()
getByPlaceholderText()
getByText()
```

Example:

```jsx
screen.getByRole(
  "button",
  { name: /login/i }
);
```

---

## 4. Avoid Testing Internal Implementation

Don't test:

```jsx
state
private functions
internal variables
```

Test behavior instead.

---

## 5. Keep Tests Independent

Each test should run independently.

```jsx
test("test 1");
test("test 2");
```

No shared dependencies.

---

## 6. Mock External Services

Mock:

* APIs
* Databases
* Third-party services

This makes tests reliable.

---

## 7. Write Small Focused Tests

Each test should verify one behavior.

✅ Good

```jsx
test("shows login button");
```

❌ Bad

```jsx
test(
 "entire application behavior"
);
```

---

## 8. Test Edge Cases

Examples:

```jsx
Empty Input
Invalid Email
API Failure
Loading State
```

---

## 9. Maintain Good Coverage

Test:

* Components
* Hooks
* Utilities
* Business Logic

Do not chase 100% coverage blindly.

Focus on critical functionality.

---

## 10. Use Meaningful Test Names

Good:

```jsx
test(
 "shows error message when password is empty"
);
```

Bad:

```jsx
test("test1");
```

---

## Real-World Example

For a Login Page, test:

✅ Successful Login

✅ Invalid Credentials

✅ Empty Fields

✅ Loading State

✅ API Failure

✅ Redirect After Login

---

## Interview Answer

**Testing best practices in React include testing user behavior instead of implementation details, using React Testing Library, writing independent and focused tests, mocking external services, covering edge cases, and using meaningful test names. These practices improve reliability, maintainability, and confidence in application quality.**


## ⚡ 10. Performance Optimization (146–160)

# 🚀 10. React Performance Optimization (146–150)

---

# 146. What is React Performance Optimization?

## Answer

**React Performance Optimization** is the process of improving the speed, efficiency, and responsiveness of a React application by reducing unnecessary rendering, minimizing expensive calculations, optimizing component updates, and improving resource usage.

The goal is to make applications:

* Faster
* More responsive
* More scalable
* Better user experience

---

## Why Performance Optimization is Important?

Imagine an E-commerce Website:

```text
Products: 10,000+
Users: Thousands
Filters: Multiple
Search: Real-Time
```

Without optimization:

❌ Slow rendering

❌ UI lag

❌ High memory usage

❌ Poor user experience

With optimization:

✅ Faster rendering

✅ Smooth UI

✅ Better scalability

✅ Improved performance

---

## Common Performance Problems

### Unnecessary Re-renders

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

Every time Parent re-renders:

```jsx
<Child />
```

also re-renders even if its data hasn't changed.

---

## Expensive Calculations

```jsx
const total = products.reduce(
  (sum, item) => sum + item.price,
  0
);
```

This runs on every render.

---

## Large Lists

```jsx
products.map(product => (
  <Product key={product.id} />
));
```

Rendering thousands of items can slow down the UI.

---

## React Optimization Techniques

### React.memo()

Prevents unnecessary component re-renders.

---

### useMemo()

Caches expensive calculations.

---

### useCallback()

Caches functions.

---

### Code Splitting

Loads components only when needed.

```jsx
const Dashboard = lazy(() =>
  import("./Dashboard")
);
```

---

### Virtualization

Render only visible list items.

Libraries:

```text
react-window
react-virtualized
```

---

### Lazy Loading

Load images and components on demand.

---

## Real-World Example

For an Amazon-like website:

Optimize:

* Product lists
* Search filtering
* Cart calculations
* User dashboards

to improve speed and responsiveness.

---

## Interview Answer

**React Performance Optimization is the process of improving the efficiency and speed of React applications by minimizing unnecessary re-renders, optimizing expensive computations, reducing bundle size, and improving resource utilization. Common techniques include React.memo, useMemo, useCallback, lazy loading, code splitting, and list virtualization.**

---

# 147. What is React.memo()?

## Answer

`React.memo()` is a Higher-Order Component (HOC) that memoizes a functional component and prevents unnecessary re-renders when its props have not changed.

It helps improve performance by reusing the previous rendered result.

---

## Why React.memo is Needed?

Normally:

```jsx
Parent Re-renders
       ↓
Child Re-renders
```

Even if child props remain unchanged.

This causes unnecessary work.

---

## Without React.memo

```jsx
function Child() {
  console.log("Child Rendered");

  return <h1>Child Component</h1>;
}
```

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
```

Output:

```text
Child Rendered
Child Rendered
Child Rendered
...
```

Child re-renders every time.

---

## With React.memo

```jsx
import React from "react";

const Child = React.memo(() => {
  console.log("Child Rendered");

  return <h1>Child Component</h1>;
});

export default Child;
```

Now:

```jsx
setCount()
```

will not re-render Child if props remain unchanged.

---

## Example with Props

```jsx
const User = React.memo(
  ({ name }) => {
    console.log("Rendered");

    return <h1>{name}</h1>;
  }
);
```

Parent:

```jsx
<User name="Rishi" />
```

If:

```jsx
count
```

changes but:

```jsx
name
```

doesn't change, User won't re-render.

---

## Advantages

### Reduces Re-renders

Improves performance.

### Faster UI

Less rendering work.

### Useful for Large Components

Helpful when components are expensive to render.

---

## Limitations

Not every component needs React.memo.

Using it unnecessarily may add overhead.

---

## When to Use React.memo

✅ Large Components

✅ Frequently Re-rendering Parents

✅ Stable Props

❌ Tiny Components

❌ Components with constantly changing props

---

## Interview Answer

**React.memo is a Higher-Order Component that memoizes a functional component and prevents re-rendering when its props have not changed. It improves performance by reducing unnecessary renders and is useful for components that receive stable props and are expensive to render.**

---

# 148. How does React.memo work?

## Answer

`React.memo()` works by performing a **shallow comparison** of a component's current props and previous props.

If props have not changed:

```text
Previous Props === Current Props
```

React reuses the previous rendered result.

If props change:

```text
Previous Props !== Current Props
```

React re-renders the component.

---

## Internal Working

```text
Parent Re-renders
         ↓
React.memo Checks Props
         ↓
Props Changed?
     /       \
   Yes       No
    ↓         ↓
Re-render   Skip Render
```

---

## Example

```jsx
const User = React.memo(
  ({ name }) => {
    console.log("User Rendered");

    return <h1>{name}</h1>;
  }
);
```

Parent:

```jsx
function App() {
  const [count, setCount] =
    useState(0);

  return (
    <>
      <User name="Rishi" />

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}
```

Result:

```text
User Rendered
```

Only once.

---

## Shallow Comparison Example

Primitive Values:

```jsx
"Rishi" === "Rishi"
```

Returns:

```jsx
true
```

No re-render.

---

## Objects

```jsx
{name: "Rishi"}
```

Every render creates a new object.

```jsx
{name: "Rishi"} !== {name: "Rishi"}
```

Result:

```jsx
false
```

Component re-renders.

---

## Problem Example

```jsx
<User
  data={{
    name: "Rishi"
  }}
/>
```

Each render creates a new object.

React.memo detects a change.

Component re-renders.

---

## Solution

Use `useMemo`.

```jsx
const user = useMemo(
  () => ({
    name: "Rishi"
  }),
  []
);
```

---

## Custom Comparison Function

```jsx
const User = React.memo(
  Component,
  (prevProps, nextProps) => {
    return (
      prevProps.name ===
      nextProps.name
    );
  }
);
```

---

## Interview Answer

**React.memo works by performing a shallow comparison between previous and current props. If the props are unchanged, React skips rendering the component and reuses the previous result. If the props change, the component re-renders. This helps improve application performance by avoiding unnecessary renders.**

---

# 149. What is useMemo?

## Answer

`useMemo` is a React Hook used to memoize expensive calculations so they are only recomputed when specific dependencies change.

It helps optimize performance by avoiding unnecessary recalculations during re-renders.

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

## Why useMemo?

Without useMemo:

```jsx
const total = products.reduce(
  (sum, item) => sum + item.price,
  0
);
```

This runs on every render.

Even when products haven't changed.

---

## Example Without useMemo

```jsx
function App() {
  const [count, setCount] =
    useState(0);

  const total = expensiveCalculation();

  return (
    <>
      <h1>{total}</h1>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}
```

Every click recalculates:

```jsx
expensiveCalculation()
```

---

## Example With useMemo

```jsx
const total = useMemo(
  () => expensiveCalculation(),
  []
);
```

Now calculation runs only once.

---

## Practical Example

```jsx
const filteredProducts =
  useMemo(() => {
    return products.filter(
      product =>
        product.price > 1000
    );
  }, [products]);
```

Only recalculates when:

```jsx
products
```

changes.

---

## Benefits

### Prevents Expensive Recalculations

Improves performance.

### Works Well with Large Datasets

Useful for filtering and sorting.

### Reduces CPU Usage

Avoids unnecessary work.

---

## When to Use useMemo

✅ Heavy Calculations

✅ Filtering Lists

✅ Sorting Data

✅ Large Arrays

❌ Simple Calculations

```jsx
const sum = a + b;
```

No need for useMemo.

---

## Interview Answer

**useMemo is a React Hook used to memoize the result of expensive calculations. It recomputes the value only when its dependencies change, improving performance by preventing unnecessary calculations during component re-renders.**

---

# 150. What is useCallback?

## Answer

`useCallback` is a React Hook that memoizes a function and returns the same function instance between renders unless its dependencies change.

It is primarily used to prevent unnecessary function recreation and avoid unwanted child component re-renders.

---

## Syntax

```jsx
const memoizedFunction =
  useCallback(() => {

  }, [dependencies]);
```

---

## Why useCallback?

Normally:

```jsx
function App() {

  const handleClick = () => {
    console.log("Clicked");
  };

}
```

A new function is created on every render.

---

## Problem with React.memo

```jsx
const Child = React.memo(
  ({ onClick }) => {
    console.log("Rendered");

    return (
      <button onClick={onClick}>
        Click
      </button>
    );
  }
);
```

Parent:

```jsx
function App() {

  const [count, setCount] =
    useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <Child onClick={handleClick} />

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}
```

Even with React.memo:

```text
Child Re-renders
```

because a new function is created every render.

---

## Solution Using useCallback

```jsx
const handleClick = useCallback(
  () => {
    console.log("Clicked");
  },
  []
);
```

Now:

```jsx
handleClick
```

remains the same across renders.

Child won't re-render unnecessarily.

---

## Real-World Example

```jsx
const fetchUsers =
  useCallback(() => {

    axios.get("/users");

  }, []);
```

Useful when passing functions to:

* React.memo Components
* Custom Hooks
* Dependency Arrays

---

## useMemo vs useCallback

| Feature  | useMemo                | useCallback        |
| -------- | ---------------------- | ------------------ |
| Memoizes | Value                  | Function           |
| Returns  | Computed Value         | Function Reference |
| Purpose  | Expensive Calculations | Stable Functions   |

---

### useMemo

```jsx
const total = useMemo(
  () => calculateTotal(),
  []
);
```

---

### useCallback

```jsx
const handleClick =
  useCallback(() => {

  }, []);
```

---

## When to Use useCallback

✅ Passing Functions to Child Components

✅ React.memo Optimization

✅ Custom Hooks

✅ Stable Function References

❌ Simple Components

❌ Functions Not Passed Anywhere

---

## Interview Answer

**useCallback is a React Hook that memoizes a function and returns the same function instance across renders unless its dependencies change. It is commonly used with React.memo to prevent unnecessary child component re-renders and improve application performance.**

# 🚀 10. React Performance Optimization (151–155)

---

# 151. What is Lazy Loading?

## Answer

**Lazy Loading** is a performance optimization technique in which resources are loaded only when they are needed instead of loading everything at the initial page load.

In React, lazy loading is commonly used to load components, images, routes, and modules on demand.

The main goal is to reduce the application's initial bundle size and improve loading speed.

---

## Why Do We Need Lazy Loading?

Imagine an E-commerce Application:

```text
Home
Products
Cart
Checkout
Profile
Admin Dashboard
Reports
Analytics
```

Without Lazy Loading:

```text
User Opens Home Page
       ↓
All Components Downloaded
       ↓
Large Bundle Size
       ↓
Slow Initial Load
```

Even if the user never visits:

```text
Admin Dashboard
Analytics
Reports
```

their code is still downloaded.

---

## With Lazy Loading

```text
User Opens Home Page
       ↓
Only Home Code Loads
       ↓
Faster Initial Render
```

When the user visits Dashboard:

```text
Dashboard Code Downloads
```

only at that moment.

---

## Real-Life Example

Think of Netflix.

Without Lazy Loading:

```text
Download all movies at once
```

Impossible and slow.

With Lazy Loading:

```text
Download movie only when user clicks Play
```

Much more efficient.

---

## React Example

### Normal Import

```jsx
import Dashboard from "./Dashboard";
```

Downloads immediately.

---

### Lazy Loaded Import

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Downloads only when needed.

---

## Benefits

### Faster Initial Loading

Smaller bundle size.

### Better User Experience

Pages open faster.

### Reduced Network Usage

Only necessary code is downloaded.

### Improved Performance

Less JavaScript to execute.

---

## Common Use Cases

* Route-Based Components
* Dashboards
* Admin Panels
* Large Charts
* Heavy Libraries
* Images

---

## Interview Answer

**Lazy Loading is a performance optimization technique where components, modules, or resources are loaded only when they are needed. In React, it helps reduce the initial bundle size, improve page load speed, and enhance the overall user experience.**

---

# 152. What is Code Splitting?

## Answer

**Code Splitting** is the process of breaking a large JavaScript bundle into smaller chunks that can be loaded separately when required.

By default, React applications create a single large JavaScript bundle.

As applications grow, this bundle becomes larger and slower to download.

Code Splitting solves this problem.

---

## Without Code Splitting

```text
App Bundle
│
├── Home
├── Dashboard
├── Cart
├── Profile
├── Analytics
├── Reports
└── Admin
```

Everything downloads together.

---

## Problems

❌ Large bundle size

❌ Slower loading

❌ More memory usage

❌ Poor performance on slow networks

---

## With Code Splitting

```text
Main Bundle
│
├── Home Chunk
├── Dashboard Chunk
├── Profile Chunk
├── Admin Chunk
└── Analytics Chunk
```

Each chunk loads independently.

---

## Example

### Dynamic Import

```jsx
import("./Dashboard");
```

This creates a separate chunk automatically.

---

## React Example

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Webpack or Vite generates:

```text
dashboard.chunk.js
```

which loads only when required.

---

## Types of Code Splitting

### Route-Based Splitting

```text
Home Route
Dashboard Route
Profile Route
```

Each route gets its own bundle.

---

### Component-Based Splitting

Large components load independently.

---

### Library-Based Splitting

Heavy packages load only when required.

---

## Benefits

### Smaller Initial Bundle

Improves loading speed.

### Better Performance

Downloads less code.

### Improved Scalability

Large applications become manageable.

---

## Code Splitting vs Lazy Loading

| Feature       | Code Splitting         | Lazy Loading            |
| ------------- | ---------------------- | ----------------------- |
| Purpose       | Split code into chunks | Load chunks when needed |
| Focus         | Bundle Optimization    | Runtime Optimization    |
| Used Together | Yes                    | Yes                     |

---

## Interview Answer

**Code Splitting is the technique of dividing a large JavaScript bundle into smaller chunks that can be loaded separately. It improves application performance by reducing the initial download size and loading code only when required.**

---

# 153. What is React.lazy()?

## Answer

`React.lazy()` is a built-in React function used for dynamically importing components and enabling lazy loading.

It allows React to load a component only when it is rendered for the first time.

---

## Syntax

```jsx
const Component = React.lazy(() =>
  import("./Component")
);
```

---

## How React.lazy Works

Normal Import:

```jsx
import Dashboard from "./Dashboard";
```

Downloads immediately.

---

Lazy Import:

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Downloads only when rendered.

---

## Example

### Dashboard Component

```jsx
function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

export default Dashboard;
```

---

### App Component

```jsx
import React, { Suspense } from "react";

const Dashboard = React.lazy(() =>
  import("./Dashboard")
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

---

## What Happens Internally?

```text
App Render
    ↓
Dashboard Needed?
    ↓
Yes
    ↓
Download Dashboard Chunk
    ↓
Render Dashboard
```

---

## Important Rule

`React.lazy()` must be wrapped inside:

```jsx
<Suspense>
```

Otherwise React won't know what to display while loading.

---

## Advantages

### Automatic Code Splitting

Creates separate chunks.

### Better Performance

Loads only required code.

### Easy Implementation

Simple syntax.

---

## Limitations

Works only with:

```jsx
export default Component;
```

For named exports, additional configuration is needed.

---

## Interview Answer

**React.lazy() is a React function used for lazy loading components through dynamic imports. It allows components to be loaded only when needed, reducing the initial bundle size and improving application performance. It is typically used together with Suspense.**

---

# 154. What is Suspense?

## Answer

`Suspense` is a React component used to handle loading states while waiting for lazy-loaded components, asynchronous resources, or data to become available.

It provides a fallback UI during loading.

---

## Why Suspense is Needed?

Imagine:

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

The Dashboard takes time to download.

During that time React needs something to display.

That's where Suspense helps.

---

## Syntax

```jsx
<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>
```

---

## Example

### Lazy Component

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

---

### Suspense Wrapper

```jsx
import { Suspense } from "react";

function App() {
  return (
    <Suspense
      fallback={<h2>Loading...</h2>}
    >
      <Dashboard />
    </Suspense>
  );
}
```

---

## How It Works

```text
Dashboard Requested
        ↓
Downloading...
        ↓
Show Fallback UI
        ↓
Download Complete
        ↓
Render Dashboard
```

---

## Custom Loading Component

```jsx
function Loader() {
  return <h1>Please Wait...</h1>;
}
```

Usage:

```jsx
<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```

---

## Multiple Components

```jsx
<Suspense fallback={<Spinner />}>

  <Dashboard />

  <Reports />

  <Analytics />

</Suspense>
```

---

## Benefits

### Better User Experience

Shows loading feedback.

### Supports Lazy Loading

Works with React.lazy.

### Cleaner Code

Centralized loading state.

---

## Real-World Example

```text
Dashboard
Reports
Analytics
Charts
```

Loading:

```text
Loading Dashboard...
```

instead of blank screen.

---

## Interview Answer

**Suspense is a React component used to display fallback content while waiting for lazy-loaded components or asynchronous resources to load. It improves user experience by showing a loading indicator instead of a blank screen during loading operations.**

---

# 155. What are Unnecessary Re-renders?

## Answer

**Unnecessary Re-renders** occur when React components re-render even though their displayed output has not changed.

These extra renders waste CPU time, memory, and can negatively impact performance.

---

## Why Do Re-renders Happen?

React re-renders a component when:

* State changes
* Props change
* Parent component re-renders
* Context updates

---

## Example

### Parent Component

```jsx
function Parent() {

  const [count, setCount] =
    useState(0);

  return (
    <>
      <Child />

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}
```

---

### Child Component

```jsx
function Child() {

  console.log("Rendered");

  return <h1>Child</h1>;

}
```

---

Every click:

```text
Parent Re-renders
       ↓
Child Re-renders
```

Even though Child doesn't use:

```jsx
count
```

This is an unnecessary re-render.

---

## Common Causes

### Parent Re-renders

Most common reason.

---

### New Object Creation

```jsx
<User
  data={{
    name: "Rishi"
  }}
/>
```

New object every render.

---

### New Function Creation

```jsx
<Child
  onClick={() => {}}
/>
```

New function every render.

---

### Context Updates

All consumers re-render when context changes.

---

## How to Prevent Unnecessary Re-renders

### React.memo

```jsx
const Child =
  React.memo(function Child() {
    return <h1>Child</h1>;
  });
```

---

### useMemo

Memoize values.

```jsx
const user = useMemo(
  () => ({
    name: "Rishi"
  }),
  []
);
```

---

### useCallback

Memoize functions.

```jsx
const handleClick =
  useCallback(() => {

  }, []);
```

---

### Split Components

Smaller components reduce rendering scope.

---

## Example Optimization

```jsx
const Child = React.memo(
  ({ user }) => {
    return <h1>{user.name}</h1>;
  }
);
```

Combined with:

```jsx
const user = useMemo(
  () => ({
    name: "Rishi"
  }),
  []
);
```

Now Child re-renders only when data changes.

---

## Why Avoid Unnecessary Re-renders?

### Better Performance

Less work for React.

### Faster UI

Improved responsiveness.

### Lower Memory Usage

Reduced resource consumption.

### Better Scalability

Handles larger applications efficiently.

---

## Interview Answer

**Unnecessary re-renders occur when React components render again even though their visible output has not changed. They can negatively affect performance and are commonly caused by parent re-renders, new object references, new function references, or context updates. Techniques such as React.memo, useMemo, and useCallback help prevent unnecessary re-renders and optimize application performance.**

# 🚀 10. React Performance Optimization (151–155)

---

# 151. What is Lazy Loading?

## Answer

**Lazy Loading** is a performance optimization technique in which resources are loaded only when they are needed instead of loading everything at the initial page load.

In React, lazy loading is commonly used to load components, images, routes, and modules on demand.

The main goal is to reduce the application's initial bundle size and improve loading speed.

---

## Why Do We Need Lazy Loading?

Imagine an E-commerce Application:

```text
Home
Products
Cart
Checkout
Profile
Admin Dashboard
Reports
Analytics
```

Without Lazy Loading:

```text
User Opens Home Page
       ↓
All Components Downloaded
       ↓
Large Bundle Size
       ↓
Slow Initial Load
```

Even if the user never visits:

```text
Admin Dashboard
Analytics
Reports
```

their code is still downloaded.

---

## With Lazy Loading

```text
User Opens Home Page
       ↓
Only Home Code Loads
       ↓
Faster Initial Render
```

When the user visits Dashboard:

```text
Dashboard Code Downloads
```

only at that moment.

---

## Real-Life Example

Think of Netflix.

Without Lazy Loading:

```text
Download all movies at once
```

Impossible and slow.

With Lazy Loading:

```text
Download movie only when user clicks Play
```

Much more efficient.

---

## React Example

### Normal Import

```jsx
import Dashboard from "./Dashboard";
```

Downloads immediately.

---

### Lazy Loaded Import

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Downloads only when needed.

---

## Benefits

### Faster Initial Loading

Smaller bundle size.

### Better User Experience

Pages open faster.

### Reduced Network Usage

Only necessary code is downloaded.

### Improved Performance

Less JavaScript to execute.

---

## Common Use Cases

* Route-Based Components
* Dashboards
* Admin Panels
* Large Charts
* Heavy Libraries
* Images

---

## Interview Answer

**Lazy Loading is a performance optimization technique where components, modules, or resources are loaded only when they are needed. In React, it helps reduce the initial bundle size, improve page load speed, and enhance the overall user experience.**

---

# 152. What is Code Splitting?

## Answer

**Code Splitting** is the process of breaking a large JavaScript bundle into smaller chunks that can be loaded separately when required.

By default, React applications create a single large JavaScript bundle.

As applications grow, this bundle becomes larger and slower to download.

Code Splitting solves this problem.

---

## Without Code Splitting

```text
App Bundle
│
├── Home
├── Dashboard
├── Cart
├── Profile
├── Analytics
├── Reports
└── Admin
```

Everything downloads together.

---

## Problems

❌ Large bundle size

❌ Slower loading

❌ More memory usage

❌ Poor performance on slow networks

---

## With Code Splitting

```text
Main Bundle
│
├── Home Chunk
├── Dashboard Chunk
├── Profile Chunk
├── Admin Chunk
└── Analytics Chunk
```

Each chunk loads independently.

---

## Example

### Dynamic Import

```jsx
import("./Dashboard");
```

This creates a separate chunk automatically.

---

## React Example

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Webpack or Vite generates:

```text
dashboard.chunk.js
```

which loads only when required.

---

## Types of Code Splitting

### Route-Based Splitting

```text
Home Route
Dashboard Route
Profile Route
```

Each route gets its own bundle.

---

### Component-Based Splitting

Large components load independently.

---

### Library-Based Splitting

Heavy packages load only when required.

---

## Benefits

### Smaller Initial Bundle

Improves loading speed.

### Better Performance

Downloads less code.

### Improved Scalability

Large applications become manageable.

---

## Code Splitting vs Lazy Loading

| Feature       | Code Splitting         | Lazy Loading            |
| ------------- | ---------------------- | ----------------------- |
| Purpose       | Split code into chunks | Load chunks when needed |
| Focus         | Bundle Optimization    | Runtime Optimization    |
| Used Together | Yes                    | Yes                     |

---

## Interview Answer

**Code Splitting is the technique of dividing a large JavaScript bundle into smaller chunks that can be loaded separately. It improves application performance by reducing the initial download size and loading code only when required.**

---

# 153. What is React.lazy()?

## Answer

`React.lazy()` is a built-in React function used for dynamically importing components and enabling lazy loading.

It allows React to load a component only when it is rendered for the first time.

---

## Syntax

```jsx
const Component = React.lazy(() =>
  import("./Component")
);
```

---

## How React.lazy Works

Normal Import:

```jsx
import Dashboard from "./Dashboard";
```

Downloads immediately.

---

Lazy Import:

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Downloads only when rendered.

---

## Example

### Dashboard Component

```jsx
function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

export default Dashboard;
```

---

### App Component

```jsx
import React, { Suspense } from "react";

const Dashboard = React.lazy(() =>
  import("./Dashboard")
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

---

## What Happens Internally?

```text
App Render
    ↓
Dashboard Needed?
    ↓
Yes
    ↓
Download Dashboard Chunk
    ↓
Render Dashboard
```

---

## Important Rule

`React.lazy()` must be wrapped inside:

```jsx
<Suspense>
```

Otherwise React won't know what to display while loading.

---

## Advantages

### Automatic Code Splitting

Creates separate chunks.

### Better Performance

Loads only required code.

### Easy Implementation

Simple syntax.

---

## Limitations

Works only with:

```jsx
export default Component;
```

For named exports, additional configuration is needed.

---

## Interview Answer

**React.lazy() is a React function used for lazy loading components through dynamic imports. It allows components to be loaded only when needed, reducing the initial bundle size and improving application performance. It is typically used together with Suspense.**

---

# 154. What is Suspense?

## Answer

`Suspense` is a React component used to handle loading states while waiting for lazy-loaded components, asynchronous resources, or data to become available.

It provides a fallback UI during loading.

---

## Why Suspense is Needed?

Imagine:

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

The Dashboard takes time to download.

During that time React needs something to display.

That's where Suspense helps.

---

## Syntax

```jsx
<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>
```

---

## Example

### Lazy Component

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

---

### Suspense Wrapper

```jsx
import { Suspense } from "react";

function App() {
  return (
    <Suspense
      fallback={<h2>Loading...</h2>}
    >
      <Dashboard />
    </Suspense>
  );
}
```

---

## How It Works

```text
Dashboard Requested
        ↓
Downloading...
        ↓
Show Fallback UI
        ↓
Download Complete
        ↓
Render Dashboard
```

---

## Custom Loading Component

```jsx
function Loader() {
  return <h1>Please Wait...</h1>;
}
```

Usage:

```jsx
<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```

---

## Multiple Components

```jsx
<Suspense fallback={<Spinner />}>

  <Dashboard />

  <Reports />

  <Analytics />

</Suspense>
```

---

## Benefits

### Better User Experience

Shows loading feedback.

### Supports Lazy Loading

Works with React.lazy.

### Cleaner Code

Centralized loading state.

---

## Real-World Example

```text
Dashboard
Reports
Analytics
Charts
```

Loading:

```text
Loading Dashboard...
```

instead of blank screen.

---

## Interview Answer

**Suspense is a React component used to display fallback content while waiting for lazy-loaded components or asynchronous resources to load. It improves user experience by showing a loading indicator instead of a blank screen during loading operations.**

---

# 155. What are Unnecessary Re-renders?

## Answer

**Unnecessary Re-renders** occur when React components re-render even though their displayed output has not changed.

These extra renders waste CPU time, memory, and can negatively impact performance.

---

## Why Do Re-renders Happen?

React re-renders a component when:

* State changes
* Props change
* Parent component re-renders
* Context updates

---

## Example

### Parent Component

```jsx
function Parent() {

  const [count, setCount] =
    useState(0);

  return (
    <>
      <Child />

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}
```

---

### Child Component

```jsx
function Child() {

  console.log("Rendered");

  return <h1>Child</h1>;

}
```

---

Every click:

```text
Parent Re-renders
       ↓
Child Re-renders
```

Even though Child doesn't use:

```jsx
count
```

This is an unnecessary re-render.

---

## Common Causes

### Parent Re-renders

Most common reason.

---

### New Object Creation

```jsx
<User
  data={{
    name: "Rishi"
  }}
/>
```

New object every render.

---

### New Function Creation

```jsx
<Child
  onClick={() => {}}
/>
```

New function every render.

---

### Context Updates

All consumers re-render when context changes.

---

## How to Prevent Unnecessary Re-renders

### React.memo

```jsx
const Child =
  React.memo(function Child() {
    return <h1>Child</h1>;
  });
```

---

### useMemo

Memoize values.

```jsx
const user = useMemo(
  () => ({
    name: "Rishi"
  }),
  []
);
```

---

### useCallback

Memoize functions.

```jsx
const handleClick =
  useCallback(() => {

  }, []);
```

---

### Split Components

Smaller components reduce rendering scope.

---

## Example Optimization

```jsx
const Child = React.memo(
  ({ user }) => {
    return <h1>{user.name}</h1>;
  }
);
```

Combined with:

```jsx
const user = useMemo(
  () => ({
    name: "Rishi"
  }),
  []
);
```

Now Child re-renders only when data changes.

---

## Why Avoid Unnecessary Re-renders?

### Better Performance

Less work for React.

### Faster UI

Improved responsiveness.

### Lower Memory Usage

Reduced resource consumption.

### Better Scalability

Handles larger applications efficiently.

---

## Interview Answer

**Unnecessary re-renders occur when React components render again even though their visible output has not changed. They can negatively affect performance and are commonly caused by parent re-renders, new object references, new function references, or context updates. Techniques such as React.memo, useMemo, and useCallback help prevent unnecessary re-renders and optimize application performance.**


## 🚀 11. Advanced React Concepts (161–180)
