const html = () => {
   return $.gulp
      .src($.path.html.src.page)
      .pipe(
         $.app.fileInclude({
            prefix: "@",
            basepath: "./src/",
         })
      )

      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe($.app.size({ title: "Размер до сжатия:" }))
      .pipe($.app.htmlmin({ collapseWhitespace: true, removeComments: true }))
      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe($.app.size({ title: "Размер после сжатия:" }))
      .pipe($.gulp.dest($.path.html.pub));
};

module.exports = html;
