$(function () {
  // Обернуть каждый символ в span, исключая пробелы
  $("h1").html(function (index, chars) {
    return chars.replace(/\S/g, "<span>$&</span>");
  });
  // Все элементы span, содержащие * получают отступ и вертикальное выравнивание
  $("span:contains('*')").css({
    padding: "0 0.2em",
    "vertical-align": "middle",
  });
});
