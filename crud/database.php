<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "student_data";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_errno) :
    echo "Database Connection Failed: " . $conn->connect_error;
    exit();
endif;
