<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cep = $_POST['cep'] ?? '';
    if (!empty($cep)) {
        $url = "https://viacep.com.br/ws/$cep/json/";
        $response = file_get_contents($url);
        echo $response;
    } else {
        echo json_encode(["error" => "CEP não fornecido"]);
    }
} else {
    echo json_encode(["error" => "Método não suportado"]);
}