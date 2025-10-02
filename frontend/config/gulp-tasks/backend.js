// Сборка проекта, удаление лишних элементов и стилей, копирование в backend

import { Transform } from 'stream';

let removedCount = 0;

// Удаление элементов с атрибутом data-static из html файлов
// Включая вложенные (дочерние) элементы!
const removeStaticElements = new Transform({
  objectMode: true,
  transform(file, encoding, callback) {
    if (file.isNull() || !file.contents) {
      return callback(null, file);
    }

    if (file.path.endsWith('.html')) {
      try {
        let content = file.contents.toString();
        const initialLength = content.length;
        
        // Регулярное выражение для поиска атрибута data-static
        const staticElementPattern = /<([a-z][a-z0-9]*)([^>]*?)\sdata-static([^>]*?)>[\s\S]*?<\/\1>/gi;
        content = content.replace(staticElementPattern, (match) => {
          removedCount++;
          return '';
        });
        
        if (content.length !== initialLength) {
          console.log(`🔄 Обработан файл: ${file.relative}`);
        }
        
        file.contents = Buffer.from(content);
      } catch (err) {
        return callback(err);
      }
    }
    
    callback(null, file);
  }
});

// Удаление display стиля для элементов с атрибутом data-thymeleaf из css файлов
const removeThymeleafHiding = new Transform({
  objectMode: true,
  transform(file, encoding, callback) {
    if (file.isNull() || !file.contents) {
      return callback(null, file);
    }

    if (file.path.endsWith('.css')) {
      try {
        let content = file.contents.toString();
        const initialLength = content.length;
        
        // Регулярное выражение для поиска скрывающего стиля в style.css и style.min.css
        const thymeleafPattern = /\[data-thymeleaf\]\s*{\s*display\s*:\s*none\s*!important\s*;?\s*}/gmi;
        content = content.replace(thymeleafPattern, '');
        
        if (content.length !== initialLength) {
          console.log(`🔄 Очищен display стиль для thymeleaf элементов в файле: ${file.relative}`);
        } else {
          console.log(`ℹ️  Display стиль для thymeleaf элементов не найден в файле: ${file.relative}`);
        }
        
        file.contents = Buffer.from(content);
      } catch (err) {
        return callback(err);
      }
    }
    
    callback(null, file);
  }
});

// Копирование статических файлов (css, fonts, img, js)
export const backendStatic = () => {
  const { gulp, path, plugins } = app;
  
  return gulp.src(path.backend.static.src, { 
    base: path.buildFolder,
    allowEmpty: true
  })
    .pipe(plugins.if(app.isBuild, plugins.newer(path.backend.static.dest)))
    .pipe(removeThymeleafHiding)
    .pipe(gulp.dest(path.backend.static.dest))
    .on('end', () => console.log('✅ Статика скопирована в бэкенд!'));
};

// Копирование html шаблонов
export const backendTemplates = () => {
  const { gulp, path, plugins } = app;
  
  // Счетчик удаленных элементов с атрибутом data-static
  removedCount = 0;
  
  return gulp.src(path.backend.templates.src, { 
    base: path.buildFolder,
    allowEmpty: true
  })
    .pipe(plugins.if(app.isBuild, plugins.newer(path.backend.templates.dest)))
    .pipe(removeStaticElements)
    .pipe(gulp.dest(path.backend.templates.dest))
    .on('end', () => {
      console.log('✅ Шаблоны скопированы в бэкенд!');
      if (removedCount > 0) {
        console.log(`♻️  Удалено элементов с data-static: ${removedCount}`);
      } else {
        console.log('ℹ️ Элементы с data-static не найдены');
      }
    });
};