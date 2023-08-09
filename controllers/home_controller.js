const Tasks = require('../models/toDoTasks');

// module for rendering tasks
module.exports.home = (req, res) => {
    (async () => {
        await Tasks.find({}).then((data) => {
            return res.render('home', {
                taskList: data
            });
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}