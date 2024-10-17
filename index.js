document.getElementById('download-link').addEventListener('click', function(e) {
  e.preventDefault();  // Предотвращаем обычный клик по ссылке
  var link = document.createElement('a');  // Создаем временный элемент
  link.href = this.href;  // Устанавливаем ссылку на путь к файлу
  link.download = 'Resume.pdf';  // Имя файла для скачивания
  document.body.appendChild(link);  // Добавляем элемент в DOM
  link.click();  // Симулируем клик по ссылке
  document.body.removeChild(link);  // Удаляем элемент после скачивания
});