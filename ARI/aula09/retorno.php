<?php
$produto = $_GET['ProdutoID'];

if (!isset($produto)){
    $produto = '';
}

$resposta = '';

switch ($produto) {
    case 'maca':
        $resposta = 'ok';
        break;

    case 'pera':
        $resposta = 'ok';
    break;

    case 'banana':
        $resposta = 'ok'; 
        break;     
        
    case 'morango':
        $resposta = 'ok'; 
        break;        
    
    default:
    $resposta = '';   

}

echo $resposta;
return;

?>
