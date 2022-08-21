const server = () => {
   $.browserSync.init({
      server: "./build",
      port: 5500,
      notify: false,
      watch: true,
      online: true,
      open: "external",
      reloadDebounce: 1000,
      codeSync: true,
      https: false,
      ghostMode: false,
   });
   
   $.gulp.watch($.path.html.watch.page,       $.task.html);
   $.gulp.watch($.path.html.watch.comp,       $.task.html);
   $.gulp.watch($.path.html.watch.comp,       $.task.htmlInclude);
   $.gulp.watch($.path.css.watch,             $.task.styles);
   $.gulp.watch($.path.img.watch,             $.gulp.series($.task.clean.img, $.task.transfer.img, $.task.transfer.webp));
   $.gulp.watch($.path.fonts.watch,           $.gulp.series($.task.clean.fonts, $.task.transfer.fonts));
   $.gulp.watch($.path.video.watch,           $.gulp.series($.task.clean.video, $.task.transfer.video));
   $.gulp.watch($.path.js.watch,              $.gulp.series($.task.clean.js, $.task.transfer.js, $.task.transfer.vendorJs));
   $.gulp.watch("./src/data/*.json",          $.gulp.series($.task.html, $.task.htmlInclude));
   $.gulp.watch("./src/libs/**/*",            $.gulp.series($.task.clean.js, $.task.transfer.js, $.task.transfer.vendorJs, $.task.transfer.vendorCSS));
};

module.exports = server;