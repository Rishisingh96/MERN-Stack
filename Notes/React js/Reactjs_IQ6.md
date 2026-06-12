
## 🔥 13. React Interview Coding & Real-World Questions (191–210)

191. How do you fetch data from an API in React?
192. How do you implement search functionality?
193. How do you build pagination in React?
194. How do you implement infinite scrolling?
195. How do you create a reusable modal component?
196. How do you implement dark mode?
197. How do you optimize API calls?
198. How do you manage authentication in React?
199. How do you implement role-based access control?
200. How do you handle file uploads?
201. How do you create reusable form components?
202. How do you handle global state in large applications?
203. How do you structure a React project?
204. What folder structure do you prefer for React projects?
205. How do you secure a React application?
206. How do you deploy a React application?
207. What are common React interview coding challenges?
208. What are common React mistakes developers make?
209. What are React best practices?
210. How would you design a scalable React application?

These **210 React JS interview questions** cover almost everything asked in interviews for **Freshers, React Developers, Frontend Developers, MERN Stack Developers, and React + TypeScript Developers (0–5 Years Experience)**.

# 191. How do you fetch data from an API in React?

## Answer

Fetching data from an API is one of the most common tasks in React applications. APIs provide data from a backend server, and React components display that data to users.

React generally fetches data after the component is rendered using the `useEffect()` Hook. The fetched data is usually stored in component state using `useState()`.

### Why Fetch Data?

Real-world applications need dynamic data such as:

* User profiles
* Product lists
* News articles
* Orders
* Dashboard statistics

Instead of hardcoding data, React retrieves it from APIs.

---

## Basic Flow

1. Component renders
2. `useEffect()` executes
3. API request is sent
4. Data is received
5. State is updated
6. Component re-renders with new data

---

## Example Using Fetch API

```jsx
import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
```

---

## Using Async/Await

```jsx
import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default Users;
```

---

## Loading State Example

A professional application should show loading status.

```jsx
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  );
}

export default Products;
```

---

## Error Handling Example

```jsx
const [error, setError] = useState(null);

try {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  setUsers(data);
} catch (err) {
  setError(err.message);
}
```

---

## Using Axios

Axios is a popular HTTP client.

Install:

```bash
npm install axios
```

Example:

```jsx
import axios from "axios";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

## Interview Points

### Why use useEffect for API calls?

Because API calls are side effects. React recommends performing side effects inside `useEffect()`.

### Why use an empty dependency array?

```jsx
useEffect(() => {
  fetchData();
}, []);
```

It ensures the API is called only once when the component mounts.

### What happens if dependency array is omitted?

```jsx
useEffect(() => {
  fetchData();
});
```

The API will be called on every render, causing unnecessary requests.

---

## Real-World Best Practices

* Show loading indicators
* Handle errors properly
* Use async/await
* Use environment variables for API URLs
* Cache data when possible
* Cancel requests on unmount
* Use React Query or SWR for large applications

---

## Interview Summary

Fetching data in React is usually done using `useEffect()` and `useState()`. The component sends an API request after rendering, stores the response in state, and re-renders with the received data. Production applications should always include loading states, error handling, and optimized data-fetching strategies.

---

# 192. How do you implement search functionality in React?

## Answer

Search functionality allows users to filter data based on their input. It is commonly used in:

* E-commerce websites
* User management systems
* Admin dashboards
* Social media platforms
* Product catalogs

React makes search functionality simple using state and array filtering.

---

## Basic Search Flow

1. User types in input field
2. Input value stored in state
3. Data filtered based on input
4. Filtered results displayed

---

## Example: Search Users

```jsx
import React, { useState } from "react";

function SearchUsers() {
  const [search, setSearch] = useState("");

  const users = [
    "Rishi",
    "Rahul",
    "Amit",
    "Priya",
    "Anjali"
  ];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default SearchUsers;
```

---

## Search Products Example

```jsx
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
```

---

## Search With API Data

```jsx
const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
);
```

```jsx
{
  filteredUsers.map((user) => (
    <h3 key={user.id}>{user.name}</h3>
  ));
}
```

---

## Debouncing Search

Without optimization:

```jsx
onChange={(e) => setSearch(e.target.value)}
```

Every keystroke triggers filtering.

Debouncing delays execution.

Example:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);
```

Benefits:

* Fewer API calls
* Better performance
* Improved user experience

---

## Server-Side Search

For large datasets:

❌ Bad:

```jsx
Fetch 1,00,000 records
Filter in browser
```

✅ Better:

```jsx
GET /users?search=rishi
```

Backend performs filtering and returns only required data.

---

## Real-World Example

Amazon Search:

1. User types "iPhone"
2. API request sent
3. Matching products returned
4. Suggestions displayed
5. User selects product

---

## Best Practices

* Use controlled inputs
* Convert text to lowercase
* Debounce API requests
* Avoid fetching huge datasets
* Use server-side search for large applications
* Display "No Results Found"

Example:

```jsx
{
  filteredUsers.length === 0 ? (
    <p>No Users Found</p>
  ) : (
    filteredUsers.map(...)
  );
}
```

---

## Interview Summary

Search functionality in React is commonly implemented using `useState()` for user input and JavaScript's `filter()` method to display matching records. For large applications, debouncing and server-side searching improve performance and scalability.

