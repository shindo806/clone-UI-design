"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

function sassCompile() {
  return gulp
    .src("./styles/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./styles/css"));
}

// gulp.task("sass", function () {
//   return gulp
//     .src("./styles/sass/**/*.scss")
//     .pipe(sass.sync().on("error", sass.logError))
//     .pipe(gulp.dest("./styles/css"));
// });
function sassWatch() {
  return gulp.watch("./styles/sass/**/*.scss", sassCompile);
}

// gulp.task("sass:watch", function () {
//   gulp.watch("./styles/sass/**/*.scss", ["sass"]);
// });
module.exports.sassCompile = sassCompile;
module.exports.sassWatch = sassWatch;
