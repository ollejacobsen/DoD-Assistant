var gulp = require("gulp");
var clean = require('gulp-clean');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function browserifyBundle() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/dod.ts'],
        cache: {},
        packageCache: {}
    });
} ;

var watchedBrowserify = watchify(browserifyBundle().plugin(tsify));

function compile() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
};

function bundle() {
    compile();
    return browserifyBundle()
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
};

function watchBundle() {
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

gulp.task("package", ["clean-scripts"], bundle);
gulp.task("default", ["clean-scripts"], watchBundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);