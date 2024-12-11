<?php
// Configurações de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Verifica se é uma requisição OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Lida com requisições GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cep = $_GET['cep'] ?? '';

    if (!empty($cep)) {
        $url = "https://viacep.com.br/ws/$cep/json/";
        $response = file_get_contents($url);

        // Retorna a resposta da API ViaCEP
        echo $response;
    } else {
        echo json_encode(["error" => "CEP não fornecido"]);
    }
} else {
    echo json_encode(["error" => "Método não suportado"]);
}
