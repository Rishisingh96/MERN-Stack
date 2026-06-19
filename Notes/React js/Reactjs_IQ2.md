## 🧩 2. Components & Props (21–35)

21. What is a component?
22. What are reusable components?
23. What are props in React?
24. Why are props read-only?
25. How do you pass props to a component?
26. What is props drilling?
27. What are default props?
28. What is children prop?
29. How do you pass components as props?
30. What is component composition?
31. What is a Higher-Order Component (HOC)?
32. What is prop validation?
33. What is PropTypes?
34. What is the difference between props and state?
35. How do parent-child components communicate?

---

## 🔄 3. State Management (36–50)

36. What is state in React?
37. Why do we use state?
38. How do you create state using `useState`?
39. How does state update work?
40. Why are state updates asynchronous?
41. What is state lifting?
42. What is local state?
43. What is global state?
44. What is derived state?
45. What is immutable state?
46. Why should state not be mutated directly?
47. What is batching in React?
48. What is state reconciliation?
49. How do you update objects in state?
50. How do you update arrays in state?

---


# 🧩 2. Components & Props (21–35)


# 21. What is a Component in React?

A **Component** is the fundamental building block of a React application. Components are independent, reusable pieces of UI that define how a particular part of the user interface should appear and behave.

Just like a website is made up of different sections such as a Header, Navigation Bar, Sidebar, Main Content, and Footer, React allows us to create each section as a separate component.

Components help developers divide complex UIs into smaller, manageable, and reusable pieces.

## Features of Components

* Reusable
* Independent
* Maintainable
* Easy to test
* Improves code organization
* Makes development faster

## Real-Life Example

Think of a car:

* Engine = Component
* Wheels = Component
* Steering = Component
* Dashboard = Component

Each part has its own responsibility but together they create a complete car.

Similarly, in React:

* Header Component
* Navbar Component
* Product Component
* Footer Component

Together they create a complete web application.

## Functional Component Example

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default Welcome;
```

Using the component:

```jsx
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

## Output

```html
Welcome to React!
```

## Advantages

1. Code Reusability
2. Better Maintenance
3. Faster Development
4. Easier Testing
5. Improved Readability

## Interview Answer

**A Component in React is an independent and reusable piece of UI that allows developers to divide the application into smaller parts. Components help improve code organization, maintainability, and reusability. React applications are built by combining multiple components together to create a complete user interface.**

---

# 22. What are Reusable Components?

Reusable Components are components that can be used multiple times throughout an application with different data.

Instead of writing the same code repeatedly, developers create one component and reuse it wherever needed.

This follows the **DRY Principle (Don't Repeat Yourself).**

## Example Without Reusable Component

```jsx
<div>
  <h2>Laptop</h2>
  <p>Price: ₹50000</p>
</div>

<div>
  <h2>Mobile</h2>
  <p>Price: ₹20000</p>
</div>
```

Here we are repeating the same structure.

---

## Example With Reusable Component

### Product Component

```jsx
function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

export default Product;
```

### App Component

```jsx
import Product from "./Product";

function App() {
  return (
    <div>
      <Product name="Laptop" price="50000" />
      <Product name="Mobile" price="20000" />
      <Product name="Tablet" price="15000" />
    </div>
  );
}
```

## Output

```html
Laptop - ₹50000
Mobile - ₹20000
Tablet - ₹15000
```

One component is reused multiple times with different data.

## Benefits

* Less code duplication
* Easier maintenance
* Consistent UI design
* Faster development
* Better scalability

## Interview Answer

**Reusable Components are React components that can be used multiple times across an application with different data. They help reduce code duplication, improve maintainability, and promote clean and scalable application architecture.**

---

# 23. What are Props in React?

**Props** stands for **Properties**.

Props are used to pass data from a Parent Component to a Child Component.

They make components dynamic and reusable.

Props work similarly to function parameters.

## Real-Life Example

Imagine ordering a pizza:

The Pizza component is the same, but you can pass different values:

```text
Pizza(size="Small")
Pizza(size="Medium")
Pizza(size="Large")
```

Similarly, React components receive different props.

---

## Example

### Child Component

```jsx
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student;
```

### Parent Component

```jsx
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Rishi" course="MCA" />
      <Student name="Aman" course="BCA" />
    </div>
  );
}
```

## Output

```html
Name: Rishi
Course: MCA

Name: Aman
Course: BCA
```

## Important Characteristics

* Passed from Parent to Child
* Read-only
* Makes components dynamic
* Can pass strings, numbers, arrays, objects, functions, and JSX

## Interview Answer

**Props are short for Properties and are used to pass data from a parent component to a child component in React. Props make components reusable and dynamic by allowing them to receive different values from their parent components.**

---

# 24. Why are Props Read-Only?

In React, props are **immutable**, meaning they cannot be modified by the child component receiving them.

Only the parent component can change the value of props.

This is called **One-Way Data Flow**.

## Why React Makes Props Read-Only

### 1. Predictable Data Flow

Data always flows:

```text
Parent → Child
```

not

```text
Child → Parent
```

This makes applications easier to understand.

---

### 2. Prevents Unexpected Bugs

If child components could change props, application behavior would become unpredictable.

---

### 3. Better Performance

React can optimize rendering when data remains immutable.

---

## Wrong Example

```jsx
function Student(props) {
  props.name = "Rohit"; // ❌ Not Allowed

  return <h1>{props.name}</h1>;
}
```

This will cause errors or warnings.

---

## Correct Approach

If data needs to change, use State.

```jsx
import { useState } from "react";

function Student() {
  const [name, setName] = useState("Rishi");

  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName("Rohit")}>
        Change Name
      </button>
    </>
  );
}
```

## Interview Answer

**Props are read-only in React because React follows a one-way data flow architecture. Child components should only receive and display data, not modify it. Making props immutable ensures predictable behavior, easier debugging, better performance, and cleaner application design.**

---

# 25. How Do You Pass Props to a Component?

Props are passed as attributes when a component is used, similar to HTML attributes.

## Syntax

```jsx
<ComponentName propName="value" />
```

---

## Example 1: Passing String Props

### Child Component

```jsx
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.city}</p>
    </div>
  );
}

export default User;
```

### Parent Component

```jsx
import User from "./User";

function App() {
  return (
    <div>
      <User
        name="Rishi Singh"
        city="Indore"
      />
    </div>
  );
}
```

---

## Example 2: Passing Multiple Props

```jsx
<User
  name="Rishi"
  age={22}
  course="MCA"
/>
```

Child Component:

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.course}</p>
    </>
  );
}
```

---

## Example 3: Destructuring Props

Instead of writing:

```jsx
props.name
props.age
props.course
```

Use:

```jsx
function User({ name, age, course }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{course}</p>
    </>
  );
}
```

This is cleaner and commonly used in professional projects.

---

## Example 4: Passing Function as Props

### Parent

```jsx
function App() {
  const showMessage = () => {
    alert("Hello!");
  };

  return (
    <Button clickHandler={showMessage} />
  );
}
```

### Child

```jsx
function Button(props) {
  return (
    <button onClick={props.clickHandler}>
      Click Me
    </button>
  );
}
```

---

## Interview Answer

**Props are passed to React components as attributes, similar to HTML attributes. A parent component sends data to a child component through props, allowing the child component to display or use that data. Props can contain strings, numbers, arrays, objects, functions, or even JSX elements, making components highly reusable and dynamic.**


# 26. What is Props Drilling?

**Props Drilling** is the process of passing data from a parent component to a deeply nested child component through multiple intermediate components, even when those intermediate components do not need the data themselves.

In React, data flows from parent to child using props. When the component hierarchy becomes deep, passing the same data through many layers can make the code difficult to maintain and understand. This problem is called **Props Drilling**.

---

## Real-Life Example

Imagine a company structure:

```text
CEO
 ↓