---

# 193. How do you build pagination in React?

## Answer

Pagination is a technique used to divide large datasets into smaller pages instead of displaying all records at once.

Without pagination:

```text
10,000 Products
↓
Slow Rendering
Poor Performance
Bad User Experience
```

With pagination:

```text
Page 1 → 10 Products
Page 2 → 10 Products
Page 3 → 10 Products
```

This improves:

* Performance
* Readability
* Scalability
* User Experience

---

## Pagination Flow

1. Fetch data
2. Define items per page
3. Calculate current page items
4. Display page buttons
5. Update current page on click

---

## Example

```jsx
import React, { useState } from "react";

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);

  const users = [
    "User1","User2","User3","User4","User5",
    "User6","User7","User8","User9","User10",
    "User11","User12","User13","User14","User15"
  ];

  const usersPerPage = 5;

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = users.slice(firstIndex, lastIndex);

  return (
    <div>
      <h2>Users</h2>

      {currentUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}

      <button onClick={() => setCurrentPage(1)}>
        1
      </button>

      <button onClick={() => setCurrentPage(2)}>
        2
      </button>

      <button onClick={() => setCurrentPage(3)}>
        3
      </button>
    </div>
  );
}

export default PaginationExample;
```

---

## Dynamic Pagination

Instead of manually creating buttons:

```jsx
const totalPages = Math.ceil(
  users.length / usersPerPage
);
```

```jsx
{
  [...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
    >
      {index + 1}
    </button>
  ));
}
```

---

## Previous & Next Buttons

```jsx
<button
  disabled={currentPage === 1}
  onClick={() =>
    setCurrentPage(currentPage - 1)
  }
>
  Previous
</button>
```

```jsx
<button
  disabled={currentPage === totalPages}
  onClick={() =>
    setCurrentPage(currentPage + 1)
  }
>
  Next
</button>
```

---

## Server-Side Pagination

For huge datasets:

❌ Bad:

```jsx
Fetch 1,00,000 products
```

✅ Better:

```http
GET /products?page=1&limit=10
```

Backend returns only:

```json
{
  "products": [...],
  "totalPages": 50
}
```

---

## Real-World Example

E-commerce Website:

```text
Page 1 → Products 1–20
Page 2 → Products 21–40
Page 3 → Products 41–60
```

Only current page data is displayed.

---

## Using React Paginate Library

Install:

```bash
npm install react-paginate
```

Example:

```jsx
import ReactPaginate from "react-paginate";
```

Provides:

* Previous/Next
* Page numbers
* Active page styling
* Navigation controls

---

## Best Practices

* Use server-side pagination for large datasets
* Show current page number
* Add Previous/Next buttons
* Disable invalid navigation
* Maintain pagination state in URL
* Combine pagination with search and filters

---

## Interview Summary

Pagination in React is implemented by dividing data into pages and displaying only a subset of records at a time. It is typically achieved using state, array slicing, and page controls. For enterprise-level applications, server-side pagination is preferred because it improves performance and reduces unnecessary data transfer.


# 194. How do you implement infinite scrolling?

## Answer

Infinite Scrolling is a technique where new data is automatically loaded as the user scrolls down the page. Instead of clicking a "Next Page" button, content keeps loading dynamically.

Popular examples include:

* Instagram Feed
* Facebook Timeline
* LinkedIn Feed
* Twitter/X Timeline
* YouTube Recommendations

Infinite scrolling improves user engagement because users can continuously browse content without interruption.

---

# Why Use Infinite Scrolling?

### Traditional Pagination

```text
Page 1
Page 2
Page 3
```

User must click buttons repeatedly.

### Infinite Scroll

```text
Scroll Down
↓
Load More Data
↓
Scroll More
↓
Load More Data
```

Provides a smoother experience.

---

# How Infinite Scrolling Works

1. Load initial data.
2. User scrolls down.
3. Detect when the bottom is reached.
4. Send another API request.
5. Append new data.
6. Continue until no more data exists.

---

# Basic Example Using Scroll Event

```jsx
import { useState, useEffect } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  );

  const loadMore = () => {
    const newItems = Array.from(
      { length: 20 },
      (_, i) => `Item ${items.length + i + 1}`
    );

    setItems((prev) => [...prev, ...newItems]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [items]);

  return (
    <div>
      {items.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
}

export default InfiniteScroll;
```

---

# Better Approach: Intersection Observer API

Instead of listening to every scroll event, modern React applications use the Intersection Observer API.

Advantages:

* Better performance
* Less CPU usage
* Cleaner implementation

---

## Example

```jsx
import { useEffect, useRef } from "react";

function InfiniteScroll() {
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Data */}

      <div ref={loader}>
        Loading More...
      </div>
    </>
  );
}
```

---

# Infinite Scrolling with API Data

