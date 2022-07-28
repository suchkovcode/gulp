const styles = () => {
   return $.gulp
      .src($.path.css.src)
      .pipe($.sass()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.autoprefixer()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.shorthand()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.groupCssMediaQueries()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.csso({ debug: false, comments: true})).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.gulp.dest($.path.css.wp))
};
module.exports = styles;