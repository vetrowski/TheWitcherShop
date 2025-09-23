<!-- Режим предпросмотра markdown-файлов (Ctrl + Shift + V) -->

# Название проекта
**«The Witcher Shop»**

## Описание
Интернет-магазин по вселенной The Witcher

### Настройка и подготовка к работе
1. Установить следующее ПО:
- [Visual Studio Code](https://code.visualstudio.com/download) для работы с кодом
- [Node.js](https://nodejs.org/en/download) для поддержки JavaScrtipt на уровне ОС
2. Скачать [папку с проектом](https://github.com/vetrowski/TheWitcherShop.git)
3. Открыть папку frontend через VS Code
4. Запустить терминал (Ctrl + `) или (Ctrl + J -> Терминал)

### Основные команды
В терминале использовать команду npm run с одним из скриптов [package.json](./package.json) файла, например:
```bash
npm run dev # режим разработчика (запуск локального сервера)
npm run build # режим продакшена (сборка готового проекта)
npm run backend # режим продакшена (сборка проекта и копирование в backend)
npm run deploy # режим продакшена (публикация проекта на сервер)
npm run zip # режим продакшена (создание архива проекта)
```