var tasks = require("../controllers/apiController");

module.exports = function(app){

    app.get("/tasks", tasks.index)
    app.get("/tasks/:id", tasks.details)
    app.post("/tasks", tasks.addTask)
    app.put("/tasks/:id", tasks.editTask)
    app.delete("/tasks/:id", tasks.deleteTask)

}