```jsx
const fetchPosts = async () => {
  const response = await fetch(
    `https://api.example.com/posts?page=${page}`
  );

  const data = await response.json();

  setPosts((prev) => [...prev, ...data]);
};
```

Each new request appends data instead of replacing existing data.

---

# Loading Indicator

Always show loading status.

```jsx
{
  loading && <h3>Loading More...</h3>;
}
```

---

# Handling End of Data

```jsx
if (data.length === 0) {
  setHasMore(false);
}
```

Display:

```jsx
{
  !hasMore && (
    <p>No More Records Available</p>
  );
}
```

---

# Real-World Example

Instagram Feed:

```text
Open App
↓
Load First 20 Posts
↓
Scroll
↓
Load Next 20 Posts
↓
Scroll
↓
Load More Posts
```

The user never clicks "Next Page."

---

# Common Problems

### Multiple API Calls

Bad:

```jsx
loadMore();
loadMore();
loadMore();
```

Solution:

```jsx
if (!loading) {
  loadMore();
}
```

---

### Memory Leaks

Always clean up observers.

```jsx
return () => observer.disconnect();
```

---

# Best Practices

* Use Intersection Observer
* Show loading indicators
* Stop when no data remains
* Prevent duplicate requests
* Use server-side pagination
* Cache previously loaded data

---

# Interview Summary

Infinite scrolling automatically loads additional content as the user scrolls down the page. In React, it is commonly implemented using the Intersection Observer API or scroll events. It provides a seamless user experience and is widely used in social media feeds, e-commerce sites, and content-heavy applications.

---

# 195. How do you create a reusable modal component?

## Answer

A Modal is a popup dialog that appears above the main page content.

Common use cases:

* Login Forms
* Registration Forms
* Delete Confirmation
* Product Details
* Settings Panels
* Notifications

A reusable modal component can be used anywhere in the application by simply changing its content and props.

---

# Why Create a Reusable Modal?

Without Reusability:

```jsx
LoginModal.jsx
DeleteModal.jsx
ProfileModal.jsx
```

Lots of duplicated code.

With Reusability:

```jsx
<Modal>
  Any Content
</Modal>
```

One component handles all cases.

---

# Basic Reusable Modal Component

```jsx
function Modal({
  isOpen,
  onClose,
  title,
  children
}) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">

        <h2>{title}</h2>

        {children}

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default Modal;
```

---

# Using the Modal

```jsx
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={open}
        title="User Details"
        onClose={() => setOpen(false)}
      >
        <p>Welcome to React Modal.</p>
      </Modal>
    </>
  );
}

export default App;
```

---

# Understanding Children Prop

The `children` prop allows dynamic content.

```jsx
<Modal>
  <LoginForm />
</Modal>
```

```jsx
<Modal>
  <DeleteConfirmation />
</Modal>
```

```jsx
<Modal>
  <ProductDetails />
</Modal>
```

Same modal structure, different content.

---

# Closing Modal on Overlay Click

```jsx
<div
  className="overlay"
  onClick={onClose}
>
  <div
    className="modal"
    onClick={(e) => e.stopPropagation()}
  >
    Modal Content
  </div>
</div>
```

---

# Closing Modal with ESC Key

```jsx
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener(
    "keydown",
    handleKeyDown
  );

  return () =>
    window.removeEventListener(
      "keydown",
      handleKeyDown
    );
}, [onClose]);
```

---

# Using React Portal

Problem:

```text
Modal inside component tree
May get hidden by parent styles
```

Solution:

```jsx
import ReactDOM from "react-dom";

return ReactDOM.createPortal(
  <Modal />,
  document.getElementById("modal-root")
);
```

Portals render modals outside the normal component hierarchy.

---

# Real-World Modal Features

Professional applications often include:

* Overlay backdrop
* Close button
* ESC key close
* Click outside to close
* Animation effects
* Focus management
* Accessibility support

---

# Example CSS

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.modal {
  background: white;
  padding: 20px;
  width: 500px;
  margin: 100px auto;
}
```

---

# Best Practices

* Use React Portal
* Support keyboard navigation
* Use children prop
* Prevent background scrolling
* Make modal accessible
* Clean up event listeners

---

# Interview Summary

A reusable modal component is created by accepting props such as `isOpen`, `onClose`, `title`, and `children`. This allows the same modal structure to display different content throughout the application. Modern React applications often use React Portals, keyboard support, and accessibility features to build professional modal systems.

---

# 196. How do you implement dark mode?

## Answer

Dark Mode is a UI feature that changes the application's appearance from a light theme to a dark theme.

Popular applications supporting dark mode:

* YouTube
* GitHub
* LinkedIn
* Facebook
* WhatsApp
* VS Code

Dark mode improves:

* User comfort
* Battery life on OLED displays
* Accessibility
* Night-time usability

---

# Basic Concept

Two themes:

```text
Light Theme
Dark Theme
```

Store the current theme in React state.

---

# Simple Dark Mode Example

```jsx
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div
      className={
        darkMode ? "dark" : "light"
      }
    >
      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        Toggle Theme
      </button>

      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```

---

# CSS

```css
.light {
  background: white;
  color: black;
  min-height: 100vh;
}

.dark {
  background: #121212;
  color: white;
  min-height: 100vh;
}
```

---

# Using CSS Variables (Recommended)

