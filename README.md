# Student Record Manager

A simple command-line application built with **Node.js** to manage student records using the File System module.

This project was created to practice Node.js fundamentals, including ES Modules, file handling, JSON operations, command-line arguments, and npm scripts.

## Features

- Add new student records.
- Store student names and marks.
- Read existing student records from a JSON file.
- Append new records without removing existing data.
- Use command-line arguments to receive student information.
- Display saved student records.

## Tech Stack

- **Node.js** – JavaScript runtime.
- **File System (`fs`)** – Reading and writing files.
- **JSON** – Storing student records.
- **ES Modules** – Importing and exporting modules.
- **npm** – Project and script management.

## Project Structure

```text
student-manager/
│
├── index.js
├── package.json
│
├── utils/
│   └── student.js
│
└── data/
    └── students.json
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

### 4. Run the application

```bash
npm start
```

## Usage

Pass the student's name and marks as command-line arguments:

```bash
npm start "Ruki" 85
```

The application reads the existing records, adds the new student, and saves the updated data in `students.json`.

## Learning Outcomes

Through this project, I practiced:

- Working with Node.js built-in modules.
- Importing and exporting functions using ES Modules.
- Handling command-line arguments with `process.argv`.
- Reading and writing files using `fs`.
- Working with JSON using `JSON.parse()` and `JSON.stringify()`.
- Understanding asynchronous operations and callbacks.
- Creating and executing custom npm scripts.

## Author

**Ruki**

- GitHub: [@Ruki77](https://github.com/Ruki77)

---

*This is a beginner-level practice project built as part of my Node.js learning journey.*
