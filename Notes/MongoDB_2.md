# 🍃 MongoDB Interview Questions (Top 50+ Most Asked)

## 📘 1. MongoDB Fundamentals (1–10)

1. What is MongoDB?
2. Why is MongoDB called a NoSQL database?
3. What are the advantages of MongoDB?
4. What are the features of MongoDB?
5. What is the difference between SQL and MongoDB?
6. What is a Document in MongoDB?
7. What is a Collection in MongoDB?
8. What is BSON?
9. What is the difference between JSON and BSON?
10. When should MongoDB be preferred over relational databases?

---

## 🗂️ 2. Database, Collections & Documents (11–20)

11. What is a Database in MongoDB?
12. How do you create a database in MongoDB?
13. How do you create a collection?
14. What is the difference between a Collection and a Table?
15. How do you insert a document?
16. How do you retrieve documents?
17. What is the `_id` field?
18. What is ObjectId?
19. How do you update documents?
20. How do you delete documents?

---

## 🔍 3. CRUD Operations & Queries (21–35)

21. What are CRUD operations?
22. What is `insertOne()`?
23. What is `insertMany()`?
24. What is `find()`?
25. What is `findOne()`?
26. What is `updateOne()`?
27. What is `updateMany()`?
28. What is `replaceOne()`?
29. What is `deleteOne()`?
30. What is `deleteMany()`?
31. What is projection in MongoDB?
32. How do you sort documents?
33. How do you limit query results?
34. What is pagination in MongoDB?
35. How do you filter documents using query operators?

---

## ⚡ 4. Indexing & Performance (36–45)

36. What is an Index in MongoDB?
37. Why are indexes used?
38. What are the different types of indexes?
39. What is a Compound Index?
40. What is a Unique Index?
41. What is a Text Index?
42. What is the difference between indexed and non-indexed queries?
43. How do indexes improve performance?
44. What are the disadvantages of excessive indexing?
45. How do you analyze query performance?

---

## 🔗 5. Relationships & Data Modeling (46–55)

46. What is Embedding in MongoDB?
47. What is Referencing in MongoDB?
48. What is denormalization?
49. What is normalization?
50. When should you use Embedded Documents?
51. When should you use References?
52. What is population in Mongoose?
53. How do you model One-to-One relationships?
54. How do you model One-to-Many relationships?
55. How do you model Many-to-Many relationships?

---

## 📊 6. Aggregation Framework (56–65)

56. What is Aggregation in MongoDB?
57. What is the Aggregation Pipeline?
58. What is the `$match` stage?
59. What is the `$group` stage?
60. What is the `$project` stage?
61. What is the `$sort` stage?
62. What is the `$limit` stage?
63. What is the `$lookup` stage?
64. What is the `$unwind` stage?
65. What are the advantages of Aggregation?

---

## 🛡️ 7. Replication & Sharding (66–75)

66. What is Replication in MongoDB?
67. What is a Replica Set?
68. What is a Primary Node?
69. What is a Secondary Node?
70. What happens if the Primary Node fails?
71. What is automatic failover?
72. What is Sharding?
73. Why is Sharding used?
74. What is a Shard Key?
75. What is the difference between Replication and Sharding?

---

## 🔐 8. Security & Backup (76–85)

76. How does MongoDB authentication work?
77. What is authorization in MongoDB?
78. What are MongoDB roles?
79. How do you secure a MongoDB database?
80. What is data encryption?
81. What is TLS/SSL in MongoDB?
82. What is `mongodump`?
83. What is `mongorestore`?
84. How do you back up MongoDB data?
85. How do you restore MongoDB data?

---

## 🚀 9. Mongoose (86–95)

86. What is Mongoose?
87. Why do we use Mongoose?
88. What is a Schema in Mongoose?
89. What is a Model in Mongoose?
90. What is validation in Mongoose?
91. What are middleware (pre/post hooks) in Mongoose?
92. What is population in Mongoose?
93. What is the difference between Schema and Model?
94. How do you define relationships in Mongoose?
95. What are timestamps in Mongoose?

---

## 💼 10. Advanced & Real Interview Questions (96–110)

96. Difference between MongoDB and MySQL.
97. Difference between Embedding and Referencing.
98. Difference between `find()` and `findOne()`.
99. Difference between `updateOne()` and `replaceOne()`.
100. Difference between Replication and Sharding.
101. What is the CAP Theorem?
102. How does MongoDB ensure high availability?
103. What are ACID transactions in MongoDB?
104. What are MongoDB Transactions?
105. How do you optimize MongoDB queries?
106. How do you handle large datasets in MongoDB?
107. What are common MongoDB performance issues?
108. What are common MongoDB interview coding questions?
109. How would you design a scalable MongoDB schema?
110. Why do companies choose MongoDB for modern applications?

---

### 🎯 Most Important MongoDB Questions for Freshers & MERN Interviews

If you have limited time, focus first on:

* What is MongoDB?
* Difference between SQL and MongoDB
* Collection vs Document
* BSON
* CRUD Operations
* ObjectId
* Indexing
* Aggregation Pipeline
* `$lookup`
* Embedding vs Referencing
* Replication
* Sharding
* Mongoose Schema vs Model
* Population
* Transactions
* MongoDB vs MySQL

These are the questions most commonly asked in **MERN Stack, Full Stack, Node.js Backend, and Junior Software Developer interviews (0–3 years experience)**.


# 📘 1. MongoDB Fundamentals (1–10)

Perfect—this starts your **MongoDB section for MERN interviews**. Since MongoDB is the default database in the **MERN stack (MongoDB + Express + React + Node.js)**, interviewers often ask these foundational questions first.

I’ll give you **deep, interview-ready explanations** for each question with:

* Definition
* Internal Working
* Features
* Advantages & Limitations
* Code Examples
* Real-world Use Cases
* Interview Follow-ups
* Long Summary

---

# 1. What is MongoDB?

## Definition

**MongoDB** is an open-source, document-oriented NoSQL database used to store large amounts of unstructured or semi-structured data.

Unlike traditional relational databases such as **MySQL** or **PostgreSQL**, MongoDB stores data in **documents** instead of rows and tables.

MongoDB stores documents in a format similar to JSON called **BSON (Binary JSON)**.

---

## Example: SQL vs MongoDB

### SQL Table (Users)

| id | name  | age |
| -- | ----- | --- |
| 1  | Rishi | 22  |

---

### MongoDB Document

```json
{
   "_id": 1,
   "name": "Rishi",
   "age": 22
}
```

Here:

* Row = Document
* Table = Collection
* Database = Database

---

# Core Concepts in MongoDB

| SQL      | MongoDB                |
| -------- | ---------------------- |
| Database | Database               |
| Table    | Collection             |
| Row      | Document               |
| Column   | Field                  |
| Join     | Embedding / References |

---

# Internal Working

MongoDB stores data as **collections of documents**.

Example:

```json
{
  "_id": ObjectId("123"),
  "name": "Rishi",
  "skills": ["Java", "Node.js", "React"],
  "address": {
      "city": "Indore",
      "state": "MP"
  }
}
```

This document contains:

* String fields
* Array fields
* Nested objects

This flexibility is one of MongoDB’s strongest features.

---

# Why MongoDB Became Popular

MongoDB became popular because modern applications deal with:

* Large-scale data
* Rapidly changing schemas
* High traffic
* Cloud-native deployment

Examples:

* Social media apps
* E-commerce
* Real-time analytics
* IoT systems

Traditional relational databases sometimes struggle with these dynamic workloads.

---

# Example Query

Insert:

```javascript
db.users.insertOne({
   name: "Rishi",
   age: 22
})
```

Find:

```javascript
db.users.find({ name: "Rishi" })
```

