/* Подключаем пути к таскам */
const styles =        require("../tasks/styles");
const html =          require("../tasks/html");
const htmlInclude =   require("../tasks/htmlInclude");
const sitemap =       require("../tasks/sitemap");
const buildZip =      require("../tasks/buildZip");
const server =        require("../tasks/server");
const clean =         require("../tasks/clean");
const transfer =      require("../tasks/transfer");


/* Экспортируем таски в модули */
module.exports = {
   styles: styles,
   html: html,
   htmlInclude: htmlInclude,
   sitemap: sitemap,
   buildZip: buildZip,
   server: server,
   clean: clean,
   transfer: transfer,
};