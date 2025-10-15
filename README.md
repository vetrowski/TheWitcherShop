<!-- Режим предпросмотра markdown-файлов (Ctrl + Shift + V) -->

# The Witcher Shop

## Описание
Интернет-магазин по вселенной The Witcher

### Настройка проекта и подготовка к работе
1. Установить следующее ПО:
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/?section=windows) – IDE для работы с бэкендом
- [PostgreSQL](https://www.postgresql.org/download) – СУБД для работы с SQL-запросами
- [pgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-windows) – графический интерфейс для работы с базой даных (можно выбрать как один из компонентов при установке PostgreSQL) 
- [Visual Studio Code](https://code.visualstudio.com/download) – редактор кода для работы с фронтендом
- [Node.js](https://nodejs.org/en/download) – среда выполнения JS для поддержки JavaScript на уровне ОС
- [Git](https://git-scm.com/downloads/win) – система контроля версий для отслеживания изменений в файлах и управления репозиторием
- [GitHub Desktop](https://desktop.github.com/download) – графический интерфейс для удобной работы с GitHub
2. Настроить GitHub Desktop (или пропустить этот шаг и скачать папку с проектом напрямую с GitHub, шаг 3):
- запустить GitHub Desktop
- авторизоваться через GitHub.com
- выбрать репозиторий TheWitcherShop
- склонировать его в предварительно созданную папку Projects в корне диска (C:)
3. Если шаг 2 пропущен, тогда можно скачать [папку с проектом](https://github.com/vetrowski/TheWitcherShop.git) напрямую с GitHub и распаковать в предварительно созданную папку Projects в корне диска (C:). После распаковки папку TheWitcherShop-main переименовать в TheWitcherShop. В итоге папки backend и frontend должны находиться по пути C:/Projects/TheWitcherShop
4. Дальнейшие шаги по настройке разделены для frontend и backend части и находятся в Readme файлах в соответствующих папках:
- [Frontend](frontend/README.md)
- [Backend](backend/README.md)