```css
:root {
  --bg: white;
  --text: black;
}

.dark {
  --bg: #121212;
  --text: white;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

Benefits:

* Easier maintenance
* Scales better
* Cleaner code

---

# Persist Theme Using Local Storage

Without local storage:

```text
Refresh Page
↓
Theme Reset
```

Solution:

```jsx
useEffect(() => {
  const theme =
    localStorage.getItem("theme");

  if (theme === "dark") {
    setDarkMode(true);
  }
}, []);
```

Save theme:

```jsx
useEffect(() => {
  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);
```

---

# Applying Theme to Body

```jsx
useEffect(() => {
  document.body.className =
    darkMode ? "dark" : "light";
}, [darkMode]);
```

---

# Using Context API for Global Theme

Large applications should use Context.

```jsx
const ThemeContext =
  createContext();
```

Provider:

```jsx
<ThemeContext.Provider
  value={{
    darkMode,
    setDarkMode
  }}
>
  {children}
</ThemeContext.Provider>
```

Access anywhere:

```jsx
const { darkMode, setDarkMode } =
  useContext(ThemeContext);
```

---

# Detect System Theme

```jsx
const prefersDark =
  window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
```

Automatically match user's OS settings.

---

# Real-World Architecture

```text
ThemeContext
        ↓
Local Storage
        ↓
CSS Variables
        ↓
All Components
```

Used by large-scale React applications.

---

# Common Mistakes

### Theme Reset on Refresh

Wrong:

```jsx
const [darkMode] =
  useState(false);
```

Use local storage persistence.

---

### Prop Drilling Theme State

Wrong:

```jsx
App
 ↓
Navbar
 ↓
Sidebar
 ↓
Button
```

Use Context API.

---

# Best Practices

* Use Context API
* Store preference in localStorage
* Use CSS variables
* Detect system theme
* Avoid prop drilling
* Support accessibility

---

# Interview Summary

Dark mode in React is typically implemented using state, Context API, and CSS variables. The selected theme is stored in localStorage so it persists across page refreshes. In enterprise applications, a global Theme Context manages theme switching throughout the entire application while maintaining performance and scalability.


# 197. How do you optimize API calls?

## Answer

API optimization is the process of reducing unnecessary network requests, improving response times, minimizing bandwidth usage, and enhancing the overall performance of a React application.

In real-world applications, poor API management can lead to:

* Slow page loading
* Excessive server load
* Poor user experience
* Increased costs
* Performance bottlenecks

Therefore, optimizing API calls is a critical skill for React developers.

---

# Why Optimize API Calls?

Imagine an e-commerce application:

```text
User Types:
i
ip
iph
ipho
iphon
iphone
```

Without optimization:

```text
6 API Requests
```

With optimization:

```text
1 API Request
```

This reduces server load and improves performance.

---

# Common API Optimization Techniques

## 1. Debouncing API Calls

Debouncing delays API execution until the user stops typing.

### Without Debouncing

```jsx
onChange={(e) => {
  fetchUsers(e.target.value);
}}
```

Every keystroke triggers an API request.

---

### With Debouncing

```jsx
import { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] =
    useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedValue) {
      fetchUsers(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <input
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}
```

---

## 2. Caching Responses

Avoid fetching the same data repeatedly.

### Bad

```text
Open Profile
↓
API Call

Go Back
↓
Open Profile Again
↓
API Call Again
```

---

### Better

Store response in cache.

```jsx
const cache = {};

async function getUser(id) {
  if (cache[id]) {
    return cache[id];
  }

  const response = await fetch(
    `/api/users/${id}`
  );

  const data = await response.json();

  cache[id] = data;

  return data;
}
```

---

## 3. Use React Query (TanStack Query)

React Query automatically handles:

* Caching
* Background fetching
* Retries
* Refetching
* Loading states

Example:

```jsx
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading } =
    useQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
    });

  return (
    <div>
      {isLoading
        ? "Loading..."
        : data.map(user => (
            <p key={user.id}>
              {user.name}
            </p>
          ))}
    </div>
  );
}
```

---

## 4. Cancel Unnecessary Requests

Suppose a user leaves the page before a request completes.

Without cancellation:

```text
Request Continues
Memory Waste
```

Using AbortController:

```jsx
useEffect(() => {
  const controller =
    new AbortController();

  fetch(url, {
    signal: controller.signal,
  });

  return () => controller.abort();
}, []);
```

---

## 5. Pagination Instead of Large Requests

Bad:

```http
GET /products
```

Returns:

```text
100,000 Products
```

---

Better:

```http
GET /products?page=1&limit=20
```

Only necessary records are loaded.

---

## 6. Infinite Scrolling

Load data gradually.

```text
Load First 20 Records
↓
Scroll
↓
Load Next 20 Records
```

This reduces initial page load time.

---

## 7. Parallel Requests

Bad:

```jsx
const users = await fetchUsers();
const products =
  await fetchProducts();
```

Requests execute one after another.

---

Better:

```jsx
const [users, products] =
  await Promise.all([
    fetchUsers(),
    fetchProducts(),
  ]);
```

Both requests run simultaneously.

---

## 8. Request Deduplication

Problem:

```text
Component A
↓
GET /users

Component B
↓
GET /users
```

Two identical requests.

Tools like React Query prevent duplicate requests automatically.

---

## 9. Lazy Loading Data

Load data only when needed.

Example:

```text
User Opens Profile Tab
↓
Fetch Profile Data
```

Instead of loading everything at startup.

---

## 10. Server-Side Filtering

Bad:

```jsx
const filteredUsers =
  users.filter(...);