Manager
 ↓
Team Lead
 ↓
Developer
```

If the CEO wants to send a message to the Developer, the message must pass through Manager and Team Lead.

Similarly, in React:

```text
App
 ↓
Dashboard
 ↓
Profile
 ↓
UserInfo
```

If `App` has user data and `UserInfo` needs it, the data must pass through Dashboard and Profile.

---

## Example of Props Drilling

### App Component

```jsx
function App() {
  const user = "Rishi Singh";

  return <Dashboard user={user} />;
}
```

### Dashboard Component

```jsx
function Dashboard({ user }) {
  return <Profile user={user} />;
}
```

### Profile Component

```jsx
function Profile({ user }) {
  return <UserInfo user={user} />;
}
```

### UserInfo Component

```jsx
function UserInfo({ user }) {
  return <h2>{user}</h2>;
}
```

---

## Problems with Props Drilling

* Too many props passed through components.
* Difficult to maintain large applications.
* Reduces code readability.
* Makes component structure more complex.

---

## Solution

React provides:

* Context API
* Redux
* Zustand
* Recoil

These state management tools help avoid props drilling.

---

## Interview Answer

**Props Drilling is the process of passing data from a parent component to deeply nested child components through multiple intermediate components. It can make applications harder to maintain and is commonly solved using Context API or state management libraries like Redux and Zustand.**

---

# 27. What are Default Props?

**Default Props** are fallback values assigned to props when a parent component does not provide a value.

They ensure that a component still works correctly even if certain props are missing.

---

## Why Use Default Props?

Without default props:

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

Usage:

```jsx
<User />
```

Output:

```text
undefined
```

This does not look good.

---

## Using Default Values

### Modern React Approach

```jsx
function User({ name = "Guest User" }) {
  return <h2>{name}</h2>;
}
```

Usage:

```jsx
<User />
```

Output:

```text
Guest User
```

---

## Another Example

```jsx
function Product({
  name = "Unknown Product",
  price = 0,
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>₹{price}</p>
    </>
  );
}
```

Usage:

```jsx
<Product />
```

Output:

```text
Unknown Product
₹0
```

---

## Benefits

* Prevents undefined values.
* Improves user experience.
* Makes components more reliable.
* Reduces runtime errors.

---

## Interview Answer

**Default Props are fallback values assigned to component props when no value is provided by the parent component. They help prevent undefined values and make components more reliable and user-friendly. In modern React, default values are usually provided through function parameter destructuring.**

---

# 28. What is Children Prop?

The **children prop** is a special React prop that represents the content placed between a component's opening and closing tags.

It allows components to wrap and display dynamic content.

---

## Syntax

```jsx
<Component>
  Content Here
</Component>
```

The content inside the tags becomes the `children` prop.

---

## Example

### Parent Component

```jsx
<Card>
  <h2>Welcome to React</h2>
</Card>
```

### Child Component

```jsx
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}
```

Output:

```html
<div class="card">
  <h2>Welcome to React</h2>
</div>
```

---

## Using Destructuring

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

---

## Multiple Elements

```jsx
<Card>
  <h2>React Course</h2>
  <p>Learn React from scratch</p>
  <button>Enroll Now</button>
</Card>
```

All elements become part of the `children` prop.

---

## Common Use Cases

* Cards
* Modals
* Layouts
* Dialog Boxes
* Wrappers
* Reusable UI Components

---

## Interview Answer

**Children is a special React prop that contains the content placed between a component’s opening and closing tags. It enables developers to create flexible and reusable wrapper components that can render dynamic content inside them.**

---

# 29. How Do You Pass Components as Props?

In React, components can be passed as props to other components.

This allows a component to dynamically decide which UI element or component should be rendered.

---

## Example

### Parent Component

```jsx
function Welcome() {
  return <h2>Welcome User</h2>;
}