Update:

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 23 } }
)
```

Delete:

```javascript
db.users.deleteOne({ name: "Rishi" })
```

---

# Real-world Example

Suppose you are building an e-commerce app like **Amazon**.

Product structure:

```json
{
  "name": "Laptop",
  "price": 70000,
  "specifications": {
      "ram": "16GB",
      "storage": "512GB SSD"
  },
  "reviews": [
      {
         "user": "Rishi",
         "rating": 5
      }
  ]
}
```

MongoDB handles this nested structure naturally.

In SQL, this might require:

* Products table
* Specifications table
* Reviews table
* Multiple JOINs

MongoDB simplifies this.

---

# Advantages

✔ Flexible schema
✔ High performance
✔ Horizontal scalability
✔ Easy for JSON-based apps
✔ Excellent for large datasets

---

# Limitations

✘ Complex joins are harder
✘ Data duplication possible
✘ Not ideal for heavy transactional systems

---

# Interview Answer (Short)

> MongoDB is a NoSQL, document-oriented database that stores data in BSON documents instead of rows and tables. It offers flexible schema design, scalability, and high performance, making it ideal for modern applications such as MERN stack projects, e-commerce, social media, and analytics systems.

---

# Common Follow-up Questions

* What is BSON?
* Difference between MongoDB and SQL?
* Why use MongoDB in MERN?
* What is a collection?

---

# Summary

MongoDB is designed for modern, scalable applications where flexibility and speed are more important than strict relational structures.

---

---

# 2. Why is MongoDB called a NoSQL database?

## Definition

MongoDB is called a **NoSQL database** because it does not primarily rely on the traditional relational model of:

* Tables
* Rows
* Columns
* Fixed schemas

NoSQL means:

> “Not Only SQL”

This means MongoDB does not replace SQL entirely—it simply offers a different approach to data storage.

---

# Why MongoDB is NoSQL

Traditional SQL databases:

* Use structured tables
* Require predefined schema
* Use joins

Example SQL:

```sql
SELECT * FROM users WHERE age > 18;
```

MongoDB:

* Uses collections
* Stores documents
* Flexible schema
* No joins by default

Example MongoDB:

```javascript
db.users.find({ age: { $gt: 18 } })
```

---

# Example of Schema Flexibility

Document 1:

```json
{
   "name": "Rishi",
   "age": 22
}
```

Document 2:

```json
{
   "name": "Aman",
   "email": "aman@gmail.com",
   "skills": ["Node.js", "React"]
}
```

Same collection. Different structures.

This is difficult in relational databases.

---

# Characteristics of NoSQL Databases

Most NoSQL databases provide:

* Flexible schema
* Horizontal scaling
* High availability
* Fast writes and reads

Types of NoSQL databases:

1. Document databases → MongoDB
2. Key-value stores → Redis
3. Column-family databases → Apache Cassandra
4. Graph databases → Neo4j

MongoDB belongs to the **Document Database** category.

---

# Internal Difference: SQL vs NoSQL

## SQL

Structured:

```sql
Users(id, name, age)
```

## MongoDB

Flexible:

```json
{
  name: "Rishi",
  age: 22
}
```

---

# Why Modern Apps Prefer NoSQL

Applications today generate:

* Huge data volume
* Semi-structured data
* Rapidly changing schemas

Examples:

* Chat applications
* Social media
* Recommendation systems

MongoDB handles these well.

---

# Advantages of NoSQL

✔ Flexible design
✔ Easy scaling
✔ Faster development
✔ Suitable for big data

---

# Limitations

✘ Complex transactions can be harder
✘ Data consistency trade-offs in some architectures

---

# Interview Answer (Short)

> MongoDB is called a NoSQL database because it does not use traditional relational tables and fixed schemas. Instead, it stores flexible BSON documents in collections, making it ideal for scalable and modern applications.

---

# Follow-up Questions

* What does NoSQL mean?
* Is MongoDB schema-less?
* Can MongoDB replace SQL?

---

# Summary

MongoDB is NoSQL because it stores flexible documents instead of rigid relational tables.

---

---

# 3. What are the advantages of MongoDB?

MongoDB provides several advantages over traditional relational databases.

---

# 1. Flexible Schema

Schema can evolve over time.

Example:
Old document:

```json
{
  "name": "Rishi"
}
```

New document:

```json
{
  "name": "Rishi",
  "skills": ["React", "Node"]
}
```

No migration required.

---

# 2. High Performance

MongoDB provides fast:

* Reads
* Writes
* Updates

Especially for large datasets.

Example:
Indexed search:

```javascript
db.users.find({ email: "abc@gmail.com" })
```

Very fast with indexes.

---

# 3. Horizontal Scalability

MongoDB supports **sharding**.

Sharding means distributing data across multiple servers.

Example:

* Server 1 → Users A–M
* Server 2 → Users N–Z

Useful for millions of users.

---

# 4. Document-Oriented Storage

Nested data is easy.

Example:

```json
{
   name: "Rishi",
   orders: [
      { item: "Laptop", price: 50000 },
      { item: "Phone", price: 20000 }
   ]
}
```

No complex joins required.

---

# 5. Easy Integration with JavaScript

MongoDB uses JSON-like documents.

This makes it perfect for MERN:

* MongoDB
* Express
* React
* Node.js

JavaScript works naturally with JSON.

Example:

```javascript
const user = {
   name: "Rishi",
   age: 22
};
```

Very similar to MongoDB document.

---

# 6. High Availability

MongoDB supports **replication**.

Multiple copies of data improve:

* Reliability
* Fault tolerance
* Availability

---

# 7. Big Data Support

MongoDB works well with:

* Analytics
* IoT
* Logging
* Real-time systems

---

# Real-world Use Cases

Used in:

* E-commerce
* Gaming
* Banking
* Social media
* Content management

Companies using MongoDB include:

* Adobe
* eBay
* Coinbase

---

# Limitations

Despite advantages:

* Joins are weaker than SQL
* Memory usage can be high
* Data duplication possible

---

# Interview Answer (Short)

> MongoDB offers flexible schema design, high performance, scalability, easy JSON integration, and strong support for distributed systems. These advantages make it ideal for modern applications with large and evolving datasets.

---

# Follow-up Questions

* What is sharding?
* Why is MongoDB fast?
* Why is MongoDB popular in MERN?

---

# Summary

MongoDB’s biggest strengths are flexibility, scalability, and developer productivity.

---

---

# 4. What are the features of MongoDB?

MongoDB has many powerful features.

---

# 1. Document-Oriented Storage

Stores data as BSON documents.

Example:

```json
{
  "name": "Rishi",
  "skills": ["MERN", "Java"]
}
```

---

# 2. Schema Flexibility

Documents in same collection can differ.

Example:

```json
{ name: "Rishi" }
```

```json
{ name: "Aman", age: 25, city: "Indore" }
```

---

# 3. Indexing

Improves search performance.

Example:

```javascript
db.users.createIndex({ email: 1 })
```

---

# 4. Aggregation Framework

Used for data analysis and transformations.

Example:

```javascript
db.orders.aggregate([
   { $match: { status: "completed" } },
   { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
])
```

---

# 5. Replication

Creates multiple copies of data.

Benefits:

* Backup
* Fault tolerance
* High availability

---

# 6. Sharding

Distributes data across multiple machines.

Useful for:

* Large-scale apps
* Big data

---

# 7. GridFS

Used for storing large files.

Examples:

* Videos
* PDFs
* Images

---

# 8. Transactions

MongoDB supports multi-document ACID transactions.

Example:

```javascript
session.startTransaction()
```

Useful in:

* Banking
* Payments
* Order systems

---

# 9. Change Streams

Allows real-time data updates.

Useful for:

* Live dashboards
* Chat apps
* Notifications

---

# 10. Security

MongoDB supports:

* Authentication
* Authorization
* Encryption

---

# Real-world Example

In your **Bazaaro.com** project, MongoDB features help with:

* Product storage
* Order management
* User data
* Print order tracking
* Real-time order status

Example:

```json
{
  "user": "Rishi",
  "orderType": "Photocopy",
  "pages": 150,
  "status": "Processing"
}
```

Easy and flexible.

---

# Interview Answer (Short)

> MongoDB features include document-oriented storage, flexible schema, indexing, aggregation, replication, sharding, transactions, GridFS, change streams, and strong security. These features make MongoDB highly scalable and suitable for modern distributed applications.

---

# Common Follow-up Questions

* What is aggregation?
* What is replication?
* What is sharding?
* Does MongoDB support transactions?

---

# Final Summary (Very Important for Interviews)

MongoDB is one of the most important databases for MERN stack development.

Key points to remember:

* NoSQL database
* Document-oriented
* Uses BSON
* Flexible schema
* High performance
* Scalable with sharding
* High availability with replication

**Best suited for:**

* MERN applications
* E-commerce
* Social media
* Analytics
* Cloud-native systems

A strong interview closing statement:

> MongoDB is a powerful NoSQL database designed for modern application development. Its flexible schema, JSON-like structure, scalability, and developer-friendly design make it a preferred choice for MERN stack and distributed applications.


Excellent—these are fundamental MongoDB interview questions. Interviewers often ask them to test whether you understand **how MongoDB differs from relational databases at the architectural level**.

I’ll keep the same detailed interview format.

---

# 5. What is the difference between SQL and MongoDB?

This is one of the most commonly asked MongoDB interview questions.

---

# Definition

The main difference between **SQL databases** and **MongoDB** lies in how they store and manage data.

* SQL databases store data in **tables (rows and columns)**
* MongoDB stores data in **documents (JSON-like BSON objects)**

Examples of SQL databases:

* MySQL
* PostgreSQL
* Oracle Database

MongoDB is a:

* NoSQL database
* Document-oriented database

---

# Core Difference

---

## SQL Database Structure

Example table:

| id | name  | age |
| -- | ----- | --- |
| 1  | Rishi | 22  |

Schema is fixed:

```sql id="sql1"
CREATE TABLE users (
   id INT PRIMARY KEY,
   name VARCHAR(100),
   age INT
);
```

---

## MongoDB Structure

Document:

```json id="m1"
{
  "_id": 1,
  "name": "Rishi",
  "age": 22
}
```

Schema is flexible.

---

# Detailed Comparison Table

| Feature       | SQL             | MongoDB                |
| ------------- | --------------- | ---------------------- |
| Type          | Relational      | NoSQL                  |
| Storage       | Tables          | Collections            |
| Data Format   | Rows & Columns  | BSON Documents         |
| Schema        | Fixed           | Flexible               |
| Relationships | JOINs           | Embedding / References |
| Scaling       | Vertical        | Horizontal             |
| Transactions  | Strong ACID     | ACID supported         |
| Best For      | Structured data | Semi/unstructured data |

---

# Internal Working Difference

---

## SQL Internally

SQL databases:

* Store data in tables
* Use normalization
* Reduce redundancy
* Fetch related data using JOINs

Example:

```sql id="sql2"
SELECT users.name, orders.product
FROM users
JOIN orders ON users.id = orders.user_id;
```

This is powerful for relational systems.

Example systems:

* Banking
* ERP
* Payroll

---

## MongoDB Internally

MongoDB:

* Stores data as BSON documents
* Allows nested objects
* Allows arrays
* Reduces need for joins

Example:

```json id="m2"
{
  "name": "Rishi",
  "orders": [
    { "product": "Laptop", "price": 70000 },
    { "product": "Phone", "price": 25000 }
  ]
}
```

All related data can exist in one document.

---

# Example: E-commerce Product

---

## SQL Approach

Tables:

* products
* reviews
* specifications

Need joins:

```sql id="sql3"
SELECT * FROM products
JOIN reviews ON products.id = reviews.product_id;
```

---

## MongoDB Approach

Single document:

```json id="m3"
{
   "name": "Laptop",
   "price": 70000,
   "specifications": {
      "ram": "16GB",
      "storage": "512GB SSD"
   },
   "reviews": [
      { "user": "Rishi", "rating": 5 }
   ]
}
```

Simpler for nested data.

---

# Advantages of SQL

✔ Strong consistency
✔ Excellent joins
✔ Mature ecosystem
✔ Best for transactional systems

---

# Advantages of MongoDB

✔ Flexible schema
✔ Fast development
✔ Scalable
✔ Great for large modern apps

---

# When to Use SQL?

Use SQL when:

* Data is highly structured
* Strong relationships exist
* Transactions are critical

Examples:

* Banking
* Finance
* Accounting

---

# When to Use MongoDB?

Use MongoDB when:

* Schema changes frequently
* Huge scale is needed
* Nested JSON data exists

Examples:

* MERN apps
* Social media
* Real-time systems

---

# Limitations Comparison

### SQL Limitations

* Schema migration required
* Harder to scale horizontally

### MongoDB Limitations

* Complex joins less efficient
* Data duplication possible

---

# Interview Answer (Short)

> SQL databases store structured data in tables with fixed schemas and are ideal for transactional systems. MongoDB stores data in flexible BSON documents and is better suited for modern scalable applications with dynamic schemas and nested data.

---

# Common Follow-up Questions

* Which is faster: SQL or MongoDB?
* Can MongoDB replace SQL?
* Which is better for MERN?

---

# Long Summary

SQL and MongoDB solve different problems.

SQL is best for:

* Structured systems
* Complex relationships
* ACID-heavy systems

MongoDB is best for:

* Modern web apps
* Rapid development
* Big-scale distributed systems

---

---

# 6. What is a Document in MongoDB?

This is the most basic building block in MongoDB.

---

# Definition

A **Document** in MongoDB is a single record stored in a collection.

It is similar to:

* A row in SQL
  but much more flexible.

Documents are stored in **BSON (Binary JSON)** format.

---

# Example Document

```json id="doc1"
{
  "_id": ObjectId("123"),
  "name": "Rishi",
  "age": 22,
  "skills": ["React", "Node.js"],
  "address": {
      "city": "Indore",
      "state": "MP"
  }
}
```

This is one document.

---

# Document Structure

A document contains:

* Key-value pairs
* Arrays
* Nested documents

Example:

```json id="doc2"
{
  "name": "Laptop",
  "price": 70000,
  "specs": {
      "ram": "16GB"
  }
}
```

Keys = field names
Values = field values

---

# Why Documents Are Powerful

Documents allow storing complex real-world objects naturally.

Example user profile:

```json id="doc3"
{
   "name": "Rishi",
   "email": "rishi@gmail.com",
   "orders": [
      {
         "product": "Phone",
         "price": 20000
      }
   ]
}
```

This is hard to represent in a single SQL row.

---

# Internal Working

MongoDB stores each document in BSON.

Why BSON?

* Faster traversal
* Better storage efficiency
* Supports more data types

Supported data types:

* String
* Number
* Boolean
* Array
* Date
* ObjectId
* Null

---

# Example Operations on Documents

Insert:

```javascript id="doc4"
db.users.insertOne({
   name: "Rishi",
   age: 22
})
```

Find:

```javascript id="doc5"
db.users.find({ name: "Rishi" })
```

Update:

```javascript id="doc6"
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 23 } }
)
```

Delete:

```javascript id="doc7"
db.users.deleteOne({ name: "Rishi" })
```

---

# Advantages of Documents

✔ Flexible
✔ Easy to understand
✔ Nested structure support
✔ Natural JSON mapping

---

# Limitations

✘ Very large documents affect performance
✘ Poor design can cause duplication

---

# Real-world Use Case

In your **Bazaaro.com** project, one order can be stored as a document.

```json id="doc8"
{
   "customer": "Rishi",
   "orderType": "Photocopy",
   "pages": 150,
   "status": "Processing"
}
```

Very intuitive.

---

# Interview Answer (Short)

> A document in MongoDB is a single record stored as BSON. It contains key-value pairs and can include arrays and nested objects, making it flexible for storing complex structured and semi-structured data.

---

# Follow-up Questions

* What is BSON?
* Difference between row and document?
* Can documents have nested objects?

---

# Long Summary

A document is the most important data unit in MongoDB. Everything revolves around documents.

Think:
**SQL row = MongoDB document**

But documents are far more flexible and powerful.

---

---

# 7. What is a Collection in MongoDB?

---

# Definition

A **Collection** in MongoDB is a group of MongoDB documents.

It is similar to:

* A table in SQL

But unlike SQL tables, collections do not enforce strict schemas by default.

---

# Example

Collection name:

```text
users
```

Documents inside:

```json id="col1"
{
   "name": "Rishi",
   "age": 22
}
```

```json id="col2"
{
   "name": "Aman",
   "email": "aman@gmail.com"
}
```

Both documents can exist in the same collection.

---

# SQL Comparison

SQL:

```sql id="colsql"
CREATE TABLE users (
   id INT,
   name VARCHAR(100),
   age INT
)
```

Schema fixed.

---

MongoDB:

```javascript id="coljs"
db.createCollection("users")
```

Schema flexible.

---

# Internal Working

A collection:

* Stores documents
* Automatically created when inserting data
* Can have indexes
* Can support validation rules

Example:

```javascript id="col3"
db.users.insertOne({
   name: "Rishi"
})
```

If `users` doesn’t exist, MongoDB creates it automatically.

---

# Example Operations

Insert:

```javascript id="col4"
db.users.insertOne({
   name: "Rishi"
})
```

Read:

```javascript id="col5"
db.users.find()
```

Update:

```javascript id="col6"
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 23 } }
)
```

Delete:

```javascript id="col7"
db.users.deleteOne({ name: "Rishi" })
```

---

# Types of Collections

1. Regular Collections
2. Capped Collections
3. Time-Series Collections

---

## Capped Collection

Fixed-size collection.

Useful for:

* Logs
* Event streams

---

# Advantages of Collections

✔ Organizes documents
✔ Flexible schema
✔ Supports indexing
✔ Easy scalability

---

# Limitations

✘ Without schema validation, bad data can enter
✘ Poor design may cause inconsistency

---

# Real-world Use Case

In an e-commerce app, you may have collections:

* users
* products
* orders
* payments

Example:

```text
bazaaro_db
 ├── users
 ├── products
 ├── orders
