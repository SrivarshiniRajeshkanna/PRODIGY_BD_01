# 🛠️ CRUD API – Prodigy Infotech Task 01

This project is part of my **Backend Development Internship** at **Prodigy Infotech**.

It demonstrates a **Node.js** based RESTful API to perform basic **CRUD (Create, Read, Update, Delete)** operations on a `users` resource using an **in-memory storage** system (a simple JavaScript object/Map).

---

## 🔗 Project Link

🔹 GitHub Repo: [PRODIGY_BD_01](https://github.com/SrivarshiniRajeshkanna/PRODIGY_BD_01)

---

## 📌 Features

- Create a new user
- Fetch all users
- Fetch a user by ID
- Update user details
- Delete a user
- Data stored in memory using a JavaScript `Map` or `Object`
- UUID used for unique user IDs
- Proper HTTP status codes for all responses

---

## 🧑‍💻 Tech Stack

- Node.js
- Express.js
- UUID
- JavaScript (ES6+)
- Postman (for testing APIs)

---

## 🔄 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/users`         | Get all users           |
| GET    | `/users/:id`     | Get user by ID          |
| POST   | `/users`         | Create a new user       |
| PUT    | `/users/:id`     | Update an existing user |
| DELETE | `/users/:id`     | Delete a user           |

---

## 📝 Sample User Object

```json
{
  "id": "auto-generated",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

#🚀 How to Run the Project
1) Clone the project
2) cd PRODIGY_BD_01
3) npm install
4) node index.js 
5) start the localhost server 