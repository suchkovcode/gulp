/* Modules */
const { src, dest, parallel, series, watch, glob } = require("gulp");
const rename = require("gulp-rename");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const fileinclude = require("gulp-file-include");
const sitemapGen = require("gulp-sitemap");
const clean = require("gulp-clean");
const browserSync = require("browser-sync").create();

/* Function */
const cleanBuild = () => {
   return src("build/*", { read: false }).pipe(clean());
};
const styles = () => {
   return src("./src/scss/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass.sync({ outputStyle: "compressed" }).on("error", notify.onError()))
      .pipe(rename({ extname: ".min.css" }))
      .pipe(autoprefixer({ cascade: false }))
      .pipe(sourcemaps.write("map/"))
      .pipe(dest("./build/css/"))
      .pipe(browserSync.stream());
};
const html = () => {
   return src("./src/*.html")
      .pipe(fileinclude({ prefix: "@", basepath: "@file" }).on("error", notify.onError()))
      .pipe(dest("./build"))
      .pipe(browserSync.stream());
};
const htmlCommon = () => {
   return src("./src/common/**/*.html")
      .pipe(fileinclude({ prefix: "@", basepath: "@file" }).on("error", notify.onError()))
      .pipe(browserSync.stream());
};
const imgToBuild = () => {
   return src("./src/img/**/*") /* Находим папку с картинками */
      .pipe(dest("./build/img"));
};
const fontsToBuild = () => {
   return src("./src/fonts/*") /* Находим папку с шрифтами */
      .pipe(dest("./build/fonts"));
};
const libsToBuild = () => {
   return src("./src/libs/**/*") /* Находим папку с шрифтами */
      .pipe(dest("./build/libs"));
};
const jsToBuild = () => {
   return src("./src/js/**/*") /* Находим папку с шрифтами */
      .pipe(dest("./build/js"));
};
const sitemap = () => {
   return src("./build/**/*.html", { read: true })
      .pipe(
         sitemapGen({
            siteUrl: "https://amazon.com",
            fileName: "sitemap.xml",
            lang: "ru",
            changefreq: "daily",
            newLine: "",
            spacing: "",
            priority: 0.8,
            lastmod: Date.now(),
            images: true,
         })
      )
      .pipe(dest("./build"));
};

/* Watch */
function watchFiles() {
   browserSync.init({ server: { baseDir: "./build" } });
   watch("./src/scss/**/*.scss", styles);
   watch("./src/*.html", html);
   watch("./src/common/**/*.html", htmlCommon);
   watch("./src/common/**/*.html", html);
   watch("./src/img/", imgToBuild);
   watch("./src/fonts/", fontsToBuild);
   watch("./src/libs/", libsToBuild);
   watch("./src/js/", jsToBuild);
   watch("./build/**/*.html", sitemap);
}

/* Tasks */
exports.default = series(cleanBuild, html, htmlCommon, styles, imgToBuild, fontsToBuild, libsToBuild, jsToBuild, sitemap, watchFiles);
exports.zip = zip;
