# JavaScript Basic Interview Preparation Notes
## Chapters 10-12: Math, Map/Set & Date/Time

---

# CHAPTER 10: MATH (Quick Recap)

## 10.1 Overview
The Math object provides mathematical constants and functions. It's not a constructor, so all methods are static.

**Note:** Detailed Math coverage is in Chapter 8 notes. This is a quick reference.

## 10.2 Key Math Methods

### Constants
```javascript
Math.PI        // 3.141592653589793
Math.E         // 2.718281828459045
Math.SQRT2     // 1.4142135623730951
```

### Rounding
```javascript
Math.round(3.7)  // 4 (nearest)
Math.floor(3.7)  // 3 (down)
Math.ceil(3.7)   // 4 (up)
Math.trunc(3.7)  // 3 (remove decimal)
```

### Operations
```javascript
Math.abs(-5)     // 5 (absolute)
Math.pow(2, 3)   // 8 (power)
Math.sqrt(25)    // 5 (square root)
Math.max(1,2,3)  // 3 (maximum)
Math.min(1,2,3)  // 1 (minimum)
```

### Random
```javascript
Math.random()                    // 0-1 (exclusive)
Math.floor(Math.random() * 10)   // 0-9
```

### Random Integer in Range
```javascript
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

---

# CHAPTER 11: MAP AND SET

## 11.1 Map

### Definition
Map is a collection of key-value pairs where keys can be of any type (objects, functions, primitives). Maps remember the original insertion order of keys.

### Why Use Map?
- Keys can be any type (not just strings like objects)
- Maintains insertion order
- Built-in methods for easy manipulation
- Size property to get number of entries
- Better performance for frequent additions/removals

### Creating a Map
```javascript
// Empty Map
const map = new Map();

// Map with initial values
const map2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
```

### Map Methods

#### 1. set()
Adds or updates a key-value pair
```javascript
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

console.log(map);
// Map(3) {'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}
```

#### 2. get()
Returns value for a key
```javascript
console.log(map.get('IN'));  // 'India'
console.log(map.get('UK'));  // undefined
```

#### 3. has()
Checks if key exists
```javascript
console.log(map.has('IN'));  // true
console.log(map.has('UK'));  // false
```

#### 4. delete()
Removes a key-value pair
```javascript
map.delete('Fr');
console.log(map.has('Fr'));  // false
```

#### 5. clear()
Removes all key-value pairs
```javascript
map.clear();
console.log(map.size);  // 0
```

#### 6. size
Returns number of entries
```javascript
console.log(map.size);  // 2
```

### Iterating Over Map

#### Using for...of
```javascript
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

// Iterate over keys and values
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// Output:
// IN :- India
// USA :- United States of America
// Fr :- France

// Iterate over keys only
for (const key of map.keys()) {
    console.log(key);
}
// Output: IN, USA, Fr

// Iterate over values only
for (const value of map.values()) {
    console.log(value);
}
// Output: India, United States of America, France

// Iterate over entries
for (const [key, value] of map.entries()) {
    console.log(key, value);
}
// Output: Same as for...of on map
```

#### Using forEach()
```javascript
map.forEach((value, key) => {
    console.log(key, ':-', value);
});
```

### Map with Object Keys
```javascript
const user1 = { name: 'John' };
const user2 = { name: 'Jane' };

const userRoles = new Map();

userRoles.set(user1, 'Admin');
userRoles.set(user2, 'User');

console.log(userRoles.get(user1));  // 'Admin'
```

**Use Case:** Storing metadata about objects without modifying the objects themselves.

### Converting Map to Array
```javascript
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// To array of arrays
const arr = Array.from(map);
console.log(arr);  // [['a', 1], ['b', 2], ['c', 3]]

// To array of keys
const keys = Array.from(map.keys());
console.log(keys);  // ['a', 'b', 'c']

