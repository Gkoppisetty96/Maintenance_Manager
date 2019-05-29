var db = require("../models");

module.exports = function(app) {
  // Get all tasks
  app.get("/api/tasks/", function(req, res) {
    db.Task.findAll({})
    .then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // Create a new task
  app.post("/api/tasks/", function(req, res) {
    console.log(req.body)
    db.Task.create({
      name: req.body.name,
      zone: req.body.zone,
      unitNumber: req.body.unitNumber,
      room: req.body.room,
      problem: req.body.problem,
      note: req.body.note,
      severity: req.body.severity
    })
    .then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // Update a task to completed

  // app.put("/api/tasks/:id", function(req, res) {
  //   db.Task.update(req.body)
  // })

  // app.delete("/api/tasks/:id", function(req, res) {
  //   db.Task.destroy({ where: { id: req.params.id } }).then(function(dbTask) {
  //     res.json(dbTask);
  //   });
  // });
};
