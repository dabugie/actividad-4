<?php

$servername = "sql111.infinityfree.com";
$username = "si0_36353821";
$password = "2gXK93wzSdKF";
$dbname = "if0_36353821_Contratame";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Validar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['user_name'];
$company = $_POST['user_empresa'];
$email = $_POST['user_email'];
$celular = $_POST['user_celular'];
$message = $_POST['user_message'];

$sql = "INSERT INTO messages (name, company, email, celular, message) VALUES ('$name', '$company', '$email', '$celular', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Registro creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>