// To array of values
const values = Array.from(map.values());
console.log(values);  // [1, 2, 3]
```

### Map vs Object

| Feature | Map | Object |
|---------|-----|--------|
| Keys | Any type | Strings/Symbols only |
| Order | Maintained | Not guaranteed (mostly) |
| Size | .size property | Manual calculation |
| Iteration | Built-in methods | for...in, Object.keys() |
| Performance | Better for frequent changes | Better for simple key-value |

### When to Use Map
- When keys need to be objects or functions
- When order matters
- When frequent additions/removals
- When you need to know the size
- When keys are not strings

### Practical Examples

#### Example 1: Count Character Frequencies
```javascript
const charCount = (str) => {
    const map = new Map();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
};

console.log(charCount('hello'));
// Map(4) {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}
```

#### Example 2: Group By Property
```javascript
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 30 }
];

const groupByAge = (users) => {
    const map = new Map();
    for (const user of users) {
        const age = user.age;
        if (!map.has(age)) {
            map.set(age, []);
        }
        map.get(age).push(user.name);
    }
    return map;
};

console.log(groupByAge(users));
// Map(2) {25 => ['John', 'Jane'], 30 => ['Bob']}
```

#### Example 3: Cache/Memoization
```javascript
const cache = new Map();

const expensiveOperation = (n) => {
    if (cache.has(n)) {
        console.log('From cache');
        return cache.get(n);
    }
    
    console.log('Calculating...');
    const result = n * n;  // Simulated expensive operation
    cache.set(n, result);
    return result;
};

console.log(expensiveOperation(5));  // Calculating... 25
console.log(expensiveOperation(5));  // From cache 25
```

---

## 11.2 Set

### Definition
Set is a collection of values where each value must be unique. Sets can store any type of value (primitives or objects).

### Why Use Set?
- Automatically removes duplicates
- Fast lookup (O(1) average)
- Useful for array operations
- Maintains insertion order

### Creating a Set
```javascript
// Empty Set
const set = new Set();

// Set from array
const set2 = new Set([1, 2, 3, 4, 5]);

// Set with initial values (duplicates removed)
const set3 = new Set([1, 2, 2, 3, 3, 3]);
console.log(set3);  // Set(3) {1, 2, 3}
```

### Set Methods

#### 1. add()
Adds a value to the Set
```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(1);  // Duplicate - ignored

console.log(set);  // Set(3) {1, 2, 3}
```

#### 2. has()
Checks if value exists
```javascript
console.log(set.has(2));  // true
console.log(set.has(5));  // false
```

#### 3. delete()
Removes a value
```javascript
set.delete(2);
console.log(set.has(2));  // false
```

#### 4. clear()
Removes all values
```javascript
set.clear();
console.log(set.size);  // 0
```

#### 5. size
Returns number of values
```javascript
const set = new Set([1, 2, 3]);
console.log(set.size);  // 3
```

### Iterating Over Set

#### Using for...of
```javascript
const set = new Set([1, 2, 3, 4, 5]);

for (const value of set) {
    console.log(value);
}
// Output: 1, 2, 3, 4, 5

// Using values() method
for (const value of set.values()) {
    console.log(value);
}

// Using keys() method (same as values for Set)
for (const key of set.keys()) {
    console.log(key);
}

// Using entries() method
for (const [key, value] of set.entries()) {
    console.log(key, value);
}
// Output: 1 1, 2 2, 3 3, 4 4, 5 5
```

#### Using forEach()
```javascript
set.forEach((value) => {
    console.log(value);
});
```

### Converting Set to Array
```javascript
const set = new Set([1, 2, 3, 4, 5]);

// Using spread operator
const arr1 = [...set];
console.log(arr1);  // [1, 2, 3, 4, 5]

// Using Array.from()
const arr2 = Array.from(set);
console.log(arr2);  // [1, 2, 3, 4, 5]
```

### Removing Duplicates from Array
```javascript
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const unique = [...new Set(arr)];
console.log(unique);  // [1, 2, 3, 4]
```

### Set Operations

#### Union
```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union);  // Set(5) {1, 2, 3, 4, 5}
```

#### Intersection
```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);  // Set(1) {3}
```

#### Difference
```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);  // Set(2) {1, 2}
```

#### Subset Check
```javascript
const setA = new Set([1, 2]);
const setB = new Set([1, 2, 3, 4]);

