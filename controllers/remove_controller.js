const Tasks = require('../models/toDoTasks');

// module for deleting tasks
module.exports.remove = (req, res) => {
    (async () => {
        Tasks.deleteMany({completed: true}).then(() => {
            return res.redirect('/');  
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}