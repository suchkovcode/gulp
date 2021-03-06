const path = {
   admin: {
      src: "./src/admin/**/*",
      dev: "./build/admin/",
      pub: "./public/admin/",
      wp: "./public/",
   },
   html: {
      src: {
         page: ["./src/html/page/*.html", "!./src/html/page/cookie.html", "!./src/html/page/privacy.html", "!./src/html/page/oferta.html"],
         comp: "./src/html/components/*.html",
         wp: "./public/wp-content/themes/blank/",
      },
      dev: "./build/",
      pub: "./public/",
      watch: {
         page: "./src/html/page/*.html",
         comp: "./src/html/components/*.html",
      }
   },
   css: {
      src: "./src/scss/**/*.{scss,sass}",
      dev: "./build/css/",
      pub: "./public/css/",
      wp: "./public/wp-content/themes/blank/css/",
      watch: "./src/scss/**/*.{scss,sass}",
   },
   js: {
      src: "./src/js/**/*",
      dev: "./build/js/",
      pub: "./public/js/",
      watch: "./src/js/**/*",
   },
   img: {
      src: "./src/img/**/*",
      dev: "./build/img/",
      pub: "./public/img/",
      wp: "./public/wp-content/themes/blank/img/",
      watch: "./src/img/**/*",
   },
   webp: {
      src: {
         dev: "./build/img/png/*.png",
         pub: "./public/img/png/*.png",
         wp: "./public/wp-content/themes/blank/img/png/*.png",
      },
      dev: "./build/img/webp/",
      pub: "./public/img/webp/",
      wp: "./public/wp-content/themes/blank/img/webp",
      watch: "./build/img/png/*.png",
   },
   fonts: {
      src: "./src/fonts/**/*",
      dev: "./build/fonts/",
      pub: "./public/fonts/",
      wp: "./public/wp-content/themes/blank/fonts/",
      watch: "./src/fonts/**/*",
   },
   video: {
      src: "./src/video/**/*",
      dev: "./build/video/",
      pub: "./public/video/",
      wp: "./public/wp-content/themes/blank/video/",
      watch: "./src/video/**/*",
   },
   vendorCSS: {
      src: "./src/libs/**/*.css",
      dev: "./build/css/",
      pub: "./public/css/",
      watch: "./src/libs/**/*.css",
   },
   vendorJs: {
      src: "./src/libs/**/*.js",
      dev: "./build/js/",
      pub: "./public/js/",
      watch: "./src/libs/**/*.js",
   },
   favicon: {
      src: "./src/img/png/favicon.png",
      dev: "./build/img/favicon/",
      pub: "./public/img/favicon/",
   },
   sitemap: {
      src: "./public/**/*.html",
      pub: "./public/",
   },
   zip: {
      src: "./public/**/*",
      pub: "./",
   },
}

module.exports = path;