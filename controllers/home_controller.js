const Tasks = require('../models/toDoTasks');

module.exports.home = (req, res) => {
    (async () => {
        await Tasks.find({}).then((data) => {
            return res.render('home', {
                taskList: data
            });
        }).catch((err) => {
            console.log(err.message);
        });
    })();
}