```

after downloading 50,000 records.

Better:

```http
GET /users?search=rishi
```

Backend performs filtering.

---

# Real-World Example

Amazon Search:

```text
User Types
↓
Debounce
↓
API Request
↓
Cache Results
↓
Display Products
```

Optimized and scalable.

---

# Interview Follow-Up Questions

### Why use React Query?

Because it provides:

* Caching
* Request deduplication
* Refetching
* Error handling
* Loading states

out of the box.

---

### What is Debouncing?

Delaying API execution until user input stops for a specified period.

---

### What is Throttling?

Limits execution frequency.

Example:

```text
Only One API Call Every 1 Second
```

---

# Best Practices

* Use React Query or SWR
* Implement caching
* Use debouncing
* Cancel requests on unmount
* Use pagination
* Avoid duplicate requests
* Use server-side filtering

---

# Interview Summary

API calls in React are optimized using techniques such as debouncing, caching, pagination, lazy loading, request cancellation, and tools like React Query. These techniques reduce server load, improve performance, and create a smoother user experience.

---

# 198. How do you manage authentication in React?

## Answer

Authentication is the process of verifying a user's identity before granting access to protected resources.

Examples:

* Login Systems
* Banking Applications
* E-Commerce Dashboards
* Admin Panels
* Social Media Platforms

Authentication ensures that only authorized users can access certain features.

---

# Authentication Flow

```text
User Login
      ↓
Send Credentials
      ↓
Backend Verification
      ↓
Generate Token
      ↓
Store Token
      ↓
Access Protected Routes
```

---

# Common Authentication Methods

## Session-Based Authentication

```text
User Login
↓
Server Creates Session
↓
Session ID Stored in Cookie
```

Traditional approach.

---

## Token-Based Authentication (JWT)

Most modern React applications use JWT.

```text
Login
↓
JWT Token Generated
↓
Store Token
↓
Send Token With Requests
```

---

# Login Example

```jsx
const handleLogin = async () => {
  const response = await fetch(
    "/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  localStorage.setItem(
    "token",
    data.token
  );
};
```

---

# Storing Tokens

Common options:

### Local Storage

```jsx
localStorage.setItem(
  "token",
  token
);
```

Pros:

* Easy

Cons:

* Vulnerable to XSS attacks

---

### HTTP-Only Cookies

Recommended for production.

```text
Token Stored By Browser
JavaScript Cannot Access It
```

More secure.

---

# Auth Context Pattern

Instead of passing user data through props:

```text
App
 ↓
Navbar
 ↓
Sidebar
 ↓
Profile
```

Use Context API.

---

## Create Context

```jsx
import { createContext } from "react";

export const AuthContext =
  createContext();
```

---

## Provider

```jsx
<AuthContext.Provider
  value={{
    user,
    login,
    logout,
  }}
>
  {children}
</AuthContext.Provider>
```

---

## Consume Context

```jsx
const { user, logout } =
  useContext(AuthContext);
```

Accessible anywhere.

---

# Logout Example

```jsx
const logout = () => {
  localStorage.removeItem("token");

  setUser(null);
};
```

---

# Protected Routes

```jsx
function ProtectedRoute({
  children,
}) {
  const token =
    localStorage.getItem("token");

  return token
    ? children
    : <Navigate to="/login" />;
}
```

Usage:

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

# Authentication State Persistence

After refresh:

```text
Token Exists?
     ↓
Yes
     ↓
Keep User Logged In
```

Example:

```jsx
useEffect(() => {
  const token =
    localStorage.getItem("token");

  if (token) {
    loadUser();
  }
}, []);
```

---

# Refresh Tokens

Access tokens expire.

Flow:

```text
Access Token Expired
↓
Use Refresh Token
↓
Generate New Access Token
```

Improves security.

---

# Real-World Authentication Architecture

```text
React App
      ↓
Login Form
      ↓
Backend API
      ↓
JWT Token
      ↓
Auth Context
      ↓
Protected Routes
```

---

# Best Practices

* Use HTTPS
* Prefer HTTP-only cookies
* Implement refresh tokens
* Use protected routes
* Store auth state globally
* Avoid storing sensitive data

---

# Interview Summary

Authentication in React is typically managed using JWT or session-based authentication. User credentials are verified by the backend, tokens are stored securely, and authentication state is managed globally using Context API, Redux, or state management libraries. Protected routes ensure only authenticated users can access restricted pages.

---

# 199. How do you implement role-based access control (RBAC)?

## Answer

Role-Based Access Control (RBAC) is a security mechanism where users are assigned specific roles, and permissions are granted based on those roles.

Instead of checking individual users, applications check roles such as:

```text
Admin
Manager
Editor
Customer
Guest
```

Each role has different permissions.

---

# Why Use RBAC?

Consider an e-commerce system:

### Admin

```text
Manage Users
Delete Products
View Reports
```

### Seller

```text
Manage Products
View Orders
```

### Customer

```text
Browse Products
Place Orders
```

Not everyone should have the same access.

---

# RBAC Flow

```text
Login
↓
Get User Role
↓
Store Role
↓
Check Permissions
↓
Allow / Deny Access
```

---

# Example User Object

```jsx
const user = {
  id: 1,
  name: "Rishi",
  role: "admin",
};
```

---

# Conditional Rendering

```jsx
{
  user.role === "admin" && (
    <button>
      Delete User
    </button>
  );
}
```

Only admins see the button.

---

# Multiple Roles

```jsx
{
  ["admin", "manager"].includes(
    user.role
  ) && <Reports />
}
```

Admins and managers can access reports.

---

# Creating a Role Utility

```jsx
export const hasRole = (
  user,
  role
) => {
  return user.role === role;
};
```

Usage:

```jsx
{
  hasRole(user, "admin") && (
    <AdminPanel />
  );
}
```

---

# Role-Based Protected Route

```jsx
import { Navigate } from
"react-router-dom";