const isSubset = [...setA].every(x => setB.has(x));
console.log(isSubset);  // true
```

### WeakSet

### Definition
WeakSet is similar to Set but only holds objects (not primitives) and holds them weakly.

### Characteristics
- Only accepts objects
- Objects can be garbage collected
- Not iterable
- No size property
- Limited methods (add, has, delete)

### Example
```javascript
const weakSet = new WeakSet();

const obj1 = { name: 'John' };
const obj2 = { name: 'Jane' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));  // true

weakSet.delete(obj1);
console.log(weakSet.has(obj1));  // false

// obj2 can be garbage collected if no other references exist
```

**Use Case:** Storing object metadata without preventing garbage collection.

### WeakMap

### Definition
WeakMap is similar to Map but keys must be objects and are held weakly.

### Characteristics
- Keys must be objects
- Keys can be garbage collected
- Not iterable
- No size property
- Limited methods (set, get, has, delete)

### Example
```javascript
const weakMap = new WeakMap();

const obj1 = { name: 'John' };
const obj2 = { name: 'Jane' };

weakMap.set(obj1, 'Admin');
weakMap.set(obj2, 'User');

console.log(weakMap.get(obj1));  // 'Admin'

weakMap.delete(obj1);
console.log(weakMap.has(obj1));  // false
```

**Use Case:** Private data storage for objects, caching without memory leaks.

### Practical Examples

#### Example 1: Find Unique Elements
```javascript
const findUnique = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    const unique1 = [...set1].filter(x => !set2.has(x));
    const unique2 = [...set2].filter(x => !set1.has(x));
    
    return [...unique1, ...unique2];
};

console.log(findUnique([1, 2, 3], [3, 4, 5]));  // [1, 2, 4, 5]
```

#### Example 2: Check for Duplicates
```javascript
const hasDuplicates = (arr) => {
    const set = new Set(arr);
    return set.size !== arr.length;
};

console.log(hasDuplicates([1, 2, 3]));      // false
console.log(hasDuplicates([1, 2, 2, 3]));   // true
```

#### Example 3: Find Common Elements
```javascript
const findCommon = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    return [...set1].filter(x => set2.has(x));
};

console.log(findCommon([1, 2, 3], [2, 3, 4]));  // [2, 3]
```

---

## 11.3 Interview Questions - Chapter 11

### Q1: Difference between Map and Object?
**Answer:**
- Map: Keys can be any type, maintains order, has .size property
- Object: Keys are strings/Symbols, order not guaranteed, no .size

### Q2: When to use Set instead of Array?
**Answer:** When you need unique values, fast lookups, or need to remove duplicates.

### Q3: What is WeakMap and WeakSet?
**Answer:** Similar to Map/Set but keys/values must be objects and are held weakly (can be garbage collected). Not iterable.

### Q4: How to remove duplicates from array?
**Answer:** `[...new Set(array)]` or `Array.from(new Set(array))`

### Q5: Difference between Set and WeakSet?
**Answer:**
- Set: Can store any type, iterable, has .size
- WeakSet: Only objects, not iterable, no .size, weak references

---

# CHAPTER 12: DATE AND TIME

## 12.1 What is Date Object?

### Definition
The Date object in JavaScript represents a single moment in time. It's based on the Unix epoch (January 1, 1970, 00:00:00 UTC).

### Important Notes
- JavaScript stores dates as milliseconds since Unix epoch
- Months are 0-indexed (January = 0, December = 11)
- Days are 0-indexed (Sunday = 0, Saturday = 6)
- Date objects are mutable

---

## 12.2 Creating Date Objects

### 9 Ways to Create Date

#### 1. Current Date and Time
```javascript
const currentDate = new Date();
console.log(currentDate);
// Output: 2024-02-19T10:44:09.274Z (ISO 8601 format)
```

#### 2. From Date String
```javascript
const dateString = "2024-02-19T10:44:09.274Z";
const dateFromString = new Date(dateString);
console.log(dateFromString);
```

#### 3. From Year and Month
```javascript
const date1 = new Date(2025, 0);  // January 2025
console.log(date1);
```

#### 4. From Year, Month, Day
```javascript
const date2 = new Date(2024, 1, 19);  // February 19, 2024
console.log(date2);
```

#### 5. From Year, Month, Day, Hours
```javascript
const date3 = new Date(2024, 1, 19, 10);
console.log(date3);
```

#### 6. From Year, Month, Day, Hours, Minutes
```javascript
const date4 = new Date(2024, 1, 19, 10, 44);
console.log(date4);
```

#### 7. From Year, Month, Day, Hours, Minutes, Seconds
```javascript
const date5 = new Date(2024, 1, 19, 10, 44, 9);
console.log(date5);
```

#### 8. From Year, Month, Day, Hours, Minutes, Seconds, Milliseconds
```javascript
const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
console.log(date6);
```

#### 9. From Milliseconds
```javascript
const milliseconds = 1708371849274;
const dateFromMilliseconds = new Date(milliseconds);
console.log(dateFromMilliseconds);
```

### Date String Formats
```javascript
const date1 = new Date("2024-01-05");        // Year-Month-Day
const date2 = new Date("January 5, 2024");    // Month Day, Year
const date3 = new Date("01/05/2024");        // MM/DD/YYYY
```

---

## 12.3 Get Date Methods

### Getting Date Components
```javascript
const currentDate = new Date();

