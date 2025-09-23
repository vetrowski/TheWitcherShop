// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./dist`; // Результат (также можно использовать rootFolder)
const srcFolder = `./src`; // Исходники

// Пути для копирования сборки в backend
const backendBase = nodePath.resolve('../backend/src/main/resources');
const backendStatic = nodePath.join(backendBase, 'static');
const backendTemplates = nodePath.join(backendBase, 'templates');

// Пути к папкам и файлам проекта
export const path = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		pug: `${srcFolder}/pug/*.pug`,
		js: `${srcFolder}/js/app.js`,
		scss: [`${srcFolder}/scss/style.scss`, `${srcFolder}/scss/fonts.scss`],
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/*.*`,
		files: `${srcFolder}/files/**/*.*`,
		iconsfont: `${srcFolder}/iconsfont/*.svg`,
	},
	backend: {
		static: {
		src: [
			`${buildFolder}/css/**/*.css`,
			`${buildFolder}/fonts/**/*.*`,
			`${buildFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
			`${buildFolder}/js/**/*.js`
		],
		dest: backendStatic
		},
		templates: {
		src: [
            // Включаем для копирования все HTML-файлы
            `${buildFolder}/*.html`,
            // Исключаем приветственный файл index.html
            `!${buildFolder}/index.html`
        ],
        dest: backendTemplates
		}
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	ftp: `` // Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
};

// Настройка FTP соединения
export const configFTP = {
	host: "", // Адрес FTP сервера
	user: "", // Имя пользователя
	password: "", // Пароль
	parallel: 5 // Кол-во одновременных потоков
}