global.$ = {
   gulp:           require("gulp"),
   sass:           require("gulp-sass")(require("sass")),
   app:            require("gulp-load-plugins")({ DEBUG: false }),
   path:           require("./src/gulp/config/path"),
   task:           require("./src/gulp/config/task"),
   browserSync:    require("browser-sync").create(),
};

exports.default = $.gulp.series(
   $.task.clean.build,
   $.task.transfer.img,
   $.task.transfer.webp,
   $.task.transfer.video,
   $.task.transfer.fonts,
   $.task.html,
   $.task.styles,
   $.task.transfer.js,
   $.task.transfer.vendorJs,
   $.task.transfer.vendorCSS,
   $.task.sitemap,
   $.task.server);

exports.zip = $.task.buildZip;