function App() {
  return <Container component={Welcome} />;
}
```

### Child Component

```jsx
function Container({ component: Component }) {
  return (
    <div>
      <Component />
    </div>
  );
}
```

Output:

```text
Welcome User
```

---

## Passing JSX as Props

### Parent

```jsx
function App() {
  return (
    <Layout
      header={<h1>My Website</h1>}
    />
  );
}
```

### Child

```jsx
function Layout({ header }) {
  return (
    <div>
      {header}
    </div>
  );
}
```

---

## Benefits

* Flexible UI
* Dynamic Rendering
* Better Reusability
* Cleaner Component Design

---

## Real-World Examples

* React Router
* Layout Components
* Dashboard Widgets
* Table Renderers
* Form Components

---

## Interview Answer

**React allows components to be passed as props, enabling dynamic rendering and flexible component design. A parent component can pass another component or JSX element as a prop, and the child component can render it when needed. This improves reusability and customization.**

---

# 30. What is Component Composition?

**Component Composition** is a design pattern in React where small components are combined together to build larger and more complex user interfaces.

Instead of inheritance, React encourages composition.

---

## Real-Life Example

Think of a house:

```text
House
 ├── Header
 ├── Navbar
 ├── Living Room
 ├── Kitchen
 └── Footer
```

Each part is independent, but together they create a complete house.

Similarly, React applications are built by composing multiple components.

---

## Example

### Header Component

```jsx
function Header() {
  return <h1>My Website</h1>;
}
```

### Main Component

```jsx
function Main() {
  return <p>Main Content Area</p>;
}
```

### Footer Component

```jsx
function Footer() {
  return <h3>Copyright 2026</h3>;
}
```

### App Component

```jsx
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
```

---

## Component Tree

```text
App
├── Header
├── Main
└── Footer
```

---

## Composition Using Children

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

Usage:

```jsx
<Card>
  <h2>React Course</h2>
  <p>Learn React Easily</p>
</Card>
```

This is also component composition.

---

## Advantages

1. Better Code Reusability
2. Easier Maintenance
3. Flexible UI Design
4. Cleaner Architecture
5. Scalable Applications
6. Encourages Modular Development

---

## Why React Prefers Composition Over Inheritance?

React developers found that composition solves UI reuse problems more effectively than inheritance.

Instead of extending components, React combines smaller components together.

---

## Interview Answer

**Component Composition is a React design pattern where multiple small, reusable components are combined to create larger and more complex user interfaces. React strongly encourages composition over inheritance because it provides greater flexibility, reusability, maintainability, and scalability in application development.**


# 31. What is a Higher-Order Component (HOC)?

A **Higher-Order Component (HOC)** is an advanced React pattern used for reusing component logic.

A HOC is a function that takes a component as an argument and returns a new enhanced component with additional functionality.

In simple words:

> A Higher-Order Component is a function that wraps another component and adds extra features without modifying the original component.

---

## Syntax

```jsx
const EnhancedComponent = higherOrderComponent(
  OriginalComponent
);
```

---

## Real-Life Example

Imagine a mobile phone.

The phone is the original component.

You add:

* Phone Cover
* Screen Guard
* Camera Protector

These add extra functionality without changing the actual phone.

Similarly, HOCs add functionality to components without modifying them.

---

## Example

### HOC

```jsx
function withGreeting(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <>
        <h2>Welcome User!</h2>
        <WrappedComponent {...props} />
      </>
    );
  };
}
```

---

### Original Component

```jsx
function Profile() {
  return <h3>This is Profile Page</h3>;
}
```

---

### Enhanced Component

```jsx
const EnhancedProfile =
  withGreeting(Profile);
```

---

### App Component

```jsx
function App() {
  return <EnhancedProfile />;
}
```

---

## Output

```html
Welcome User!

This is Profile Page
```

---

## Common Use Cases

* Authentication
* Authorization
* Logging
* Data Fetching
* Analytics Tracking
* Error Handling

---

## Advantages

* Code Reusability
* Separation of Concerns
* Cleaner Components
* Avoids Duplicate Logic

---

## Interview Answer

**A Higher-Order Component (HOC) is a function that takes a component as input and returns a new enhanced component with additional functionality. HOCs are used to reuse component logic, implement authentication, logging, error handling, and other cross-cutting concerns without modifying the original component.**

---

# 32. What is Prop Validation?

**Prop Validation** is the process of checking whether the props passed to a React component have the correct type and format.

It helps developers catch mistakes during development and makes components more reliable.

For example:

If a component expects a number:

```jsx
<Product price={500} />
```

But receives:

```jsx
<Product price="Five Hundred" />
```

React can warn developers about the incorrect data type.

---

## Why Prop Validation is Important?

### 1. Prevents Bugs

Incorrect prop types can cause unexpected behavior.

---

### 2. Improves Code Quality

Developers know exactly what data a component expects.

---

### 3. Easier Maintenance

Large teams can understand component requirements quickly.

---

### 4. Better Documentation

Prop validation acts as self-documentation.

---

## Example

```jsx
function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

Without validation:

```jsx
<User name={123} age="Twenty" />
```

This may create unexpected results.

With validation, React warns developers.

---

## Interview Answer

**Prop Validation is the process of verifying that the props passed to a React component have the correct data type and structure. It helps prevent bugs, improves code quality, and makes components easier to understand and maintain.**

---

# 33. What is PropTypes?

**PropTypes** is a React library used to perform runtime prop validation.

It allows developers to define the expected data types for component props.

If the wrong type is passed, React displays a warning in the console during development.

---

## Installation

```bash
npm install prop-types
```

---

## Example

### User Component

```jsx
import PropTypes from "prop-types";

function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default User;
```

---

## Usage

```jsx
<User
  name="Rishi"
  age={22}
/>
```

---

## Wrong Usage

```jsx
<User
  name={123}
  age="Twenty Two"
/>
```

Console Warning:

```text
Warning: Invalid prop type
```

---

## Common PropTypes

### String

```jsx
PropTypes.string
```

### Number

```jsx
PropTypes.number
```

### Boolean

```jsx
PropTypes.bool
```

### Array

```jsx
PropTypes.array
```

### Object

```jsx
PropTypes.object
```

### Function

```jsx
PropTypes.func
```

### Required Props

```jsx
PropTypes.string.isRequired
```

Example:

