<?php

if(isset($_GET['lista'])) {
    file_put_contents('lista.html', $_GET['lista']);
    exit();
}

?>