```

Each collection stores related documents.

---

# Interview Answer (Short)

> A collection in MongoDB is a group of documents, similar to a table in SQL. It stores related documents and supports indexing, validation, and scalability. Unlike SQL tables, collections usually have flexible schemas.

---

# Common Follow-up Questions

* Difference between collection and table?
* Are collections schema-less?
* Can MongoDB collections be indexed?

---

# Final Summary

MongoDB hierarchy:

* Database
* Collection
* Document

Example:

```text
Database → bazaaro_db
Collection → users
Document → { name: "Rishi" }
```

Remember this mapping:

| SQL      | MongoDB    |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |


Excellent. These are very important MongoDB theory questions, especially for **MERN stack interviews** because interviewers want to know whether you understand **how MongoDB stores data internally and when it should be chosen over SQL databases**.

I’ll continue in the same deep interview-ready format.

---

# 8. What is BSON?

---

# Definition

**BSON** stands for **Binary JSON**.

It is the binary-encoded format in which MongoDB stores documents internally.

Although MongoDB documents look like JSON when developers read/write them, internally MongoDB stores them as BSON.

---

## Simple Explanation

You write:

```json id="b1"
{
   "name": "Rishi",
   "age": 22
}
```

This looks like JSON.

But MongoDB converts it into BSON internally for:

* Faster traversal
* Efficient storage
* Richer data type support

---

# Why MongoDB Uses BSON

Regular JSON is great for humans because it is readable.

Example:

```json id="b2"
{
   "name": "Laptop",
   "price": 70000
}
```

But JSON has limitations:

* Limited data types
* Slower parsing for databases
* Not optimized for storage

MongoDB solves this by using BSON.

---

# Internal Working of BSON

When data enters MongoDB:

### Step 1:

Application sends JSON-like document.

```javascript id="b3"
db.users.insertOne({
   name: "Rishi",
   age: 22
})
```

---

### Step 2:

MongoDB converts it into BSON.

BSON stores:

* Field names
* Values
* Data types
* Document length

This makes traversal fast.

---

### Step 3:

MongoDB stores BSON in disk/memory.

---

# BSON Supports More Data Types than JSON

JSON supports:

* String
* Number
* Boolean
* Array
* Object
* Null

BSON supports all of those plus more.

Extra BSON types:

* ObjectId
* Date
* Timestamp
* Binary Data
* Decimal128
* Regular Expression

---

# Example BSON Types

```javascript id="b4"
{
   _id: ObjectId("507f1f77bcf86cd799439011"),
   createdAt: new Date(),
   isActive: true
}
```

Important types:

* `ObjectId`
* `Date`

These are widely used in MongoDB.

---

# Example: ObjectId

Every MongoDB document usually contains:

```javascript id="b5"
_id: ObjectId("507f1f77bcf86cd799439011")
```

This unique ID is BSON-specific.

ObjectId contains:

* Timestamp
* Machine ID
* Process ID
* Counter

Very efficient for distributed systems.

---

# Advantages of BSON

✔ Faster encoding/decoding
✔ Better performance
✔ More data types
✔ Efficient traversal

---

# Limitations of BSON

✘ Less human-readable
✘ Slightly larger than JSON in some cases

---

# Real-world Example

In your **Bazaaro.com** project:

```json id="b6"
{
   "_id": ObjectId("123abc"),
   "customer": "Rishi",
   "orderType": "Photocopy",
   "createdAt": ISODate("2026-06-21")
}
```

Internally stored as BSON.

---

# Interview Answer (Short)

> BSON stands for Binary JSON. It is the binary format MongoDB uses to store documents internally. BSON provides faster traversal, efficient storage, and supports additional data types like ObjectId, Date, and Binary data.

---

# Common Follow-up Questions

* Why does MongoDB use BSON?
* Is BSON faster than JSON?
* What is ObjectId?

---

# Long Summary

BSON is the foundation of MongoDB’s internal storage system.

Think:

* Developer sees JSON
* MongoDB stores BSON

That combination gives both:

* Developer-friendly syntax
* Database-level performance

---

---

# 9. What is the difference between JSON and BSON?

This is one of the most common follow-up questions after BSON.

---

# Definition

JSON and BSON are related but different.

* **JSON** → Human-readable text format
* **BSON** → Binary storage format used by MongoDB

---

# Example JSON

```json id="jb1"
{
   "name": "Rishi",
   "age": 22
}
```

Readable by humans.

---

# BSON

Same document stored internally in binary form.

Humans cannot read BSON directly.

---

# Comparison Table

| Feature        | JSON                       | BSON                      |
| -------------- | -------------------------- | ------------------------- |
| Full Form      | JavaScript Object Notation | Binary JSON               |
| Format         | Text                       | Binary                    |
| Human Readable | Yes                        | No                        |
| Speed          | Slower parsing             | Faster traversal          |
| Data Types     | Limited                    | More types                |
| Size           | Smaller sometimes          | Slightly larger sometimes |

---

# Supported Data Types

---

## JSON Supports

* String
* Number
* Boolean
* Array
* Object
* Null

Example:

```json id="jb2"
{
   "name": "Rishi",
   "age": 22
}
```

---

## BSON Supports Extra Types

* ObjectId
* Date
* Timestamp
* Binary
* Decimal128

Example:

```javascript id="jb3"
{
   _id: ObjectId(),
   createdAt: new Date()
}
```

This is impossible in plain JSON.

---

# Internal Working Difference

JSON:

* Mainly for data exchange between systems

Example:
Frontend ↔ Backend communication

```javascript id="jb4"
const user = {
   name: "Rishi"
};
```

---

BSON:

* Used by MongoDB for storage and retrieval

When you insert JSON into MongoDB:

* MongoDB converts JSON → BSON

---

# Advantages of JSON

✔ Human-readable
✔ Lightweight
✔ Widely used in APIs

---

# Advantages of BSON

✔ Faster traversal
✔ More data types
✔ Better for databases

---

# Limitations

JSON:

* Limited types
* Slower for DB operations

BSON:

* Not readable
* Extra storage overhead possible

---

# Real-world Example

React frontend sends:

```json id="jb5"
{
   "product": "Laptop",
   "price": 70000
}
```

Node.js backend receives JSON.

MongoDB stores same document as BSON.

Flow:

```text id="jb6"
React → Node.js → MongoDB
JSON → JSON → BSON
```

This is exactly how MERN apps work.

---

# Interview Answer (Short)

> JSON is a human-readable text format used for data exchange, while BSON is a binary format used by MongoDB for storage. BSON supports more data types and provides faster traversal compared to JSON.

---

# Common Follow-up Questions

* Which is faster?
* Why convert JSON to BSON?
* Can BSON store Date objects?

---

# Long Summary

Think of JSON and BSON like this:

JSON = Communication format
BSON = Storage format

MongoDB uses BSON because databases need speed and rich data type support.

---

---

# 10. When should MongoDB be preferred over relational databases?

This is a very important design-based interview question.

Interviewers want to know whether you understand **when to choose MongoDB vs SQL**.

---

# Definition

MongoDB should be preferred over relational databases when:

* Data structure changes frequently
* High scalability is needed
* Large semi-structured data exists
* Fast development is important

---

# Use MongoDB When Schema is Dynamic

Suppose product data changes often.

Example:

```json id="m10a"
{
   "name": "Laptop",
   "price": 70000
}
```

Later:

```json id="m10b"
{
   "name": "Laptop",
   "price": 70000,
   "gpu": "RTX 4060"
}
```

No schema migration required.

In SQL:
Schema alteration needed.

```sql id="m10c"
ALTER TABLE products ADD COLUMN gpu VARCHAR(50);
```

MongoDB wins here.

---

# Use MongoDB for Large Scale Applications

MongoDB supports horizontal scaling using **sharding**.

Example:

* Server 1 → Users A–M
* Server 2 → Users N–Z

Good for:

* Millions of users
* Huge traffic

---

# Use MongoDB for Nested Data

Example:

```json id="m10d"
{
   "customer": "Rishi",
   "orders": [
      {
         "product": "Laptop",
         "price": 70000
      }
   ]
}
```

MongoDB handles nested data naturally.

SQL requires multiple tables and joins.

---

# Use MongoDB for Rapid Development

In startups and fast-moving projects:

* Requirements change frequently
* Schema evolves fast

MongoDB reduces development time.

Examples:

* MVP products
* Startups
* Agile projects

---

# Best Use Cases for MongoDB

✔ Social media apps
✔ Chat applications
✔ Real-time analytics
✔ IoT systems
✔ E-commerce catalogs
✔ Content management systems

Companies using MongoDB:

* Netflix
* Uber
* Coinbase

---

# When NOT to Use MongoDB

Avoid MongoDB if application needs:

* Complex joins
* Heavy ACID transactions
* Strong relational consistency

Examples:

* Banking
* Accounting
* Payroll systems

SQL databases like:

* PostgreSQL
* MySQL

are better here.

---

# SQL vs MongoDB Decision

Choose SQL when:

* Structured schema
* Strong relationships
* Complex joins

Choose MongoDB when:

* Flexible schema
* Massive scale
* JSON-heavy apps

---

# Real-world Example

Your **Bazaaro.com** project is a strong MongoDB use case because:

* Products may have varying structures
* Orders contain nested details
* Print/photocopy options vary

Example:

```json id="m10e"
{
   "user": "Rishi",
   "service": "Album Print",
   "pages": 50,
   "paperType": "Glossy"
}
```

Flexible and scalable.

---

# Interview Answer (Short)

> MongoDB should be preferred over relational databases when the application requires flexible schema design, horizontal scalability, fast development, and efficient handling of large semi-structured or nested data. It is ideal for modern web applications, analytics, and distributed systems.

---

# Common Follow-up Questions

* When is SQL better than MongoDB?
* Is MongoDB good for banking?
* Why is MongoDB used in MERN?

---

# Final Summary

Use MongoDB when:

* Flexibility matters
* Scale matters
* Speed matters

Use SQL when:

* Relationships matter
* Consistency matters
* Transactions matter

Best interview closing statement:

> MongoDB is ideal for modern scalable applications with dynamic schemas and large semi-structured datasets, while relational databases are better for highly structured systems requiring strong consistency and complex relationships.


# 🗂️ 2. Database, Collections & Documents (11–20)

Here are detailed interview-ready answers for MongoDB Questions **11–14**. These are written so you can confidently explain each answer in **2–5 minutes** during MERN Stack interviews.

---

# 11. What is a Database in MongoDB?

## Definition

A **Database in MongoDB** is a container that holds multiple **collections**, and each collection stores **documents**.

Think of MongoDB structure like this:

```plaintext
MongoDB Server
   └── Database
         └── Collection
               └── Document
```

Example:

```plaintext
ecommerce (Database)
 ├── users (Collection)
 ├── products (Collection)
 ├── orders (Collection)