const year = currentDate.getFullYear();    // 2024
const month = currentDate.getMonth();       // 0-11 (January = 0)
const date = currentDate.getDate();        // 1-31
const day = currentDate.getDay();          // 0-6 (Sunday = 0)

console.log(year, month, date, day);
```

### Getting Time Components
```javascript
const currentTime = new Date();

const hours = currentTime.getHours();        // 0-23
const minutes = currentTime.getMinutes();    // 0-59
const seconds = currentTime.getSeconds();    // 0-59
const milliseconds = currentTime.getMilliseconds();  // 0-999

console.log(hours, minutes, seconds, milliseconds);
```

### Getting Time in Milliseconds
```javascript
const date = new Date();
const time = date.getTime();  // Milliseconds since Unix epoch
console.log(time);
```

### Getting UTC Methods
```javascript
const date = new Date();

const utcYear = date.getUTCFullYear();
const utcMonth = date.getUTCMonth();
const utcDate = date.getUTCDate();
const utcHours = date.getUTCHours();
const utcMinutes = date.getUTCMinutes();
const utcSeconds = date.getUTCSeconds();
```

**Use Case:** Working with time zones, storing dates in UTC.

---

## 12.4 Set Date Methods

### Setting Date Components
```javascript
const date = new Date();

date.setFullYear(2025);
console.log(date.getFullYear());  // 2025

date.setMonth(5);  // June (0-indexed)
console.log(date.getMonth());  // 5

date.setDate(15);
console.log(date.getDate());  // 15
```

### Setting Time Components
```javascript
const date = new Date();

date.setHours(10);
console.log(date.getHours());  // 10

date.setMinutes(30);
console.log(date.getMinutes());  // 30

date.setSeconds(45);
console.log(date.getSeconds());  // 45

date.setMilliseconds(500);
console.log(date.getMilliseconds());  // 500
```

### Setting Time in Milliseconds
```javascript
const date = new Date();
date.setTime(1708371849274);
console.log(date);
```

### Setting UTC Methods
```javascript
const date = new Date();

