const Tasks = require('../models/toDoTasks');

module.exports.toggleTask = (req, res) => {
    (async () => {
        let taskId = req.query.id;
        console.log(req.query.status);
        let currentStatus = req.query.status;
        console.log(currentStatus);
        await Tasks.updateOne(
            {_id: taskId}, {completed: currentStatus == 'true'? false: true}
        ).then((data) => {
            console.log(data);
            return res.redirect('/');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}