```

Here:

* `ecommerce` = Database
* `users`, `products`, `orders` = Collections
* Inside collections = Documents

---

## GFG-Style Explanation

In traditional SQL databases:

```plaintext
Database → Tables → Rows
```

In MongoDB:

```plaintext
Database → Collections → Documents
```

MongoDB databases are schema-flexible, meaning collections inside a database do not require a fixed schema.

Example document:

```json
{
  "name": "Rishi",
  "email": "rishi@gmail.com",
  "age": 24
}
```

Another document in same collection:

```json
{
  "name": "Aman",
  "phone": "9876543210"
}
```

Both can coexist even with different fields.

---

## Internal Working

When MongoDB server runs:

* It can host multiple databases.
* Each database has separate storage.
* MongoDB stores data in BSON format internally.

System databases:

* `admin` → admin operations
* `local` → replication data
* `config` → sharding metadata

User-created database examples:

* `school`
* `company`
* `inventory`

---

## Example

Switch to database:

```javascript
use ecommerce
```

Insert data:

```javascript
db.users.insertOne({
   name: "Rishi",
   age: 24
})
```

MongoDB creates:

* Database `ecommerce`
* Collection `users`
* Document automatically (if not already present)

---

## Real-World Example

For an e-commerce application:

Database: `bazaaro`

Collections:

* users
* products
* orders
* payments

This makes application structure organized and scalable.

---

## Advantages

✔ Organizes collections logically
✔ Supports multiple databases on one server
✔ Easy scalability
✔ Flexible schema

---

## Limitations

✘ Poor design can lead to too many databases
✘ Managing many databases increases complexity

---

## Interview Follow-Up Questions

### Q1: Can MongoDB have multiple databases?

Yes.

Example:

```plaintext
company_db
school_db
hospital_db
```

---

### Q2: How to view databases?

```javascript
show dbs
```

---

### Q3: Which database is selected currently?

```javascript
db
```

---

## Long Summary

A database in MongoDB is a top-level container used to organize related collections. It works similarly to databases in relational systems, but instead of tables and rows, MongoDB uses collections and documents. Databases help structure application data logically and efficiently.

---

# 12. How do you create a database in MongoDB?

## Definition

MongoDB creates databases **lazily**, meaning a database is created only when data is inserted.

Unlike SQL:

```sql
CREATE DATABASE ecommerce;
```

MongoDB does not immediately create a database with a command.

---

## Steps to Create Database

### Step 1: Switch to database

```javascript
use ecommerce
```

Output:

```plaintext
switched to db ecommerce
```

At this point database is NOT physically created yet.

---

### Step 2: Insert Data

```javascript
db.products.insertOne({
   name: "Laptop",
   price: 50000
})
```

Now database gets created.

---

## Verify Database

```javascript
show dbs
```

Output:

```plaintext
admin
config
local
ecommerce
```

---

## Internal Working

MongoDB avoids creating empty databases.

Why?

* Saves storage
* Improves efficiency
* Reduces unnecessary objects

Database creation happens only when:

* Collection is created with data
* Document inserted

---

## Practical Example

```javascript
use college

db.students.insertOne({
   name: "Rishi",
   branch: "MCA"
})
```

Now:

* Database = college
* Collection = students
* Document inserted

---

## Real-World Use Case

In MERN applications:

When backend connects to:

```javascript
mongodb://localhost:27017/bazaaro
```

If database `bazaaro` doesn't exist, MongoDB creates it when first data is inserted.

Example with MongoDB + Node.js:

```javascript
mongoose.connect("mongodb://localhost:27017/bazaaro")
```

---

## Advantages

✔ Very simple creation
✔ No separate CREATE DATABASE command
✔ Efficient resource usage

---

## Limitations

✘ Confuses SQL developers
✘ Database may not appear until data inserted

---

## Interview Follow-Up Questions

### Q1: Does `use databaseName` create database?

No.

It only switches context.

---

### Q2: When is database actually created?

When first document is inserted.

---

## Long Summary

Creating a database in MongoDB is different from SQL databases. You simply switch to a database using `use dbName`, but MongoDB creates it only when actual data is inserted. This lazy creation improves storage efficiency and simplifies database management.

---

# 13. How do you create a Collection?

## Definition

A **Collection** in MongoDB is a group of MongoDB documents.

Equivalent in SQL:

* Collection = Table

Example:

```plaintext
users
products
orders
```

---

# Method 1: Create Collection Explicitly

Syntax:

```javascript
db.createCollection("users")
```

Example:

```javascript
db.createCollection("products")
```

Output:

```plaintext
{ ok: 1 }
```

---

# Method 2: Create Collection Implicitly (Most Common)

Insert document directly:

```javascript
db.users.insertOne({
   name: "Rishi",
   age: 24
})
```

MongoDB automatically creates collection if it doesn’t exist.

---

## Internal Working

When collection is created:

* Storage allocated
* Metadata created
* Index structures initialized

Default index:

```plaintext
_id
```

Each document gets unique `_id`.

Example:

```json
{
   "_id": ObjectId("123"),
   "name": "Rishi"
}
```

---

## Practical Example

Create collection:

```javascript
db.createCollection("employees")
```

Insert:

```javascript
db.employees.insertOne({
   name: "Aman",
   department: "IT"
})
```

---

## Advanced Collection Options

```javascript
db.createCollection("logs", {
   capped: true,
   size: 100000
})
```

Capped collection:

* Fixed size
* Old documents overwritten automatically

Useful for:

* logs
* analytics
* event streams

---

## Real-World Use Case

In e-commerce app:

Collections:

* users
* cart
* orders
* products
* reviews

---

## Advantages

✔ Easy to create
✔ Schema flexible
✔ Supports automatic creation

---

## Limitations

✘ No schema enforcement by default
✘ Poor design can create messy collections

---

## Interview Follow-Up Questions

### Q1: Can collection exist without documents?

Yes.

If explicitly created.

---

### Q2: Does MongoDB automatically create collections?

Yes, during first insert.

---

## Long Summary

A collection in MongoDB stores related documents. It is similar to a table in relational databases but is more flexible because documents can have varying structures. Collections can be created explicitly using `createCollection()` or automatically when inserting documents.

---

# 14. What is the difference between a Collection and a Table?

This is one of the most important MongoDB interview questions.

---

# Definition

* **Collection** → MongoDB object storing documents
* **Table** → SQL object storing rows

---

# Main Difference Table

| Feature       | Collection (MongoDB) | Table (SQL)  |
| ------------- | -------------------- | ------------ |
| Database Type | NoSQL                | Relational   |
| Data Format   | Documents            | Rows         |
| Structure     | Flexible Schema      | Fixed Schema |
| Records       | Documents            | Rows         |
| Fields        | Keys                 | Columns      |

---

## Example: SQL Table

```sql
CREATE TABLE users (
   id INT,
   name VARCHAR(100),
   age INT
);
```

Rows:

| id | name  | age |
| -- | ----- | --- |
| 1  | Rishi | 24  |

---

## Example: MongoDB Collection

Collection: users

Document 1:

```json
{
  "name": "Rishi",
  "age": 24
}
```

Document 2:

```json
{
  "name": "Aman",
  "email": "aman@gmail.com"
}
```

Notice:

* Same collection
* Different fields possible

This is schema flexibility.

---

## Internal Working Difference

### SQL Table

* Strict schema
* Normalized data
* Joins heavily used

### MongoDB Collection

* Flexible schema
* Denormalized data possible
* Embedding supported

Example:

```json
{
  "name": "Rishi",
  "orders": [
     { "product": "Laptop", "price": 50000 }
  ]
}
```

Instead of JOIN, MongoDB often embeds related data.

---

## Real-World Comparison

### Use SQL Tables when:

* Banking systems
* Financial transactions
* Complex joins
* Strict consistency

Examples:

* PostgreSQL
* MySQL

---

### Use MongoDB Collections when:

* MERN stack apps
* Real-time apps
* Dynamic schemas
* Rapid development

Example:

* MongoDB

---

## Advantages of Collection Over Table

✔ Flexible schema
✔ Faster development
✔ Good for unstructured data

---

## Advantages of Table Over Collection

✔ Strong consistency
✔ Better relational modeling
✔ ACID support

---

## Limitations

### Collection

✘ Less strict schema control

### Table

✘ Less flexible

---

## Interview Follow-Up Questions

### Q1: Is collection same as table?

Conceptually yes, structurally no.

---

### Q2: Which is better?

Depends on use case.

* Structured data → SQL
* Flexible data → MongoDB

---

# Final Long Summary (Very Important for Interviews)

MongoDB organizes data as:

```plaintext
Database → Collection → Document
```

Where:

* Database stores collections
* Collection stores documents
* Document stores actual data in BSON format

Key interview points:

* Database creation is lazy
* Collections can be explicit or automatic
* Collection ≠ Table
* MongoDB offers schema flexibility
* SQL offers strict schema enforcement

For MERN stack interviews, emphasize that MongoDB is ideal when applications require:

* fast development
* flexible schema
* scalable architecture
* JSON-like data storage

This comparison clearly shows why MongoDB is widely used in modern JavaScript applications.


Here are detailed interview-ready answers for MongoDB Questions **15–18**. These are designed for **MERN Stack / JavaScript interviews**, with enough depth for **2–5 minute explanations**.

---

# 15. How do you insert a document?

## Definition

In MongoDB, **inserting a document** means adding new data into a collection.

A document is a JSON-like object stored internally in BSON format.

Example document:

```json
{
  "name": "Rishi",
  "age": 24,
  "role": "Developer"
}
```

---

# Methods to Insert Documents

MongoDB provides multiple methods:

* `insertOne()`
* `insertMany()`

---

# 1. insertOne()

Used to insert a single document.

### Syntax

```javascript
db.collectionName.insertOne(document)
```

### Example

```javascript
db.users.insertOne({
   name: "Rishi",
   age: 24,
   city: "Indore"
})
```

Output:

```json
{
   acknowledged: true,
   insertedId: ObjectId("665f123abc456")
}
```

---

## Internal Working

When `insertOne()` runs:

1. MongoDB checks collection existence
2. Creates collection if missing
3. Generates `_id` if not provided
4. Converts JSON → BSON
5. Stores document on disk

---

## Example with Custom `_id`

```javascript
db.users.insertOne({
   _id: 101,
   name: "Aman"
})
```

Here MongoDB won’t auto-generate `_id`.

---

# 2. insertMany()

Used to insert multiple documents.

### Syntax

```javascript
db.collectionName.insertMany([doc1, doc2, doc3])
```

### Example

```javascript
db.products.insertMany([
   { name: "Laptop", price: 50000 },
   { name: "Phone", price: 25000 },
   { name: "Tablet", price: 30000 }
])
```

Output:

```json
{
  acknowledged: true,
  insertedIds: {
      0: ObjectId("..."),
      1: ObjectId("..."),
      2: ObjectId("...")
  }
}
```

---

# Ordered vs Unordered Inserts

### Ordered (Default)

Stops if error occurs.

```javascript
db.users.insertMany([...], { ordered: true })
```

### Unordered

Continues even if one insert fails.

```javascript
db.users.insertMany([...], { ordered: false })
```

---

# Real-World Example (E-commerce App)

Collection: `products`

```javascript
db.products.insertOne({
   name: "Gaming Laptop",
   price: 80000,
   stock: 10
})
```

In MERN apps, insertion often happens using MongoDB + Node.js backend APIs.

Example:

```javascript
app.post("/users", async (req, res) => {
   const user = await User.create(req.body);
   res.json(user);
});
```

---

# Advantages

✔ Easy insertion
✔ Flexible schema
✔ Bulk insert support
✔ Automatic `_id` generation

---

# Limitations

✘ Duplicate key errors possible
✘ Schema inconsistency if validation absent

---

# Interview Follow-Up Questions

### Q1: Can MongoDB insert without `_id`?

Yes, MongoDB auto-generates it.

---

### Q2: Which is faster: insertOne or insertMany?

`insertMany()` for bulk operations.

---

# Long Summary

Inserting a document in MongoDB means adding records into collections. MongoDB supports single inserts using `insertOne()` and bulk inserts using `insertMany()`. During insertion, MongoDB automatically creates collections if needed and generates `_id` values for documents.

---

# 16. How do you retrieve documents?

## Definition

Retrieving documents means fetching data from MongoDB collections.

Main methods:

* `findOne()`
* `find()`

Equivalent SQL query:

```sql
SELECT * FROM users;
```

MongoDB equivalent:

```javascript
db.users.find()
```

---

# 1. find()

Returns multiple documents.

### Syntax

```javascript
db.collectionName.find(query)
```

### Example

```javascript
db.users.find()
```

Returns all documents.

Example output:

```json
[
  { "name": "Rishi", "age": 24 },
  { "name": "Aman", "age": 26 }
]
```

---

# Query with Condition

```javascript
db.users.find({ age: 24 })
```

Returns all users with age 24.

---

# Multiple Conditions

```javascript
db.users.find({
   age: 24,
   city: "Indore"
})
```

---

# 2. findOne()

Returns only first matching document.

### Example

```javascript
db.users.findOne({ age: 24 })
```

Output:

```json
{
   name: "Rishi",
   age: 24
}
```

---

# Projection

Used to select specific fields.

```javascript
db.users.find({}, { name: 1, age: 1 })
```

Returns:

```json
[
   { name: "Rishi", age: 24 }
]
```

Exclude `_id`:

```javascript
db.users.find({}, { _id: 0, name: 1 })
```

---

# Internal Working

When retrieval happens:

1. Query parser reads request
2. Query optimizer chooses best plan
3. Index used if available
4. Documents fetched
5. Results returned

---

# Advanced Query Example

Using operators:

```javascript
db.products.find({
   price: { $gt: 30000 }
})
```

Meaning:

* Find products with price > 30000

---

# Real-World Example

Retrieve user orders:

```javascript
db.orders.find({ userId: 101 })
```

MERN API:

```javascript
app.get("/users", async (req, res) => {
   const users = await User.find();
   res.json(users);
});
```

---

# Advantages

✔ Fast retrieval with indexes
✔ Powerful filtering
✔ Flexible queries

---

# Limitations

✘ Slow without indexes
✘ Large queries can consume memory

---

# Interview Follow-Up Questions

### Q1: Difference between `find()` and `findOne()`?

* `find()` → multiple documents
* `findOne()` → single document

---

### Q2: How to fetch all documents?

```javascript
db.collection.find()
```

---

# Long Summary

Retrieving documents in MongoDB means reading data from collections using methods like `find()` and `findOne()`. Queries can include filters, projections, sorting, and operators. Efficient retrieval depends heavily on indexes.

---

# 17. What is the `_id` field?

## Definition

`_id` is a special field in MongoDB that uniquely identifies each document in a collection.

Every document must have an `_id`.

Example:

```json
{
   "_id": ObjectId("665f123abc456"),
   "name": "Rishi"
}
```

---

# Why `_id` is Important

It ensures:

* Uniqueness
* Fast lookup
* Primary key behavior

Equivalent to SQL:

```sql
PRIMARY KEY
```

---

# Automatic Generation

If `_id` not provided:

```javascript
db.users.insertOne({
   name: "Rishi"
})
```

MongoDB automatically generates `_id`.

---

# Manual `_id`

You can also provide your own:

```javascript
db.users.insertOne({
   _id: 101,
   name: "Rishi"
})
```

---

# Duplicate `_id` Error

This fails:

```javascript
db.users.insertOne({
   _id: 101,
   name: "Aman"
})
```

Error:

```plaintext
DuplicateKeyError
```

Because `_id` must be unique.

---

# Internal Working

MongoDB automatically creates an index on `_id`.

Benefits:

* Fast search
* Efficient updates
* Efficient deletes

Example:

```javascript
db.users.find({ _id: ObjectId("665f123abc456") })
```

Very fast due to index.

---

# Real-World Example

Fetch user profile:

```javascript
db.users.findOne({ _id: ObjectId("665f123abc456") })
```

---

# Advantages

✔ Unique identifier
✔ Auto-generated
✔ Indexed by default

---

# Limitations

✘ ObjectId is long
✘ Can be less readable

---

# Interview Follow-Up Questions

### Q1: Can `_id` be string or number?

Yes.

Example:

```javascript
_id: "user101"
```

---

### Q2: Can two documents have same `_id`?

No.

---

# Long Summary

The `_id` field is MongoDB’s default primary key. Every document must contain it, and it guarantees uniqueness. MongoDB auto-generates it if absent and automatically indexes it for fast operations.

---

# 18. What is ObjectId?

## Definition

ObjectId is the default data type used by MongoDB for `_id`.

Example:

```plaintext
665f123abc456789def12345
```

It is a **12-byte unique identifier**.

---

# Structure of ObjectId

ObjectId contains:

* 4 bytes → Timestamp
* 5 bytes → Random value
* 3 bytes → Increment counter

Structure:

```plaintext
Timestamp + Random + Counter
```

---

# Example

```javascript
ObjectId("665f123abc456789def12345")
```

---

# Internal Working

Suppose:

```plaintext
665f123abc456789def12345
```

Parts represent:

* Creation time
* Machine/process uniqueness
* Counter for uniqueness

This ensures globally unique IDs.

---

# Why MongoDB Uses ObjectId

Benefits:

* Unique across systems
* Efficient generation
* Sortable by creation time

---

# Generate ObjectId

```javascript
ObjectId()
```

Example:

```javascript
new ObjectId()
```

---

# Extract Timestamp

MongoDB ObjectId contains creation time.

Example:

```javascript
ObjectId("665f123abc456789def12345").getTimestamp()
```

Output:

```plaintext
2025-05-29T12:30:00
```

---

# Real-World Example

Document:

```json
{
   "_id": ObjectId("665f123abc456789def12345"),
   "name": "Rishi"
}
```

This ID:

* Uniquely identifies document
* Tells approximate creation time

---

# Advantages

✔ Globally unique
✔ Auto-generated
✔ Contains timestamp

---

# Limitations

✘ Long and less readable
✘ Larger than integer IDs

---

# Interview Follow-Up Questions

### Q1: Is ObjectId always used for `_id`?

No.

You can use:

* String
* Number
* UUID

---

### Q2: Why is ObjectId preferred?

Because it provides uniqueness + timestamp.

---

# Long Summary

ObjectId is MongoDB’s default identifier type used for `_id`. It is a 12-byte value containing timestamp, random machine/process value, and counter. It ensures uniqueness across distributed systems and supports efficient document identification.

---

# Final Interview Summary (Important)

For CRUD basics in MongoDB:

* Insert → `insertOne()`, `insertMany()`
* Retrieve → `find()`, `findOne()`
* Unique ID field → `_id`
* Default ID type → `ObjectId`

Important interview points:

* MongoDB auto-generates `_id`
* `_id` behaves like primary key
* ObjectId ensures uniqueness
* Retrieval performance improves with indexes

These are core MongoDB fundamentals and are very frequently asked in MERN interviews.


Here are detailed interview-ready answers for MongoDB Questions **19–20**. These are designed for **MERN Stack / JavaScript interviews** and written so you can confidently explain them in **2–5 minutes**.

---

# 19. How do you update documents?

## Definition

Updating documents in MongoDB means modifying existing documents in a collection.

Example:
Suppose a document exists:

```json
{
   "_id": ObjectId("665f123abc456"),
   "name": "Rishi",
   "age": 24
}
```

If age changes from 24 → 25, we update the document.

---

# Methods to Update Documents

MongoDB mainly provides:

* `updateOne()`
* `updateMany()`
* `replaceOne()`

---

# 1. updateOne()

Updates the first matching document.

### Syntax

```javascript
db.collectionName.updateOne(
   filter,
   update,
   options
)
```

---

### Example

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 25 } }
)
```