function RoleProtectedRoute({
  children,
  allowedRoles,
}) {
  const user = getCurrentUser();

  if (
    !allowedRoles.includes(
      user.role
    )
  ) {
    return (
      <Navigate to="/unauthorized" />
    );
  }

  return children;
}
```

---

# Usage

```jsx
<Route
  path="/admin"
  element={
    <RoleProtectedRoute
      allowedRoles={["admin"]}
    >
      <AdminDashboard />
    </RoleProtectedRoute>
  }
/>
```

Only admins can access.

---

# Permission-Based Access (Advanced)

Instead of roles:

```jsx
const user = {
  permissions: [
    "create-product",
    "edit-product",
    "delete-product",
  ],
};
```

Check permissions:

```jsx
{
  user.permissions.includes(
    "delete-product"
  ) && (
    <button>
      Delete
    </button>
  );
}
```

This provides more flexibility.

---

# Using Context API

```jsx
<AuthContext.Provider
  value={{
    user,
    role: user.role,
  }}
>
  {children}
</AuthContext.Provider>
```

Access anywhere:

```jsx
const { role } =
  useContext(AuthContext);
```

---

# Backend Enforcement

Very Important:

❌ Wrong:

```text
Only Frontend Checks Roles
```

User can manipulate frontend code.

---

✅ Correct:

```text
Frontend Checks
+
Backend Checks
```

Backend must verify permissions before processing requests.

Example:

```http
DELETE /users/5
```

Server verifies:

```text
Is User Admin?
```

before deleting.

---

# Real-World Example

### Admin Dashboard

```text
Admin
  ✓ Users
  ✓ Reports
  ✓ Products
```

### Seller Dashboard

```text
Seller
  ✓ Products
  ✓ Orders
```

### Customer Dashboard

```text
Customer
  ✓ Orders
```

Different UI based on role.

---

# Enterprise RBAC Architecture

```text
Login
   ↓
JWT Token
   ↓
User Role
   ↓
Auth Context
   ↓
Protected Routes
   ↓
Backend Validation
```

---

# Best Practices

* Store roles in JWT payload
* Verify permissions on backend
* Use protected routes
* Hide unauthorized UI
* Prefer permissions over hardcoded roles for complex systems
* Centralize access-control logic

---

# Interview Summary

Role-Based Access Control (RBAC) restricts access to application features based on user roles such as Admin, Manager, or Customer. In React, RBAC is implemented using conditional rendering, protected routes, Context API, and permission checks. For security, role validation must always be enforced on both the frontend and backend.


# 200. How do you handle file uploads in React?

## Answer

File uploading is a common requirement in modern web applications. It allows users to upload files such as:

* Profile Pictures
* Resume/CV Files
* Documents
* PDFs
* Videos
* Product Images
* Excel Files

Examples:

```text
LinkedIn → Resume Upload
Instagram → Image Upload
Google Drive → File Upload
Amazon Seller → Product Images
```

React handles file uploads using the `<input type="file" />` element and sends files to the backend using `FormData`.

---

# Why File Uploads Are Important?

Consider a Job Portal:

```text
User
 ↓
Select Resume
 ↓
Upload Resume
 ↓
Backend Stores File
 ↓
Recruiter Downloads Resume
```

Without file uploads, many real-world applications would be impossible.

---

# Basic File Upload Input

```jsx
function App() {
  return (
    <input type="file" />
  );
}
```

This opens the system file picker.

---

# Capturing Selected File

```jsx
import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <input
        type="file"
        onChange={handleChange}
      />

      <p>{file?.name}</p>
    </>
  );
}
```

---

# Understanding e.target.files

```jsx
e.target.files
```

Returns:

```js
[
  File,
  File,
  File
]
```

First file:

```jsx
e.target.files[0]
```

---

# Uploading File to Backend

React cannot directly save files permanently.

The file must be sent to a backend server.

---

## Using FormData

```jsx
const formData = new FormData();

formData.append("file", file);
```

`FormData` is specifically designed for file uploads.

---

# Complete Upload Example

```jsx
import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();

    formData.append("file", file);

    await fetch(
      "http://localhost:8080/upload",
      {
        method: "POST",
        body: formData,
      }
    );
  };

  return (
    <>
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button onClick={uploadFile}>
        Upload
      </button>
    </>
  );
}

