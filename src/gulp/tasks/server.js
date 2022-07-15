const server = () => {
   $.browserSync.init({ server: { baseDir: "./build" } });
   $.gulp.watch("./src/*.html",          $.task.html);
   $.gulp.watch("./src/scss/**/*.scss",  $.task.styles);
   $.gulp.watch("./src/html/**/*.html",  $.task.html);
   $.gulp.watch("./src/img/**/*",        $.gulp.series($.task.clean.img, $.task.transfer.img));
   $.gulp.watch("./src/img/webp/**/*",   $.gulp.series($.task.clean.webp, $.task.transfer.webp));
   $.gulp.watch("./src/video/**/*",      $.gulp.series($.task.clean.video, $.task.transfer.video));
   $.gulp.watch("./src/fonts/**/*",      $.gulp.series($.task.clean.fonts, $.task.transfer.fonts));
   $.gulp.watch("./src/js/**/*",         $.gulp.series($.task.clean.js, $.task.transfer.js));
   $.gulp.watch("./src/libs/**/*",       $.gulp.series($.task.clean.vendor, $.task.transfer.vendorJs, $.task.transfer.vendorCSS));
};

module.exports = server;