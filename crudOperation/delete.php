<?php

    include 'connection.php';

    $id = $_GET['id'];

    $q = "DELETE FROM `crudtable` WHERE id =$id";

    mysqli_query($con,$q);

    header('location:display.php');
?>