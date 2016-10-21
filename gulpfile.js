var gulp = require("gulp");
var clean = require('gulp-clean');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/dod.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

function compile() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
};

function bundle() {
    compile();
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task('clean-scripts', function () {
  return gulp.src('dist/**/*.js', {read: false})
    .pipe(clean());
});

gulp.task("package", ["clean-scripts"], compile);
gulp.task("default", ["compile"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);