const buildZip = () => {
   return $.gulp.src("./build/**/*")
      .pipe($.app.size({ title: "Размер до архивации:" }))
      .pipe($.app.zip("site.zip"))
      .pipe($.app.size({ title: "Размер после архивации:" }))
      .pipe($.gulp.dest("./"));
};

module.exports = buildZip;
