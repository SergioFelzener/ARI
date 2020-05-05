<?php
$categoria = $_GET['Categoria'];

if (!isset($categoria)){
    $categoria = '';
}

$array = '';

switch ($categoria) {
    case 'fit':
        $array = ["Peso 10Kg", "Banco de supino", "Bicicleta ergométrica", "Esteira"];  
        break;

    case 'nat':
    $array = ["Óculos", "Touca", "Sunga", "Boia"];  
    break;

    case 'cic':
        $array = ["Mountain-bike", "Capacete","Selim", "Cadeado para bicicleta"];  
        break;        
    
    default:
        $array = ["Produto não encontrado"];    

}

echo json_encode($array);

return;

?>