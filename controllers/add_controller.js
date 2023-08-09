// Importing the model
const Tasks = require('../models/toDoTasks');

// module for creating task
module.exports.addTasks = (req, res) => {
    (async () => {
        await Tasks.create({
            task: req.body.task,
            category: req.body.category,
            dueDate: req.body.dueDate
        }).then(() => {
            return res.redirect('/');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}