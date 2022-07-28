const html = () => {
   return $.gulp
      .src($.path.html.src.page)
      .pipe($.app.rename({ extname: ".php" }))
      .pipe($.gulp.dest($.path.html.src.wp))
};
const components = () => {
   return $.gulp
      .src($.path.html.src.comp)
      .pipe($.app.rename({ extname: ".php" }))
      .pipe($.gulp.dest($.path.html.src.wp))
};

module.exports = {
   page: html,
   components: components,
}