Result:

```json
{
   acknowledged: true,
   matchedCount: 1,
   modifiedCount: 1
}
```

Document becomes:

```json
{
   "_id": ObjectId("665f123abc456"),
   "name": "Rishi",
   "age": 25
}
```

---

# 2. updateMany()

Updates all matching documents.

### Example

```javascript
db.users.updateMany(
   { city: "Indore" },
   { $set: { city: "Bhopal" } }
)
```

All users with city = Indore become Bhopal.

---

# 3. replaceOne()

Replaces entire document except `_id`.

Example:

```javascript
db.users.replaceOne(
   { name: "Rishi" },
   {
      name: "Rishi Singh",
      age: 25
   }
)
```

Old document replaced fully.

---

# Common Update Operators

---

## `$set`

Updates specific field.

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 26 } }
)
```

---

## `$inc`

Increment value.

```javascript
db.products.updateOne(
   { name: "Laptop" },
   { $inc: { stock: 5 } }
)
```

Stock increases by 5.

---

## `$unset`

Removes field.

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $unset: { age: "" } }
)
```

---

## `$push`

Adds value to array.

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $push: { skills: "MongoDB" } }
)
```

---

# Internal Working

When update query runs:

1. MongoDB finds matching documents
2. Query optimizer checks indexes
3. Matching docs selected
4. Update applied
5. Changes written to disk

---

# Upsert Option

Upsert = Update + Insert.

If document doesn’t exist, create it.

```javascript
db.users.updateOne(
   { name: "Rohan" },
   { $set: { age: 22 } },
   { upsert: true }
)
```

If Rohan not found → new document inserted.

---

# Real-World Example (E-commerce)

Update product stock after purchase:

```javascript
db.products.updateOne(
   { _id: ObjectId("abc123") },
   { $inc: { stock: -1 } }
)
```

In MERN apps using MongoDB + Mongoose:

```javascript
await User.updateOne(
   { email: "rishi@gmail.com" },
   { age: 25 }
);
```

---

# Advantages

✔ Flexible updates
✔ Supports partial updates
✔ Atomic at document level
✔ Powerful operators

---

# Limitations

✘ Poor filters may update wrong documents
✘ Large updates can affect performance

---

# Interview Follow-Up Questions

### Q1: Difference between updateOne and updateMany?

* `updateOne()` → first matching document
* `updateMany()` → all matching documents

---

### Q2: What is Upsert?

Update existing document or insert if absent.

---

### Q3: Difference between `$set` and replaceOne?

* `$set` updates specific fields
* `replaceOne()` replaces full document

---

# Long Summary

Updating documents in MongoDB means modifying existing data using methods like `updateOne()`, `updateMany()`, and `replaceOne()`. MongoDB provides operators such as `$set`, `$inc`, `$unset`, and `$push` for flexible updates. Updates are atomic at the document level and are highly efficient when indexes are used properly.

---

# 20. How do you delete documents?

## Definition

Deleting documents in MongoDB means removing existing documents from a collection.

Example:
Suppose collection contains:

```json
[
   { "name": "Rishi", "age": 24 },
   { "name": "Aman", "age": 26 }
]
```

Deleting removes one or more documents permanently.

---

# Methods to Delete Documents

MongoDB provides:

* `deleteOne()`
* `deleteMany()`

---

# 1. deleteOne()

Deletes first matching document.

### Syntax

```javascript
db.collectionName.deleteOne(filter)
```

---

### Example

```javascript
db.users.deleteOne({ name: "Rishi" })
```

Output:

```json
{
   acknowledged: true,
   deletedCount: 1
}
```

---

# 2. deleteMany()

Deletes all matching documents.

### Example

```javascript
db.users.deleteMany({ city: "Indore" })
```

Deletes all users from Indore.

---

# Delete All Documents

```javascript
db.users.deleteMany({})
```

Deletes all documents in collection.

Collection remains, only data removed.

---

# Difference Between delete and drop

---

## deleteMany({})

Deletes all documents.

```javascript
db.users.deleteMany({})
```

Collection still exists.

---

## drop()

Deletes entire collection.

```javascript
db.users.drop()
```

Collection removed completely.

---

# Internal Working

When delete runs:

1. MongoDB searches matching documents
2. Index used if available
3. Matching docs removed
4. Storage updated

---

# Example with `_id`

Delete specific document:

```javascript
db.users.deleteOne({
   _id: ObjectId("665f123abc456")
})
```

This is fast because `_id` is indexed.

---

# Real-World Example (E-commerce)

Delete cancelled order:

```javascript
db.orders.deleteOne({
   orderId: "ORD101"
})
```

MERN backend example:

```javascript
await User.deleteOne({
   email: "rishi@gmail.com"
});
```

---

# Advantages

✔ Simple deletion
✔ Fast with indexes
✔ Supports single and bulk delete

---

# Limitations

✘ Permanent deletion
✘ Wrong filter can remove critical data

---

# Interview Follow-Up Questions

### Q1: Difference between deleteOne and deleteMany?

* `deleteOne()` → deletes first match
* `deleteMany()` → deletes all matches

---

### Q2: How to delete all documents?

```javascript
db.collection.deleteMany({})
```

---

### Q3: Difference between deleteMany and drop?

* `deleteMany({})` removes documents only
* `drop()` removes collection entirely

---

# Long Summary

Deleting documents in MongoDB means removing records from collections using `deleteOne()` or `deleteMany()`. Deletions are permanent unless backups exist. Proper filters and indexes are important to ensure safe and efficient deletion.

---

# Final Interview Summary (Important)

MongoDB CRUD operations:

* Create → `insertOne()`, `insertMany()`
* Read → `find()`, `findOne()`
* Update → `updateOne()`, `updateMany()`, `replaceOne()`
* Delete → `deleteOne()`, `deleteMany()`

Important interview points:

* Updates use operators like `$set`, `$inc`, `$push`
* Deletes are permanent
* Upsert = update or insert
* Efficient CRUD depends heavily on indexes

These are core MongoDB operations and are extremely common in MERN stack interviews.



# 🔍 3. CRUD Operations & Queries (21–35)

Here are detailed interview-ready answers for **MongoDB CRUD operations and insertion/query methods**. These are explained in an easy but deep way so you can confidently speak for **2–5 minutes per question**.

---

# 21. What are CRUD Operations?

## Definition

CRUD stands for:

* **C → Create**
* **R → Read**
* **U → Update**
* **D → Delete**

These are the four fundamental operations performed on data in any database system, including **MongoDB**.

In MongoDB, CRUD operations are used to manage documents inside collections.

Example:

* Database → `company`
* Collection → `employees`
* Document:

```json
{
  "name": "Rishi",
  "role": "Developer",
  "salary": 50000
}
```

CRUD operations help us:

* Insert data
* Fetch data
* Modify data
* Remove data

---

# CRUD in MongoDB

| Operation | Purpose              | MongoDB Methods               |
| --------- | -------------------- | ----------------------------- |
| Create    | Add new data         | `insertOne()`, `insertMany()` |
| Read      | Retrieve data        | `find()`, `findOne()`         |
| Update    | Modify existing data | `updateOne()`, `updateMany()` |
| Delete    | Remove data          | `deleteOne()`, `deleteMany()` |

---

# Example of CRUD Operations

---

## 1. Create

Insert a document:

```javascript
db.users.insertOne({
  name: "Rishi",
  age: 23
})
```

Result:

```json
{
   acknowledged: true,
   insertedId: ObjectId("...")
}
```

---

## 2. Read

Fetch documents:

```javascript
db.users.find()
```

Fetch specific user:

```javascript
db.users.find({ name: "Rishi" })
```

---

## 3. Update

Update age:

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 24 } }
)
```

