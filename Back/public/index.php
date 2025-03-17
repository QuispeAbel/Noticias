<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

//agregarlo aca hace que este importado en el resto

require_once '../config/credencialesConexion.php';

require_once '../autoload.php';

require_once '../routes/web.php';



?>