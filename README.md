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
├── src                            # Исходная папка проекта  
      ├───fonts                    # Шрифты проекта  
      ├───gulp                     # Настройки для gulp  
      │   ├───config               # Файлы основных конфигураций  
      │   └───tasks                # Файлы задач сборщика  
      ├───html                     # Все исходные html файлы  
      │   ├───common               # Миксины для html  
      │   ├───components           # Компоненты для html  
      │   └───page                 # Уникальные страницы html  
      ├───img                      # Папка с всеми картинками  
      │   ├───jpeg                 # Отдельная папка для jpeg  
      │   ├───png                  # Отдельная папка для png  
      │   └───svg                  # Отдельная папка для svg  
      ├───js                       # Папка с всеми скриптами  
      │   ├───components           # Скрипты разбитые на компоненты  
      │   └───function             # Скрипты разбитые на функции  
      ├───libs                     # Папка подключаемых библиотек к проекту  
      ├───scss                     # Папка с всеми scss файлами  
      │   ├───base                 # Базовые настройки стилей   
      │   ├───components           # Стили компонентов  
      │   └───page                 # Стили страниц  
      └───video                    # Папака с видео   
```