export default Upload;
```

---

# Backend (Spring Boot Example)

```java
@PostMapping("/upload")
public String uploadFile(
    @RequestParam("file") MultipartFile file
) {
    return file.getOriginalFilename();
}
```

This is commonly asked in Java Full Stack interviews.

---

# Upload Multiple Files

```jsx
<input
  type="file"
  multiple
  onChange={handleChange}
/>
```

Access files:

```jsx
const files = e.target.files;
```

---

# Multiple File Upload Example

```jsx
const formData = new FormData();

for (let file of files) {
  formData.append("files", file);
}
```

---

# Image Preview Before Upload

Modern applications show previews.

```jsx
const [preview, setPreview] =
  useState(null);

const handleChange = (e) => {
  const file = e.target.files[0];

  setPreview(
    URL.createObjectURL(file)
  );
};
```

Display:

```jsx
<img
  src={preview}
  alt="preview"
  width="200"
/>
```

---

# Upload Progress Bar

Using Axios:

```jsx
axios.post(url, formData, {
  onUploadProgress: (progressEvent) => {
    const percentage =
      Math.round(
        (progressEvent.loaded * 100) /
          progressEvent.total
      );

    setProgress(percentage);
  },
});
```

Display:

```jsx
<p>{progress}% Uploaded</p>
```

---

# File Validation

### Validate Size

```jsx
if (file.size > 5000000) {
  alert("File too large");
}
```

5 MB limit.

---

### Validate Type

```jsx
const allowedTypes = [
  "image/png",
  "image/jpeg",
];

if (
  !allowedTypes.includes(file.type)
) {
  alert("Invalid File");
}
```

---

# Drag and Drop Upload

Popular libraries:

* React Dropzone
* Uppy
* FilePond

Example:

```jsx
npm install react-dropzone
```

Provides professional drag-and-drop uploads.

---

# Cloud Storage Uploads

Modern applications store files in:

* Amazon S3
* Google Cloud Storage
* Azure Blob Storage
* Cloudinary

Flow:

```text
React
 ↓
Backend
 ↓
Cloud Storage
 ↓
File URL
```

---

# Real-World Architecture

```text
User Selects File
        ↓
React State
        ↓
FormData
        ↓
API Request
        ↓
Backend
        ↓
Cloud Storage
        ↓
Database Saves URL
```

---

# Common Mistakes

### Sending JSON Instead of FormData

Wrong:

```jsx
body: JSON.stringify(file)
```

Correct:

```jsx
body: formData
```

---

### Forgetting Validation

Users may upload:

```text
100 MB File
.exe File
Corrupted File
```

Always validate.

---

# Best Practices

* Validate file size
* Validate file type
* Show upload progress
* Show image preview
* Handle upload errors
* Store files in cloud storage
* Use FormData

---

# Interview Summary

File uploads in React are handled using `<input type="file">`, React state, and `FormData`. The selected file is sent to the backend via HTTP requests and then stored on the server or cloud storage. Production applications include validation, progress indicators, previews, and error handling to provide a smooth user experience.

---

# 201. How do you create reusable form components?

## Answer

Reusable form components are components that can be used across multiple forms without rewriting the same code.

Examples:

```text
Login Form
Registration Form
Profile Form
Contact Form
Checkout Form
```

All of them need:

* Input Fields
* Labels
* Validation Messages
* Error Handling

Instead of writing these repeatedly, we create reusable components.

---

# Why Reusable Components?

Without Reusability:

```jsx
<input />
<input />
<input />
<input />
```

Repeated everywhere.

Problems:

* Duplicate code
* Difficult maintenance
* Inconsistent UI

---

With Reusability:

```jsx
<Input />
```

Single source of truth.

---

# Simple Reusable Input Component

```jsx
function Input({
  label,
  type,
  value,
  onChange
}) {
  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
```

---

# Usage

```jsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
/>
```

---

# Adding Error Support

```jsx
function Input({
  label,
  error,
  ...props
}) {
  return (
    <div>
      <label>{label}</label>

      <input {...props} />

      {error && (
        <p>{error}</p>
      )}
    </div>
  );
}
```

Usage:

```jsx
<Input
  label="Email"
  error="Email Required"
/>
```

---

# Reusable Button Component

```jsx
function Button({
  children,
  onClick
}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
```

Usage:

```jsx
<Button>
  Submit
</Button>
```

---

# Reusable Select Component

```jsx
function Select({
  options,
  value,
  onChange
}) {
  return (
    <select
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}
```

---

# Building a Complete Reusable Form

```jsx
function UserForm() {
  const [email, setEmail] =
    useState("");

  return (
    <>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <Button>
        Submit
      </Button>
    </>
  );
}
```

---

# Using React Hook Form

Large applications often use:

```bash
npm install react-hook-form
```

Example:

```jsx
import { useForm } from
"react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(
        console.log
      )}
    >
      <input
        {...register("email")}
      />

      <button>
        Submit
      </button>
    </form>
  );
}
```

Benefits:

* Less re-rendering
* Built-in validation
* Better performance

---

# Dynamic Form Generation

Instead of:

```jsx
<Input />
<Input />
<Input />
```

Use configuration:

```jsx
const fields = [
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
];
```

Render dynamically:

```jsx
{
  fields.map((field) => (
    <Input
      key={field.name}
      label={field.label}
    />
  ));
}
```

---

# Real-World Form Architecture

```text
Reusable Input
       ↓
