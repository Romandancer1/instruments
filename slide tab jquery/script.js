<script>
function itemRoomClick() {   // Объявляем функцию
      var item = $('.choice-room__item-wrap');  // Записываем в переменную класс

      item.click(function (event) {   // Функция начинает действие по клику на переменную обьявленную выше
          event.preventDefault(); // Так как у нас ссылка, не допускаем прыгжок наверх
          $(this).toggleClass("room-link-active"); // This именно этому элементу массива добавляем класс активный
          $(this).next().next().slideToggle(); // Выезжающий слайд next - next - два уровня вложености, т.е. показываем то, что вложено вторым.


      });
    }

function aboutOrderClick() {
      var order = $('.choice-room__read-more');

      order.click(function (event) {
          event.preventDefault();
          $(this).toggleClass("room-link-active");
          $(this).next().slideToggle();

      });

}
    $(document).ready(function (event) { //функции работают только после полной загрузки DOM

      itemRoomClick(); // инициируем функции
      aboutOrderClick();
    });

</script>
