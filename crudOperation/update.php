<?php

    include 'connection.php';

    if(isset($_POST['btn'])){

        $id = $_GET['id'];

        $username = $_POST['username'];
        $password = $_POST['password'];

        $insert = " update crudtable set id=$id, username='$username', password='$password' where id=$id ";

         $query = mysqli_query($con,$insert);

         header('location:display.php');

    }   

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert</title>
</head>
<body>
<div class="container">
    <form action="insert.php" method="post">
    <div class="main">
        <h1 class="title">update Operation</h1>

        <div class="user">
            <label for="username">Username: </label>
            <input type="text" class="username" name="username"> <br> <br>
            
            <label for="password">Password: </label>
            <input type="password" class="password" name="password"> <br> <br>

            <button class="btn" name="btn" type="submit">Submit</button>
        </div>
    </div>

    </form>
</div>
    
</body>
</html>