date.setUTCFullYear(2025);
date.setUTCMonth(5);
date.setUTCDate(15);
date.setUTCHours(10);
date.setUTCMinutes(30);
```

---

## 12.5 Date Formatting Methods

### toLocaleString()
Returns date and time in locale format
```javascript
const date = new Date();
const localString = date.toLocaleString();
console.log(localString);
// Output: "2/19/2024, 4:30:00 PM" (depends on locale)
```

### toLocaleDateString()
Returns date in locale format
```javascript
const date = new Date();
const localDateString = date.toLocaleDateString();
console.log(localDateString);
// Output: "2/19/2024" (depends on locale)
```

### toLocaleTimeString()
Returns time in locale format
```javascript
const date = new Date();
const localTimeString = date.toLocaleTimeString();
console.log(localTimeString);
// Output: "4:30:00 PM" (depends on locale)
```

### toISOString()
Returns ISO 8601 format
```javascript
const date = new Date();
const isoString = date.toISOString();
console.log(isoString);
// Output: "2024-02-19T10:44:09.274Z"
```

### toDateString()
Returns date portion as string
```javascript
const date = new Date();
const dateString = date.toDateString();
console.log(dateString);
// Output: "Mon Feb 19 2024"
```

### toTimeString()
Returns time portion as string
```javascript
const date = new Date();
const timeString = date.toTimeString();
console.log(timeString);
// Output: "10:44:09 GMT+0000 (Coordinated Universal Time)"
```

### toJSON()
Returns JSON-compatible string
```javascript
const date = new Date();
const jsonString = date.toJSON();
console.log(jsonString);
// Output: "2024-02-19T10:44:09.274Z"
```

### toString()
Returns string representation
```javascript
const date = new Date();
const string = date.toString();
console.log(string);
// Output: "Mon Feb 19 2024 10:44:09 GMT+0000 (Coordinated Universal Time)"
```

---

## 12.6 Date Parsing

### Date.parse()
Parses date string to milliseconds
```javascript
const dateString = "2024-02-19T16:30:00Z";
const parsedDate = Date.parse(dateString);
console.log(parsedDate);
// Output: 1703254200000 (milliseconds)
```

### Date.now()
Returns current timestamp in milliseconds
```javascript
const now = Date.now();
console.log(now);
// Output: 1708371849274 (current milliseconds)
```

**Difference from new Date().getTime():**
- `Date.now()`: Static method, faster, returns current timestamp
- `new Date().getTime()`: Creates Date object first, then gets timestamp

---

## 12.7 Date Comparison

### Comparing Dates
```javascript
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-02-01');

if (date1 < date2) {
    console.log('date1 is earlier');
}

if (date1.getTime() === date2.getTime()) {
    console.log('Dates are equal');
}
```

### Calculating Difference
```javascript
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-02-01');

const diff = date2 - date1;  // Difference in milliseconds
console.log(diff);  // 2678400000
```

---

## 12.8 Date Arithmetic

### Adding Days
```javascript
const date = new Date('2024-02-19');
date.setDate(date.getDate() + 7);
console.log(date.toLocaleDateString());  // "2/26/2024"
```

### Adding Months
```javascript
const date = new Date('2024-02-19');
date.setMonth(date.getMonth() + 2);
console.log(date.toLocaleDateString());  // "4/19/2024"
```

### Adding Years
```javascript
const date = new Date('2024-02-19');
date.setFullYear(date.getFullYear() + 1);
console.log(date.toLocaleDateString());  // "2/19/2025"
```

### Adding Time
```javascript
const date = new Date('2024-02-19T10:00:00');
date.setHours(date.getHours() + 5);
console.log(date.toLocaleTimeString());  // "3:00:00 PM"
```

---

## 12.9 Practical Examples

### Example 1: Add Days to Date
```javascript
const addDaysToDate = (date, extraDays) => {
    const updatedDate = date.setDate(date.getDate() + extraDays);
    return new Date(updatedDate);
};

const date = new Date('2024-02-29');
const newDate = addDaysToDate(date, 7);
console.log(newDate.toLocaleDateString());  // "3/7/2024"
```

### Example 2: Calculate Days Difference
```javascript
const getDaysDifference = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diff = Math.abs(d1 - d2);
    return Math.round(diff / oneDay);
};

const date1 = new Date('2024-02-19');
const date2 = new Date('2024-03-01');
console.log(getDaysDifference(date1, date2));  // 11
```

### Example 3: Format Date as DD/MM/YYYY
```javascript
const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

