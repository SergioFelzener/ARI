<?php
if(isset($_POST['lista'])) {
    file_put_contents('lista.html', $_POST['lista']);
    exit();
}

?>