const gulp =require("gulp"),
      connect=require("gulp-connect");



gulp.task('html',function(){
    gulp.src(['./src/views/*.html','./index.js'])
    .pipe(gulp.dest('./dist/index/html'))
    .pipe(connect.reload());
});
gulp.task("watch",function(){
    gulp.watch(["./src/views/*.html"],['html']);
});

gulp.task('server',function(){
   connect.server({
       name:"Kasmine App",
       root:'src/views',
       port:8888,
       livereload:true
   });
});

gulp.task('default',['server','watch']);