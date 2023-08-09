const Tasks = require('../models/toDoTasks');

// module for toggling task states
module.exports.toggleTask = (req, res) => {
    (async () => {
        let taskId = req.query.id;
        let currentStatus = req.query.status;
        await Tasks.updateOne(
            // not making direct inversion of currentStatus since it is of type string as it was fetched from url
            {_id: taskId}, {completed: currentStatus == 'true'? false: true} 
        ).then(() => {
            return res.redirect('/');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}