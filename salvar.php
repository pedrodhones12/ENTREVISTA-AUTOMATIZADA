<?php
$conn = new mysqli("localhost", "usuario", "senha", "banco");

$respostas = $_POST['respostas'];
$c1 = $_POST['c1'];
$c2 = $_POST['c2'];
$c3 = $_POST['c3'];

$sql = "INSERT INTO resultados_ea (respostas, carreira1, carreira2, carreira3)
        VALUES ('$respostas', '$c1', '$c2', '$c3')";

$conn->query($sql);
$conn->close();
?>
