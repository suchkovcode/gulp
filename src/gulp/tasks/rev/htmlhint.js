const htmlhint = () => {
   return $.gulp
      .src("./src/html/page/*.html")
      .pipe($.app.htmlhint(".htmlhintrc.json"))
      .pipe($.app.htmlhint.reporter())
      .pipe($.app.htmlhint.failOnError())
};

module.exports = htmlhint;
