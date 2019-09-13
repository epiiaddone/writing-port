var gulp = require("gulp");
var postcss = require("gulp-postcss");
// var rgba = require('postcss-hexrgba');
var autoprefixer = require("autoprefixer"); //not working
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var mixins = require("postcss-mixins");
// var colorFunctions = require('postcss-color-function');

gulp.task("styles", function() {
  //paths are relative to the gulpfile.js
  return gulp
    .src("./src/styles/style.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested]))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest("./src"));
});
