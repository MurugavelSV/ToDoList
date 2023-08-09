const mongoose = require('mongoose');

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

const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;