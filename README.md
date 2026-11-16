# Student Record Manager

A beginner-level backend practice project built using **Node.js** and **Express.js**. It started as a command-line application for managing student records and was later extended into a REST API.

The project was built to practise backend fundamentals, including file handling, JSON operations, command-line arguments, npm scripts, HTTP methods, routing, middleware, request handling, and basic input validation.

## Project Features

### 1. Node.js CLI Application

- Add new student records through command-line arguments.
- Store student names and marks in a JSON file.
- Read existing student records.
- Append new records without removing existing data.
- Use Node.js File System operations for data persistence.

### 2. Express.js REST API

- Create an HTTP server using Express.js.
- Handle GET, POST, and DELETE requests.
- Retrieve student records through API routes.
- Handle route parameters and query parameters.
- Accept JSON request bodies using Express middleware.
- Validate incoming student data.
- Handle invalid JSON and unknown routes.

## Tech Stack

- **Node.js** – JavaScript runtime.
- **Express.js** – Backend framework for building the REST API.
- **File System (`fs`)** – Reading and writing files.
- **JSON** – Storing student records.
- **ES Modules** – Importing and exporting modules.
- **npm** – Dependency and script management.
- **Nodemon** – Automatically restarting the server during development.
- **Hoppscotch** – Testing API endpoints.

## Project Structure

```text
student-manager/
│
├── index.js              # Express server
├── cli.js                # Node.js CLI application
├── package.json
├── package-lock.json
├── .gitignore
│
├── utils/
│   └── student.js        # Shared student utility functions
│
└── data/
    └── students.json     # Student records
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ruki77/Node.js-mini-project---student-record-manager.git
```

### 2. Navigate to the project directory

```bash
cd Node.js-mini-project---student-record-manager
```

### 3. Install dependencies

```bash
npm install
```

## Running the Applications

### Run the Express.js server

```bash
npm start
```

Starts the Express server using Nodemon.

### Run the Node.js CLI application

```bash
npm run cli -- "Ruki" 85
```

Pass the student's name and marks as command-line arguments.

The CLI application reads the existing records, adds the new student, and saves the updated data in `students.json`.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Access the root route |
| GET | `/students` | Retrieve student records |
| GET | `/students/:name` | Access a student using their name |
| GET | `/students?course=""` | Access a student using their course | Not complete
| POST | `/students` | Add a new student |
| DELETE | `/students/:id` | Delete a student using their ID |

**Example POST request body:**

```json
{
  "name": "Ruki",
  "marks": 85
}
```

The API can be tested using tools such as Hoppscotch.

## Learning Outcomes

Through this project, I practised:

- Working with Node.js built-in modules.
- Importing and exporting modules using ES Modules.
- Handling command-line arguments with `process.argv`.
- Reading and writing files using the File System module.
- Working with JSON using `JSON.parse()` and `JSON.stringify()`.
- Understanding asynchronous operations and callbacks.
- Creating and executing custom npm scripts.
- Building a server using Express.js.
- Understanding HTTP methods, routes, and request-response cycles.
- Working with `req.params`, `req.query`, and `req.body`.
- Using Express middleware.
- Implementing basic input validation and error handling.
- Testing REST API endpoints.

## Author

**Ruki**

- GitHub: [@Ruki77](https://github.com/Ruki77)

---

*This is a beginner-level practice project developed while learning Node.js and Express.js backend development.*
