var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://wtfismyip/text', false);

xhr.send();

if (xhr.status != 200) {
  // обработать ошибку
  alert( "ERROR:" + xhr.status );
} else {
  // вывести результат
  document.createElement( xhr.responseText ); // responseText -- текст ответа.
}
