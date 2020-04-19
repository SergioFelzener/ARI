<?php
$categoria = $_GET['Categoria'];

if (!isset($categoria))
{
    $categoria = '';
}

$array = '';

switch ($categoria) 
{
    case 'Fit':
        $array = [ "Peso 10Kg", "Banco de supino", "Bicicleta ergométrica", "Esteira"];  
        break;

    case 'Nat':
        $array = ["Óculos", "Touca", "Sunga", "Boia"];  
        break;

    case 'Cic':
        $array = ["Mountain-bike", "Capacete", "Selim", "Cadeado para bicicleta"];  
        break;         

}

echo json_encode($array);

return;
