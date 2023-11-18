<?php
// Nome de usuário fornecido manualmente
$username = isset($_GET['user']) ? $_GET['user'] : '';

// URL do site com o nome de usuário
$url = "https://dhm.idle-pixel.com/hiscores/search.php?user=" . urlencode($username);

// Inicializa a sessão cURL
$ch = curl_init();

// Define as opções cURL
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// Executa a requisição e obtém o conteúdo da página
$html = curl_exec($ch);

// Verifica se houve erros na requisição
if (curl_errno($ch)) {
    echo 'Erro ao obter a página: ' . curl_error($ch);
    exit;
}

// Fecha a sessão cURL
curl_close($ch);

// Procura pela string que contém a variável 'data'
$pattern = '/<script type="text\/javascript">\s*data = "(.*?)";\s*username =/';
preg_match($pattern, $html, $matches);

// Verifica se a variável 'data' foi encontrada
if (isset($matches[1])) {
    // Extrai o valor da variável 'data'
    $data = $matches[1];

    // Imprime o valor da variável 'data'
    echo "$data";
}
?>
