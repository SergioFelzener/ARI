function activeDrop(event) {
    event.preventDefault();
}

function dropExclude(event) {
    event.preventDefault();

    let dataId = event.dataTransfer.getData("text");
    let selecao = document.getElementById(dataId);

    event.target.appendChild(selecao);
}

function drop(event) {

    let selectedTd = document.getElementById(event.target.id).childElementCount;

    if (selectedTd > 0) {
        return false;
    }

    let dataId = event.dataTransfer.getData("text");
    let selecao = document.getElementById(dataId);
    event.target.appendChild(selecao);
}

function drag(event) {
    // Seta Text como o id da selecao
    event.dataTransfer.setData("text", event.target.id);
}