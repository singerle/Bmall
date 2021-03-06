var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");


gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename({
		suffix:".min"
	}))
	.pipe(gulp.dest("dist/css"));
});
gulp.task("copy-html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
});
gulp.task("copy-images",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload());
})
gulp.task("copy-js",function(){
	gulp.src("js/**")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-json",function(){
	gulp.src("json/**")
	.pipe(gulp.dest("dist/json"))
	.pipe(connect.reload());
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	})
});
gulp.task("watch",function(){
	gulp.watch("html/*.html",["copy-html"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("img/**",["copy-images"]);
	gulp.watch("js/**",["copy-js"]);
	gulp.watch("json/**",["copy-json"]);
})
gulp.task("default",["server","watch"]);



