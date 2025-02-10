const tasks = [
    { taskName: "Write report", completed: true, priority: 2 },
    { taskName: "Attend meeting", completed: false, priority: 3 },
    { taskName: "Fix bug", completed: false, priority: 1 },
    { taskName: "Update website", completed: true, priority: 4 }
];

const highPriorityTask = tasks.find(task => task.priority < 3);

const firstIncompleteIndex = tasks.findIndex(task => !task.completed);

const completedTaskCount = tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0);

tasks.forEach(task => console.log(task.taskName));

console.log("First high priority task:", highPriorityTask);
console.log("Index of first incomplete task:", firstIncompleteIndex);
console.log("Total completed tasks:", completedTaskCount);
