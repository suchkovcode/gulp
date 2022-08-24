# Gulp - моя сборка

> Используется Gulp 4

## Начало работы

Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория <br>
`git clone <this repo>`
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку __build__ корневой директории): <br>
`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync  
`gulp zip` - команда собирает ваш готовый код в zip-архив.  

## Файловая структура
**Вся файловая структура генерируется автоматически. Руками ничего создавать не нужно!**  
Сборщик имеет следующую файловую структуру:  
```
├── gulpfile.js                    # gulpfile сборщика  
├── .gitignore                     # gitignore сборщика  
├── package.json                   # Основные зависимости  
├── babel.config.json              # Базовые настройки конфигурации Babel 
└── src                            # Исходная папка проекта  
      ├───data                     # Данные для плагины gulp-file-include или других  
      ├───fonts                    # Шрифты проекта  
      ├───gulp                     # Настройки для gulp  
      │   ├───config               # Файлы основных конфигураций  
      │   └───tasks                # Файлы задач сборщика  
      │       └───pub              # Файлы задач для public сборки    
      ├───html                     # Все исходные html файлы  
      │   ├───components           # Компоненты для html  
      │   └───page                 # Уникальные страницы html  
      ├───img                      # Папка с всеми картинками  
      │   ├───png                  # Отдельная папка для png  
      │   ├───md                   # Отдельная папка для картинок Markdown используемые в README  
      │   └───svg                  # Отдельная папка для svg  
      ├───js                       # Папка с всеми скриптами  
      │   ├───components           # Скрипты разбитые на компоненты  
      │   ├───function             # Скрипты разбитые на компоненты  
      │   └───script.js            # Файл для импортов js файлов  
      ├───libs                     # Папка подключаемых библиотек к проекту  
      ├───scss                     # Папка с всеми scss файлами  
      │   ├───base                 # Базовые настройки стилей   
      │   │   ├───fonts            # Подключенные локальные шрифты (пустой)  
      │   │   ├───global           # Настройка глобальных стилей (пустой)  
      │   │   ├───reset            # Сброс стилей браузера (пустой)  
      │   │   ├───mixin            # Файл с миксинами для под медиазапросы(стартовые запросы)  
      │   │   └───var              # Переменные (пустой) 
      │   ├───components           # Стили компонентов  
      │   │   ├───header           # Стартовый файл для header(пустой)  
      │   │   └───footer           # Стартовый файл для footer(пустой)  
      │   └───page                 # Стили страниц  
      └───video                    # Папака с видео   
```

## npm-скрипты  

Вы можете вызывать gulp-скрипты через npm.  

`npm start` - запускает сборку проекта в режиме разработки в папку __build__, с запуском сервера и вотчера проекта.  

`npm run build` - запускает просто сборку в папку __build__, без запуска сервера и вотчера.  

`npm run public` - запускает сборку продакшен проекта в папку __public__,  с минификацией файлов и изображений, а также добавление sitemap и удалением sourcemap.  

`npm run zip` - запускает архиватор для для продакшен версии папки __public__  

`npm run server` - запускает сервер без вотчера для продакшен версии папки __public__  


## Подключенные плагины   
> Используется последнии версии плагинов
```
babel-cli                      # Babel для работы с командной строки  
babel-core                     # Ядро Babel  
babel-preset-env               # Популярный пресет для компиляции  
babel-loader                   # Плагин webpack для использования babel в своих конфигах  
eslint                         # Ядро линтера для проверки синтакиса  
eslint-config-airbnb-base      # Плагин конфигурации проверки линтером  
eslint-plugin-import           # Плагин для импортов дополнительных плагинов в линтер  
gulp                           # Сам gulp для работы сборщика  
gulp-eslint                    # Плагин для подержки ESlint в сценариях gulp 
gulp-autoprefixer              # Добавляет автопрефикс в scss фацлы при компеляции в сборках dev и pub  
gulp-clean                     # Удаляет директории при новой компеляции проекта в сборках dev и pub  
gulp-concat                    # Конкатинирует js и css подключенных библиотек в сборках dev и pub  
gulp-csso                      # Минифицирует css файлы в сборке pub  
gulp-purgecss                  # Удаляет неиспользованые стиили css в сборке pub(по умолчание закоментировано)  
gulp-jsmin                     # Минифицирует js файлы в сборке pub  
gulp-group-css-media-queries   # Групирует медиа запросы всех scss файлов в сборке pub  
gulp-htmlmin                   # Минифицирует html страницы в сборке pub  
gulp-imagemin                  # Минифицирует изобрадения в сборке pub  
gulp-file-include              # Подключает html компоненты в сборках dev и pub  
gulp-notify                    # Выводит подробные сообщения об ошибках в сборках dev и pub  
gulp-rename                    # Переименовывает файлы в сборках dev и pub  
gulp-shorthand                 # Групирует свойства css используя сокращения если это возможно в сборке pub  
gulp-size                      # Выводит инофрмацию о размерах файлов в сборках dev и pub  
gulp-sourcemaps                # Генерирует исходную карту стилей в сборке dev  
gulp-webp                      # Конвертирует png в webp в сборках dev и pub  
gulp-zip                       # Архифирует проект работает только для сборки pub  
gulp-load-plugins              # Подключает все gulp плагины одной переменной в сборках dev и pub  
require-dir                    # Подключает все таски одной переменной  в сборках dev и pub  
gulp-sass                      # SASS препроцессор в сборках dev и pub  
sass                           # SASS препроцессор в сборках dev и pub  
webpack-stream                 # Плагин webpack для использования импортов js  

```

## Заключение

Спасибо всем, кто использует сборку! Если вы заметили какую-либо ошибку, пришлите пожалуйста ишью с подробным описанием проблемы, я все смотрю и постараюсь решить. Спасибо!