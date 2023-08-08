const Tasks = require('../models/toDoTasks');

module.exports.addTasks = (req, res) => {
    (async () => {
        await Tasks.create({
            task: req.body.task,
            category: req.body.category,
            dueDate: req.body.dueDate
        }).then((data) => {
            console.log(data);
            return res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        });
    })();
}