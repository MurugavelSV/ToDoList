const Tasks = require('../models/toDoTasks');

module.exports.remove = (req, res) => {
    (async () => {
        Tasks.deleteMany({completed: true}).then(() => {
            return res.redirect('/');  
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}