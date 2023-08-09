const mongoose = require('mongoose');

// defining the schema to be used
const tasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

// loading schema in the model
const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;