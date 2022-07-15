const html = () => {
   return $.gulp
      .src("./src/html/page/*.html")
      .pipe(
         $.app.plumber({
            errorHandler: $.app.notify.onError((error) => ({
               title: "HTML",
               message: error.message,
            })),
         })
      )
      .pipe($.app.fileInclude({ prefix: "@" }))
      .pipe($.app.webpHtml())
      .pipe($.app.size({ title: "Размер до сжатия:" }))
      .pipe($.app.htmlmin({ collapseWhitespace: true }))
      .pipe($.app.size({ title: "Размер после сжатия:" }))
      .pipe($.gulp.dest("./build"))
      .pipe($.browserSync.stream());
};
module.exports = html;
