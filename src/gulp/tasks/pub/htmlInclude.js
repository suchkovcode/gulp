const htmlInclude = () => {
   return $.gulp
      .src($.path.html.src.comp)
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
      );
};
module.exports = htmlInclude;