```jsx
User.propTypes = {
  name: PropTypes.string.isRequired,
};
```

---

## Advantages

* Detects invalid props
* Improves code quality
* Makes components self-documenting
* Easier debugging

---

## Interview Answer

**PropTypes is a React library used for runtime prop validation. It allows developers to specify the expected data types for component props and provides warnings during development when invalid data is passed. This helps improve reliability, maintainability, and debugging.**

---

# 34. What is the Difference Between Props and State?

Both **Props** and **State** are used to store data in React, but they serve different purposes.

---

## Props

Props are data passed from a parent component to a child component.

Characteristics:

* Read-only
* Passed from Parent to Child
* Cannot be modified by child component
* Used for component communication

Example:

```jsx
<User name="Rishi" />
```

---

## State

State is data managed within a component.

Characteristics:

* Mutable
* Managed by component itself
* Can change over time
* Re-renders component when updated

Example:

```jsx
const [count, setCount] =
  useState(0);
```

---

## Comparison Table

| Feature          | Props            | State              |
| ---------------- | ---------------- | ------------------ |
| Ownership        | Parent Component | Current Component  |
| Mutable          | No               | Yes                |
| Purpose          | Pass Data        | Store Dynamic Data |
| Updated By       | Parent           | Component          |
| Causes Re-render | Yes              | Yes                |
| Read-Only        | Yes              | No                 |

---

## Example

### Using Props

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

Usage:

```jsx
<User name="Rishi" />
```

---

### Using State

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] =
    useState(0);

  return (
    <>
      <h2>{count}</h2>

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

## Interview Answer

**Props and State are both used to manage data in React. Props are read-only values passed from a parent component to a child component, whereas State is mutable data managed within a component itself. Props are used for communication between components, while State is used to store and update dynamic data that affects the UI.**

---

# 35. How Do Parent-Child Components Communicate?

In React, components communicate primarily through **Props** and **Callback Functions**.

React follows a **One-Way Data Flow** model.

---

## Parent → Child Communication

A parent passes data to a child using props.

### Parent

```jsx
function App() {
  return (
    <User
      name="Rishi Singh"
    />
  );
}
```

### Child

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

Output:

```text
Rishi Singh
```

---

## Child → Parent Communication

A child cannot directly send data to a parent.

Instead, the parent passes a callback function to the child.

---

### Parent Component

```jsx
function App() {
  const receiveData = (msg) => {
    alert(msg);
  };

  return (
    <Child
      sendData={receiveData}
    />
  );
}
```

---

### Child Component

```jsx
function Child(props) {
  return (
    <button
      onClick={() =>
        props.sendData(
          "Hello Parent!"
        )
      }
    >
      Send Data
    </button>
  );
}
```

---

## Communication Flow

```text
Parent → Child = Props

Child → Parent = Callback Functions
```

---

## Sibling Communication

Two sibling components communicate through their common parent.

```text
Parent
 ├── Child A
 └── Child B
```

Child A sends data to Parent.

Parent passes data to Child B.

---

## Advanced Communication Methods

For larger applications:

* Context API
* Redux
* Zustand
* Recoil

These help share data across multiple components.

---

## Interview Answer

**Parent-child communication in React is achieved through props and callback functions. Parents pass data to children using props, while children communicate with parents by invoking callback functions passed as props. This follows React’s one-way data flow architecture and helps maintain predictable application behavior.**


# 🔄 3. State Management (36–50)

# 36. What is State in React?

## Definition

**State** is a built-in React object that stores data or information about a component that can change over time. When the state changes, React automatically re-renders the component and updates the UI.

In simple words, **State is the component's memory**. It holds values that can change due to user actions, API responses, form inputs, button clicks, etc.

Unlike props, which are passed from parent to child and are read-only, state belongs to the component itself and can be modified.

---

## Real-Life Example

Imagine a counter application.

Initially:

```text
Count = 0
```

When the user clicks a button:

```text
Count = 1
Count = 2
Count = 3
```

Since the value changes over time, it should be stored in **state**.

---

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

### Output

```text
Count: 0
Click Button
Count: 1
Click Button
Count: 2
```

---

## State Characteristics

### 1. State is Mutable

State values can change.

```jsx
const [name, setName] = useState("Rishi");
```

Later:

```jsx
setName("Rahul");
```

---

### 2. State Triggers Re-rendering

Whenever state changes, React updates the UI.

```jsx
setCount(10);
```

React automatically updates:

```text
Count: 10
```

---

### 3. State is Local to a Component

Each component manages its own state.

```jsx
function User() {
  const [name, setName] = useState("Rishi");
}
```

Another component cannot directly access this state.

---

## Interview Answer

**State is a built-in React feature used to store dynamic data inside a component. It allows components to remember information and update the UI whenever the data changes. State is mutable, managed internally by the component, and any change in state causes React to re-render the component automatically. In modern React, state is commonly created using the `useState` Hook.**

---

# 37. Why Do We Use State?

## Definition

We use state whenever data needs to change and the UI should reflect those changes automatically.

Without state, React cannot track changes and update the interface.

---

## Common Use Cases

### Form Inputs

```jsx
const [email, setEmail] = useState("");
```

User types:

```text
a
ab
abc@gmail.com
```

State stores the latest value.

---

### Counter Application

```jsx
const [count, setCount] = useState(0);
```

Button click updates count.

---

### Show/Hide Password

```jsx
const [showPassword, setShowPassword] = useState(false);
```

Toggle visibility.

---

### API Data

```jsx
const [users, setUsers] = useState([]);
```

Store fetched data from server.

---

### Shopping Cart

```jsx
const [cartItems, setCartItems] = useState([]);
```

Add and remove products dynamically.

---

## What Happens Without State?

```jsx
let count = 0;

function increment() {
  count++;
}
```

React will not update the UI because React does not track normal variables.

---

## With State

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
```

React automatically re-renders.

---

## Interview Answer

**We use state in React to store and manage dynamic data that changes during the lifecycle of a component. State allows React to track changes and automatically update the user interface whenever the data changes. Common uses include handling forms, counters, API responses, user interactions, authentication status, shopping carts, and other dynamic content.**

---

# 38. How Do You Create State Using `useState`?

## Definition

React provides the **useState Hook** to create and manage state in functional components.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

## Breakdown

```jsx
const [count, setCount] = useState(0);
```

### count

Current state value.

```jsx
count
```

Current value:

```text
0
```

---

### setCount

Function used to update state.

```jsx
setCount(5);
```

Updates value to:

```text
5
```

---

### useState(0)

Initial state value.

```jsx
useState(0);
```

Initial value:

```text
0
```

---

## Example: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
```

---

## Example: String State

```jsx
import { useState } from "react";

function User() {
  const [name, setName] = useState("Rishi");

  return (
    <div>
      <h2>{name}</h2>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </div>
  );
}
```

---

## Example: Object State

```jsx
const [user, setUser] = useState({
  name: "Rishi",
  age: 24,
});
```

Update:

```jsx
setUser({
  ...user,
  age: 25,
});
```

---

## Example: Array State

```jsx
const [items, setItems] = useState([]);
```

Add item:

```jsx
setItems([...items, "Laptop"]);
```

---

## Interview Answer

**In React functional components, state is created using the `useState` Hook. The Hook returns an array containing the current state value and a function to update that value. The syntax is `const [state, setState] = useState(initialValue)`. Whenever the setter function is called, React updates the state and re-renders the component with the new data.**

---

# 39. How Does State Update Work?

## Definition

State updates occur through the setter function returned by `useState`.

React does not allow direct modification of state.

---

## Wrong Way

```jsx
const [count, setCount] = useState(0);

count = 10;
```

❌ Error

State should never be changed directly.

---

## Correct Way

```jsx
setCount(10);
```

✅ Correct

React knows state has changed.

---

## Example

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={increase}>
      {count}
    </button>
  );
}
```

---

## State Update Lifecycle

### Step 1

Current value:

```text
count = 0
```

---

### Step 2

User clicks button.

```jsx
setCount(1);
```

---

### Step 3

React schedules an update.

---

### Step 4

React re-renders component.

---

### Step 5

New UI appears.

```text
count = 1
```

---

## Updating Based on Previous State

Preferred approach:

```jsx
setCount(prevCount => prevCount + 1);
```

---

### Why?

Suppose user clicks rapidly:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Result:

```text
+3
```

React uses the latest state value each time.

---

## Interview Answer

**State updates in React occur through the setter function returned by `useState`. When the setter function is called, React schedules an update, compares the new state with the previous state, re-renders the component, and updates the UI efficiently. State should never be modified directly because React cannot detect direct mutations. For updates based on previous values, the functional update form is recommended.**

---

# 40. Why Are State Updates Asynchronous?

## Definition

React state updates are asynchronous because React batches multiple updates together to improve performance and avoid unnecessary re-renders.

Instead of updating the UI immediately after every state change, React schedules updates and processes them efficiently.

---

## Example

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);

  console.log(count);
};
```