---

## 4. Delete

Delete user:

```javascript
db.users.deleteOne({ name: "Rishi" })
```

---

# Internal Working of CRUD in MongoDB

When CRUD operations are executed:

### Create

* MongoDB validates document structure.
* Generates `_id` if not provided.
* Stores document in collection.

### Read

* MongoDB searches documents.
* If index exists → faster.
* Otherwise → collection scan.

### Update

* Finds matching documents.
* Modifies fields.
* Writes updated version.

### Delete

* Finds matching documents.
* Removes them permanently.

---

# Real-World Example (E-commerce)

Suppose you have an online shopping application.

### Create

Customer places order.

```json
{
  "orderId": 101,
  "product": "Laptop"
}
```

### Read

Admin checks order list.

### Update

Customer changes shipping address.

### Delete

Cancel order.

---

# Advantages of CRUD

* Simple and easy to understand
* Core of database operations
* Supported by all databases
* Efficient data management

---

# Limitations

* Basic CRUD doesn’t handle complex analytics
* Large-scale operations need optimization
* Improper queries can affect performance

---

# Common Interview Questions

### Q1: Does MongoDB support CRUD?

Yes, MongoDB fully supports CRUD operations.

### Q2: Is CRUD only for MongoDB?

No. CRUD exists in all databases.

### Q3: Why is CRUD important?

Because every application needs data creation, retrieval, updating, and deletion.

---

# Long Summary

CRUD operations are the foundation of database management. In MongoDB, CRUD is performed on documents stored inside collections. Create adds data, Read fetches data, Update modifies existing data, and Delete removes data. Every application—from social media to e-commerce—depends heavily on CRUD operations.

---

# 22. What is `insertOne()`?

## Definition

`insertOne()` is a MongoDB method used to insert **a single document** into a collection.

Syntax:

```javascript
db.collection.insertOne(document)
```

---

# Example

```javascript
db.students.insertOne({
   name: "Rishi",
   age: 23,
   course: "MCA"
})
```

Inserted document:

```json
{
   "_id": ObjectId("..."),
   "name": "Rishi",
   "age": 23,
   "course": "MCA"
}
```

---

# Internal Working

When `insertOne()` runs:

### Step 1:

MongoDB checks collection existence.

* If collection doesn’t exist → MongoDB creates it automatically.

### Step 2:

Checks document validity.

### Step 3:

Adds `_id` if missing.

Example:

```javascript
{
   _id: ObjectId("...")
}
```

### Step 4:

Stores document in collection.

---

# Return Value

Example:

```javascript
{
  acknowledged: true,
  insertedId: ObjectId("64f8...")
}
```

Meaning:

* `acknowledged: true` → Insert successful
* `insertedId` → Unique ID of inserted document

---

# Practical Example (Node.js)

```javascript
const result = await db.collection("users").insertOne({
    name: "Rishi",
    city: "Indore"
});

console.log(result);
```

---

# Real-World Use Cases

Used when:

* Registering a new user
* Placing an order
* Posting a comment
* Adding a product

Example:
A user signs up on website:

```json
{
  "username": "rishi123",
  "email": "abc@gmail.com"
}
```

Stored using `insertOne()`.

---

# Advantages

* Simple syntax
* Fast for single inserts
* Automatically generates `_id`

---

# Limitations

* Inserts only one document
* Not efficient for bulk operations

For bulk insert:
Use `insertMany()`.

---

# Interview Follow-Up Questions

### Q1: Can MongoDB create collection automatically?

Yes.

### Q2: Is `_id` mandatory?

Yes. MongoDB auto-generates if missing.

### Q3: Can we provide custom `_id`?

Yes.

Example:

```javascript
db.users.insertOne({
   _id: 101,
   name: "Rishi"
})
```

---

# Long Summary

`insertOne()` is used to insert one document into a MongoDB collection. It automatically creates the collection if needed and generates an `_id` if one is not provided. It is commonly used in user registration, order placement, and adding single records.

---

# 23. What is `insertMany()`?

## Definition

`insertMany()` is used to insert **multiple documents at once** into a collection.

Syntax:

```javascript
db.collection.insertMany([doc1, doc2, doc3])
```

---

# Example

```javascript
db.students.insertMany([
   { name: "Rishi", age: 23 },
   { name: "Aman", age: 24 },
   { name: "Rahul", age: 22 }
])
```

---

# Inserted Documents

```json
[
   { "_id": ObjectId("..."), "name": "Rishi", "age": 23 },
   { "_id": ObjectId("..."), "name": "Aman", "age": 24 },
   { "_id": ObjectId("..."), "name": "Rahul", "age": 22 }
]
```

---

# Internal Working

When `insertMany()` executes:

### Step 1:

MongoDB receives array of documents.

### Step 2:

Validates all documents.

### Step 3:

Adds `_id` to each document.

### Step 4:

Bulk insert operation happens.

---

# Return Value

```json
{
  acknowledged: true,
  insertedIds: {
    "0": ObjectId("..."),
    "1": ObjectId("..."),
    "2": ObjectId("...")
  }
}
```

---

# Ordered vs Unordered Inserts

MongoDB supports:

---

## Ordered (Default)

Documents inserted in sequence.

If one fails → insertion stops.

Example:

```javascript
db.users.insertMany(docs, { ordered: true })
```

---

## Unordered

Continues even if one insert fails.

Example:

```javascript
db.users.insertMany(docs, { ordered: false })
```

---

# Practical Example (Node.js)

```javascript
await db.collection("products").insertMany([
   { name: "Laptop", price: 50000 },
   { name: "Mouse", price: 500 }
]);
```

---

# Real-World Use Cases

Used in:

* Importing CSV data
* Bulk product uploads
* Large-scale migrations
* Initial database seeding

Example:
Admin uploads 500 products into e-commerce database.

---

# Advantages

* Faster than multiple `insertOne()`
* Efficient bulk insertion
* Reduces database calls

---

# Limitations

* Large batches consume memory
* Ordered mode stops on error

---

# Interview Follow-Up Questions

### Q1: Difference between `insertOne()` and `insertMany()`?

* `insertOne()` → single document
* `insertMany()` → multiple documents

### Q2: Which is faster for bulk insert?

`insertMany()`

---

# Long Summary

`insertMany()` inserts multiple documents in one operation. It improves performance by reducing multiple database calls. It is widely used for migrations, data imports, and batch uploads.

---

# 24. What is `find()`?

## Definition

`find()` is used to retrieve documents from a MongoDB collection.

It is one of the most frequently used MongoDB methods.

Syntax:

```javascript
db.collection.find(query, projection)
```

Where:

* `query` → filter condition
* `projection` → fields to return

---

# Example 1: Get All Documents

```javascript
db.students.find()
```

Returns all documents.

---

# Example 2: Find Specific Documents

```javascript
db.students.find({ age: 23 })
```

Returns all students with age 23.

---

# Example 3: Projection

```javascript
db.students.find(
   { age: 23 },
   { name: 1, age: 1, _id: 0 }
)
```

Output:

```json
{
   "name": "Rishi",
   "age": 23
}
```

---

# Internal Working

When `find()` executes:

### Step 1:

MongoDB scans collection or index.

### Step 2:

Matches documents against query.

### Step 3:

Returns cursor to results.

Important:
`find()` returns a **cursor**, not actual documents immediately.

---

# What is Cursor?

Cursor points to result set.

Example:

```javascript
const cursor = db.users.find();
```

You can iterate:

```javascript
cursor.forEach(doc => print(doc));
```

---

# Query Operators with `find()`

---

## Greater Than

```javascript
db.students.find({ age: { $gt: 22 } })
```

---

## Less Than

```javascript
db.students.find({ age: { $lt: 25 } })
```

---

## AND Condition

```javascript
db.students.find({
   age: 23,
   course: "MCA"
})
```

---

## OR Condition

```javascript
db.students.find({
   $or: [
      { age: 23 },
      { course: "BCA" }
   ]
})
```

---

# Practical Example (Node.js)

```javascript
const users = await db.collection("users")
                      .find({ city: "Indore" })
                      .toArray();

console.log(users);
```

---

# Real-World Use Cases

Used in:

* Search functionality
* Product filtering
* User dashboards
* Reports

Example:
E-commerce product search:

```javascript
db.products.find({
   category: "Laptop",
   price: { $lt: 60000 }
})
```

---

# Advantages

* Powerful querying
* Supports filtering and projections
* Works with indexes for speed

---

# Limitations

* Full collection scan if no index
* Complex queries may be expensive

---

# Interview Follow-Up Questions

### Q1: Difference between `find()` and `findOne()`?

* `find()` → multiple documents
* `findOne()` → single document

### Q2: Does `find()` return array?

No, it returns a cursor.

### Q3: How to convert cursor into array?

```javascript
.toArray()
```

---

# Long Summary

`find()` is MongoDB’s primary method for reading data. It retrieves documents using filters and projections. It returns a cursor, which allows efficient handling of large result sets. It is heavily used in search, filtering, and data retrieval operations.


Here are detailed interview-ready answers for MongoDB query and update methods.

---

# 25. What is `findOne()`?

## Definition

`findOne()` is a MongoDB method used to retrieve **only one document** from a collection that matches a given query.

Even if multiple documents match the condition, MongoDB returns only the **first matching document**.

Syntax:

```javascript
db.collection.findOne(query, projection)
```

Where:

* `query` → condition/filter
* `projection` → fields to return

---

# Example 1: Find One Document

```javascript
db.students.findOne({ age: 23 })
```

Suppose collection contains:

```json
[
  { "name": "Rishi", "age": 23 },
  { "name": "Aman", "age": 23 },
  { "name": "Rahul", "age": 22 }
]
```

Output:

```json
{
   "name": "Rishi",
   "age": 23
}
```

Only first matched document is returned.

---

# Example 2: Projection

```javascript
db.students.findOne(
   { age: 23 },
   { name: 1, _id: 0 }
)
```

Output:

```json
{
   "name": "Rishi"
}
```

---

# Internal Working

When `findOne()` runs:

### Step 1:

MongoDB checks query condition.

### Step 2:

Searches collection or index.

### Step 3:

Stops immediately after first match.

This makes it more efficient than `find()` when only one document is needed.

---

# Difference Between `find()` and `findOne()`

| Feature                 | find() | findOne() |
| ----------------------- | ------ | --------- |
| Return Type             | Cursor | Document  |
| Multiple Results        | Yes    | No        |
| Stops After First Match | No     | Yes       |

