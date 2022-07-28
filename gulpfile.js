'use strict';
const requireDir = require("require-dir");
global.$ = {
   gulp:           require("gulp"),
   sass:           require("gulp-sass")(require("sass")),
   app:            require("gulp-load-plugins")({ DEBUG: false}),
   path:           require("./src/gulp/config/path"),
   task:           requireDir("./src/gulp/tasks/", { recurse: true }),
   browserSync:    require("browser-sync").create(),
};


/* Запускает сборку без запуска сервера */
exports.default =
   $.gulp.series(
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
   $.task.transfer.admin,);


/* Запускает сборку с запуском сервера */
exports.dev =
   $.gulp.series(
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
   $.task.transfer.admin,
   $.task.server);
   
/* Запускает продвкшен сборку */
exports.pub =
   $.gulp.series(
   $.task.pub.clean,
   $.task.pub.transfer.img,
   $.task.pub.transfer.webp,
   $.task.pub.transfer.video,
   $.task.pub.transfer.fonts,
   $.task.pub.htmlInclude,
   $.task.pub.html,
   $.task.pub.styles,
   $.task.pub.transfer.js,
   $.task.pub.transfer.vendorJs,
   $.task.pub.transfer.vendorCSS,
   $.task.pub.transfer.admin,
   $.task.pub.sitemap);
   
/* Запускает wordpress сборку */
exports.wp =
   $.gulp.series(
      $.task.wp.clean,
      $.task.wp.transfer.admin,
      $.task.wp.html.page,
      $.task.wp.html.components,
      $.task.wp.transfer.fonts,
      $.task.wp.transfer.img,
      $.task.wp.transfer.video,
      $.task.wp.transfer.webp,
      $.task.wp.styles);




// $.task.pub.server
   
exports.zip = $.task.pub.zip;

// Для WP стилили не должны менять название