console.log(formatDate(new Date()));  // "19/02/2024"
```

### Example 4: Get Age from Birthdate
```javascript
const getAge = (birthdate) => {
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
};

console.log(getAge('1990-05-15'));  // Age based on current date
```

### Example 5: Check if Date is Today
```javascript
const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
};

console.log(isToday(new Date()));  // true
```

### Example 6: Check if Date is in Past
```javascript
const isPast = (date) => {
    const today = new Date();
    return date < today;
};

console.log(isPast(new Date('2020-01-01')));  // true
console.log(isPast(new Date('2030-01-01')));  // false
```

### Example 7: Get First Day of Month
```javascript
const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};

console.log(getFirstDayOfMonth(2024, 1));  // 4 (Thursday)
```

### Example 8: Get Last Day of Month
```javascript
const getLastDayOfMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

console.log(getLastDayOfMonth(2024, 1));  // 29 (February 2024 - leap year)
```

### Example 9: Get Days in Month
```javascript
const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

console.log(getDaysInMonth(2024, 1));  // 29
console.log(getDaysInMonth(2024, 0));  // 31
```

### Example 10: Format Time as HH:MM:SS
```javascript
const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

console.log(formatTime(new Date()));  // "10:44:09"
```

### Example 11: Get Weekday Name
```javascript
const getWeekdayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
};

console.log(getWeekdayName(new Date()));  // "Monday" (or current day)
```

### Example 12: Get Month Name
```javascript
const getMonthName = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
};

console.log(getMonthName(new Date()));  // "February" (or current month)
```

### Example 13: Check if Leap Year
```javascript
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2023));  // false
```

### Example 14: Get Start of Day
```javascript
const getStartOfDay = (date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    return start;
};

console.log(getStartOfDay(new Date()));
```

### Example 15: Get End of Day
```javascript
const getEndOfDay = (date) => {
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    return end;
};

console.log(getEndOfDay(new Date()));
```

### Example 16: Convert UTC to Local
```javascript
const utcToLocal = (utcDate) => {
    return new Date(utcDate);
};

const utcDate = new Date(Date.UTC(2024, 1, 19, 10, 30, 0));
console.log(utcToLocal(utcDate));
```

### Example 17: Convert Local to UTC
```javascript
const localToUTC = (localDate) => {
    return new Date(
        Date.UTC(
            localDate.getFullYear(),
            localDate.getMonth(),
            localDate.getDate(),
            localDate.getHours(),
            localDate.getMinutes(),
            localDate.getSeconds()
        )
    );
};

console.log(localToUTC(new Date()));
```

### Example 18: Get Relative Time (e.g., "2 hours ago")
```javascript
const getRelativeTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
};

console.log(getRelativeTime(new Date(Date.now() - 7200000)));  // "2 hours ago"
```

### Example 19: Countdown Timer
```javascript
const countdown = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    
    if (diff <= 0) return 'Expired';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(countdown('2024-12-31'));
```

### Example 20: Business Days Calculation
```javascript
const addBusinessDays = (date, days) => {
    let result = new Date(date);
    let addedDays = 0;
    
    while (addedDays < days) {
        result.setDate(result.getDate() + 1);
        const dayOfWeek = result.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {  // Not Sunday (0) or Saturday (6)
            addedDays++;
        }
    }
    
    return result;
};

console.log(addBusinessDays(new Date('2024-02-19'), 5).toLocaleDateString());
```

---

## 12.10 Time Zones

### Working with Time Zones
```javascript
const date = new Date();

// Get timezone offset in minutes
const offset = date.getTimezoneOffset();
console.log(offset);  // e.g., -330 for IST (UTC+5:30)

// Get UTC time
const utcHours = date.getUTCHours();
const utcMinutes = date.getUTCMinutes();

