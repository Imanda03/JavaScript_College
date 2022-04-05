<?php 
    $db_host = "localhost";
    $db_name = "form";
    $db_user = "root";
    $db_pw = "";

    $conn = mysqli_connect($db_host,$db_user,$db_pw,$db_name);

    if (mysqli_connect_error()) {
        echo mysqli_connect_error();
        exit;
    } 
    else
    echo "Conencted...";



    if(isset($_POST['submit'])){
        echo "it works <br>";

        $fullName = $_POST['fullName'];
        $address = $_POST['address'];
        $phoneNumber = $_POST['phoneNumber'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $gender = $_POST['gender'];
        $level = $_POST['level'];
        $faculty = $_POST['faculty'];
        echo "Name:" .$fullName . "<br>";
        echo "Address: ". $address . "<br>";
        echo "Phone Number: ". $phoneNumber . "<br>";
        echo "Email: ". $email . "<br>";
        echo "Gender: ". $gender . "<br>";
        echo "Level: ". $level . "<br>";
        echo "faculty: ". $faculty . "<br>";
    }

    $sql = "INSERT INTO form (fullname, address, phoneNumber, email, gender, level, faculty )
                VALUES ('" . $_POST['fullName'] ."' , '" . $_POST['address'] . "', '" . $_POST['phoneNumber'] ."',
                 '" . $_POST['email'] ."', '" . $_POST['gender'] ."'
                 , '" . $_POST['level'] ."', '" . $_POST['faculty'] ."')
        
            ";
            $result = mysqli_query($conn,$sql);

            if($result === false){
                echo mysqli_error($conn);
            }
            else{
                echo "mission successful";
            }
?>