var self = require('sdk/self');
var data = self.data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: "https://burke.cnu.edu:9997/*",
  contentScriptFile: [data.url("js/jquery-1.11.1.min.js"), data.url("js/bootstrap.min.js"), data.url("js/background.js")],
  contentStyleFile: data.url("css/bootstrap.css"),
});
