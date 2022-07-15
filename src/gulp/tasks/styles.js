const styles = () => {
   return (
      $.gulp.src("./src/scss/**/*.scss")
         .pipe(
            $.app.plumber({
               errorHandler: $.app.notify.onError((error) => ({
                  title: "CSS",
                  message: error.message,
               })),
            })
         )
         .pipe($.app.sourcemaps.init())
         .pipe($.sass())
         .pipe($.app.autoprefixer())
         .pipe($.app.shorthand())
         .pipe($.app.groupCssMediaQueries())
         // .pipe($.app.webpcss({}))
         .pipe($.app.size({ title: "Размер до сжатия:", showFiles: true }))
         .pipe($.app.cssmin())
         .pipe($.app.rename({ extname: ".min.css" }))
         .pipe($.app.size({ title: "Размер после сжатия:", showFiles: true }))
         .pipe($.app.sourcemaps.write("map/"))
         .pipe($.gulp.dest("./build/css/"))
         .pipe($.browserSync.stream())
   );
};
module.exports = styles;
