const Tasks = require('../models/toDoTasks');

module.exports.toggleTask = (req, res) => {
    (async () => {
        let taskId = req.query.id;
        let currentStatus = req.query.status;
        await Tasks.updateOne(
            {_id: taskId}, {completed: currentStatus == 'true'? false: true}
        ).then(() => {
            return res.redirect('/');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}