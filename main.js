function addNewTask(){
    var list = document.getElementById('list');
    var texto = document.getElementById('tarefa').value;
    var listItem = document.createElement('li');
    listItem.className = 'list-item';
    var textElement = document.createTextNode(texto);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}