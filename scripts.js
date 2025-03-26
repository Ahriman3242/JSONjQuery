$(document).ready(function() {
   
    $('#loadCategoriesBtn').on('click', function() {
      $.ajax({
        url: 'categories.json',
        method: 'GET',          
        dataType: 'json',      
        success: function(data) {
          $('#categoryList').empty();
          data.forEach(function(category) {
            $('#categoryList').append(
              '<li><strong>' + category.name + ':</strong> ' + category.description + '</li>'
            );
          });
        },
        error: function() {
          alert('Не удалось загрузить категории. Проверьте путь к файлу или настройки GitHub Pages.');
        }
      });
    });
  
    let categoriesLocal = [];
    $('#addCategoryForm').on('submit', function(e) {
      e.preventDefault();
  
      let name = $(this).find('input[name="name"]').val();
      let description = $(this).find('input[name="description"]').val();
  
      let newCategory = {
        name: name,
        description: description
      };
  
      categoriesLocal.push(newCategory);
  
      console.log('Текущий список в памяти:', categoriesLocal);
  
      $('#categoryList').append(
        '<li><strong>' + newCategory.name + ':</strong> ' + newCategory.description + ' (локальная)</li>'
      );
  
      $(this).trigger('reset');
  
      alert('Категория "' + name + '" добавлена локально! (без сохранения на сервере)');
    });
  });
  