Reusable Select
       ↓
Reusable Checkbox
       ↓
Reusable Button
       ↓
Reusable Validation Logic
       ↓
Entire Form System
```

---

# Best Practices

* Keep components generic
* Use props effectively
* Support validation
* Use React Hook Form
* Follow consistent styling
* Avoid duplicate code

---

# Interview Summary

Reusable form components are created by extracting common form elements such as inputs, buttons, selects, and validation logic into independent components. This improves maintainability, consistency, scalability, and reduces code duplication across large React applications.

---

# 202. How do you handle global state in large applications?

## Answer

Global State refers to data that must be shared across multiple components throughout an application.

Examples:

```text
Logged-In User
Theme
Shopping Cart
Language
Notifications
Authentication State
```

Instead of passing data through multiple levels of components, global state management provides centralized access.

---

# Problem: Prop Drilling

Suppose we have:

```text
App
 ↓
Dashboard
 ↓
Sidebar
 ↓
Profile
```

User data originates in App.

Without global state:

```jsx
<App user={user} />
```

```jsx
<Dashboard user={user} />
```

```jsx
<Sidebar user={user} />
```

```jsx
<Profile user={user} />
```

This is called Prop Drilling.

---

# Why Is Prop Drilling Bad?

Problems:

* Hard to maintain
* Difficult debugging
* Repeated code
* Poor scalability

For large applications, global state is preferred.

---

# Solution 1: Context API

React's built-in state management solution.

---

## Create Context

```jsx
import {
  createContext
} from "react";

export const UserContext =
  createContext();
```

---

## Create Provider

```jsx
function UserProvider({
  children
}) {
  const [user, setUser] =
    useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
```

---

## Wrap Application

```jsx
<UserProvider>
  <App />
</UserProvider>
```

---

## Access Anywhere

```jsx
const { user } =
  useContext(UserContext);
```

No prop drilling required.

---

# When Context API Is Enough

Good for:

```text
Theme
Authentication
Language
User Preferences
```

Small-to-medium applications.

---

# Limitations of Context API

In very large applications:

```text
Many Updates
↓
Many Re-renders
↓
Performance Issues
```

This is where Redux becomes useful.

---

# Solution 2: Redux Toolkit

Modern industry standard for complex state management.

Install:

```bash
npm install
@reduxjs/toolkit
react-redux
```

---

# Store Structure

```text
Store
 ├─ Auth
 ├─ Products
 ├─ Cart
 ├─ Orders
 └─ Users
```

Single source of truth.

---

# Create Slice

```jsx
import {
  createSlice
} from
"@reduxjs/toolkit";

const userSlice =
  createSlice({
    name: "user",

    initialState: {
      user: null,
    },

    reducers: {
      setUser(state, action) {
        state.user =
          action.payload;
      },
    },
  });

export const { setUser } =
  userSlice.actions;

export default
userSlice.reducer;
```

---

# Configure Store

```jsx
import {
  configureStore
} from
"@reduxjs/toolkit";

const store =
  configureStore({
    reducer: {
      user: userReducer,
    },
  });
```

---

# Access State

```jsx
import {
  useSelector
} from "react-redux";

const user =
  useSelector(
    (state) => state.user.user
  );
```

---

# Update State

```jsx
import {
  useDispatch
} from "react-redux";

const dispatch =
  useDispatch();

dispatch(
  setUser(userData)
);
```

---

# Redux Data Flow

```text
Component
    ↓
Dispatch Action
    ↓
Reducer
    ↓
Store Updated
    ↓
UI Re-renders
```

---

# Solution 3: Zustand

Modern lightweight alternative.

Install:

```bash
npm install zustand
```

---

# Example

```jsx
import { create } from
"zustand";

const useStore =
  create((set) => ({
    count: 0,

    increment: () =>
      set((state) => ({
        count:
          state.count + 1,
      })),
  }));
```

Usage:

```jsx
const {
  count,
  increment,
} = useStore();
```

Very simple and fast.

---

# Comparison

| Feature           | Context API | Redux Toolkit | Zustand   |
| ----------------- | ----------- | ------------- | --------- |
| Built into React  | ✅           | ❌             | ❌         |
| Easy to Learn     | ✅           | Moderate      | ✅         |
| Large App Support | Limited     | Excellent     | Excellent |
| DevTools          | Limited     | Excellent     | Good      |
| Performance       | Moderate    | Excellent     | Excellent |

---

# Real-World Enterprise Architecture

```text
React Application
         ↓
Global State Layer
         ↓
Auth State
Cart State
Theme State
Notification State
Product State
         ↓
All Components
```

---

# Best Practices

* Use Context for simple global state
* Use Redux Toolkit for enterprise apps
* Normalize large datasets
* Avoid storing unnecessary state
* Separate UI state and server state
* Use React Query for API state

---

# Interview Summary

Global state management allows data to be shared across multiple components without prop drilling. React provides Context API for simpler use cases, while Redux Toolkit and Zustand are popular choices for large-scale applications. Enterprise applications typically use Redux Toolkit along with React Query to efficiently manage client state and server state separately.
