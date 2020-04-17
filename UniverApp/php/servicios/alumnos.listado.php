<?php
if (!ini_get('display_errors')) {
	ini_set('display_errors', 1);
}

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$sql = "SELECT * FROM alumnos ORDER BY codigo ASC";

echo Database::get_json_rows($sql);

?>