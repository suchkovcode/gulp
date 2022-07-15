const sitemapGen = () => {
   return $.gulp.src("./build/**/*.html")
      .pipe(
         $.app.sitemap({
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
      .pipe($.gulp.dest("./build/"));
};

module.exports = sitemapGen;
