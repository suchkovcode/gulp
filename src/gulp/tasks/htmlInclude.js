const htmlInclude = () => {
   return $.gulp.src("./src/html/**/*.html")
      .pipe(
         $.app.plumber({
            errorHandler: $.app.notify.onError((error) => ({
               title: "HTML Include",
               message: error.message,
            })),
         })
      )
      .pipe($.app.fileInclude({ prefix: "@" }))
      .pipe($.app.webpHtml())
      .pipe($.browserSync.stream());
};
module.exports = htmlInclude;
