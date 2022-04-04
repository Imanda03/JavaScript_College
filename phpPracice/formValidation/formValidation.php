<?php 
    if(isset($_POST['submit'])){
        echo "Yes it Works";
        $username = $_POST['username'];
        $password = $_POST['password'];

        echo "hello" . $username;
        echo "Your password is " . $password;
    }
?>