### Output

```text
0
```

Not:

```text
1
```

---

## Why?

Because React has not yet completed the state update.

The update is scheduled and applied later during re-rendering.

---

## Visual Flow

```text
Button Click
      ↓
setCount(1)
      ↓
React schedules update
      ↓
Current code finishes
      ↓
React re-renders component
      ↓
UI shows count = 1
```

---

## Multiple Updates Example

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

Expected:

```text
3
```

Actual:

```text
1
```

Because all updates use the same old value.

---

## Correct Approach

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Result:

```text
3
```

---

## Benefits of Asynchronous Updates

### Better Performance

React combines updates.

```text
Update 1
Update 2
Update 3
```

Instead of:

```text
3 Re-renders
```

React performs:

```text
1 Re-render
```

---

### Batching

React groups multiple updates together.

```jsx
setName("Rishi");
setAge(24);
setCity("Indore");
```

React may process them in a single render cycle.

---

### Faster User Experience

Less rendering means better performance and smoother applications.

---

## Interview Answer

**React state updates are asynchronous because React batches multiple updates together for performance optimization. When a state setter function is called, React schedules the update rather than applying it immediately. This reduces unnecessary re-renders and improves application efficiency. Because updates are asynchronous, reading the state immediately after calling a setter may still return the old value. For state changes based on previous values, the functional update syntax should be used to ensure accuracy.**

---

### Quick Comparison: Props vs State

| Feature             | Props                 | State               |
| ------------------- | --------------------- | ------------------- |
| Ownership           | Parent Component      | Own Component       |
| Mutable             | No                    | Yes                 |
| Purpose             | Pass Data             | Manage Dynamic Data |
| Re-render on Change | Yes                   | Yes                 |
| Modified By         | Parent                | Component Itself    |
| Example             | User Name from Parent | Counter Value       |

**Interview One-Liner:**
**Props are used to pass data between components, while State is used to manage dynamic data within a component. Props are read-only, whereas State can be updated using React Hooks like `useState`.**


# 41. What is State Lifting in React?

## Definition

**State Lifting (Lifting State Up)** is a React pattern where state is moved from child components to their closest common parent component so that multiple child components can share and synchronize the same data.

In React, data flows from **Parent → Child**. When two or more components need access to the same state, instead of maintaining separate copies of the state, we move the state to their common parent and pass it down through props.

This concept is called **Lifting State Up**.

---

## Why Do We Need State Lifting?

Imagine two sibling components:

```text
App
├── SearchBox
└── UserList
```

* SearchBox updates search text
* UserList displays filtered users

Both components need access to the same search value.

If SearchBox stores the state locally:

```jsx
const [search, setSearch] = useState("");
```

UserList cannot access it.

Solution:

Move the state to the parent component.

---

## Before State Lifting

### SearchBox.jsx

```jsx
function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
```

Problem:

```text
UserList cannot access search state.
```

---

## After State Lifting

### App.jsx

```jsx
import { useState } from "react";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
      />

      <UserList search={search} />
    </>
  );
}

export default App;
```

