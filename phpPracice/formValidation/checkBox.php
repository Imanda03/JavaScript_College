<?php 
    if(isset($_POST['submit'])){
        echo "it works <br>";

        $vehicle = $_POST['vehicle'];
        $country = $_POST['country'];

        echo "I have " .$vehicle . "<br>";
        echo "I am from ". $country;
    }
?>