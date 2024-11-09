CLI Todo
A command-line-based to-do list application that allows users to efficiently manage tasks directly from the terminal. This project provides basic CRUD (Create, Read, Update, Delete) functionality for personal task management.

Features
Add Tasks: Easily add tasks to your to-do list.
View Tasks: Display all current tasks with their statuses.
Update Tasks: Mark tasks as completed or edit task details.
Delete Tasks: Remove tasks that are no longer needed.
Simple and Fast: Optimized for quick task management via CLI.
Requirements
Node.js: Ensure Node.js is installed on your system.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/vishwajeetvc/cli-todo.git
Navigate into the project directory:
bash
Copy code
cd cli-todo
Install dependencies:
bash
Copy code
npm install
Usage
Start the CLI Todo app:

bash
Copy code
node todo.js
Commands:

Add a Task: node todo.js add "Your task description"
View Tasks: node todo.js list
Update Task Status: node todo.js update <task-id>
Delete a Task: node todo.js delete <task-id>
Examples:

bash
Copy code
# Add a new task
node todo.js add "Complete project documentation"

# List all tasks
node todo.js list

# Update a task
node todo.js update 1

# Delete a task
node todo.js delete 1
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.