---

### SearchBox.jsx

```jsx
function SearchBox({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
```

---

### UserList.jsx

```jsx
function UserList({ search }) {
  return <h2>Searching for: {search}</h2>;
}
```

---

## Benefits of State Lifting

### Single Source of Truth

State exists in one place.

```text
App Component
     ↓
All Children
```

---

### Easier Data Sharing

Multiple components access the same state.

---

### Better Synchronization

All components always display the latest value.

---

### Predictable Data Flow

React follows:

```text
Parent → Child
```

---

## Real-World Example

* Shopping Cart
* Authentication
* Search Filters
* Theme Switcher
* Product Filtering
* User Profile Data

---

## Interview Answer

**State Lifting is the process of moving state from child components to their closest common parent component. It is used when multiple components need access to the same data. By lifting state up, React maintains a single source of truth, making data sharing and synchronization easier across components while preserving React’s one-way data flow.**

---

# 42. What is Local State in React?

## Definition

**Local State** is state that belongs to and is managed by a single component.

Only the component that owns the state can directly access and update it.

It is not shared with other components unless passed through props.

---

## Example

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

Here:

```jsx
const [count, setCount] = useState(0);
```

belongs only to Counter component.

---

## Characteristics of Local State

### Component Specific

```text
Counter Component
     ↓
count state
```

---

### Independent

Each component gets its own copy.

```jsx
<Counter />
<Counter />
```

Output:

```text
Counter 1 = 0
Counter 2 = 0
```

They don't affect each other.

---

### Created with Hooks

Usually created using:

```jsx
useState()
```

or

```jsx
useReducer()
```

---

## Real-Life Examples

### Toggle Button

```jsx
const [isOpen, setIsOpen] = useState(false);
```

---

### Form Input

```jsx
const [name, setName] = useState("");
```

---

### Modal Visibility

```jsx
const [showModal, setShowModal] = useState(false);
```

---

## Advantages

### Simple

Easy to manage.

### Fast

No external library needed.

### Component Encapsulation

Keeps logic inside component.

---

## Interview Answer

**Local State is state that is managed within a single React component. It is private to that component and cannot be accessed directly by other components. Local state is commonly created using Hooks such as `useState` and is ideal for UI-specific data like form inputs, toggles, counters, and modal visibility.**

---

# 43. What is Global State in React?

## Definition

**Global State** is state that needs to be shared across multiple components throughout the application.

Instead of passing props through many component levels (Prop Drilling), global state provides a centralized place for storing shared data.

---

## Example Problem

```text
App
 └── Dashboard
      └── Sidebar
           └── UserProfile
```

Suppose UserProfile needs user information.

Without global state:

```text
App
 ↓
Dashboard
 ↓
Sidebar
 ↓
UserProfile
```

Props must be passed through every level.

This is called:

```text
Prop Drilling
```

---

## Solution: Global State

Store user data centrally.

```jsx
{
  user: {
    name: "Rishi",
    email: "rishi@gmail.com"
  }
}
```

Any component can access it.

---

## Global State Tools

### React Context API

Built into React.

```jsx
const UserContext = createContext();
```

---

### Redux

Most popular state management library.

```text
Store
 ↓
All Components
```

---

### Zustand

Lightweight alternative.

---

### Recoil

Facebook state management library.

---

## Example Using Context API

### Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### Provide Data

```jsx
<UserContext.Provider value={{ name: "Rishi" }}>
  <App />
</UserContext.Provider>
```

---

### Consume Data

```jsx
const user = useContext(UserContext);

console.log(user.name);
```

Output:

```text
Rishi
```

---

## Real-Life Examples

### Authentication

```jsx
Current Logged-In User
```

---

### Theme

```jsx
Dark Mode / Light Mode
```

---

### Shopping Cart

```jsx
Cart Items
```

---

### Language Settings

```jsx
English / Hindi
```

---

## Interview Answer

**Global State refers to application-wide data that must be accessed by multiple components. Instead of passing data through several component levels, global state stores shared information in a centralized location. Common tools for managing global state include React Context API, Redux, Zustand, and Recoil. Examples include authentication data, themes, shopping carts, and user settings.**

---

# 44. What is Derived State in React?

## Definition

**Derived State** is state whose value can be calculated from other state or props instead of being stored separately.

A good React practice is:

> If a value can be calculated, do not store it as state.

---

## Example

Suppose:

```jsx
const [firstName, setFirstName] = useState("Rishi");
const [lastName, setLastName] = useState("Singh");
```

Instead of:

```jsx
const [fullName, setFullName] = useState("");
```

derive it:

```jsx
const fullName = `${firstName} ${lastName}`;
```

---

## Why?

Because:

```text
fullName
```

depends on:

```text
firstName + lastName
```

No need to store duplicate information.

---

## Bad Example

```jsx
const [price, setPrice] = useState(100);
const [quantity, setQuantity] = useState(2);

const [total, setTotal] = useState(200);
```

Problem:

```text
Duplicate state
```

---

## Good Example

```jsx
const total = price * quantity;
```

---

## Filtering Example

```jsx
const filteredUsers = users.filter(user =>
  user.name.includes(search)
);
```

No need:

```jsx
const [filteredUsers, setFilteredUsers] = useState([]);
```

unless expensive calculations require optimization.

---

## Benefits

### Less State

Simpler code.

---

### Fewer Bugs

Avoid synchronization issues.

---

### Better Performance

Less unnecessary state management.

---

### Single Source of Truth

Only original data is stored.

---

## Interview Answer

**Derived State is data that can be computed from existing state or props rather than stored separately. React best practices recommend deriving values whenever possible to avoid duplicate state, reduce bugs, and keep a single source of truth. Examples include full names, totals, filtered lists, and calculated values.**

---

# 45. What is Immutable State in React?

## Definition

**Immutable State** means state should never be modified directly. Instead of changing the existing state object or array, a new copy should be created and updated.

React relies on immutability to detect changes efficiently and trigger re-renders.