// Convert to specific timezone (using toLocaleString)
const options = { timeZone: 'America/New_York' };
const nyTime = date.toLocaleString('en-US', options);
console.log(nyTime);
```

### Common Timezone Codes
```javascript
const timezones = {
    'UTC': 'UTC',
    'EST': 'America/New_York',
    'PST': 'America/Los_Angeles',
    'IST': 'Asia/Kolkata',
    'GMT': 'Europe/London',
    'JST': 'Asia/Tokyo'
};
```

---

## 12.11 Interview Questions - Chapter 12

### Q1: Why are months 0-indexed in JavaScript?
**Answer:** Historical design decision from Java. January = 0, December = 11.

### Q2: Difference between Date.now() and new Date().getTime()?
**Answer:**
- `Date.now()`: Static method, faster, returns current timestamp
- `new Date().getTime()`: Creates Date object first, then gets timestamp

### Q3: How to calculate difference between two dates?
**Answer:** Subtract dates to get milliseconds, then divide by (1000 * 60 * 60 * 24) for days.

### Q4: How to add days to a date?
**Answer:** `date.setDate(date.getDate() + days)` - handles month/year overflow automatically.

### Q5: What is Unix epoch?
**Answer:** January 1, 1970, 00:00:00 UTC. JavaScript stores dates as milliseconds since this point.

### Q6: How to check if a year is a leap year?
**Answer:** `(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)`

### Q7: Difference between getHours() and getUTCHours()?
**Answer:**
- `getHours()`: Local time
- `getUTCHours()`: UTC time

---

# QUICK REFERENCE

## Map Methods
```javascript
// Create
const map = new Map();

// Add/Update
map.set('key', 'value');

// Get
map.get('key');

// Check
map.has('key');

// Delete
map.delete('key');

// Clear
map.clear();

// Size
map.size

// Iterate
for (const [key, value] of map) {}
map.forEach((value, key) => {})
```

## Set Methods
```javascript
// Create
const set = new Set();

// Add
set.add(value);

// Check
set.has(value);

// Delete
set.delete(value);

// Clear
set.clear();

// Size
set.size

// Iterate
for (const value of set) {}
set.forEach((value) => {})
```

## Date Methods
```javascript
// Create
new Date()
new Date('2024-01-01')
new Date(2024, 0, 1)

// Get
date.getFullYear()
date.getMonth()  // 0-11
date.getDate()
date.getDay()    // 0-6
date.getHours()
date.getMinutes()
date.getSeconds()
date.getTime()   // Milliseconds

// Set
date.setFullYear(2024)
date.setMonth(0)
date.setDate(1)
date.setHours(10)
date.setMinutes(30)

// Format
date.toLocaleString()
date.toLocaleDateString()
date.toLocaleTimeString()
date.toISOString()

// Parse
Date.parse('2024-01-01')
Date.now()
```

---

# BEST PRACTICES

## Map
1. Use Map when keys need to be objects or functions
2. Use Map when order matters
3. Use Map for frequent additions/removals
4. Use Object for simple string key-value pairs
5. Remember Map maintains insertion order

## Set
1. Use Set to remove duplicates from arrays
2. Use Set for fast lookups (O(1))
3. Use Set when uniqueness is required
4. Convert Set to array using spread operator
5. Remember Set maintains insertion order

## Date
1. Always use 0-indexed months (January = 0)
2. Use UTC methods for timezone-independent operations
3. Use Date.now() for current timestamp (faster)
4. Be aware of timezone offsets
5. Use toLocaleString() for user-friendly display

---

# COMMON MISTAKES TO AVOID

## Map
1. Confusing Map with Object (keys can be any type in Map)
2. Forgetting that Map maintains insertion order
3. Using Object methods on Map
4. Not using .size property (calculating manually)
5. Forgetting that Map keys can be objects

## Set
1. Trying to add duplicates (automatically ignored)
2. Forgetting that Set is not indexable
3. Using array methods on Set
4. Not converting Set to array when needed
5. Forgetting that Set maintains insertion order

## Date
1. Using 1-indexed months (should be 0-indexed)
2. Confusing getDate() with getDay()
3. Not handling timezone differences
4. Comparing dates with === (use getTime() or < >)
5. Forgetting that date arithmetic handles overflow automatically

---

**End of Chapter 10-12 Notes**
**Good luck with your interview preparation! 🚀**
