var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page with handlebars
  // app.get("/", function(req, res) {
  //   db.Task.findAll({}).then(function(dbTask) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       tasks: dbTask
  //     });
  //   });
  // });

  // Load index page without handlebars
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/task/:id", function(req, res) {
    db.Task.findOne({ where: { id: req.params.id } }).then(function(dbTask) {
      res.render("task", {
        task: dbTask
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