---

## What is Immutability?

Immutability means:

```text
Cannot Modify Existing Data
```

Instead:

```text
Create New Data
```

---

## Wrong Example (Mutating State)

```jsx
const [user, setUser] = useState({
  name: "Rishi",
  age: 24
});

user.age = 25;
```

❌ Wrong

State was directly modified.

---

## Correct Example

```jsx
setUser({
  ...user,
  age: 25
});
```

✅ Correct

Creates a new object.

---

## Arrays Example

### Wrong

```jsx
items.push("Laptop");
```

❌ Direct mutation

---

### Correct

```jsx
setItems([...items, "Laptop"]);
```

✅ New array created

---

## Remove Item Example

```jsx
setItems(
  items.filter(item => item !== "Laptop")
);
```

---

## Update Item Example

```jsx
setUsers(
  users.map(user =>
    user.id === 1
      ? { ...user, age: 25 }
      : user
  )
);
```

---

## Why Does React Prefer Immutability?

### Easy Change Detection

React compares:

```text
Old Reference
vs
New Reference
```

If different:

```text
Re-render
```

---

### Better Performance

React's Virtual DOM works efficiently.

---

### Predictable State Updates

Less unexpected behavior.

---

### Easier Debugging

State history becomes easier to track.

---

## Common Immutable Operations

### Add Item

```jsx
setItems([...items, newItem]);
```

### Remove Item

```jsx
setItems(items.filter(item => item.id !== id));
```

### Update Object

```jsx
setUser({
  ...user,
  name: "Rahul"
});
```

### Update Array Item

```jsx
setUsers(
  users.map(user =>
    user.id === id
      ? { ...user, active: true }
      : user
  )
);
```

---

## Interview Answer

**Immutable State means React state should never be modified directly. Instead, a new object or array should be created whenever state needs to be updated. React uses reference comparisons to detect changes, so immutability improves performance, enables predictable updates, and ensures proper component re-rendering. Common techniques include the spread operator (`...`), `map()`, `filter()`, and `concat()` to create updated copies of state data.**

---

## Quick Revision Table

| Concept         | Meaning                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| State Lifting   | Moving state to a common parent for sharing                             |
| Local State     | State used within a single component                                    |
| Global State    | State shared across the entire application                              |
| Derived State   | State calculated from other state/props                                 |
| Immutable State | State updated by creating new copies instead of modifying existing data |


# 46. Why Should State Not Be Mutated Directly?

## Definition

In React, **state should never be modified directly** because React relies on state changes to determine when a component should re-render.

If you directly mutate state, React may not detect the change, causing the UI to display outdated data.

---

## What is State Mutation?

Mutation means changing the original state object or array.

### Example of Mutation

```jsx
const [user, setUser] = useState({
  name: "Rishi",
  age: 24
});

user.age = 25;
```

Here:

```text
Original state is modified directly.
```

This is called:

```text
State Mutation
```

❌ Wrong Approach

---

## Why is Direct Mutation Bad?

### 1. React Cannot Detect Changes Properly

React compares references.

```jsx
const user = {
  name: "Rishi",
  age: 24
};
```

After mutation:

```jsx
user.age = 25;
```

Reference remains:

```text
Same Memory Location
```

React may think:

```text
Nothing Changed
```

and skip re-rendering.

---

### 2. UI May Not Update

```jsx
user.age = 25;
```

Even though data changed:

```text
Screen may still show:
Age: 24
```

because React wasn't notified.

---

### 3. Breaks React's Predictability

React follows:

```text
State Change
     ↓
Re-render
     ↓
Updated UI
```

Direct mutation bypasses this process.

---

### 4. Causes Debugging Problems

Tracking changes becomes difficult.

```text
Who changed the state?
When was it changed?
```

Hard to answer.

---

## Correct Approach

Create a new object.

```jsx
setUser({
  ...user,
  age: 25
});
```

React sees:

```text
Old Object Reference
        ↓
New Object Reference
```

and re-renders.

---

## Array Example

### Wrong

```jsx
items.push("Laptop");
```

Mutates original array.

---

### Correct

```jsx
setItems([...items, "Laptop"]);
```

Creates a new array.

---

## React's Internal Logic

React performs:

```text
Old State Reference
          VS
New State Reference
```

If different:

```text
Re-render Component
```

If same:

```text
Skip Re-render
```

This is why immutability is important.

---

## Interview Answer

**State should not be mutated directly because React relies on state reference changes to detect updates and trigger re-rendering. Direct mutation keeps the same object or array reference, which can prevent React from updating the UI correctly. Instead of modifying state directly, developers should create a new object or array using techniques such as the spread operator, `map()`, or `filter()`. This ensures predictable behavior, better performance, and easier debugging.**

---

# 47. What is Batching in React?

## Definition

**Batching** is React's optimization technique where multiple state updates are grouped together and processed in a single re-render.

Instead of rendering after every update, React waits and combines updates to improve performance.

---

## Without Batching

Imagine React re-rendered after every update.

```jsx
setName("Rishi");
setAge(24);
setCity("Indore");
```

React would perform:

```text
Render #1
Render #2
Render #3
```

Total:

```text
3 Re-renders
```

Inefficient.

---

## With Batching

React groups updates.

```jsx
setName("Rishi");
setAge(24);
setCity("Indore");
```

React performs:

```text
Single Re-render
```

Result:

```text
Faster Application
```

---

