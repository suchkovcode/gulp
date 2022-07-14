"use strict";
const { src, dest, series, watch } = require("gulp");
const gulpIf = require("gulp-if");
const del = require("gulp-clean");
const zip = require("gulp-zip");
const rename = require("gulp-rename");
const size = require("gulp-size");
const concat = require("gulp-concat");
const notify = require("gulp-notify");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const fileinclude = require("gulp-file-include");
const sitemapGen = require("gulp-sitemap");
const favicons = require("gulp-favicons");
const webpConv = require("gulp-webp");
const browserSync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");

/* Удаление файлов по конкретным папкам */
function clean() {
   return src("build/*").pipe(del());
}
function cleanImg() {
   return src("build/img/").pipe(del());
}
function cleanWebp() {
   return src("build/img/webp/").pipe(del());
}
function cleanVideo() {
   return src("build/video/").pipe(del());
}
function cleanFonts() {
   return src("build/fonts/").pipe(del());
}
function cleanJs() {
   return src("build/js/").pipe(del());
}
function cleanVendor() {
   return src("build/libs/").pipe(del());
}
function cleanSitemap() {
   return src("build/sitemap.xml").pipe(del());
}

/* Компиляция и переброска файлов в build */
function html() {
   return src("./src/*.html")
      .pipe(fileinclude({ prefix: "@" }).on("error", notify.onError()))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(size({ title: "Размер файла:" }))
      .pipe(dest("./build"))
      .pipe(browserSync.stream());
}
function htmlInclude() {
   return src("./src/html/**/*.html")
      .pipe(fileinclude({ prefix: "@" }).on("error", notify.onError()))
      .pipe(browserSync.stream());
}
function styles() {
   return src("./src/scss/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      .pipe(sass.sync({ outputStyle: "compressed" }).on("error", notify.onError()))
      .pipe(rename({ extname: ".min.css" }))
      .pipe(sourcemaps.write("map/"))
      .pipe(size({ title: "Размер файла:" }))
      .pipe(dest("./build/css/"))
      .pipe(browserSync.stream());
}
function sitemap() {
   return src("./build/**/*.html")
      .pipe(
         sitemapGen({
            siteUrl: "http://www.amazon.com",
            fileName: "sitemap.xml",
            changefreq: "weekly",
            priority: "0.8",
            lastmod: Date.now(),
            newLine: "",
            spacing: "",
            noindex: false,
            images: true,
         })
      )
      .pipe(dest("./build/"));
}
function buildZip() {
   return src("./build/**/*")
      .pipe(zip("site.zip"))
      .pipe(size({ title: "Размер файла:" }))
      .pipe(dest("./"))
      .pipe(browserSync.stream());
}

/* Перегонка файлов и высчитывание размеров */
function img() {
   return src("./src/img/**/*")
      .pipe(size({ title: "Размер файла:" }))
      .pipe(dest("./build/img/"));
}
function webp() {
   return src("./build/img/png/*.png")
      .pipe(size({ title: "Размер файла:" }))
      .pipe(webpConv())
      .pipe(dest("./build/img/webp/"));
}
function video() {
   return src("./src/video/**/*")
      .pipe(size({ title: "Размер файлов:" }))
      .pipe(dest("./build/video/"));
}
function fonts() {
   return src("./src/fonts/**/*")
      .pipe(size({ title: "Размер файлов:" }))
      .pipe(dest("./build/fonts/"));
}
function js() {
   return src("./src/js/**/*")
      .pipe(size({ title: "Размер файлов:" }))
      .pipe(concat("script.js"))
      .pipe(dest("./build/js/"));
}
function vendorJs() {
   return src("./src/libs/**/*.js")
      .pipe(size({ title: "Размер файлов:" }))
      .pipe(concat("vendor.js"))
      .pipe(dest("./build/js/"));
}
function vendorCSS() {
   return src("./src/libs/**/*.css")
      .pipe(size({ title: "Размер файлов:" }))
      .pipe(concat("vendor.css"))
      .pipe(rename({ extname: ".min.css" }))
      .pipe(dest("./build/css/"));
}
function favicon() {
   return src("./src/img/png/favicon.png")
      .pipe(
         favicons({
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
      .pipe(size({ title: "Размер файла:" }))
      .pipe(dest("./build/img/"));
}

/* Наблюдение за изменениям и звпуск функции */
function watchFiles() {
   browserSync.init({ server: { baseDir: "./build" } });
   watch("./src/*.html", html);
   watch("./src/html/**/*.html", series(html, htmlInclude));
   watch("./src/*.html", series(cleanSitemap, sitemap));
   watch("./src/scss/**/*.scss", styles);
   watch("./src/img/**/*", series(cleanImg, img));
   watch("./src/img/webp/**/*", series(cleanWebp, webp));
   watch("./src/video/**/*", series(cleanVideo, video));
   watch("./src/fonts/**/*", series(cleanFonts, fonts));
   watch("./src/js/**/*", series(cleanJs, js));
   watch("./src/libs/**/*", series(cleanVendor, vendorJs, vendorCSS));
}

exports.default = series(clean, img, webp, video, fonts, html, styles, js, vendorJs, vendorCSS, sitemap);
exports.watch = watchFiles;
exports.zip = buildZip;