---

# Practical Example (Node.js)

```javascript
const user = await db.collection("users")
                     .findOne({ email: "abc@gmail.com" });

console.log(user);
```

---

# Real-World Use Cases

Used in:

* Login systems
* Fetching single user profile
* Checking if product exists
* Searching by unique ID

Example:

```javascript
db.users.findOne({ username: "rishi123" })
```

---

# Advantages

* Fast for single record lookup
* Simple syntax
* Efficient with indexes

---

# Limitations

* Returns only one document
* If multiple matches exist, only first is returned

---

# Common Interview Questions

### Q1: What if no document matches?

Returns:

```javascript
null
```

### Q2: Does `findOne()` return cursor?

No. It returns a document.

### Q3: Is `findOne()` faster than `find()`?

Usually yes, because it stops at first match.

---

# Long Summary

`findOne()` retrieves a single matching document from MongoDB. Unlike `find()`, it does not return multiple results or a cursor. It is commonly used when fetching unique records like user profiles, login credentials, or products by ID.

---

# 26. What is `updateOne()`?

## Definition

`updateOne()` updates **one matching document** in a MongoDB collection.

Even if multiple documents match, only the first matching document gets updated.

Syntax:

```javascript
db.collection.updateOne(filter, update, options)
```

Where:

* `filter` → selects document
* `update` → specifies changes
* `options` → optional settings

---

# Example

```javascript
db.students.updateOne(
   { name: "Rishi" },
   { $set: { age: 24 } }
)
```

Before:

```json
{
   "name": "Rishi",
   "age": 23
}
```

After:

```json
{
   "name": "Rishi",
   "age": 24
}
```

---

# Common Update Operators

---

## `$set`

Updates field value.

```javascript
{ $set: { age: 24 } }
```

---

## `$inc`

Increases value.

```javascript
{ $inc: { salary: 5000 } }
```

---

## `$unset`

Removes field.

```javascript
{ $unset: { age: "" } }
```

---

# Internal Working

When `updateOne()` runs:

### Step 1:

MongoDB searches for matching document.

### Step 2:

Stops at first match.

### Step 3:

Applies update operators.

### Step 4:

Writes updated document.

---

# Return Value

```json
{
  acknowledged: true,
  matchedCount: 1,
  modifiedCount: 1
}
```

---

# Upsert Option

If no document exists, MongoDB can insert one.

Example:

```javascript
db.users.updateOne(
   { name: "Rishi" },
   { $set: { age: 23 } },
   { upsert: true }
)
```

---

# Practical Example (Node.js)

```javascript
await db.collection("users").updateOne(
   { email: "abc@gmail.com" },
   { $set: { city: "Indore" } }
);
```

---

# Real-World Use Cases

Used for:

* Updating profile info
* Changing password
* Updating product price
* Changing order status

Example:

```javascript
db.orders.updateOne(
   { orderId: 101 },
   { $set: { status: "Delivered" } }
)
```

---

# Advantages

* Efficient single-document updates
* Supports powerful operators
* Works well with indexes

---

# Limitations

* Updates only one document
* Wrong filter may update wrong record

---

# Common Interview Questions

### Q1: Difference between `updateOne()` and `updateMany()`?

* `updateOne()` → one document
* `updateMany()` → multiple documents

### Q2: What is upsert?

Insert if no matching document exists.

---

# Long Summary

`updateOne()` updates the first document that matches a filter. It supports update operators like `$set`, `$inc`, and `$unset`. It is widely used in applications where only one record needs modification.

---

# 27. What is `updateMany()`?

## Definition

`updateMany()` updates **all documents** matching a filter.

Syntax:

```javascript
db.collection.updateMany(filter, update, options)
```

---

# Example

```javascript
db.students.updateMany(
   { course: "MCA" },
   { $set: { active: true } }
)
```

Before:

```json
[
  { "name": "Rishi", "course": "MCA" },
  { "name": "Aman", "course": "MCA" }
]
```

After:

```json
[
  { "name": "Rishi", "course": "MCA", "active": true },
  { "name": "Aman", "course": "MCA", "active": true }
]
```

---

# Internal Working

### Step 1:

MongoDB scans matching documents.

### Step 2:

Applies update to every matching document.

### Step 3:

Stores modified documents.

---

# Return Value

```json
{
  acknowledged: true,
  matchedCount: 10,
  modifiedCount: 10
}
```

---

# Practical Example

Increase salary of all developers:

```javascript
db.employees.updateMany(
   { role: "Developer" },
   { $inc: { salary: 5000 } }
)
```

---

# Real-World Use Cases

Used in:

* Bulk updates
* Applying discounts
* Status changes
* Data migration

Example:

```javascript
db.orders.updateMany(
   { status: "Pending" },
   { $set: { status: "Processing" } }
)
```

---

# Advantages

* Efficient bulk updates
* Reduces multiple database calls
* Great for large operations

---

# Limitations

* Can accidentally update many records
* Large updates may impact performance

---

# Common Interview Questions

### Q1: Can `updateMany()` use operators?

Yes.

### Q2: Can it update all documents?

Yes.

Example:

```javascript
db.users.updateMany({}, { $set: { verified: true } })
```

---

# Long Summary

`updateMany()` modifies all documents matching a condition. It is highly useful for bulk operations such as migrations, status updates, and batch changes. It reduces multiple update calls and improves efficiency.

---

# 28. What is `replaceOne()`?

## Definition

`replaceOne()` replaces an entire document with a new document.

Unlike `updateOne()`, it does **not modify specific fields**.
It replaces the complete document except `_id`.

Syntax:

```javascript
db.collection.replaceOne(filter, replacement, options)
```

---

# Example

Original document:

```json
{
   "_id": 1,
   "name": "Rishi",
   "age": 23,
   "city": "Indore"
}
```

Replace:

```javascript
db.users.replaceOne(
   { _id: 1 },
   {
      name: "Rishi Singh",
      role: "Developer"
   }
)
```

New document:

```json
{
   "_id": 1,
   "name": "Rishi Singh",
   "role": "Developer"
}
```

Notice:

* `age` removed
* `city` removed
* Entire document replaced

---

# Internal Working

### Step 1:

MongoDB finds matching document.

### Step 2:

Deletes old document structure.

### Step 3:

Replaces with new document.

### Step 4:

Keeps `_id` unchanged.

---

# Difference: `updateOne()` vs `replaceOne()`

| Feature                 | updateOne() | replaceOne() |
| ----------------------- | ----------- | ------------ |
| Updates specific fields | Yes         | No           |
| Replaces whole document | No          | Yes          |
| Uses update operators   | Yes         | No           |

---

# Practical Example (Node.js)

```javascript
await db.collection("users").replaceOne(
   { email: "abc@gmail.com" },
   {
      name: "Rishi",
      role: "Backend Developer"
   }
);
```

---

# Real-World Use Cases

Used in:

* Full document replacement
* Data restructuring
* Migration tasks

Example:
Replacing old schema with new schema.

---

# Advantages

* Good for complete replacement
* Useful in migrations
* Cleaner for schema redesign

---

# Limitations

* Risk of data loss
* Missing fields get removed

---

# Common Interview Questions

### Q1: Does `_id` change?

No.

### Q2: Can we use `$set` with `replaceOne()`?

No.

### Q3: When to prefer `replaceOne()`?

When replacing full document.

---

# Long Summary

`replaceOne()` replaces an entire MongoDB document with a new one while preserving `_id`. Unlike `updateOne()`, which modifies specific fields, `replaceOne()` overwrites the whole document. It is useful in schema redesign and migration scenarios.

Here are detailed interview-ready answers for **MongoDB delete operations, projection, and sorting**.

---

# 29. What is `deleteOne()`?

## Definition

`deleteOne()` is a MongoDB method used to delete **a single document** from a collection that matches a specified condition.

Even if multiple documents match the filter, MongoDB deletes only the **first matching document**.

Syntax:

```javascript
db.collection.deleteOne(filter)
```

Where:

* `filter` → Condition used to find document for deletion.

---

# Example

```javascript
db.students.deleteOne({ name: "Rishi" })
```

Suppose collection contains:

```json
[
  { "name": "Rishi", "age": 23 },
  { "name": "Aman", "age": 24 },
  { "name": "Rishi", "age": 25 }
]
```

After execution:

```json
[
  { "name": "Aman", "age": 24 },
  { "name": "Rishi", "age": 25 }
]
```

Only one document deleted.

---

# Internal Working

When `deleteOne()` runs:

### Step 1:

MongoDB searches for matching document.

### Step 2:

Stops at first match.

### Step 3:

Deletes document from collection.

### Step 4:

Updates indexes and storage.

---

# Return Value

```json
{
  acknowledged: true,
  deletedCount: 1
}
```

Meaning:

* `acknowledged: true` → Delete successful
* `deletedCount: 1` → One document removed

---

# Practical Example (Node.js)

```javascript
const result = await db.collection("users")
                       .deleteOne({ email: "abc@gmail.com" });

console.log(result);
```

---

# Real-World Use Cases

Used in:

* Removing a user account
* Deleting a single order
* Removing one product
* Deleting a comment

Example:

```javascript
db.orders.deleteOne({ orderId: 101 })
```

---

# Advantages

* Fast for single deletion
* Simple syntax
* Efficient with indexes

---

# Limitations

* Deletes only one document
* Wrong filter may delete wrong record

---

# Common Interview Questions

### Q1: What if no document matches?

Output:

```json
{
  acknowledged: true,
  deletedCount: 0
}
```

### Q2: Does `deleteOne()` remove all matches?

No, only one.

### Q3: Can `_id` be used as filter?

Yes.

Example:

```javascript
db.users.deleteOne({ _id: ObjectId("64abc123") })
```

---

# Long Summary

`deleteOne()` removes a single document matching a filter. Even if multiple documents satisfy the condition, only the first match is deleted. It is commonly used when deleting individual records like users, orders, or products.

---

# 30. What is `deleteMany()`?

## Definition

`deleteMany()` deletes **all documents** matching a given filter.

Syntax:

```javascript
db.collection.deleteMany(filter)
```

---

# Example

```javascript
db.students.deleteMany({ course: "MCA" })
```

Before:

```json
[
  { "name": "Rishi", "course": "MCA" },
  { "name": "Aman", "course": "MCA" },
  { "name": "Rahul", "course": "BCA" }
]
```

After:

```json
[
  { "name": "Rahul", "course": "BCA" }
]
```

All MCA students removed.

---

# Internal Working

### Step 1:

MongoDB scans collection for matching documents.

### Step 2:

Finds all matching records.

### Step 3:

Deletes them.

### Step 4:

Updates indexes.

---

# Return Value

```json
{
  acknowledged: true,
  deletedCount: 2
}
```

---

# Delete All Documents

```javascript
db.users.deleteMany({})
```

This removes all documents from collection.

---

# Practical Example (Node.js)

```javascript
await db.collection("orders")
        .deleteMany({ status: "Cancelled" });
```

---

# Real-World Use Cases

Used in:

* Removing inactive users
* Clearing logs
* Deleting old records
* Cleaning temporary data

Example:

```javascript
db.logs.deleteMany({ year: 2022 })
```

---

# Advantages

* Efficient bulk deletion
* Reduces multiple delete calls
* Useful for cleanup tasks

---

# Limitations

* Risk of accidental mass deletion
* Large deletes may affect performance

---

# Common Interview Questions

### Q1: Can it delete all documents?

Yes.

```javascript
db.users.deleteMany({})
```

### Q2: Difference from `deleteOne()`?

* `deleteOne()` → one document
* `deleteMany()` → all matching documents

---

# Long Summary

`deleteMany()` removes all documents matching a condition. It is useful for bulk cleanup, log removal, deleting inactive records, and database maintenance tasks.

---

# 31. What is Projection in MongoDB?

## Definition

Projection in MongoDB means selecting **specific fields** to return from documents instead of returning entire documents.

It helps reduce unnecessary data transfer.

Syntax:

```javascript
db.collection.find(query, projection)
```

---

# Example Without Projection

```javascript
db.students.find({ name: "Rishi" })
```

Output:

```json
{
  "_id": 1,
  "name": "Rishi",
  "age": 23,
  "course": "MCA",
  "city": "Indore"
}
```

---

# Example With Projection

```javascript
db.students.find(
   { name: "Rishi" },
   { name: 1, age: 1, _id: 0 }
)
```

