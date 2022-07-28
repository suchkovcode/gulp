const clean = () => {
   return $.gulp.src("./public/wp-content/themes/blank/*")
      .pipe($.app.clean())
};


/* Экспортируем таски в модули */
module.exports = clean;