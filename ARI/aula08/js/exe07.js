function load() {
    var div = document.getElementById("content");
    div.style.display = "block";
    document.getElementById('agenda').focus();
    loadLista();
}

function loadLista() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var selection = window.getSelection();
            var range = selection.getRangeAt(0);
            var contents = range.toString();
            document.execCommand('inserthtml', false, this.responseText);
        }
    };

    ajax.open("GET", "lista.php", true);
    ajax.send();
}


function mudarCor() {
    const cor = document.getElementById('cor').value;

    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var contents = range.toString();
    document.execCommand('foreColor', false, cor);

}

function enviar(event) {
    if (event.keyCode == 13) {
        send();
    }
}


function send() {

    var conteudo = document.getElementById('content').innerHTML.replace(/(\r\n|\n|\r)/gm, "");

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('response').innerHTML = '** Saved **';
        }
    };

    ajax.open("GET", "write.php?lista=" + conteudo, true);
    ajax.send();
}