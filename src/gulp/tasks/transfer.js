const img = () => {
   return $.gulp.src("./src/img/**/*")
      .pipe($.app.plumber({
         errorHandler: $.app.notify.onError((error) => ({
            title: "Image",
            message: error.message,
         }))
      }))
      .pipe($.app.size({ title: "Размер до сжатия:" }))
      .pipe($.app.imagemin({ verbose: true }))
      .pipe($.app.size({ title: "Размер после сжатия:" }))
      .pipe($.gulp.dest("./build/img/"));
}

const fonts = () => {
   return $.gulp.src("./src/fonts/**/*")
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest("./build/fonts/"));
};
const js = () => {
   return $.gulp
      .src("./src/js/**/*")
      .pipe($.app.concat("script.js"))
      .pipe($.app.size({ title: "Размер файла:" }))
      .pipe($.gulp.dest("./build/js/"));
};
const vendorCSS = () => {
   return $.gulp.src("./src/libs/**/*.css")
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.css"))
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.gulp.dest("./build/css/"));
};
const vendorJs = () => {
   return $.gulp.src("./src/libs/**/*.js")
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.js"))
      .pipe($.gulp.dest("./build/js/"));
};
const video = () => {
   return $.gulp.src("./src/video/**/*")
   .pipe($.app.size({ title: "Размер файлов:" }))
   .pipe($.gulp.dest("./build/video/"));
};
const webp = () => {
   return $.gulp.src("./build/img/png/*.png")
      .pipe($.app.size({ title: "Размер до конвертации:" }))
      .pipe($.app.webp())
      .pipe($.app.size({ title: "Размер после конвертации:" }))
      .pipe($.gulp.dest("./build/img/webp/"));
};
const favicon = () => {
   return $.gulp.src("./src/img/png/favicon.png")
   .pipe(
      $.app.favicons({
         appName: "My App",
         appShortName: "App",
         appDescription: "This is my application",
         developerName: "Hayden Bleasel",
         developerURL: "http://haydenbleasel.com/",
         background: "#fff",
         path: "/img/favicon/",
         url: "http://haydenbleasel.com/",
         display: "standalone",
         orientation: "portrait",
         scope: "/",
         start_url: "/?homescreen=1",
         version: 1.0,
         logging: false,
         html: "index.html",
         pipeHTML: true,
         replace: true,
      })
   )
   .pipe($.app.size({ title: "Размер файла:" }))
   .pipe($.gulp.dest("./build/img/"));
};

/* Экспортируем таски в модули */
module.exports = {
   img: img,
   fonts: fonts,
   js: js,
   vendorCSS: vendorCSS,
   vendorJs: vendorJs,
   video: video,
   webp: webp,
   favicon: favicon,
};