## Example

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setCount(1);
    setName("Rishi");
  };

  return (
    <button onClick={handleClick}>
      Update
    </button>
  );
}
```

React batches both updates.

```text
1 Re-render
```

instead of:

```text
2 Re-renders
```

---

## React 18 Automatic Batching

React 18 introduced automatic batching in:

### Event Handlers

```jsx
onClick={() => {
  setCount(1);
  setName("Rishi");
}}
```

---

### Promises

```jsx
fetchData().then(() => {
  setCount(1);
  setName("Rishi");
});
```

---

### setTimeout

```jsx
setTimeout(() => {
  setCount(1);
  setName("Rishi");
}, 1000);
```

---

### Async Functions

```jsx
async function getData() {
  setCount(1);
  setName("Rishi");
}
```

---

## Benefits of Batching

### Better Performance

Fewer re-renders.

---

### Faster UI

Less work for React.

---

### Reduced DOM Updates

More efficient rendering.

---

### Improved User Experience

Smoother applications.

---

## Interview Answer

**Batching is a React optimization technique that groups multiple state updates into a single re-render. Instead of updating the UI after every state change, React processes several updates together, reducing unnecessary renders and improving performance. React 18 introduced automatic batching for event handlers, promises, async functions, and timers.**

---

# 48. What is State Reconciliation?

## Definition

**State Reconciliation** is the process React uses to compare the previous UI with the updated UI and determine the minimum changes required to update the DOM efficiently.

It is part of React's reconciliation algorithm.

---

## Simple Explanation

Whenever state changes:

```text
State Changes
      ↓
Component Re-renders
      ↓
New Virtual DOM Created
      ↓
Compare with Old Virtual DOM
      ↓
Update Only Changed Parts
```

This comparison process is called:

```text
Reconciliation
```

---

## Example

Initial UI:

```jsx
<h1>Hello</h1>
```

State changes:

```jsx
<h1>Hello Rishi</h1>
```

React compares:

```text
Old: Hello
New: Hello Rishi
```

Only text changes.

React updates:

```text
Text Node Only
```

Not the entire page.

---

## Virtual DOM Example

### Old Virtual DOM

```jsx
<div>
  <h1>Hello</h1>
</div>
```

### New Virtual DOM

```jsx
<div>
  <h1>Hello Rishi</h1>
</div>
```

React finds:

```text
Only h1 text changed
```

and updates only that part.

---

## Why is Reconciliation Important?

### Faster Rendering

Avoids full page refresh.

---

### Better Performance

Updates only necessary elements.

---

### Efficient DOM Manipulation

DOM operations are expensive.

React minimizes them.

---

## Reconciliation Steps

### Step 1

State changes.

```jsx
setName("Rishi");
```

---

### Step 2

React creates a new Virtual DOM.

---

### Step 3

Compares old and new Virtual DOM.

---

### Step 4

Finds differences.

---

### Step 5

Updates only changed nodes.

---

## Interview Answer

**State Reconciliation is React's process of comparing the previous Virtual DOM with the updated Virtual DOM after a state change. React identifies the differences between the two versions and updates only the necessary parts of the real DOM. This process improves performance by minimizing expensive DOM operations and ensuring efficient UI updates.**

---

# 49. How Do You Update Objects in State?

## Definition

Objects stored in state should be updated immutably.

Never modify object properties directly.

---

## Object State Example

```jsx
const [user, setUser] = useState({
  name: "Rishi",
  age: 24,
  city: "Indore"
});
```

---

## Wrong Way

```jsx
user.age = 25;
```

❌ Direct mutation

---

## Correct Way Using Spread Operator

```jsx
setUser({
  ...user,
  age: 25
});
```

### Result

```jsx
{
  name: "Rishi",
  age: 25,
  city: "Indore"
}
```

---

## Updating Multiple Properties

```jsx
setUser({
  ...user,
  age: 25,
  city: "Bhopal"
});
```

---

## Updating Nested Objects

### State

```jsx
const [user, setUser] = useState({
  name: "Rishi",
  address: {
    city: "Indore",
    state: "MP"
  }
});
```

---

### Update Nested Value

```jsx
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Bhopal"
  }
});
```

---

## Functional Update

Recommended when using previous state.

```jsx
setUser(prev => ({
  ...prev,
  age: prev.age + 1
}));
```

---

## Interview Answer

**Objects in React state should be updated immutably by creating a new object rather than modifying the existing one. The most common approach is using the spread operator (`...`) to copy existing properties and update only the required values. For nested objects, each nested level should also be copied before updating.**

---

# 50. How Do You Update Arrays in State?

## Definition

Arrays in React state must also be updated immutably.

Never use methods that directly modify the original array.

---

## Wrong Way

```jsx
items.push("Laptop");
```

❌ Mutates original array.

---

## Add Item

### Using Spread Operator

```jsx
setItems([...items, "Laptop"]);
```

---

### Result

```jsx
["Phone", "Tablet", "Laptop"]
```

---

## Remove Item

### Using filter()

```jsx
setItems(
  items.filter(item => item !== "Laptop")
);
```

---

## Update Item

### Using map()

```jsx
setUsers(
  users.map(user =>
    user.id === 1
      ? { ...user, age: 25 }
      : user
  )
);
```

---

## Insert Item

```jsx
setItems([
  ...items.slice(0, 1),
  "Laptop",
  ...items.slice(1)
]);
```

---

## Replace Entire Array

```jsx
setItems([
  "Phone",
  "Laptop",
  "Tablet"
]);
```

---

## Functional Update

```jsx
setItems(prevItems => [
  ...prevItems,
  "Laptop"
]);
```

Recommended when relying on previous state.

---

## Common Immutable Array Methods

| Method         | Purpose            |
| -------------- | ------------------ |
| `map()`        | Update items       |
| `filter()`     | Remove items       |
| `find()`       | Search items       |
| `slice()`      | Copy part of array |
| `concat()`     | Add items          |
| `spread (...)` | Copy array         |

---

## Interview Answer

**Arrays in React state should be updated immutably by creating a new array instead of modifying the original one. Common techniques include using the spread operator (`...`) to add items, `filter()` to remove items, and `map()` to update specific elements. This allows React to detect state changes correctly and trigger efficient re-renders.**

---

## Quick Revision Table

| Question | Key Concept                                      |
| -------- | ------------------------------------------------ |
| 46       | Never mutate state directly                      |
| 47       | Batching groups multiple updates into one render |
| 48       | Reconciliation compares old and new Virtual DOM  |
| 49       | Update objects using spread operator             |
| 50       | Update arrays using spread, map, filter, concat  |
