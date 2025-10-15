<!-- Режим предпросмотра markdown-файлов (Ctrl + Shift + V) -->
<!-- Обратно в режим редактирования (Ctrl + Shift + N) -->

## Настройка backend части проекта
1. Подготовка базы данных:
- запустить pgAdmin 4
- подключиться к серверу PostgreSQL (выбрать Servers в левой панели и ввести мастер-пароль)
- создать новую базу данных с названием the_witcher_shop (правой кнопкой мыши по Databases -> Create -> Database -> ввести имя the_witcher_shop -> нажать Save)
- начать процесс восстановления резервной копии БД (правой кнопкой мыши по созданной базе данных the_witcher_shop -> Restore)
- восстановить резервную копию БД из папки backups_db (указать путь к актуальному файлу резервной копии или выбрать его при помощи нажатия на соответствующий значок (обычно это многоточие или значок папки), в окне выбора файла нужно указать верное расширение или выбрать All Files, иначе файл не будет отображаться)
- обновить список БД (правой кнопкой мыши по Databases -> Refresh)
- проверить данные и структуру БД (the_witcher_shop -> Schemas -> public -> Tables)
- сервер PostgreSQL и база данных готовы к работе, при необходимости pgAdmin 4 можно закрыть, так как он не нужен для работы самого приложения
2. Подготовка IDE:
- открыть папку backend через IntelliJ IDEA
- дождаться автоматической установки зависимостей из pom.xml
- установить JDK 17 версии (File -> Project Structure -> Download JDK -> Version: 17 -> Vendor: Microsoft OpenJDK 17.0.16)
- в файле [application.properties](src/main/resources/application.properties) проверить название базы данных (spring.datasource.url), имя и пароль сервера (spring.datasource.username и spring.datasource.password), путь к папке uploads (upload.path)
- опционально: зайти в аккаунт JetBrains для синхронизации настроек и плагинов (File -> Settings -> Backup and Sync -> Log in to JetBrains Account)
3. Открыть файл [SpringSecurityApplication](src/main/java/com/example/springsecurityapplication/SpringSecurityApplication.java) и запустить приложение
4. Перейти на локальный сервер в браузере (http://localhost:8080) для отслеживания работы приложения
5. Опционально: настроить поддержку Git в IntelliJ IDEA (File -> Settings -> Version Control -> GitHub -> пройти авторизацию через GitHub -> сохранить настройки)

### Создание резервной копии базы данных ([видеоинструкция](https://youtu.be/vdd66leSDa4?si=KOAFAtaT7L5APU1v))
1. Открыть pgAdmin 4
2. В подменю Databases выбрать БД для резервной копии (the_witcher_shop)
3. По выбранной БД нажать правой кнопкой мыши -> Backup
4. Указать имя файла резервной копии (например: db_the_witcher_shop_YY-MM-DD)
5. Выбрать формат резервной копии (Custom, Tar, Plain, Directory), предпочтительно выбирать Custom
6. Нажать Backup и дождаться завершения процесса создания резервной копии
7. Файл должен сохраниться в папку Documents