var path = require("path");

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/css", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/css/style.css"));
  });

  app.get("/js", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/js/main.js"));
  });

  app.get("/typed", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/js/typed.js"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};