Output:

```json
{
  "name": "Rishi",
  "age": 23
}
```

Only selected fields returned.

---

# Include Fields

Use `1` to include.

```javascript
{ name: 1, age: 1 }
```

---

# Exclude Fields

Use `0` to exclude.

```javascript
{ city: 0 }
```

---

# Important Rule

You cannot mix include and exclude together (except `_id`).

Valid:

```javascript
{ name: 1, age: 1, _id: 0 }
```

Invalid:

```javascript
{ name: 1, city: 0 }
```

---

# Internal Working

When projection is applied:

### Step 1:

MongoDB finds matching documents.

### Step 2:

Filters fields.

### Step 3:

Returns only requested fields.

This improves performance.

---

# Practical Example

```javascript
db.products.find(
   { category: "Laptop" },
   { name: 1, price: 1, _id: 0 }
)
```

---

# Real-World Use Cases

Used in:

* API optimization
* Reducing network usage
* Faster response time

Example:
Frontend needs only:

* product name
* price

No need to send full document.

---

# Advantages

* Improves performance
* Reduces memory usage
* Saves bandwidth

---

# Limitations

* Complex projections can be tricky
* Must carefully choose fields

---

# Common Interview Questions

### Q1: Why use projection?

To return only required fields.

### Q2: Can we exclude `_id`?

Yes.

```javascript
{ _id: 0 }
```

---

# Long Summary

Projection allows MongoDB queries to return only selected fields instead of full documents. This improves performance, reduces bandwidth, and optimizes applications, especially APIs and large datasets.

---

# 32. How do you sort documents?

## Definition

Sorting means arranging documents in ascending or descending order based on one or more fields.

MongoDB uses `.sort()` for sorting.

Syntax:

```javascript
db.collection.find().sort({ field: order })
```

Where:

* `1` → Ascending order
* `-1` → Descending order

---

# Example: Ascending Sort

```javascript
db.students.find().sort({ age: 1 })
```

Sorts by age smallest to largest.

---

# Example: Descending Sort

```javascript
db.students.find().sort({ age: -1 })
```

Sorts by age largest to smallest.

---

# Example Data

```json
[
  { "name": "Rishi", "age": 23 },
  { "name": "Aman", "age": 21 },
  { "name": "Rahul", "age": 25 }
]
```

Ascending:

```json
[
  { "name": "Aman", "age": 21 },
  { "name": "Rishi", "age": 23 },
  { "name": "Rahul", "age": 25 }
]
```

---

# Sorting by Multiple Fields

```javascript
db.students.find().sort({
   age: 1,
   name: 1
})
```

First sort by age, then name.

---

# Internal Working

When `.sort()` runs:

### Step 1:

MongoDB retrieves matching documents.

### Step 2:

Sort operation applied.

### Step 3:

Returns sorted result.

If index exists on sort field:

* Faster sorting

Without index:

* In-memory sorting

---

# Practical Example (Node.js)

```javascript
const users = await db.collection("users")
                      .find()
                      .sort({ age: -1 })
                      .toArray();
```

---

# Real-World Use Cases

Used in:

* Price sorting
* Latest posts
* Ranking systems
* Reports

Example:
E-commerce:

```javascript
db.products.find().sort({ price: 1 })
```

Sort products by lowest price.

---

# Advantages

* Easy data organization
* Improves user experience
* Supports multiple fields

---

# Limitations

* Large sorting without indexes is expensive
* Memory usage may increase

---

# Common Interview Questions

### Q1: What values are used in sort?

* `1` → ascending
* `-1` → descending

### Q2: Can MongoDB sort by multiple fields?

Yes.

---

# Long Summary

Sorting in MongoDB is done using `.sort()`, which arranges documents in ascending or descending order based on field values. Sorting is important for search results, rankings, reports, and user-friendly data presentation. Indexes greatly improve sorting performance.


Here are detailed interview-ready answers for **MongoDB result limiting, pagination, and query operators**.

---

# 33. How do you limit query results?

## Definition

In MongoDB, we use the **`limit()`** method to restrict the number of documents returned by a query.

This is useful when you don’t want all matching documents and only need a fixed number of results.

Syntax:

```javascript
db.collection.find(query).limit(number)
```

Where:

* `query` → filter condition
* `number` → maximum number of documents to return

---

# Example 1: Limit Results

```javascript
db.students.find().limit(3)
```

This returns only the first **3 documents**.

Suppose collection has:

```json
[
  { "name": "Rishi" },
  { "name": "Aman" },
  { "name": "Rahul" },
  { "name": "Karan" },
  { "name": "Vivek" }
]
```

Output:

```json
[
  { "name": "Rishi" },
  { "name": "Aman" },
  { "name": "Rahul" }
]
```

---

# Example 2: Limit with Filter

```javascript
db.students.find({ course: "MCA" }).limit(2)
```

Returns only 2 MCA students.

---

# Example 3: Limit with Sort

```javascript
db.products.find()
           .sort({ price: -1 })
           .limit(5)
```

Returns top 5 most expensive products.

---

# Internal Working

When `limit()` is used:

### Step 1:

MongoDB applies query filter.

### Step 2:

Applies sorting (if any).

### Step 3:

Stops returning documents after limit count.

This improves performance because fewer documents are transferred.

---

# Practical Example (Node.js)

```javascript
const users = await db.collection("users")
                      .find()
                      .limit(10)
                      .toArray();
```

---

# Real-World Use Cases

Used in:

* Homepage product listings
* Latest posts
* Top rankings
* Dashboard previews

Example:
Show latest 10 orders:

```javascript
db.orders.find().limit(10)
```

---

# Advantages

* Faster queries
* Reduces network load
* Improves performance

---

# Limitations

* Doesn’t skip documents
* Alone, not enough for pagination

---

# Common Interview Questions

### Q1: Can `limit()` work with `sort()`?

Yes.

### Q2: Is `limit()` useful for large datasets?

Yes, very useful.

---

# Long Summary

`limit()` restricts the number of documents returned by MongoDB queries. It is commonly used to improve performance, reduce bandwidth, and show only necessary results such as top products or latest records.

---

# 34. What is Pagination in MongoDB?

## Definition

Pagination means dividing large result sets into smaller chunks called **pages**.

Instead of showing thousands of records at once, we display data page by page.

MongoDB pagination is commonly implemented using:

* `skip()`
* `limit()`

---

# Why Pagination?

Suppose you have:

* 1 million products

Showing all at once is inefficient.

Better:

* Page 1 → 10 products
* Page 2 → next 10 products
* Page 3 → next 10 products

---

# Basic Pagination Formula

```javascript
skip = (pageNumber - 1) * pageSize
```

---

# Syntax

```javascript
db.collection.find()
             .skip(number)
             .limit(number)
```

---

# Example

Page size = 5

### Page 1

```javascript
db.products.find().skip(0).limit(5)
```

### Page 2

```javascript
db.products.find().skip(5).limit(5)
```

### Page 3

```javascript
db.products.find().skip(10).limit(5)
```

---

# Internal Working

### Step 1:

MongoDB applies filter.

### Step 2:

Skips required documents.

### Step 3:

Returns limited documents.

Example:

* Total records = 100
* Page = 3
* Limit = 10

Skip:

```javascript
(3 - 1) × 10 = 20
```

MongoDB skips first 20 documents and returns next 10.

---

# Practical Example (Node.js)

```javascript
const page = 2;
const limit = 5;
const skip = (page - 1) * limit;

const products = await db.collection("products")
                         .find()
                         .skip(skip)
                         .limit(limit)
                         .toArray();
```

---

# Real-World Use Cases

Used in:

* E-commerce product pages
* Blog posts
* Admin dashboards
* Search results

Example:
Amazon product listing pages use pagination.

---

# Skip/Limit Problem with Large Data

Problem:
`skip()` becomes slow for large page numbers.

Example:
Page 10,000 means MongoDB skips huge number of documents.

---

# Better Pagination: Cursor-Based Pagination

Example:

```javascript
db.posts.find({ _id: { $gt: lastSeenId } }).limit(10)
```

This is more efficient for large datasets.

---

# Advantages

* Improves user experience
* Reduces server load
* Handles large datasets efficiently

---

# Limitations

* `skip()` slow for deep pagination
* Needs careful design for scalability

---

# Common Interview Questions

### Q1: Which methods are used in pagination?

* `skip()`
* `limit()`

### Q2: Best pagination for large data?

Cursor-based pagination.

---

# Long Summary

Pagination divides large datasets into smaller pages for better performance and user experience. MongoDB commonly uses `skip()` and `limit()` for pagination, though cursor-based pagination is preferred for very large datasets.

---

# 35. How do you filter documents using query operators?

## Definition

MongoDB provides **query operators** to filter documents based on conditions.

These operators help perform advanced searches like:

* Greater than
* Less than
* AND
* OR
* IN
* NOT

Syntax:

```javascript
db.collection.find({
   field: { operator: value }
})
```

---

# Common Query Operators

| Operator | Meaning               |
| -------- | --------------------- |
| `$eq`    | Equal                 |
| `$ne`    | Not equal             |
| `$gt`    | Greater than          |
| `$gte`   | Greater than or equal |
| `$lt`    | Less than             |
| `$lte`   | Less than or equal    |
| `$in`    | Value in array        |
| `$nin`   | Value not in array    |
| `$and`   | Logical AND           |
| `$or`    | Logical OR            |
| `$not`   | Logical NOT           |

---

# Example Data

```json
[
  { "name": "Rishi", "age": 23, "course": "MCA" },
  { "name": "Aman", "age": 21, "course": "BCA" },
  { "name": "Rahul", "age": 25, "course": "MCA" }
]
```

---

# Equal (`$eq`)

```javascript
db.students.find({
   age: { $eq: 23 }
})
```

---

# Not Equal (`$ne`)

```javascript
db.students.find({
   course: { $ne: "MCA" }
})
```

---

# Greater Than (`$gt`)

```javascript
db.students.find({
   age: { $gt: 22 }
})
```

---

# Less Than (`$lt`)

```javascript
db.students.find({
   age: { $lt: 25 }
})
```

---

# Greater Than Equal (`$gte`)

```javascript
db.students.find({
   age: { $gte: 23 }
})
```

---

# Less Than Equal (`$lte`)

```javascript
db.students.find({
   age: { $lte: 23 }
})
```

---

# IN Operator (`$in`)

```javascript
db.students.find({
   course: { $in: ["MCA", "BCA"] }
})
```

---

# NOT IN (`$nin`)

```javascript
db.students.find({
   course: { $nin: ["MCA"] }
})
```

---

# AND Operator (`$and`)

```javascript
db.students.find({
   $and: [
      { age: { $gt: 22 } },
      { course: "MCA" }
   ]
})
```

Equivalent shorthand:

```javascript
db.students.find({
   age: { $gt: 22 },
   course: "MCA"
})
```

---

# OR Operator (`$or`)

```javascript
db.students.find({
   $or: [
      { age: 21 },
      { course: "MCA" }
   ]
})
```

---

# NOT Operator (`$not`)

```javascript
db.students.find({
   age: { $not: { $gt: 23 } }
})
```

---

# Internal Working

When using query operators:

### Step 1:

MongoDB parses query.

### Step 2:

Checks indexes if available.

### Step 3:

Evaluates conditions.

### Step 4:

Returns matching documents.

---

# Practical Example (Node.js)

```javascript
const users = await db.collection("users")
                      .find({
                         age: { $gt: 20 }
                      })
                      .toArray();
```

---

# Real-World Use Cases

Used in:

* Search filters
* Product filtering
* Analytics queries
* Reports

Example:
E-commerce filter:

```javascript
db.products.find({
   price: { $lt: 50000 },
   category: "Laptop"
})
```

---

# Advantages

* Powerful filtering
* Flexible querying
* Supports complex conditions

---

# Limitations

* Complex queries may slow performance
* Needs indexes for optimization

---

# Common Interview Questions

### Q1: Difference between `$in` and `$or`?

* `$in` → multiple values of same field
* `$or` → multiple conditions

### Q2: Which operators are most used?

* `$gt`
* `$lt`
* `$in`
* `$or`

---

# Long Summary

MongoDB query operators provide powerful filtering capabilities for retrieving specific documents based on conditions. They support comparison, logical, and array-based operations, making MongoDB queries highly flexible and efficient for real-world applications like search, filtering, and analytics.
