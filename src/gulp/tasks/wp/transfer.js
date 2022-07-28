const admin = () => {
   return $.gulp.src($.path.admin.src)
      .pipe($.gulp.dest($.path.admin.wp));
};
const fonts = () => {
   return $.gulp.src($.path.fonts.src)
      .pipe($.gulp.dest($.path.fonts.wp));
};
const img = () => {
   return $.gulp
      .src($.path.img.src)
      .pipe($.gulp.dest($.path.img.wp));
};
const video = () => {
   return $.gulp.src($.path.video.src)
   .pipe($.gulp.dest($.path.video.wp));
};
const webp = () => {
   return $.gulp.src($.path.webp.src.wp)
      .pipe($.app.webp())
      .pipe($.gulp.dest($.path.webp.wp));
};












const js = () => {
   return $.gulp
      .src($.path.js.src)
      .pipe($.app.concat("script.js"))
      .pipe($.app.size({ title: "Размер файла:" }))
      .pipe($.gulp.dest($.path.js.dev));
};
const vendorCSS = () => {
   return $.gulp.src($.path.vendorCSS.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.css"))
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.gulp.dest($.path.vendorCSS.dev));
};
const vendorJs = () => {
   return $.gulp.src($.path.vendorJs.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.js"))
      .pipe($.gulp.dest($.path.vendorJs.dev));
};


const favicon = () => {
   return $.gulp.src($.path.favicon.src)
   .pipe($.app.favicons({
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
         start_url: "/",
         version: 1.0,
         logging: false,
         html: "index.html",
         pipeHTML: true,
         replace: true,
      })
   )
   .pipe($.app.size({ title: "Размер файла:" }))
   .pipe($.gulp.dest($.path.favicon.dev));
};

/* Экспортируем таски в модули */
module.exports = {
   admin: admin,
   fonts: fonts,
   img: img,
   js: js,
   vendorCSS: vendorCSS,
   vendorJs: vendorJs,
   video: video,
   webp: webp,
   favicon: favicon,
};